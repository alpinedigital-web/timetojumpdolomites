import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") as string, {
  apiVersion: "2024-04-10",
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const {
      eventId,
      firstName,
      lastName,
      email,
      phone,
      nickname,
      dateOfBirth,
      birthPlace,
      address,
      emergencyContact,
      licenseCountry,
      licenseNumber,
      insuranceProvided,
      returnUrl,
      // Group booking fields
      isGroupLeader,
      groupSize,
      inviteToken,       // If joining via invite link
    } = await req.json();

    // Initialize Supabase with service role
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Fetch event details for deposit calculation + short-notice check
    const { data: event, error: eventError } = await supabase
      .from("events")
      .select("id, jump_date, price_per_load, capacity, status")
      .eq("id", eventId)
      .single();

    if (eventError || !event) {
      throw new Error("Event not found or no longer available.");
    }

    if (event.status === "cancelled") {
      throw new Error("This event has been cancelled.");
    }

    // Count current bookings for this event
    const { count: bookedCount } = await supabase
      .from("bookings")
      .select("id", { count: "exact", head: true })
      .eq("event_id", eventId)
      .neq("status", "cancelled");

    const currentBooked = bookedCount || 0;

    if (currentBooked >= event.capacity) {
      throw new Error("This flight is fully booked.");
    }

    // Calculate deposit: helicopter price ÷ (current participants + 1 new)
    const newTotalParticipants = currentBooked + 1;
    const depositPerPerson = Math.ceil(event.price_per_load / newTotalParticipants);
    const depositCents = depositPerPerson * 100;

    // Short-notice check (< 7 days)
    const jumpDate = new Date(event.jump_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffDays = Math.ceil((jumpDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const isShortNotice = diffDays < 7;

    // 2. Create or retrieve Stripe Customer
    const customer = await stripe.customers.create({
      email,
      name: `${firstName} ${lastName}`,
      phone,
      metadata: {
        eventId,
        nickname,
      },
    });

    // 3. Resolve group leader if joining via invite
    let groupLeaderId: string | null = null;
    if (inviteToken) {
      const { data: leaderBooking } = await supabase
        .from("bookings")
        .select("id")
        .eq("invite_token", inviteToken)
        .single();
      if (leaderBooking) {
        groupLeaderId = leaderBooking.id;
      }
    }

    // 4. Generate invite token if this is a group leader
    let generatedInviteToken: string | null = null;
    if (isGroupLeader && (groupSize ?? 1) > 1) {
      generatedInviteToken = crypto.randomUUID().replace(/-/g, "").substring(0, 16);
    }

    // 5. Insert booking into Supabase
    const { data: booking, error: dbError } = await supabase
      .from("bookings")
      .insert({
        event_id: eventId,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        nickname,
        date_of_birth: dateOfBirth || null,
        birth_place: birthPlace || null,
        address: address || null,
        emergency_contact: emergencyContact || null,
        license_country: licenseCountry,
        license_number: licenseNumber,
        insurance_provided: insuranceProvided ?? false,
        stripe_customer_id: customer.id,
        status: "reserved",
        deposit_amount_cents: depositCents,
        total_amount_cents: event.price_per_load * 100,
        is_short_notice: isShortNotice,
        is_group_leader: isGroupLeader ?? false,
        group_size: groupSize ?? 1,
        group_leader_id: groupLeaderId,
        invite_token: generatedInviteToken,
        invited_by: groupLeaderId,
      })
      .select()
      .single();

    if (dbError) throw dbError;

    // 6. Create Stripe Checkout Session
    // For short-notice bookings: use 'payment' mode (immediate charge)
    // For standard bookings: use 'setup' mode (save card, charge later)
    let session;

    if (isShortNotice) {
      // Immediate payment for short-notice bookings
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        customer: customer.id,
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: `Helicopter Jump — ${event.jump_date}`,
                description: `Full payment (short-notice booking). Deposit: ${depositPerPerson} €`,
              },
              unit_amount: depositCents,
            },
            quantity: 1,
          },
        ],
        metadata: {
          bookingId: booking.id,
          eventId: eventId,
          type: "short_notice_payment",
        },
        success_url: `${returnUrl}?session_id={CHECKOUT_SESSION_ID}&success=true`,
        cancel_url: `${returnUrl}?cancel=true`,
      });
    } else {
      // Standard: save card for later
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "setup",
        customer: customer.id,
        metadata: {
          bookingId: booking.id,
          eventId: eventId,
          type: "setup_intent",
        },
        success_url: `${returnUrl}?session_id={CHECKOUT_SESSION_ID}&success=true`,
        cancel_url: `${returnUrl}?cancel=true`,
      });
    }

    // 7. Store Stripe session ID on booking
    await supabase
      .from("bookings")
      .update({
        stripe_setup_intent_id: session.id,
      })
      .eq("id", booking.id);

    // 8. Return response
    return new Response(
      JSON.stringify({
        checkoutUrl: session.url,
        bookingId: booking.id,
        depositAmount: depositPerPerson,
        isShortNotice,
        inviteToken: generatedInviteToken,
        currentPricePerPerson: depositPerPerson,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
