/* ============================================================
   ADMIN PANEL — JavaScript Logic (Tailwind UI)
   CMS for Time to Jump Dolomites
   ============================================================ */

(function() {
  'use strict';

  // ---- Configuration ----
  const ADMIN_CREDENTIALS = {
    email: 'admin@timetojumpdolomites.com',
    password: 'Jump2025!'
  };

  const STORAGE_KEYS = {
    session: 'ttjd_admin_session',
    translations: 'ttjd_admin_translations',
    images: 'ttjd_admin_images',
    links: 'ttjd_admin_links'
  };

  const EDITABLE_LINKS = [
    { id: 'instagram', label: 'Instagram', icon: '📸', defaultUrl: 'https://www.instagram.com/time_to_jump_dolomites/' },
    { id: 'youtube', label: 'YouTube', icon: '🎥', defaultUrl: 'https://www.youtube.com/@timetojumpdolomites' },
    { id: 'facebook', label: 'Facebook', icon: '📘', defaultUrl: 'https://www.facebook.com/p/Time-to-Jump-Dolomites-100077926092104/' },
    { id: 'elikos', label: 'Elikos Booking', icon: '🚁', defaultUrl: 'https://www.elikos.com/helicopter/index.php' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '💬', defaultUrl: 'https://wa.me/393427635478' },
    { id: 'email_link', label: 'Email Address', icon: '📧', defaultUrl: 'mailto:Info@timetojumpdolomites.com' },
    { id: 'phone', label: 'Phone Number', icon: '📞', defaultUrl: 'tel:+393427635478' },
    { id: 'travel_website', label: 'TRAVEL Parachutes', icon: '🌐', defaultUrl: 'http://www.travelparachutesystems.com' },
    { id: 'travel_customize', label: 'TRAVEL Configurator', icon: '⚙️', defaultUrl: 'http://www.travelparachutesystems.com/customize/sport-container/' },
    { id: 'travel_measure', label: 'TRAVEL Measurements', icon: '📐', defaultUrl: 'http://www.travelparachutesystems.com/how-to-measure/' }
  ];

  const EDITABLE_IMAGES = [
    { id: 'logo', label: 'Logo', src: 'img/logo.png' },
    { id: 'hero', label: 'Hero Background', src: 'img/hero.jpg' },
    { id: 'about', label: 'About Section Image', src: 'img/about.png' }
  ];

  // SVG icons for sidebar
  const NAV_ICONS = {
    navigation: '<path d="M4 6h16M4 12h16M4 18h7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    hero: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    about: '<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    experience: '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    pricing: '<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    partners: '<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    testimonials: '<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    events: '<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    shop: '<circle cx="9" cy="21" r="1" stroke-width="2"/><circle cx="20" cy="21" r="1" stroke-width="2"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    faq: '<path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    contact: '<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    requirements: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    map: '<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    footer: '<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    placeholders: '<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    images: '<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
    links: '<path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>'
  };

  const SECTIONS = {
    'navigation': { label: 'Navigation', keys: ['nav.about','nav.prices','nav.events','nav.blog','nav.privacy','nav.book'] },
    'hero': { label: 'Hero Section', keys: ['hero.badge','hero.title','hero.subtitle','hero.cta.prices','hero.cta.contact','hero.cta.book','hero.cta.helicopter','hero.scroll','hero.trust.heli','hero.trust.unesco','hero.trust.days'] },
    'about': { label: 'About', keys: ['about.label','about.title','about.text','about.stat.altitude','about.stat.heritage','about.stat.days','about.badge'] },
    'experience': { label: 'Experience', keys: ['experience.label','experience.title','experience.subtitle','experience.step1.title','experience.step1.text','experience.step2.title','experience.step2.text','experience.step3.title','experience.step3.text','experience.step4.title','experience.step4.text'] },
    'pricing': { label: 'Pricing', keys: ['pricing.label','pricing.title','pricing.subtitle','pricing.helicopter.title','pricing.helicopter.desc','pricing.helicopter.note','pricing.pack.title','pricing.pack.desc','pricing.pack.note','pricing.rent.title','pricing.rent.desc','pricing.onrequest','pricing.popular','pricing.cta','pricing.cta.contact'] },
    'partners': { label: 'Partners', keys: ['partners.label','partners.desc','partners.visit','partners.design','partners.measurements'] },
    'testimonials': { label: 'Testimonials', keys: ['testimonials.label','testimonials.title','testimonials.t1.text','testimonials.t1.info','testimonials.t2.text','testimonials.t2.info','testimonials.t3.text','testimonials.t3.info'] },
    'events': { label: 'Events', keys: ['events.label','events.title','events.subtitle','events.empty.title','events.empty.text'] },
    'shop': { label: 'Shop', keys: ['shop.label','shop.title','shop.subtitle','shop.empty.title','shop.empty.text'] },
    'faq': { label: 'FAQ', keys: ['faq.label','faq.title','faq.q1','faq.a1','faq.q2','faq.a2','faq.q3','faq.a3','faq.q4','faq.a4','faq.q5','faq.a5','faq.q6','faq.a6'] },
    'contact': { label: 'Contact', keys: ['contact.label','contact.title','contact.subtitle','contact.reach','contact.location','contact.email','contact.hotline','contact.timezone','contact.form.title','contact.form.name','contact.form.email','contact.form.phone','contact.form.message','contact.form.send','contact.form.success.title','contact.form.success.text'] },
    'requirements': { label: 'Requirements', keys: ['req.license.title','req.license.text','req.safety.title','req.safety.text','req.weather.title','req.weather.text','req.payment.title','req.payment.text'] },
    'map': { label: 'Map', keys: ['map.label','map.title','map.subtitle'] },
    'footer': { label: 'Footer & Chat', keys: ['footer.backtop','chat.title','chat.subtitle','chat.whatsapp','chat.email','chat.call'] },
    'placeholders': { label: 'Form Placeholders', keys: ['placeholder.name','placeholder.email','placeholder.phone','placeholder.message'] },
    'images': { label: 'Images', keys: [] },
    'links': { label: 'Links', keys: [] }
  };

  const SECTION_ANCHORS = {
    'navigation': null, 'hero': 'body', 'about': '#about', 'experience': '#experience',
    'pricing': '#pricing', 'partners': '#partners', 'testimonials': '#testimonials',
    'events': '#events', 'shop': '#shop', 'faq': '#faq', 'contact': '#contact',
    'requirements': '#requirements', 'map': '#map', 'footer': '#footer',
    'placeholders': '#contact', 'images': null, 'links': null
  };

  const SIDEBAR_GROUPS = [
    { label: 'Site Content', ids: ['navigation','hero','about','experience','pricing','partners','testimonials'] },
    { label: 'Pages', ids: ['events','shop','faq','contact','requirements','map','footer','placeholders'] },
    { label: 'Assets', ids: ['images','links'] }
  ];

  let previewVisible = true;
  let previewIframe = null;
  let translationOverrides = {};
  let imageOverrides = {};
  let linkOverrides = {};

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', () => {
    loadOverrides();
    if (sessionStorage.getItem(STORAGE_KEYS.session) === 'true') showDashboard();
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
  });

  // ---- Auth ----
  function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;
    const errorEl = document.getElementById('loginError');
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      sessionStorage.setItem(STORAGE_KEYS.session, 'true');
      showDashboard();
    } else {
      errorEl.textContent = 'Invalid email or password.';
      errorEl.classList.remove('hidden');
      errorEl.classList.add('visible');
      document.getElementById('adminPassword').value = '';
    }
  }

  function handleLogout() {
    sessionStorage.removeItem(STORAGE_KEYS.session);
    location.reload();
  }

  // ---- Dashboard ----
  function showDashboard() {
    const loginEl = document.getElementById('adminLogin');
    const dashEl = document.getElementById('adminDashboard');
    if (loginEl) loginEl.style.display = 'none';
    if (dashEl) {
      dashEl.classList.remove('hidden');
      dashEl.classList.add('flex');
      buildSidebar();
      buildAllSections();
      initPreview();
      initTopBar();
      navigateTo('hero');
    }
  }

  // ---- Sidebar ----
  function buildSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;
    nav.innerHTML = '';

    SIDEBAR_GROUPS.forEach(group => {
      const label = document.createElement('div');
      label.className = 'text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5 mt-4 first:mt-0 px-2';
      label.textContent = group.label;
      nav.appendChild(label);

      group.ids.forEach(sectionId => {
        const section = SECTIONS[sectionId];
        if (!section) return;
        const btn = document.createElement('button');
        btn.className = 'sidebar-link w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors';
        btn.dataset.section = sectionId;
        const iconSvg = NAV_ICONS[sectionId] || '';
        btn.innerHTML = `<svg class="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">${iconSvg}</svg><span class="truncate">${section.label}</span>`;
        btn.addEventListener('click', () => navigateTo(sectionId));
        nav.appendChild(btn);
      });
    });

    document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);
    document.getElementById('exportBtn')?.addEventListener('click', exportData);
    document.getElementById('importBtn')?.addEventListener('click', () => document.getElementById('importFileInput').click());
    document.getElementById('importFileInput')?.addEventListener('change', importData);
    document.getElementById('adminMobileToggle')?.addEventListener('click', () => {
      document.getElementById('adminSidebar').classList.toggle('open');
    });
  }

  function navigateTo(sectionId) {
    document.querySelectorAll('.sidebar-link').forEach(link => {
      if (link.dataset.section === sectionId) {
        link.className = 'sidebar-link w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm bg-brand-orange text-white transition-colors';
      } else {
        link.className = 'sidebar-link w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors';
      }
    });

    document.querySelectorAll('.admin-section').forEach(sec => {
      sec.classList.toggle('hidden', sec.id !== 'section-' + sectionId);
    });

    const titleEl = document.getElementById('adminSectionTitle');
    if (titleEl && SECTIONS[sectionId]) titleEl.textContent = SECTIONS[sectionId].label;

    document.getElementById('adminSidebar')?.classList.remove('open');

    const anchor = SECTION_ANCHORS[sectionId];
    if (anchor) scrollPreviewTo(anchor);
  }

  // ---- Top Bar ----
  function initTopBar() {
    document.getElementById('savePublishBtn')?.addEventListener('click', () => {
      saveOverrides();
      updateLastSaved();
      showToast('All changes saved!', 'success');
    });
    document.getElementById('discardBtn')?.addEventListener('click', () => {
      if (confirm('Discard all unsaved changes and reload?')) location.reload();
    });
    updateLastSaved();
  }

  function updateLastSaved() {
    const el = document.getElementById('adminLastSaved');
    if (el) el.textContent = 'Last saved: ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // ---- Build Sections ----
  function buildAllSections() {
    const container = document.getElementById('adminSections');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(SECTIONS).forEach(sectionId => {
      const section = SECTIONS[sectionId];
      const sectionEl = document.createElement('div');
      sectionEl.className = 'admin-section hidden';
      sectionEl.id = 'section-' + sectionId;

      if (sectionId === 'images') sectionEl.innerHTML = buildImageSection();
      else if (sectionId === 'links') sectionEl.innerHTML = buildLinksSection();
      else sectionEl.innerHTML = buildTextSection(sectionId, section);

      container.appendChild(sectionEl);
    });

    attachTextEditorListeners();
    attachImageListeners();
    attachLinkListeners();
  }

  // ---- Text Section ----
  function buildTextSection(sectionId, section) {
    if (!section.keys.length) return '<p class="text-slate-500 text-sm">No editable text in this section.</p>';

    let html = `<div class="relative mb-4">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke-width="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2"/></svg>
      <input type="text" placeholder="Search translations..." data-search-section="${sectionId}"
        class="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg text-sm focus:ring-brand-orange focus:border-brand-orange placeholder-slate-500">
    </div>`;

    section.keys.forEach(key => {
      if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[key]) return;
      const enVal = getTranslationValue(key, 'en');
      const preview = enVal.replace(/<[^>]*>/g, '').substring(0, 55);
      const isLong = enVal.length > 80;

      html += `<div class="editor-card mb-2 bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden" data-key="${key}">
        <div class="editor-card-header flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-slate-800/50 transition-colors">
          <div class="min-w-0">
            <div class="text-xs font-mono text-brand-orange truncate">${key}</div>
            <div class="text-xs text-slate-500 truncate mt-0.5">${preview}${preview.length >= 55 ? '\u2026' : ''}</div>
          </div>
          <svg class="chevron-icon w-4 h-4 text-slate-500 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" stroke-width="2"/></svg>
        </div>
        <div class="editor-card-body px-4 pb-4">
          <div class="flex flex-wrap gap-1 mb-3">
            ${LANGUAGES.map((lang, i) => `<button class="lang-tab px-2 py-1 text-[10px] font-semibold rounded ${i === 0 ? 'bg-brand-orange text-white' : 'bg-slate-800 text-slate-400 hover:text-white'} transition-colors" data-lang="${lang.code}" data-key="${key}">${lang.flag} ${lang.code.toUpperCase()}</button>`).join('')}
          </div>
          ${LANGUAGES.map((lang, i) => {
            const value = getTranslationValue(key, lang.code);
            return `<div class="lang-panel ${i === 0 ? '' : 'hidden'}" data-lang="${lang.code}" data-key="${key}">
              <textarea rows="${isLong ? 4 : 2}" data-key="${key}" data-lang="${lang.code}"
                class="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-md text-sm focus:ring-brand-orange focus:border-brand-orange">${escapeHtml(value)}</textarea>
            </div>`;
          }).join('')}
          <div class="flex justify-end gap-2 mt-3">
            <button class="px-3 py-1.5 text-xs text-slate-400 hover:text-white border border-slate-700 rounded-md transition-colors" data-action="reset" data-key="${key}">Reset</button>
            <button class="px-3 py-1.5 text-xs bg-brand-orange hover:bg-orange-600 text-white rounded-md font-medium transition-colors" data-action="save-text" data-key="${key}">Save</button>
          </div>
        </div>
      </div>`;
    });
    return html;
  }

  // ---- Image Section ----
  function buildImageSection() {
    let html = '<h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-2 mb-4">Manage Images</h3>';
    EDITABLE_IMAGES.forEach(img => {
      const currentSrc = imageOverrides[img.id] || img.src;
      html += `<div class="mb-4 bg-slate-900/50 border border-slate-800 rounded-lg p-4" data-image-id="${img.id}">
        <div class="flex items-start gap-4">
          <img class="w-20 h-20 object-cover rounded-lg border border-slate-700" src="${currentSrc}" alt="${img.label}" id="preview-${img.id}">
          <div class="flex-1">
            <div class="text-sm font-medium text-slate-200">${img.label}</div>
            <div class="text-[10px] text-slate-500 mt-0.5">${img.src}</div>
            <div class="admin-dropzone mt-3 border-2 border-dashed border-slate-700 rounded-lg p-4 text-center hover:border-brand-orange transition-colors cursor-pointer" data-image-id="${img.id}">
              <p class="text-xs text-slate-400">Click or drop image here</p>
              <input type="file" accept="image/*" data-image-id="${img.id}" class="hidden">
            </div>
            <div class="flex gap-2 mt-2">
              <button class="px-3 py-1 text-xs text-red-400 hover:text-red-300 border border-red-900/30 rounded-md transition-colors" data-action="reset-image" data-image-id="${img.id}" style="${imageOverrides[img.id] ? '' : 'display:none;'}">Reset</button>
            </div>
          </div>
        </div>
      </div>`;
    });
    return html;
  }

  // ---- Links Section ----
  function buildLinksSection() {
    let html = '<h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700 pb-2 mb-4">Manage Links</h3>';
    EDITABLE_LINKS.forEach(link => {
      const currentUrl = linkOverrides[link.id] || link.defaultUrl;
      html += `<div class="mb-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4" data-link-id="${link.id}">
        <div class="text-sm font-medium text-slate-300 mb-2">${link.icon} ${link.label}</div>
        <input type="url" value="${escapeHtml(currentUrl)}" data-link-id="${link.id}" placeholder="Enter URL..."
          class="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-md text-sm focus:ring-brand-orange focus:border-brand-orange">
        <div class="flex justify-end gap-2 mt-2">
          <button class="px-3 py-1 text-xs text-slate-400 hover:text-white border border-slate-700 rounded-md transition-colors" data-action="reset-link" data-link-id="${link.id}" style="${linkOverrides[link.id] ? '' : 'display:none;'}">Reset</button>
          <button class="px-3 py-1 text-xs bg-brand-orange hover:bg-orange-600 text-white rounded-md font-medium transition-colors" data-action="save-link" data-link-id="${link.id}">Save</button>
        </div>
      </div>`;
    });
    return html;
  }

  // ---- Event Listeners ----
  function attachTextEditorListeners() {
    document.querySelectorAll('.editor-card-header').forEach(header => {
      header.addEventListener('click', () => header.closest('.editor-card').classList.toggle('open'));
    });

    document.querySelectorAll('.lang-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = tab.dataset.key;
        const lang = tab.dataset.lang;
        const card = tab.closest('.editor-card');
        card.querySelectorAll('.lang-tab').forEach(t => {
          t.className = t.dataset.lang === lang
            ? 'lang-tab px-2 py-1 text-[10px] font-semibold rounded bg-brand-orange text-white transition-colors'
            : 'lang-tab px-2 py-1 text-[10px] font-semibold rounded bg-slate-800 text-slate-400 hover:text-white transition-colors';
        });
        card.querySelectorAll('.lang-panel').forEach(p => p.classList.toggle('hidden', p.dataset.lang !== lang));
      });
    });

    document.querySelectorAll('[data-action="save-text"]').forEach(btn => {
      btn.addEventListener('click', () => { saveTranslationKey(btn.dataset.key); showToast('Saved!', 'success'); });
    });

    document.querySelectorAll('[data-action="reset"]').forEach(btn => {
      btn.addEventListener('click', () => { resetTranslationKey(btn.dataset.key); showToast('Reset to default.', 'info'); });
    });

    document.querySelectorAll('.editor-card textarea').forEach(textarea => {
      textarea.addEventListener('input', () => updatePreviewText(textarea.dataset.key, textarea.dataset.lang, textarea.value));
    });

    document.querySelectorAll('[data-search-section]').forEach(input => {
      input.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        const sec = input.closest('.admin-section');
        sec.querySelectorAll('.editor-card').forEach(card => {
          const key = card.dataset.key;
          const preview = card.querySelector('.text-slate-500')?.textContent || '';
          card.style.display = (key.toLowerCase().includes(q) || preview.toLowerCase().includes(q)) ? '' : 'none';
        });
      });
    });
  }

  function attachImageListeners() {
    document.querySelectorAll('.admin-dropzone').forEach(zone => {
      zone.addEventListener('click', () => zone.querySelector('input[type="file"]').click());
      zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
      zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
      zone.addEventListener('drop', (e) => {
        e.preventDefault(); zone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) handleImageUpload(zone.dataset.imageId, file);
      });
      const fi = zone.querySelector('input[type="file"]');
      if (fi) fi.addEventListener('change', (e) => { if (e.target.files[0]) handleImageUpload(zone.dataset.imageId, e.target.files[0]); });
    });

    document.querySelectorAll('[data-action="reset-image"]').forEach(btn => {
      btn.addEventListener('click', () => { resetImage(btn.dataset.imageId); showToast('Image reset.', 'info'); });
    });
  }

  function attachLinkListeners() {
    document.querySelectorAll('[data-action="save-link"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = document.querySelector(`input[data-link-id="${btn.dataset.linkId}"]`);
        if (input) { saveLinkOverride(btn.dataset.linkId, input.value); showToast('Link saved!', 'success'); }
      });
    });
    document.querySelectorAll('[data-action="reset-link"]').forEach(btn => {
      btn.addEventListener('click', () => { resetLink(btn.dataset.linkId); showToast('Link reset.', 'info'); });
    });
  }

  // ---- Translation Management ----
  function getTranslationValue(key, lang) {
    if (translationOverrides[key] && translationOverrides[key][lang] !== undefined) return translationOverrides[key][lang];
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[key] && TRANSLATIONS[key][lang]) return TRANSLATIONS[key][lang];
    return '';
  }

  function saveTranslationKey(key) {
    const card = document.querySelector(`.editor-card[data-key="${key}"]`);
    if (!card) return;
    if (!translationOverrides[key]) translationOverrides[key] = {};
    LANGUAGES.forEach(lang => {
      const ta = card.querySelector(`textarea[data-key="${key}"][data-lang="${lang.code}"]`);
      if (ta) translationOverrides[key][lang.code] = ta.value;
    });
    saveOverrides();
  }

  function resetTranslationKey(key) {
    delete translationOverrides[key];
    saveOverrides();
    const card = document.querySelector(`.editor-card[data-key="${key}"]`);
    if (card) {
      LANGUAGES.forEach(lang => {
        const ta = card.querySelector(`textarea[data-key="${key}"][data-lang="${lang.code}"]`);
        if (ta && TRANSLATIONS[key] && TRANSLATIONS[key][lang.code]) ta.value = TRANSLATIONS[key][lang.code];
      });
    }
  }

  // ---- Image Management ----
  function handleImageUpload(imageId, file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageOverrides[imageId] = e.target.result;
      saveOverrides();
      const preview = document.getElementById('preview-' + imageId);
      if (preview) preview.src = e.target.result;
      const resetBtn = document.querySelector(`[data-action="reset-image"][data-image-id="${imageId}"]`);
      if (resetBtn) resetBtn.style.display = '';
      showToast('Image uploaded!', 'success');
    };
    reader.readAsDataURL(file);
  }

  function resetImage(imageId) {
    delete imageOverrides[imageId];
    saveOverrides();
    const imgDef = EDITABLE_IMAGES.find(i => i.id === imageId);
    if (imgDef) { const p = document.getElementById('preview-' + imageId); if (p) p.src = imgDef.src; }
    const rb = document.querySelector(`[data-action="reset-image"][data-image-id="${imageId}"]`);
    if (rb) rb.style.display = 'none';
  }

  // ---- Link Management ----
  function saveLinkOverride(linkId, url) {
    linkOverrides[linkId] = url;
    saveOverrides();
    const rb = document.querySelector(`[data-action="reset-link"][data-link-id="${linkId}"]`);
    if (rb) rb.style.display = '';
  }

  function resetLink(linkId) {
    delete linkOverrides[linkId];
    saveOverrides();
    const def = EDITABLE_LINKS.find(l => l.id === linkId);
    if (def) { const input = document.querySelector(`input[data-link-id="${linkId}"]`); if (input) input.value = def.defaultUrl; }
    const rb = document.querySelector(`[data-action="reset-link"][data-link-id="${linkId}"]`);
    if (rb) rb.style.display = 'none';
  }

  // ---- Persistence ----
  function loadOverrides() {
    try { const t = localStorage.getItem(STORAGE_KEYS.translations); if (t) translationOverrides = JSON.parse(t); } catch(e) {}
    try { const i = localStorage.getItem(STORAGE_KEYS.images); if (i) imageOverrides = JSON.parse(i); } catch(e) {}
    try { const l = localStorage.getItem(STORAGE_KEYS.links); if (l) linkOverrides = JSON.parse(l); } catch(e) {}
  }

  function saveOverrides() {
    localStorage.setItem(STORAGE_KEYS.translations, JSON.stringify(translationOverrides));
    localStorage.setItem(STORAGE_KEYS.images, JSON.stringify(imageOverrides));
    localStorage.setItem(STORAGE_KEYS.links, JSON.stringify(linkOverrides));
  }

  // ---- Export / Import ----
  function exportData() {
    const data = { version: '1.0', exportedAt: new Date().toISOString(), translations: translationOverrides, images: imageOverrides, links: linkOverrides };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `ttjd-export-${new Date().toISOString().split('T')[0]}.json`; a.click();
    URL.revokeObjectURL(url);
    showToast('Exported!', 'success');
  }

  function importData(e) {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.translations) translationOverrides = data.translations;
        if (data.images) imageOverrides = data.images;
        if (data.links) linkOverrides = data.links;
        saveOverrides();
        showToast('Imported! Refreshing…', 'success');
        setTimeout(() => location.reload(), 1000);
      } catch(err) { showToast('Invalid JSON.', 'error'); }
    };
    reader.readAsText(file);
  }

  // ---- Toast ----
  function showToast(message, type) {
    let toast = document.getElementById('adminToast');
    if (!toast) { toast = document.createElement('div'); toast.id = 'adminToast'; toast.className = 'admin-toast'; document.body.appendChild(toast); }
    toast.className = `admin-toast admin-toast--${type}`;
    toast.textContent = message;
    requestAnimationFrame(() => {
      toast.classList.add('visible');
      setTimeout(() => toast.classList.remove('visible'), 2500);
    });
  }

  function escapeHtml(str) { const d = document.createElement('div'); d.textContent = str; return d.innerHTML; }

  // ---- Live Preview ----
  function initPreview() {
    previewIframe = document.getElementById('previewFrame');

    document.getElementById('previewToggleBtn')?.addEventListener('click', () => {
      const pane = document.getElementById('adminPreviewPane');
      previewVisible = !previewVisible;
      if (pane) pane.style.display = previewVisible ? '' : 'none';
    });

    document.getElementById('previewDesktop')?.addEventListener('click', () => {
      if (previewIframe) previewIframe.classList.remove('mobile-preview');
    });

    document.getElementById('previewMobile')?.addEventListener('click', () => {
      if (previewIframe) previewIframe.classList.add('mobile-preview');
    });
  }

  function scrollPreviewTo(anchor) {
    if (!previewIframe || !previewIframe.contentWindow) return;
    try {
      const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
      if (!doc) return;
      if (doc.readyState !== 'complete') { previewIframe.addEventListener('load', () => scrollPreviewTo(anchor), { once: true }); return; }
      if (anchor === 'body') previewIframe.contentWindow.scrollTo({ top: 0, behavior: 'smooth' });
      else { const el = doc.querySelector(anchor); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    } catch(e) {}
  }

  function updatePreviewText(key, lang, newValue) {
    if (!previewIframe || !previewIframe.contentWindow) return;
    try {
      const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
      if (!doc || doc.readyState !== 'complete') return;
      let activeLang = 'en';
      try { activeLang = previewIframe.contentWindow.localStorage.getItem('ttjd_lang') || 'en'; } catch(e) {}
      if (lang !== activeLang) return;
      doc.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
        el.innerHTML = newValue;
        el.style.outline = '2px solid rgba(255,138,0,0.5)';
        el.style.outlineOffset = '4px';
        el.style.transition = 'outline-color 1s ease';
        setTimeout(() => { el.style.outlineColor = 'transparent'; }, 1500);
      });
      doc.querySelectorAll(`[data-i18n-placeholder="${key}"]`).forEach(el => { el.placeholder = newValue; });
    } catch(e) {}
  }

})();
