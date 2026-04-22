/* ============================================================
   SUPABASE CLIENT & BOOKING LOGIC
   Dynamic Flight Cards + Booking Modal
   ============================================================ */

// 1. Initialize Supabase
const SUPABASE_URL = "https://rcfmmogsudqfknabuluv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hQhHttS49ZvM6UFBaQXung_STg_lpjq";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  //  DYNAMIC FLIGHT CARD RENDERING
  // ============================================================

  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  /**
   * Calculates per-person price for a given total load price and number of booked seats.
   */
  function calcPricePerPerson(pricePerLoad, bookedSeats, capacity) {
    const effectiveCount = Math.max(1, bookedSeats);
    return Math.ceil(pricePerLoad / effectiveCount);
  }

  /**
   * Generates the pricing tiers HTML for a flight card.
   */
  function renderPricingTiers(pricePerLoad, bookedSeats, capacity) {
    let html = '';
    for (let i = 1; i <= capacity; i++) {
      const price = Math.ceil(pricePerLoad / i);
      const label = i === 1 ? '1 Person' : `${i} People`;
      let tierClass = 'tier';
      if (i < bookedSeats) tierClass += ' tier--passed';
      else if (i === Math.max(1, bookedSeats)) tierClass += ' tier--active';
      html += `<span class="${tierClass}">${label}: ${price}€</span>`;
    }
    return html;
  }

  /**
   * Generates the passenger pills HTML.
   */
  function renderPassengerPills(bookings, capacity) {
    let html = '';
    // Booked passengers
    if (bookings && bookings.length > 0) {
      bookings.forEach(b => {
        const nick = b.nickname || '???';
        html += `<span class="passenger-pill">@${nick}</span>`;
      });
    }
    // Empty slots
    const booked = bookings ? bookings.length : 0;
    for (let i = booked; i < capacity; i++) {
      html += `<span class="passenger-pill passenger-pill--empty">open</span>`;
    }
    return html;
  }

  /**
   * Determines the status badge for a flight card.
   */
  function getStatusBadge(booked, capacity, isLocked) {
    if (isLocked) {
      return `<div class="flight-card__status flight-card__status--locked" style="background:rgba(239,68,68,0.1);color:#ef4444;">Locked (Load 1 First)</div>`;
    }
    if (booked >= capacity) {
      return `<div class="flight-card__status" style="background:rgba(34,197,94,0.1);color:#22c55e;">Full</div>`;
    }
    if (booked >= Math.ceil(capacity / 2)) {
      return `<div class="flight-card__status flight-card__status--filling">Filling Fast</div>`;
    }
    if (booked > 0) {
      return `<div class="flight-card__status flight-card__status--filling" style="background:rgba(59,130,246,0.1);color:#3b82f6;">Booking Open</div>`;
    }
    return `<div class="flight-card__status" style="background:rgba(148,163,184,0.1);color:#94a3b8;">New</div>`;
  }

  /**
   * Renders a single flight card HTML string.
   */
  function renderFlightCard(event, index, allEvents) {
    const date = new Date(event.jump_date);
    const month = MONTHS[date.getMonth()];
    const day = date.getDate();
    const bookings = event.bookings || [];
    const booked = bookings.length;
    const capacity = event.capacity || 5;
    const pricePerLoad = event.price_per_load || 775;
    const title = event.jump_location || 'Helicopter Jump';
    const altitudeM = event.altitude_m || 1600;
    const timeSlot = event.time_slot ? event.time_slot.substring(0, 5) : '09:00';
    
    // Sequential lock logic: if this is NOT the first event on the same date,
    // check if the previous event on the same date is full
    let isLocked = false;
    if (index > 0) {
      const prevEvent = allEvents[index - 1];
      const prevDate = new Date(prevEvent.jump_date).toDateString();
      const thisDate = date.toDateString();
      if (prevDate === thisDate) {
        const prevBooked = (prevEvent.bookings || []).length;
        const prevCapacity = prevEvent.capacity || 5;
        if (prevBooked < prevCapacity) {
          isLocked = true;
        }
      }
    }

    const isFull = booked >= capacity;
    const currentPricePerPerson = calcPricePerPerson(pricePerLoad, booked, capacity);
    const progressPercent = Math.round((booked / capacity) * 100);

    return `
      <div class="flight-card${isLocked ? ' flight-card--locked' : ''}${isFull ? ' flight-card--full' : ''}">
        <div class="flight-card__header">
          <div class="flight-card__date">
            <span class="flight-card__month">${month}</span>
            <span class="flight-card__day">${day}</span>
          </div>
          <div class="flight-card__info">
            <h3 class="flight-card__title">${title}</h3>
            <p class="flight-card__time">Helicopter Rotation: ${timeSlot} · ${altitudeM.toLocaleString()}m</p>
          </div>
          ${getStatusBadge(booked, capacity, isLocked)}
        </div>
        
        <div class="flight-card__progress-container">
          <div class="flight-card__progress-header">
            <span class="flight-card__seats-text"><strong>${booked}</strong> of <strong>${capacity}</strong> Seats Booked</span>
            <span class="flight-card__current-price">Current Price: <strong>${currentPricePerPerson} €</strong> / person</span>
          </div>
          
          <div class="passengers-preview"${isLocked ? ' style="opacity:0.5;"' : ''}>
            ${renderPassengerPills(bookings, capacity)}
          </div>

          <div class="flight-card__progress-bar">
            <div class="flight-card__progress-fill" style="width:${progressPercent}%;"></div>
          </div>
          <div class="flight-card__pricing-tiers">
            ${renderPricingTiers(pricePerLoad, booked, capacity)}
          </div>
        </div>

        <div class="flight-card__footer">
          <div class="flight-card__deposit-info">
            <div class="flight-card__deposit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <strong>Secure Spot: 0,00 € Card Hold</strong>
              <span>Balance paid on-site. SetupIntent authorizes card.</span>
            </div>
          </div>
          <a href="#" class="btn btn--primary btn-reserve-seat${isLocked || isFull ? ' btn--disabled' : ''}" 
             data-event-id="${event.id}"
             ${isLocked || isFull ? 'style="opacity:0.5;pointer-events:none;"' : ''}>
            ${isFull ? 'Fully Booked' : isLocked ? 'Locked' : 'Reserve Seat (0.00€ Hold)'}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `;
  }

  /**
   * Renders the empty state when no events are available.
   */
  function renderEmptyState() {
    return `
      <div class="flight-card" style="grid-column:1/-1;text-align:center;padding:var(--space-xl) var(--space-lg);">
        <div style="margin-bottom:16px;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--color-text-muted);margin:0 auto;">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <h3 style="margin-bottom:8px;color:var(--color-white);">No upcoming jumps scheduled</h3>
        <p style="color:var(--color-text-muted);max-width:400px;margin:0 auto;">
          Check back soon or contact us via WhatsApp to be notified when the next helicopter jump is announced.
        </p>
        <a href="#contact" class="btn btn--outline btn--sm" style="margin-top:20px;">Contact Us</a>
      </div>
    `;
  }

  /**
   * Main function: Fetch events from Supabase and render flight cards.
   * Uses a two-phase query: tries new schema first, falls back to base schema.
   */
  async function loadUpcomingJumps() {
    const container = document.getElementById('flightCardsContainer');
    if (!container) return;

    const today = new Date().toISOString().split('T')[0];

    try {
      let events = null;

      // Phase 1: Try query with extended columns (after migration)
      const { data: extData, error: extError } = await supabase
        .from('events')
        .select(`
          id, jump_date, time_slot, capacity, status,
          jump_location, altitude_m, price_per_load,
          bookings ( id, nickname )
        `)
        .neq('status', 'cancelled')
        .gte('jump_date', today)
        .order('jump_date', { ascending: true });

      if (!extError) {
        events = extData;
      } else {
        // Phase 2: Fallback — query with base schema only (before migration)
        console.warn('Extended columns not available, falling back to base schema:', extError.message);
        const { data: baseData, error: baseError } = await supabase
          .from('events')
          .select(`
            id, jump_date, time_slot, capacity, status,
            bookings ( id, nickname )
          `)
          .neq('status', 'cancelled')
          .gte('jump_date', today)
          .order('jump_date', { ascending: true });

        if (baseError) throw baseError;
        events = baseData;
      }

      // Remove loading state
      const loadingEl = document.getElementById('flightCardsLoading');
      if (loadingEl) loadingEl.remove();

      if (!events || events.length === 0) {
        container.innerHTML = renderEmptyState();
      } else {
        container.innerHTML = events.map((event, idx) => 
          renderFlightCard(event, idx, events)
        ).join('');

        // Re-attach booking modal handlers to newly rendered buttons
        attachBookingModalHandlers();
      }

    } catch (err) {
      console.error("Error loading events:", err.message);
      // Remove loading, show error state
      container.innerHTML = `
        <div class="flight-card" style="grid-column:1/-1;text-align:center;padding:var(--space-xl);">
          <p style="color:var(--color-text-muted);">Could not load upcoming jumps. Please try again later or contact us directly.</p>
          <a href="#contact" class="btn btn--outline btn--sm" style="margin-top:16px;">Contact Us</a>
        </div>
      `;
    }
  }

  // ============================================================
  //  BOOKING MODAL LOGIC
  // ============================================================

  function attachBookingModalHandlers() {
    const bookingModal = document.getElementById('bookingModal');
    if (!bookingModal) return;

    document.querySelectorAll('.btn-reserve-seat').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (btn.classList.contains('btn--disabled')) return;
        const eventId = btn.getAttribute('data-event-id');
        bookingModal.classList.add('open');
        document.getElementById('bookingEventId').value = eventId || '';
      });
    });
  }

  const bookingModal = document.getElementById('bookingModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const setupIntentForm = document.getElementById('setupIntentForm');

  if (closeModalBtn && bookingModal) {
    closeModalBtn.addEventListener('click', () => {
      bookingModal.classList.remove('open');
    });
  }

  // Close modal on overlay click
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('open');
      }
    });
  }

  // Handle Form Submission (Call our Edge Function)
  if (setupIntentForm) {
    setupIntentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = setupIntentForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerText;
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
        
        // Redirect the user to Stripe Checkout
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        } else {
          throw new Error("Missing checkoutUrl in response");
        }
        
      } catch (err) {
        console.error("Payment initialization failed:", err);
        alert("There was an error initiating the booking: " + err.message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = origText;
      }
    });
  }

  // ============================================================
  //  INITIALIZATION
  // ============================================================
  loadUpcomingJumps();
});
