import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.1.1?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.21.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") as string, {
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
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
      emergencyContact,
      licenseCountry,
      licenseNumber,
      insuranceProvided,
      returnUrl
    } = await req.json();

    // 1. Create or retrieve Stripe Customer
    const customer = await stripe.customers.create({
        email,
        name: `${firstName} ${lastName}`,
        phone,
        metadata: {
            eventId,
            nickname
        }
    });

    // 2. Insert booking to Supabase to get the persistent ID
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: booking, error: dbError } = await supabase
      .from('bookings')
      .insert({
        event_id: eventId,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        nickname,
        date_of_birth: dateOfBirth,
        emergency_contact: emergencyContact,
        license_country: licenseCountry,
        license_number: licenseNumber,
        insurance_provided: insuranceProvided,
        stripe_customer_id: customer.id,
        status: 'reserved' // Will be updated to paid/confirmed after Webhook fires
      })
      .select()
      .single();

    if (dbError) throw dbError;

    // 3. Create a Stripe Checkout Session in 'setup' mode
    // This allows the user to securely save their card without an immediate charge
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "setup",
      customer: customer.id,
      metadata: {
        bookingId: booking.id, // For the webhook to know which booking to activate
        eventId: eventId
      },
      // Using generic host for local/production dynamically or falling back to returnUrl
      success_url: `${returnUrl}?session_id={CHECKOUT_SESSION_ID}&success=true`,
      cancel_url: `${returnUrl}?cancel=true`,
    });

    // 4. Return the hosted checkout URL
    return new Response(JSON.stringify({ 
      checkoutUrl: session.url,
      bookingId: booking.id
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
