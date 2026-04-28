/* ============================================================
   SUPABASE CLIENT & BOOKING LOGIC
   Dynamic Flight Cards + Booking Modal + Group Booking
   Phase 2 — Using events_enriched view
   ============================================================ */

// 1. Initialize Supabase
const SUPABASE_URL = "https://rcfmmogsudqfknabuluv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZm1tb2dzdWRxZmtuYWJ1bHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4Mjc1OTAsImV4cCI6MjA5MTQwMzU5MH0.WRlHObX_eKNbW__V4ihh7EcjhBA9_nXns92lCTTp6bw";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  //  TRANSLATION HELPER
  // ============================================================
  function t(key, fallback) {
    const lang = localStorage.getItem('ttjd_lang') || 'en';
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      return TRANSLATIONS[key][lang];
    }
    return fallback || key;
  }

  function getLocalizedMonth(dateObj) {
    const lang = localStorage.getItem('ttjd_lang') || 'en';
    try {
      return dateObj.toLocaleDateString(lang, { month: 'short' });
    } catch (e) {
      const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      return MONTHS[dateObj.getMonth()];
    }
  }

  // ============================================================
  //  PRICING HELPERS
  // ============================================================
  function calcPricePerPerson(pricePerLoad, bookedSeats, capacity) {
    const effectiveCount = Math.max(1, bookedSeats);
    return Math.ceil(pricePerLoad / effectiveCount);
  }

  function renderPricingTiers(pricePerLoad, bookedSeats, capacity) {
    let html = '';
    const personLabel = t('fc.person', 'Person');
    const peopleLabel = t('fc.people', 'People');
    for (let i = 1; i <= capacity; i++) {
      const price = Math.ceil(pricePerLoad / i);
      const label = i === 1 ? `1 ${personLabel}` : `${i} ${peopleLabel}`;
      let tierClass = 'tier';
      if (i < bookedSeats) tierClass += ' tier--passed';
      else if (i === Math.max(1, bookedSeats)) tierClass += ' tier--active';
      html += `<span class="${tierClass}">${label}: ${price}€</span>`;
    }
    return html;
  }

  function renderPassengerPills(bookings, capacity) {
    let html = '';
    const openLabel = t('fc.open', 'open');
    if (bookings && bookings.length > 0) {
      bookings.forEach(b => {
        const nick = b.nickname || '???';
        html += `<span class="passenger-pill">@${nick}</span>`;
      });
    }
    const booked = bookings ? bookings.length : 0;
    for (let i = booked; i < capacity; i++) {
      html += `<span class="passenger-pill passenger-pill--empty">${openLabel}</span>`;
    }
    return html;
  }

  // ============================================================
  //  STATUS BADGE
  // ============================================================
  function getStatusBadge(booked, capacity, isLocked, availStatus) {
    if (isLocked) {
      return `<div class="flight-card__status flight-card__status--locked" style="background:rgba(239,68,68,0.1);color:#ef4444;">${t('fc.locked', 'Locked (Load 1 First)')}</div>`;
    }
    if (availStatus === 'full' || booked >= capacity) {
      return `<div class="flight-card__status" style="background:rgba(34,197,94,0.1);color:#22c55e;">${t('fc.full', 'Full')}</div>`;
    }
    if (availStatus === 'filling') {
      return `<div class="flight-card__status flight-card__status--filling">${t('fc.filling', 'Filling Fast')}</div>`;
    }
    if (availStatus === 'booking_open') {
      return `<div class="flight-card__status flight-card__status--filling" style="background:rgba(59,130,246,0.1);color:#3b82f6;">${t('fc.bookingOpen', 'Booking Open')}</div>`;
    }
    return `<div class="flight-card__status" style="background:rgba(148,163,184,0.1);color:#94a3b8;">${t('fc.new', 'New')}</div>`;
  }

  // ============================================================
  //  FLIGHT CARD RENDERING (uses events_enriched view data)
  // ============================================================
  function renderFlightCard(event, index, allEvents) {
    const date = new Date(event.jump_date);
    const month = getLocalizedMonth(date);
    const day = date.getDate();
    const booked = event.booked_count || 0;
    const capacity = event.capacity || 5;
    const pricePerLoad = event.price_per_load || 775;
    const title = event.location_name || event.jump_location || 'Helicopter Jump';
    const locationShort = event.location_short_name || '';
    const altitudeM = event.altitude_m || 1600;
    const timeSlot = event.time_slot ? event.time_slot.substring(0, 5) : '09:00';
    const loadNumber = event.load_number || 1;
    const availStatus = event.availability_status || 'new';
    const isShortNotice = event.is_short_notice || false;
    
    // Sequential lock logic: if load_number > 1 and parent event is not full
    let isLocked = false;
    if (loadNumber > 1 && event.parent_event_id) {
      const parentEvent = allEvents.find(e => e.id === event.parent_event_id);
      if (parentEvent) {
        const parentBooked = parentEvent.booked_count || 0;
        const parentCapacity = parentEvent.capacity || 5;
        if (parentBooked < parentCapacity) {
          isLocked = true;
        }
      }
    }
    // Fallback: also lock if same date and previous load on same date isn't full
    if (!isLocked && index > 0) {
      const prevEvent = allEvents[index - 1];
      const prevDate = new Date(prevEvent.jump_date).toDateString();
      const thisDate = date.toDateString();
      if (prevDate === thisDate && prevEvent.location_short_name === locationShort) {
        const prevBooked = prevEvent.booked_count || 0;
        const prevCapacity = prevEvent.capacity || 5;
        if (prevBooked < prevCapacity) {
          isLocked = true;
        }
      }
    }

    const isFull = booked >= capacity;
    const currentPricePerPerson = event.current_price_per_person || calcPricePerPerson(pricePerLoad, booked, capacity);
    const progressPercent = Math.round((booked / capacity) * 100);

    // Localized labels
    const heliRotation = t('fc.heliRotation', 'Helicopter Rotation');
    const seatsOf = t('fc.of', 'of');
    const seatsBooked = t('fc.seatsBooked', 'Seats Booked');
    const currentPrice = t('fc.currentPrice', 'Current Price');
    const perPerson = t('fc.perPerson', '/ person');
    const secureSpot = t('fc.secureSpot', 'Secure Spot: 0,00 € Card Hold');
    const balanceText = t('fc.balanceText', 'Balance paid on-site. SetupIntent authorizes card.');
    const reserveBtn = t('fc.reserveBtn', 'Reserve Seat (0.00€ Hold)');
    const fullyBooked = t('fc.fullyBooked', 'Fully Booked');
    const lockedLabel = t('fc.lockedBtn', 'Locked');

    // Short-notice badge
    const shortNoticeBadge = isShortNotice 
      ? `<span style="display:inline-block;background:rgba(245,158,11,0.15);color:#f59e0b;padding:2px 8px;border-radius:6px;font-size:0.7rem;font-weight:600;margin-left:8px;">⚡ SHORT NOTICE</span>`
      : '';

    // Load number indicator
    const loadBadge = loadNumber > 1 
      ? `<span style="display:inline-block;background:rgba(99,102,241,0.15);color:#6366f1;padding:2px 8px;border-radius:6px;font-size:0.7rem;font-weight:600;margin-left:8px;">LOAD ${loadNumber}</span>`
      : '';

    // Fetch bookings separately (the enriched view gives count, but we need nicknames)
    const bookingsHtml = `<div class="passengers-preview" id="passengers-${event.id}"${isLocked ? ' style="opacity:0.5;"' : ''}>
      <span class="passenger-pill passenger-pill--empty" style="opacity:0.5;">loading...</span>
    </div>`;

    return `
      <div class="flight-card${isLocked ? ' flight-card--locked' : ''}${isFull ? ' flight-card--full' : ''}">
        <div class="flight-card__header">
          <div class="flight-card__date">
            <span class="flight-card__month">${month}</span>
            <span class="flight-card__day">${day}</span>
          </div>
          <div class="flight-card__info">
            <h3 class="flight-card__title">${title}${loadBadge}${shortNoticeBadge}</h3>
            <p class="flight-card__time">${heliRotation}: ${timeSlot} · ${altitudeM.toLocaleString()}m</p>
          </div>
          ${getStatusBadge(booked, capacity, isLocked, availStatus)}
        </div>
        
        <div class="flight-card__progress-container">
          <div class="flight-card__progress-header">
            <span class="flight-card__seats-text"><strong>${booked}</strong> ${seatsOf} <strong>${capacity}</strong> ${seatsBooked}</span>
            <span class="flight-card__current-price">${currentPrice}: <strong>${currentPricePerPerson} €</strong> ${perPerson}</span>
          </div>
          
          ${bookingsHtml}

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
              <strong>${secureSpot}</strong>
              <span>${balanceText}</span>
            </div>
          </div>
          <a href="#" class="btn btn--primary btn-reserve-seat${isLocked || isFull ? ' btn--disabled' : ''}" 
             data-event-id="${event.id}"
             data-event-date="${event.jump_date}"
             data-event-price="${pricePerLoad}"
             data-event-location="${locationShort}"
             ${isLocked || isFull ? 'style="opacity:0.5;pointer-events:none;"' : ''}>
            ${isFull ? fullyBooked : isLocked ? lockedLabel : reserveBtn}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `;
  }

  // ============================================================
  //  EMPTY STATE
  // ============================================================
  function renderEmptyState() {
    return `
      <div class="flight-card" style="grid-column:1/-1;text-align:center;padding:var(--space-xl) var(--space-lg);">
        <div style="margin-bottom:16px;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--color-text-muted);margin:0 auto;">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <h3 style="margin-bottom:8px;color:var(--color-white);">${t('fc.emptyTitle', 'No upcoming jumps scheduled')}</h3>
        <p style="color:var(--color-text-muted);max-width:400px;margin:0 auto;">
          ${t('fc.emptyText', 'Check back soon or contact us via WhatsApp to be notified when the next helicopter jump is announced.')}
        </p>
        <a href="#contact" class="btn btn--outline btn--sm" style="margin-top:20px;">${t('fc.contactUs', 'Contact Us')}</a>
      </div>
    `;
  }

  // ============================================================
  //  LOAD EVENTS FROM ENRICHED VIEW
  // ============================================================
  async function loadUpcomingJumps() {
    const container = document.getElementById('flightCardsContainer');
    if (!container) return;

    const today = new Date().toISOString().split('T')[0];

    try {
      // Cleanup abandoned bookings (reserved > 30 min = expired)
      await sb.rpc('cleanup_abandoned_bookings').catch(() => {});
      // Use the enriched view — includes booked_count, availability_status, current_price_per_person
      const { data: events, error } = await sb
        .from('events_enriched')
        .select('*')
        .gte('jump_date', today)
        .order('jump_date', { ascending: true })
        .order('load_number', { ascending: true });

      if (error) {
        console.warn('events_enriched view query failed, falling back to events table:', error.message);
        // Fallback to direct events table
        const { data: fallbackData, error: fallbackError } = await sb
          .from('events')
          .select(`
            id, jump_date, time_slot, capacity, status,
            jump_location, altitude_m, price_per_load,
            location_id, load_number, parent_event_id,
            bookings ( id, nickname )
          `)
          .neq('status', 'cancelled')
          .gte('jump_date', today)
          .order('jump_date', { ascending: true });

        if (fallbackError) throw fallbackError;
        
        // Transform fallback data to match enriched format
        const transformed = (fallbackData || []).map(e => ({
          ...e,
          booked_count: e.bookings ? e.bookings.length : 0,
          availability_status: 'new',
          current_price_per_person: e.price_per_load,
          is_short_notice: false,
          location_name: e.jump_location,
          location_short_name: e.jump_location
        }));
        
        renderEvents(transformed, container);
        return;
      }

      // Remove loading state
      const loadingEl = document.getElementById('flightCardsLoading');
      if (loadingEl) loadingEl.remove();

      renderEvents(events || [], container);

    } catch (err) {
      console.error("Error loading events:", err.message);
      container.innerHTML = `
        <div class="flight-card" style="grid-column:1/-1;text-align:center;padding:var(--space-xl);">
          <p style="color:var(--color-text-muted);">Could not load upcoming jumps. Please try again later or contact us directly.</p>
          <a href="#contact" class="btn btn--outline btn--sm" style="margin-top:16px;">Contact Us</a>
        </div>
      `;
    }
  }

  function renderEvents(events, container) {
    const loadingEl = document.getElementById('flightCardsLoading');
    if (loadingEl) loadingEl.remove();

    if (!events || events.length === 0) {
      container.innerHTML = renderEmptyState();
    } else {
      container.innerHTML = events.map((event, idx) => 
        renderFlightCard(event, idx, events)
      ).join('');

      // Load passenger nicknames for each event
      events.forEach(event => loadPassengerPills(event));

      // Attach booking modal handlers
      attachBookingModalHandlers();
    }
  }

  /**
   * Fetches actual booking nicknames for an event and renders passenger pills.
   */
  async function loadPassengerPills(event) {
    const container = document.getElementById(`passengers-${event.id}`);
    if (!container) return;

    const { data: bookings } = await sb
      .from('bookings')
      .select('id, nickname')
      .eq('event_id', event.id)
      .neq('status', 'cancelled');

    const capacity = event.capacity || 5;
    container.innerHTML = renderPassengerPills(bookings || [], capacity);
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
        const eventDate = btn.getAttribute('data-event-date');
        bookingModal.classList.add('open');
        document.getElementById('bookingEventId').value = eventId || '';

        // Short-notice warning
        const warningEl = document.getElementById('shortNoticeWarning');
        if (warningEl && eventDate) {
          const jumpDate = new Date(eventDate);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const diffMs = jumpDate.getTime() - today.getTime();
          const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
          warningEl.style.display = diffDays < 7 ? 'flex' : 'none';
        }

        // Reset group booking toggle
        const groupToggle = document.getElementById('isGroupLeader');
        const groupSizeWrapper = document.getElementById('groupSizeWrapper');
        if (groupToggle) groupToggle.checked = false;
        if (groupSizeWrapper) groupSizeWrapper.style.display = 'none';

        if (typeof applyTranslations === 'function') {
          applyTranslations(localStorage.getItem('ttjd_lang') || 'en');
        }
      });
    });
  }

  // Group booking toggle handler
  const groupToggle = document.getElementById('isGroupLeader');
  const groupSizeWrapper = document.getElementById('groupSizeWrapper');
  if (groupToggle && groupSizeWrapper) {
    groupToggle.addEventListener('change', () => {
      groupSizeWrapper.style.display = groupToggle.checked ? 'block' : 'none';
    });
  }

  // Check for invite token in URL (e.g. ?invite=abc123)
  const urlParams = new URLSearchParams(window.location.search);
  const inviteToken = urlParams.get('invite');
  if (inviteToken) {
    const inviteField = document.getElementById('inviteTokenField');
    if (inviteField) inviteField.value = inviteToken;
    // Auto-open booking modal if invite token present
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
      setTimeout(() => bookingModal.classList.add('open'), 500);
    }
  }

  const bookingModal = document.getElementById('bookingModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const setupIntentForm = document.getElementById('setupIntentForm');

  if (closeModalBtn && bookingModal) {
    closeModalBtn.addEventListener('click', () => {
      bookingModal.classList.remove('open');
    });
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('open');
      }
    });
  }

  // Handle Form Submission
  if (setupIntentForm) {
    setupIntentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = setupIntentForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerText;
      submitBtn.disabled = true;
      submitBtn.innerText = "Processing...";

      const formData = new FormData(setupIntentForm);
      const payload = Object.fromEntries(formData.entries());

      // Combine emergency contact fields
      if (payload.emergencyName || payload.emergencyPhone) {
        payload.emergencyContact = `${payload.emergencyName || ''} — ${payload.emergencyPhone || ''}`.trim();
        delete payload.emergencyName;
        delete payload.emergencyPhone;
      }

      // Convert checkbox values
      payload.insuranceProvided = payload.insuranceProvided === 'on';
      payload.isGroupLeader = payload.isGroupLeader === 'on';
      payload.groupSize = parseInt(payload.groupSize) || 1;

      // Clean up non-API fields
      delete payload.termsAccepted;

      try {
        const payloadWithReturnUrl = {
          ...payload,
          returnUrl: window.location.origin + '/success.html'
        };

        const { data, error } = await sb.functions.invoke('create-setup-intent', {
          body: payloadWithReturnUrl
        });

        if (error) throw error;
        
        // If group leader, show invite link before redirect
        if (data && data.inviteToken) {
          const inviteUrl = `${window.location.origin}?invite=${data.inviteToken}`;
          const lang = localStorage.getItem('ttjd_lang') || 'en';
          const msg = lang === 'de'
            ? `Gruppenbuchung erstellt!\n\nTeile diesen Link mit deinen Mitspringern:\n${inviteUrl}\n\nDu wirst jetzt zur Zahlung weitergeleitet.`
            : `Group booking created!\n\nShare this link with your jump buddies:\n${inviteUrl}\n\nYou'll now be redirected to checkout.`;
          alert(msg);
        }

        // Redirect to Stripe Checkout
        if (data && data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        } else {
          throw new Error("Missing checkoutUrl in response");
        }
        
      } catch (err) {
        console.error("Payment initialization failed:", err);
        const lang = localStorage.getItem('ttjd_lang') || 'en';
        const msg = lang === 'de' 
          ? 'Die Reservierung konnte nicht gestartet werden. Bitte versuche es später erneut.'
          : 'The reservation could not be processed. Please try again later.';
        alert(msg + '\n\n(Technical: ' + (err.message || err) + ')');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = origText;
      }
    });
  }

  // ============================================================
  //  INITIALIZATION
  // ============================================================
  window.ttjd = window.ttjd || {};
  window.ttjd.loadUpcomingJumps = loadUpcomingJumps;

  loadUpcomingJumps();
});
