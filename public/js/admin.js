/* ============================================================
   ADMIN PANEL — Event Manager for Time to Jump Dolomites
   Login via Supabase Auth, CRUD Events, View Bookings
   ============================================================ */

(function() {
  'use strict';

  // ---- Supabase Client ----
  const SUPABASE_URL = "https://rcfmmogsudqfknabuluv.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjZm1tb2dzdWRxZmtuYWJ1bHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4Mjc1OTAsImV4cCI6MjA5MTQwMzU5MH0.WRlHObX_eKNbW__V4ihh7EcjhBA9_nXns92lCTTp6bw";

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  let locations = [];
  let currentEvents = [];
  let currentBookings = [];

  // Helper: combine first_name + last_name
  function fullName(b) {
    return [b.first_name, b.last_name].filter(Boolean).join(' ') || 'Unknown';
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', async () => {
    // Check existing session
    const { data: { session } } = await sb.auth.getSession();
    if (session) {
      showDashboard(session.user);
    }

    // Login form
    document.getElementById('adminLoginForm')?.addEventListener('submit', handleLogin);
  });

  // ============================================================
  // AUTH
  // ============================================================

  async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;
    const errorEl = document.getElementById('loginError');

    errorEl.classList.add('hidden');

    const { data, error } = await sb.auth.signInWithPassword({ email, password });

    if (error) {
      errorEl.textContent = error.message || 'Login failed.';
      errorEl.classList.remove('hidden');
      document.getElementById('adminPassword').value = '';
      return;
    }

    showDashboard(data.user);
  }

  async function handleLogout() {
    await sb.auth.signOut();
    location.reload();
  }

  // ============================================================
  // DASHBOARD
  // ============================================================

  function showDashboard(user) {
    document.getElementById('adminLogin').style.display = 'none';
    const dash = document.getElementById('adminDashboard');
    dash.classList.remove('hidden');

    document.getElementById('adminUserEmail').textContent = user.email;
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Tab navigation
    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Cleanup abandoned bookings before loading data
    sb.rpc('cleanup_abandoned_bookings').catch(() => {});

    // Load data
    loadLocations();
    loadEvents();
    loadBookings();
    loadStats();

    // Event modal
    document.getElementById('createEventBtn').addEventListener('click', () => openEventModal());
    document.getElementById('closeEventModal').addEventListener('click', closeEventModal);
    document.getElementById('cancelEventBtn').addEventListener('click', closeEventModal);
    document.getElementById('eventForm').addEventListener('submit', saveEvent);

    // Booking modal
    document.getElementById('closeBookingModal').addEventListener('click', closeBookingModal);

    // Booking filters
    document.getElementById('bookingStatusFilter').addEventListener('change', renderBookings);
    document.getElementById('bookingSearch').addEventListener('input', renderBookings);

    // CSV export
    document.getElementById('exportBookingsBtn').addEventListener('click', exportBookingsCSV);
  }

  function switchTab(tabId) {
    document.querySelectorAll('.admin-tab').forEach(t => {
      const isActive = t.dataset.tab === tabId;
      t.classList.toggle('active', isActive);
      t.classList.toggle('border-brand-orange', isActive);
      t.classList.toggle('text-white', isActive);
      t.classList.toggle('border-transparent', !isActive);
      t.classList.toggle('text-slate-400', !isActive);
    });
    document.querySelectorAll('.admin-tab-content').forEach(c => {
      c.classList.toggle('hidden', c.id !== 'tab-' + tabId);
    });
  }

  // ============================================================
  // LOCATIONS
  // ============================================================

  async function loadLocations() {
    const { data } = await sb.from('locations').select('*').order('location_name');
    locations = data || [];
    populateLocationDropdown();
  }

  function populateLocationDropdown() {
    const sel = document.getElementById('eventLocation');
    sel.innerHTML = locations.map(l =>
      `<option value="${l.id}">${l.location_name}</option>`
    ).join('');
  }

  // ============================================================
  // EVENTS
  // ============================================================

  async function loadEvents() {
    const { data, error } = await sb
      .from('events_enriched')
      .select('*')
      .order('flight_date', { ascending: true });

    if (error) {
      console.error('Error loading events:', error);
      return;
    }

    currentEvents = data || [];
    renderEvents();
  }

  function renderEvents() {
    const container = document.getElementById('eventsTable');

    if (!currentEvents.length) {
      container.innerHTML = `<div class="text-center py-12 text-slate-500">
        <p class="text-lg mb-2">Keine Events vorhanden</p>
        <p class="text-sm">Erstelle dein erstes Event mit dem Button oben.</p>
      </div>`;
      return;
    }

    container.innerHTML = currentEvents.map(ev => {
      const date = new Date(ev.flight_date).toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
      const statusColors = {
        open: 'bg-green-900/30 text-green-400 border-green-800',
        closed: 'bg-yellow-900/30 text-yellow-400 border-yellow-800',
        cancelled: 'bg-red-900/30 text-red-400 border-red-800'
      };
      const statusClass = statusColors[ev.status] || statusColors.open;
      const bookedCount = ev.booked_count || 0;
      const maxCap = ev.capacity || 5;
      const fillPct = Math.min(100, Math.round((bookedCount / maxCap) * 100));

      return `<div class="bg-brand-navy border border-brand-border rounded-xl p-4 hover:border-brand-orange/50 transition-colors">
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-4 min-w-0 flex-1">
            <div class="text-center shrink-0 w-16">
              <div class="text-xs text-slate-500 uppercase">${date.split(',')[0]}</div>
              <div class="text-xl font-bold text-white">${new Date(ev.flight_date).getDate()}</div>
              <div class="text-xs text-slate-400">${new Date(ev.flight_date).toLocaleDateString('de-DE', { month: 'short' })}</div>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-semibold text-sm text-white truncate">${ev.location_name || 'Unknown'}</span>
                <span class="text-xs text-slate-500">Load ${ev.load_number || 1}</span>
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded border ${statusClass}">${ev.status?.toUpperCase()}</span>
              </div>
              <div class="flex items-center gap-4 text-xs text-slate-400">
                <span>💰 €${ev.price_per_load || 0}</span>
                <span>👥 ${bookedCount}/${maxCap}</span>
                <span>🕐 ${ev.flight_date ? new Date(ev.flight_date).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) : '—'}</span>
              </div>
              <div class="mt-2 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all ${fillPct >= 100 ? 'bg-red-500' : fillPct >= 60 ? 'bg-yellow-500' : 'bg-green-500'}" style="width: ${fillPct}%"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button class="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors" onclick="window._adminEditEvent('${ev.id}')" title="Bearbeiten">✏️</button>
            <button class="p-2 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors" onclick="window._adminCancelEvent('${ev.id}')" title="Stornieren">🗑️</button>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  function openEventModal(event = null) {
    const modal = document.getElementById('eventModal');
    const title = document.getElementById('eventModalTitle');

    if (event) {
      title.textContent = 'Event bearbeiten';
      document.getElementById('eventId').value = event.id;
      document.getElementById('eventDate').value = event.jump_date?.split('T')[0] || '';
      document.getElementById('eventTime').value = event.time_slot?.substring(0, 5) || event.jump_date?.split('T')[1]?.substring(0, 5) || '09:00';
      document.getElementById('eventLocation').value = event.location_id || '';
      document.getElementById('eventLoadNumber').value = event.load_number || 1;
      document.getElementById('eventPrice').value = event.price_per_load || 775;
      document.getElementById('eventCapacity').value = event.capacity || 5;
      document.getElementById('eventStatus').value = event.status || 'open';
      document.getElementById('eventNotes').value = event.notes || '';
    } else {
      title.textContent = 'Neues Event';
      document.getElementById('eventForm').reset();
      document.getElementById('eventId').value = '';
      document.getElementById('eventTime').value = '09:00';
      document.getElementById('eventPrice').value = '775';
      document.getElementById('eventCapacity').value = '5';
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  async function saveEvent(e) {
    e.preventDefault();

    const id = document.getElementById('eventId').value;
    const dateVal = document.getElementById('eventDate').value;
    const timeVal = document.getElementById('eventTime').value || '09:00';
    const flightDate = `${dateVal}T${timeVal}:00`;

    const eventData = {
      jump_date: flightDate,
      time_slot: timeVal + ':00',
      location_id: parseInt(document.getElementById('eventLocation').value),
      load_number: parseInt(document.getElementById('eventLoadNumber').value),
      price_per_load: parseInt(document.getElementById('eventPrice').value),
      capacity: parseInt(document.getElementById('eventCapacity').value),
      status: document.getElementById('eventStatus').value,
      notes: document.getElementById('eventNotes').value || null
    };

    let error;
    if (id) {
      // Update
      ({ error } = await sb.from('events').update(eventData).eq('id', id));
    } else {
      // Insert
      ({ error } = await sb.from('events').insert(eventData));
    }

    if (error) {
      showToast('Fehler: ' + error.message, 'error');
      return;
    }

    showToast(id ? 'Event aktualisiert!' : 'Event erstellt!', 'success');
    closeEventModal();
    loadEvents();
    loadStats();
  }

  // Global functions for onclick handlers
  window._adminEditEvent = async function(eventId) {
    const { data } = await sb.from('events').select('*').eq('id', eventId).single();
    if (data) openEventModal(data);
  };

  window._adminCancelEvent = async function(eventId) {
    if (!confirm('Event wirklich stornieren? Alle Buchungen werden als "cancelled" markiert.')) return;

    const { error } = await sb.from('events').update({ status: 'cancelled' }).eq('id', eventId);
    if (error) {
      showToast('Fehler: ' + error.message, 'error');
      return;
    }

    // Also cancel related bookings
    await sb.from('bookings').update({ status: 'cancelled' }).eq('event_id', eventId);

    showToast('Event storniert.', 'success');
    loadEvents();
    loadBookings();
  };

  // ============================================================
  // BOOKINGS
  // ============================================================

  async function loadBookings() {
    const { data, error } = await sb
      .from('bookings')
      .select('*, events!inner(jump_date, location_id, load_number, locations(location_name))')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading bookings:', error);
      return;
    }

    currentBookings = data || [];
    renderBookings();
  }

  function renderBookings() {
    const container = document.getElementById('bookingsTable');
    const statusFilter = document.getElementById('bookingStatusFilter').value;
    const searchQuery = document.getElementById('bookingSearch').value.toLowerCase().trim();

    let filtered = currentBookings;

    if (statusFilter) {
      filtered = filtered.filter(b => b.status === statusFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(b =>
        fullName(b).toLowerCase().includes(searchQuery) ||
        (b.email || '').toLowerCase().includes(searchQuery) ||
        (b.nickname || '').toLowerCase().includes(searchQuery)
      );
    }

    if (!filtered.length) {
      container.innerHTML = `<div class="text-center py-12 text-slate-500">
        <p class="text-lg mb-2">Keine Buchungen gefunden</p>
        <p class="text-sm">${currentBookings.length ? 'Versuche andere Filterkriterien.' : 'Noch keine Buchungen vorhanden.'}</p>
      </div>`;
      return;
    }

    container.innerHTML = filtered.map(b => {
      const statusColors = {
        confirmed: 'bg-green-900/30 text-green-400 border-green-800',
        reserved: 'bg-blue-900/30 text-blue-400 border-blue-800',
        cancelled: 'bg-red-900/30 text-red-400 border-red-800',
        expired: 'bg-slate-800 text-slate-500 border-slate-700'
      };
      const statusClass = statusColors[b.status] || statusColors.reserved;
      const eventDate = b.events?.jump_date
        ? new Date(b.events.jump_date).toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' })
        : '—';
      const location = b.events?.locations?.location_name || '—';
      const depositEur = b.deposit_amount_cents ? (b.deposit_amount_cents / 100).toFixed(0) : '—';

      return `<div class="bg-brand-navy border border-brand-border rounded-lg p-3 hover:border-brand-orange/30 transition-colors cursor-pointer" onclick="window._adminShowBooking('${b.id}')">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <div class="w-9 h-9 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">
              ${fullName(b)[0].toUpperCase()}
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <span class="font-medium text-sm text-white truncate">${fullName(b)}</span>
                ${b.nickname ? `<span class="text-xs text-slate-500">(${b.nickname})</span>` : ''}
                <span class="px-2 py-0.5 text-[10px] font-semibold rounded border ${statusClass}">${b.status?.toUpperCase()}</span>
              </div>
              <div class="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                <span>📅 ${eventDate}</span>
                <span>📍 ${location}</span>
                <span>💰 €${depositEur}</span>
              </div>
            </div>
          </div>
          <span class="text-xs text-slate-500 shrink-0">${new Date(b.created_at).toLocaleDateString('de-DE')}</span>
        </div>
      </div>`;
    }).join('');
  }

  window._adminShowBooking = function(bookingId) {
    const b = currentBookings.find(bk => bk.id === bookingId);
    if (!b) return;

    const eventDate = b.events?.jump_date
      ? new Date(b.events.jump_date).toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
      : '—';
    const location = b.events?.locations?.location_name || '—';

    const detail = document.getElementById('bookingDetail');
    detail.innerHTML = `
      <div class="space-y-3">
        <div class="grid grid-cols-2 gap-3">
          <div><span class="text-xs text-slate-500">Name</span><p class="font-medium">${fullName(b)}</p></div>
          <div><span class="text-xs text-slate-500">Nickname</span><p class="font-medium">${b.nickname || '—'}</p></div>
          <div><span class="text-xs text-slate-500">Email</span><p class="font-medium"><a href="mailto:${b.email}" class="text-brand-orange hover:underline">${b.email || '—'}</a></p></div>
          <div><span class="text-xs text-slate-500">Telefon</span><p class="font-medium"><a href="tel:${b.phone}" class="text-brand-orange hover:underline">${b.phone || '—'}</a></p></div>
        </div>
        <hr class="border-brand-border">
        <div class="grid grid-cols-2 gap-3">
          <div><span class="text-xs text-slate-500">Event-Datum</span><p class="font-medium">${eventDate}</p></div>
          <div><span class="text-xs text-slate-500">Location</span><p class="font-medium">${location}</p></div>
          <div><span class="text-xs text-slate-500">Status</span><p class="font-medium">${b.status?.toUpperCase() || '—'}</p></div>
          <div><span class="text-xs text-slate-500">Load</span><p class="font-medium">#${b.events?.load_number || '—'}</p></div>
        </div>
        <hr class="border-brand-border">
        <div class="grid grid-cols-2 gap-3">
          <div><span class="text-xs text-slate-500">Lizenznummer</span><p class="font-medium">${b.license_number || '—'}</p></div>
          <div><span class="text-xs text-slate-500">Lizenzland</span><p class="font-medium">${b.license_country || '—'}</p></div>
          <div><span class="text-xs text-slate-500">Notfallkontakt</span><p class="font-medium">${b.emergency_contact || '—'}</p></div>
          <div><span class="text-xs text-slate-500">Adresse</span><p class="font-medium">${b.address || '—'}</p></div>
        </div>
        <hr class="border-brand-border">
        <div class="grid grid-cols-2 gap-3">
          <div><span class="text-xs text-slate-500">Deposit</span><p class="font-medium text-green-400">€${b.deposit_amount_cents ? (b.deposit_amount_cents / 100).toFixed(2) : '—'}</p></div>
          <div><span class="text-xs text-slate-500">Total</span><p class="font-medium text-green-400">€${b.total_amount_cents ? (b.total_amount_cents / 100).toFixed(2) : '—'}</p></div>
          <div><span class="text-xs text-slate-500">Gebucht am</span><p class="font-medium">${new Date(b.created_at).toLocaleString('de-DE')}</p></div>
          <div><span class="text-xs text-slate-500">Stripe ID</span><p class="font-medium text-xs font-mono">${b.stripe_setup_intent_id || b.stripe_payment_intent_id || '—'}</p></div>
        </div>
        ${b.invite_token ? `<div class="mt-2 p-2 bg-slate-900 rounded"><span class="text-xs text-slate-500">Invite-Token:</span> <span class="font-mono text-xs">${b.invite_token}</span></div>` : ''}
        ${b.status === 'reserved' || b.status === 'confirmed' ? `
          <div class="flex gap-2 mt-4">
            <button class="px-4 py-2 bg-red-900/30 text-red-400 hover:bg-red-900/50 rounded-lg text-sm font-medium transition-colors" onclick="window._adminCancelBooking('${b.id}')">Buchung stornieren</button>
          </div>
        ` : ''}
      </div>
    `;

    const modal = document.getElementById('bookingModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  window._adminCancelBooking = async function(bookingId) {
    if (!confirm('Buchung wirklich stornieren?')) return;

    const { error } = await sb.from('bookings').update({ status: 'cancelled' }).eq('id', bookingId);
    if (error) {
      showToast('Fehler: ' + error.message, 'error');
      return;
    }

    showToast('Buchung storniert.', 'success');
    closeBookingModal();
    loadBookings();
    loadEvents();
  };

  // ============================================================
  // CSV EXPORT
  // ============================================================

  function exportBookingsCSV() {
    if (!currentBookings.length) {
      showToast('Keine Buchungen zum Exportieren.', 'error');
      return;
    }

    const headers = ['Name', 'Nickname', 'Email', 'Phone', 'License Nr', 'License Country', 'Event Date', 'Location', 'Status', 'Deposit (€)', 'Total (€)', 'Emergency Contact', 'Booked At'];
    const rows = currentBookings.map(b => [
      fullName(b),
      b.nickname || '',
      b.email || '',
      b.phone || '',
      b.license_number || '',
      b.license_country || '',
      b.events?.jump_date ? new Date(b.events.jump_date).toLocaleDateString('de-DE') : '',
      b.events?.locations?.location_name || '',
      b.status || '',
      b.deposit_amount_cents ? (b.deposit_amount_cents / 100).toFixed(2) : '',
      b.total_amount_cents ? (b.total_amount_cents / 100).toFixed(2) : '',
      b.emergency_contact || '',
      new Date(b.created_at).toLocaleString('de-DE')
    ]);

    const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' }); // BOM for Excel
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('CSV exportiert!', 'success');
  }

  // ============================================================
  // STATS
  // ============================================================

  async function loadStats() {
    try {
      const { count: eventCount } = await sb.from('events').select('*', { count: 'exact', head: true });
      const { count: bookingCount } = await sb.from('bookings').select('*', { count: 'exact', head: true }).in('status', ['confirmed', 'reserved']);
      const { data: revenueData } = await sb.from('bookings').select('deposit_amount_cents').in('status', ['confirmed']);

      document.getElementById('statEvents').textContent = eventCount || 0;
      document.getElementById('statBookings').textContent = bookingCount || 0;

      const totalRevenue = (revenueData || []).reduce((sum, b) => sum + (b.deposit_amount_cents || 0), 0) / 100;
      document.getElementById('statRevenue').textContent = totalRevenue.toLocaleString('de-DE');
    } catch (e) {
      console.error('Stats error:', e);
    }
  }

  // ============================================================
  // TOAST
  // ============================================================

  function showToast(message, type = 'info') {
    const toast = document.getElementById('adminToast');
    if (!toast) return;

    const colors = {
      success: 'bg-green-900 text-green-300 border border-green-800',
      error: 'bg-red-900 text-red-300 border border-red-800',
      info: 'bg-blue-900 text-blue-300 border border-blue-800'
    };

    toast.className = `fixed bottom-6 right-6 px-4 py-2.5 rounded-lg text-sm font-medium shadow-xl z-50 transition-all duration-300 ${colors[type] || colors.info}`;
    toast.textContent = message;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';

    setTimeout(() => {
      toast.style.transform = 'translateY(16px)';
      toast.style.opacity = '0';
    }, 3000);
  }

})();
