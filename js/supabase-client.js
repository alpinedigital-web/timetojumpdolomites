/* ============================================================
   SUPABASE CLIENT & BOOKING LOGIC
   ============================================================ */

// 1. Initialize Supabase
const SUPABASE_URL = "https://rcfmmogsudqfknabuluv.supabase.co";
// Using the new publishable key or anon key (both work for public read with RLS)
const SUPABASE_ANON_KEY = "sb_publishable_hQhHttS49ZvM6UFBaQXung_STg_lpjq";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', () => {

  // ---- Fetch Active Events ----
  async function loadUpcomingJumps() {
    try {
      const { data: events, error } = await supabase
        .from('events')
        .select(`
          id,
          jump_date,
          time_slot,
          capacity,
          status,
          bookings ( id, nickname )
        `)
        .neq('status', 'cancelled')
        .order('jump_date', { ascending: true });

      if (error) throw error;

      console.log("Upcoming Events fetched:", events);
      
      // TODO: Dynamically render these events into the .upcoming__grid
      // For now, it just prints to console representing the data layer is ready.
      
    } catch (err) {
      console.error("Error loading events:", err.message);
    }
  }

  loadUpcomingJumps();

  // ---- Booking Modal Logic ----
  const bookingModal = document.getElementById('bookingModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const setupIntentForm = document.getElementById('setupIntentForm');

  // Attach to all "Reserve Seat" buttons (we will modify the HTML to have these classes)
  document.querySelectorAll('.btn-reserve-seat').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const eventId = btn.getAttribute('data-event-id'); // We'll set this dynamically
      if(bookingModal) {
          bookingModal.classList.add('open');
          // Store eventId in a hidden field
          document.getElementById('bookingEventId').value = eventId || 'test-uuid';
      }
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      bookingModal.classList.remove('open');
    });
  }

  // Handle Form Submission (Call our Edge Function)
  if (setupIntentForm) {
    setupIntentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = setupIntentForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerText = "Processing...";

      const formData = new FormData(setupIntentForm);
      const payload = Object.fromEntries(formData.entries());

      try {
        const payloadWithReturnUrl = {
          ...payload,
          returnUrl: window.location.origin + '/success.html'
        };

        const { data, error } = await supabase.functions.invoke('create-setup-intent', {
          body: payloadWithReturnUrl
        });

        if (error) throw error;
        
        console.log("Checkout Session created:", data);
        
        // Redirect the user to Stripe Checkout!
        if(data.checkoutUrl) {
            window.location.href = data.checkoutUrl;
        } else {
            throw new Error("Missing checkoutUrl in response");
        }
        
      } catch (err) {
        console.error("Payment initialization failed:", err);
        alert("There was an error initiating the booking: " + err.message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Confirm & Setup Payment (0.00€)";
      }
    });
  }
});
