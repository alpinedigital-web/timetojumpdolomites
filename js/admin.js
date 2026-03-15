/* ============================================================
   ADMIN PANEL — JavaScript Logic
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

  // Editable links definition (label → CSS selector on index.html)
  const EDITABLE_LINKS = [
    { id: 'instagram', label: 'Instagram', icon: '📸', defaultUrl: 'https://www.instagram.com/time_to_jump_dolomites/' },
    { id: 'youtube', label: 'YouTube', icon: '🎥', defaultUrl: 'https://www.youtube.com/@timetojumpdolomites' },
    { id: 'facebook', label: 'Facebook', icon: '📘', defaultUrl: 'https://www.facebook.com/p/Time-to-Jump-Dolomites-100077926092104/' },
    { id: 'elikos', label: 'Elikos Booking', icon: '🚁', defaultUrl: 'https://www.elikos.com/helicopter/index.php' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '💬', defaultUrl: 'https://wa.me/393427635478' },
    { id: 'email_link', label: 'Email Address', icon: '📧', defaultUrl: 'mailto:Info@timetojumpdolomites.com' },
    { id: 'phone', label: 'Phone Number', icon: '📞', defaultUrl: 'tel:+393427635478' },
    { id: 'travel_website', label: 'TRAVEL Parachutes Website', icon: '🌐', defaultUrl: 'http://www.travelparachutesystems.com' },
    { id: 'travel_customize', label: 'TRAVEL Rig Configurator', icon: '⚙️', defaultUrl: 'http://www.travelparachutesystems.com/customize/sport-container/' },
    { id: 'travel_measure', label: 'TRAVEL Measurements', icon: '📐', defaultUrl: 'http://www.travelparachutesystems.com/how-to-measure/' }
  ];

  // Editable images definition
  const EDITABLE_IMAGES = [
    { id: 'logo', label: 'Logo', src: 'img/logo.png' },
    { id: 'hero', label: 'Hero Background', src: 'img/hero.jpg' },
    { id: 'about', label: 'About Section Image', src: 'img/about.png' }
  ];

  // Organize translation keys into sections for navigation
  const SECTIONS = {
    'navigation': { label: 'Navigation', icon: '☰', keys: ['nav.about','nav.prices','nav.events','nav.blog','nav.privacy','nav.book'] },
    'hero': { label: 'Hero', icon: '🏔️', keys: ['hero.badge','hero.title','hero.subtitle','hero.cta.prices','hero.cta.contact','hero.cta.book','hero.cta.helicopter','hero.scroll','hero.trust.heli','hero.trust.unesco','hero.trust.days'] },
    'about': { label: 'About', icon: '📖', keys: ['about.label','about.title','about.text','about.stat.altitude','about.stat.heritage','about.stat.days','about.badge'] },
    'experience': { label: 'Experience', icon: '🎯', keys: ['experience.label','experience.title','experience.subtitle','experience.step1.title','experience.step1.text','experience.step2.title','experience.step2.text','experience.step3.title','experience.step3.text','experience.step4.title','experience.step4.text'] },
    'pricing': { label: 'Pricing', icon: '💰', keys: ['pricing.label','pricing.title','pricing.subtitle','pricing.helicopter.title','pricing.helicopter.desc','pricing.helicopter.note','pricing.pack.title','pricing.pack.desc','pricing.pack.note','pricing.rent.title','pricing.rent.desc','pricing.onrequest','pricing.popular','pricing.cta','pricing.cta.contact'] },
    'partners': { label: 'Partners', icon: '🤝', keys: ['partners.label','partners.desc','partners.visit','partners.design','partners.measurements'] },
    'testimonials': { label: 'Testimonials', icon: '⭐', keys: ['testimonials.label','testimonials.title','testimonials.t1.text','testimonials.t1.info','testimonials.t2.text','testimonials.t2.info','testimonials.t3.text','testimonials.t3.info'] },
    'events': { label: 'Events', icon: '📅', keys: ['events.label','events.title','events.subtitle','events.empty.title','events.empty.text'] },
    'shop': { label: 'Shop', icon: '🛒', keys: ['shop.label','shop.title','shop.subtitle','shop.empty.title','shop.empty.text'] },
    'faq': { label: 'FAQ', icon: '❓', keys: ['faq.label','faq.title','faq.q1','faq.a1','faq.q2','faq.a2','faq.q3','faq.a3','faq.q4','faq.a4','faq.q5','faq.a5','faq.q6','faq.a6'] },
    'contact': { label: 'Contact', icon: '📬', keys: ['contact.label','contact.title','contact.subtitle','contact.reach','contact.location','contact.email','contact.hotline','contact.timezone','contact.form.title','contact.form.name','contact.form.email','contact.form.phone','contact.form.message','contact.form.send','contact.form.success.title','contact.form.success.text'] },
    'requirements': { label: 'Requirements', icon: '✅', keys: ['req.license.title','req.license.text','req.safety.title','req.safety.text','req.weather.title','req.weather.text','req.payment.title','req.payment.text'] },
    'map': { label: 'Map', icon: '📍', keys: ['map.label','map.title','map.subtitle'] },
    'footer': { label: 'Footer & Chat', icon: '💬', keys: ['footer.backtop','chat.title','chat.subtitle','chat.whatsapp','chat.email','chat.call'] },
    'placeholders': { label: 'Form Placeholders', icon: '✏️', keys: ['placeholder.name','placeholder.email','placeholder.phone','placeholder.message'] },
    'images': { label: 'Images', icon: '🖼️', keys: [] },
    'links': { label: 'Links', icon: '🔗', keys: [] }
  };

  // Map admin sections to anchors on index.html
  const SECTION_ANCHORS = {
    'navigation': null,
    'hero': 'body',
    'about': '#about',
    'experience': '#experience',
    'pricing': '#pricing',
    'partners': '#partners',
    'testimonials': '#testimonials',
    'events': '#events',
    'shop': '#shop',
    'faq': '#faq',
    'contact': '#contact',
    'requirements': '#requirements',
    'map': '#map',
    'footer': '#footer',
    'placeholders': '#contact',
    'images': null,
    'links': null
  };

  let previewVisible = true;
  let previewIframe = null;

  // ---- State ----
  let translationOverrides = {};
  let imageOverrides = {};
  let linkOverrides = {};

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', () => {
    loadOverrides();

    // Check if already logged in
    if (sessionStorage.getItem(STORAGE_KEYS.session) === 'true') {
      showDashboard();
    }

    // Login form handler
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }
  });

  // ---- Authentication ----
  function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;
    const errorEl = document.getElementById('loginError');

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      sessionStorage.setItem(STORAGE_KEYS.session, 'true');
      showDashboard();
    } else {
      errorEl.textContent = 'Invalid email or password. Please try again.';
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
      dashEl.classList.add('active');
      buildSidebar();
      buildAllSections();
      initPreview();
      navigateTo('navigation');
    }
  }

  // ---- Sidebar ----
  function buildSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    nav.innerHTML = '';
    Object.keys(SECTIONS).forEach(sectionId => {
      const section = SECTIONS[sectionId];
      const btn = document.createElement('button');
      btn.className = 'admin-sidebar__link';
      btn.dataset.section = sectionId;
      btn.innerHTML = `<span style="font-size:1.1rem;">${section.icon}</span> ${section.label}`;
      btn.addEventListener('click', () => navigateTo(sectionId));
      nav.appendChild(btn);
    });

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', handleLogout);
    }

    // Export button
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', exportData);
    }

    // Import button
    const importBtn = document.getElementById('importBtn');
    if (importBtn) {
      importBtn.addEventListener('click', () => {
        document.getElementById('importFileInput').click();
      });
    }

    const importInput = document.getElementById('importFileInput');
    if (importInput) {
      importInput.addEventListener('change', importData);
    }

    // Mobile toggle
    const mobileToggle = document.getElementById('adminMobileToggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        document.getElementById('adminSidebar').classList.toggle('open');
      });
    }
  }

  function navigateTo(sectionId) {
    // Update sidebar active state
    document.querySelectorAll('.admin-sidebar__link').forEach(link => {
      link.classList.toggle('active', link.dataset.section === sectionId);
    });

    // Show the correct section
    document.querySelectorAll('.admin-section').forEach(sec => {
      sec.classList.toggle('active', sec.id === 'section-' + sectionId);
    });

    // Update header title
    const titleEl = document.getElementById('adminSectionTitle');
    if (titleEl && SECTIONS[sectionId]) {
      titleEl.textContent = SECTIONS[sectionId].label;
    }

    // Close mobile sidebar
    const sidebar = document.getElementById('adminSidebar');
    if (sidebar) sidebar.classList.remove('open');

    // Show/hide preview based on section type
    const previewEl = document.getElementById('adminPreview');
    const mainEl = document.querySelector('.admin-main');
    const anchor = SECTION_ANCHORS[sectionId];

    if (anchor && previewEl) {
      previewEl.style.display = 'block';
      if (mainEl) mainEl.classList.add('has-preview');
      if (previewVisible) {
        previewEl.classList.remove('collapsed');
      }
      scrollPreviewTo(anchor);
    } else if (previewEl) {
      previewEl.style.display = 'none';
      if (mainEl) mainEl.classList.remove('has-preview');
    }
  }

  // ---- Build Sections ----
  function buildAllSections() {
    const container = document.getElementById('adminSections');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(SECTIONS).forEach(sectionId => {
      const section = SECTIONS[sectionId];
      const sectionEl = document.createElement('div');
      sectionEl.className = 'admin-section';
      sectionEl.id = 'section-' + sectionId;

      if (sectionId === 'images') {
        sectionEl.innerHTML = buildImageSection();
      } else if (sectionId === 'links') {
        sectionEl.innerHTML = buildLinksSection();
      } else {
        sectionEl.innerHTML = buildTextSection(sectionId, section);
      }

      container.appendChild(sectionEl);
    });

    // Attach event listeners
    attachTextEditorListeners();
    attachImageListeners();
    attachLinkListeners();
  }

  // ---- Text Section Builder ----
  function buildTextSection(sectionId, section) {
    if (!section.keys.length) return '<p style="color:var(--admin-text-muted);">No editable text in this section.</p>';

    let html = `<div class="admin-search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder="Search translations..." data-search-section="${sectionId}">
    </div>`;

    section.keys.forEach(key => {
      if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[key]) return;

      const enPreview = getTranslationValue(key, 'en');
      const shortPreview = enPreview.replace(/<[^>]*>/g,'').substring(0, 60);

      html += `<div class="admin-editor-card" data-key="${key}">
        <div class="admin-editor-card__header">
          <div>
            <div class="admin-editor-card__key">${key}</div>
            <div class="admin-editor-card__preview">${shortPreview}${shortPreview.length >= 60 ? '…' : ''}</div>
          </div>
          <svg class="admin-editor-card__toggle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="admin-editor-card__body">
          <div class="admin-lang-tabs">
            ${LANGUAGES.map((lang, i) => `<button class="admin-lang-tab${i === 0 ? ' active' : ''}" data-lang="${lang.code}" data-key="${key}">${lang.flag} ${lang.code.toUpperCase()}</button>`).join('')}
          </div>
          ${LANGUAGES.map((lang, i) => {
            const value = getTranslationValue(key, lang.code);
            return `<div class="admin-lang-panel${i === 0 ? ' active' : ''}" data-lang="${lang.code}" data-key="${key}">
              <textarea rows="3" data-key="${key}" data-lang="${lang.code}">${escapeHtml(value)}</textarea>
            </div>`;
          }).join('')}
          <div class="admin-editor-card__actions">
            <button class="admin-btn admin-btn--outline admin-btn--sm" data-action="reset" data-key="${key}">Reset</button>
            <button class="admin-btn admin-btn--primary admin-btn--sm" data-action="save-text" data-key="${key}">Save</button>
          </div>
        </div>
      </div>`;
    });

    return html;
  }

  // ---- Image Section Builder ----
  function buildImageSection() {
    let html = '<div class="admin-section-label">Manage Website Images</div><div class="admin-images-grid">';

    EDITABLE_IMAGES.forEach(img => {
      const currentSrc = imageOverrides[img.id] || img.src;
      html += `<div class="admin-image-card" data-image-id="${img.id}">
        <img class="admin-image-card__preview" src="${currentSrc}" alt="${img.label}" id="preview-${img.id}">
        <div class="admin-image-card__info">
          <div class="admin-image-card__name">${img.label}</div>
          <div class="admin-image-card__path">${img.src}</div>
          <div class="admin-image-dropzone" data-image-id="${img.id}">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            Drop image here or click to upload
            <input type="file" accept="image/*" data-image-id="${img.id}">
          </div>
          <div style="display:flex;gap:8px;margin-top:12px;">
            <button class="admin-btn admin-btn--danger admin-btn--sm" data-action="reset-image" data-image-id="${img.id}" style="${imageOverrides[img.id] ? '' : 'display:none;'}">Reset</button>
          </div>
        </div>
      </div>`;
    });

    html += '</div>';
    return html;
  }

  // ---- Links Section Builder ----
  function buildLinksSection() {
    let html = '<div class="admin-section-label">Manage Website Links</div>';

    EDITABLE_LINKS.forEach(link => {
      const currentUrl = linkOverrides[link.id] || link.defaultUrl;
      html += `<div class="admin-link-card" data-link-id="${link.id}">
        <div class="admin-link-card__label">${link.icon} ${link.label}</div>
        <input type="url" value="${escapeHtml(currentUrl)}" data-link-id="${link.id}" placeholder="Enter URL...">
        <div style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end;">
          <button class="admin-btn admin-btn--outline admin-btn--sm" data-action="reset-link" data-link-id="${link.id}" style="${linkOverrides[link.id] ? '' : 'display:none;'}">Reset</button>
          <button class="admin-btn admin-btn--primary admin-btn--sm" data-action="save-link" data-link-id="${link.id}">Save</button>
        </div>
      </div>`;
    });

    return html;
  }

  // ---- Event Listeners ----
  function attachTextEditorListeners() {
    // Toggle cards open/close
    document.querySelectorAll('.admin-editor-card__header').forEach(header => {
      header.addEventListener('click', () => {
        header.closest('.admin-editor-card').classList.toggle('open');
      });
    });

    // Language tab switching
    document.querySelectorAll('.admin-lang-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const key = tab.dataset.key;
        const lang = tab.dataset.lang;
        const card = tab.closest('.admin-editor-card');

        card.querySelectorAll('.admin-lang-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        card.querySelectorAll('.admin-lang-panel').forEach(p => {
          p.classList.toggle('active', p.dataset.lang === lang);
        });
      });
    });

    // Save text
    document.querySelectorAll('[data-action="save-text"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        saveTranslationKey(key);
        showToast('Translation saved!', 'success');
      });
    });

    // Reset text
    document.querySelectorAll('[data-action="reset"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        resetTranslationKey(key);
        showToast('Translation reset to default.', 'info');
      });
    });

    // Search
    // Real-time preview on textarea input
    document.querySelectorAll('.admin-editor-card textarea').forEach(textarea => {
      textarea.addEventListener('input', () => {
        const key = textarea.dataset.key;
        const lang = textarea.dataset.lang;
        updatePreviewText(key, lang, textarea.value);
      });
    });

    // Search
    document.querySelectorAll('[data-search-section]').forEach(input => {
      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const sectionEl = input.closest('.admin-section');
        sectionEl.querySelectorAll('.admin-editor-card').forEach(card => {
          const key = card.dataset.key;
          const preview = card.querySelector('.admin-editor-card__preview')?.textContent || '';
          const visible = key.toLowerCase().includes(query) || preview.toLowerCase().includes(query);
          card.style.display = visible ? '' : 'none';
        });
      });
    });
  }

  function attachImageListeners() {
    // Dropzone click → open file picker
    document.querySelectorAll('.admin-image-dropzone').forEach(zone => {
      zone.addEventListener('click', () => {
        zone.querySelector('input[type="file"]').click();
      });

      // Drag & drop
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('dragover');
      });
      zone.addEventListener('dragleave', () => {
        zone.classList.remove('dragover');
      });
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          handleImageUpload(zone.dataset.imageId, file);
        }
      });

      // File input change
      const fileInput = zone.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            handleImageUpload(zone.dataset.imageId, file);
          }
        });
      }
    });

    // Reset image
    document.querySelectorAll('[data-action="reset-image"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const imageId = btn.dataset.imageId;
        resetImage(imageId);
        showToast('Image reset to default.', 'info');
      });
    });
  }

  function attachLinkListeners() {
    // Save link
    document.querySelectorAll('[data-action="save-link"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const linkId = btn.dataset.linkId;
        const input = document.querySelector(`input[data-link-id="${linkId}"]`);
        if (input) {
          saveLinkOverride(linkId, input.value);
          showToast('Link saved!', 'success');
        }
      });
    });

    // Reset link
    document.querySelectorAll('[data-action="reset-link"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const linkId = btn.dataset.linkId;
        resetLink(linkId);
        showToast('Link reset to default.', 'info');
      });
    });
  }

  // ---- Translation Management ----
  function getTranslationValue(key, lang) {
    // Check overrides first
    if (translationOverrides[key] && translationOverrides[key][lang] !== undefined) {
      return translationOverrides[key][lang];
    }
    // Fall back to original
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      return TRANSLATIONS[key][lang];
    }
    return '';
  }

  function saveTranslationKey(key) {
    const card = document.querySelector(`.admin-editor-card[data-key="${key}"]`);
    if (!card) return;

    if (!translationOverrides[key]) {
      translationOverrides[key] = {};
    }

    LANGUAGES.forEach(lang => {
      const textarea = card.querySelector(`textarea[data-key="${key}"][data-lang="${lang.code}"]`);
      if (textarea) {
        translationOverrides[key][lang.code] = textarea.value;
      }
    });

    saveOverrides();
  }

  function resetTranslationKey(key) {
    delete translationOverrides[key];
    saveOverrides();

    // Reset textareas to original values
    const card = document.querySelector(`.admin-editor-card[data-key="${key}"]`);
    if (card) {
      LANGUAGES.forEach(lang => {
        const textarea = card.querySelector(`textarea[data-key="${key}"][data-lang="${lang.code}"]`);
        if (textarea && TRANSLATIONS[key] && TRANSLATIONS[key][lang.code]) {
          textarea.value = TRANSLATIONS[key][lang.code];
        }
      });
    }
  }

  // ---- Image Management ----
  function handleImageUpload(imageId, file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      imageOverrides[imageId] = dataUrl;
      saveOverrides();

      // Update preview
      const preview = document.getElementById('preview-' + imageId);
      if (preview) preview.src = dataUrl;

      // Show reset button
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
    if (imgDef) {
      const preview = document.getElementById('preview-' + imageId);
      if (preview) preview.src = imgDef.src;
    }

    const resetBtn = document.querySelector(`[data-action="reset-image"][data-image-id="${imageId}"]`);
    if (resetBtn) resetBtn.style.display = 'none';
  }

  // ---- Link Management ----
  function saveLinkOverride(linkId, url) {
    linkOverrides[linkId] = url;
    saveOverrides();

    const resetBtn = document.querySelector(`[data-action="reset-link"][data-link-id="${linkId}"]`);
    if (resetBtn) resetBtn.style.display = '';
  }

  function resetLink(linkId) {
    delete linkOverrides[linkId];
    saveOverrides();

    const linkDef = EDITABLE_LINKS.find(l => l.id === linkId);
    if (linkDef) {
      const input = document.querySelector(`input[data-link-id="${linkId}"]`);
      if (input) input.value = linkDef.defaultUrl;
    }

    const resetBtn = document.querySelector(`[data-action="reset-link"][data-link-id="${linkId}"]`);
    if (resetBtn) resetBtn.style.display = 'none';
  }

  // ---- Persistence ----
  function loadOverrides() {
    try {
      const t = localStorage.getItem(STORAGE_KEYS.translations);
      if (t) translationOverrides = JSON.parse(t);
    } catch(e) {}

    try {
      const i = localStorage.getItem(STORAGE_KEYS.images);
      if (i) imageOverrides = JSON.parse(i);
    } catch(e) {}

    try {
      const l = localStorage.getItem(STORAGE_KEYS.links);
      if (l) linkOverrides = JSON.parse(l);
    } catch(e) {}
  }

  function saveOverrides() {
    localStorage.setItem(STORAGE_KEYS.translations, JSON.stringify(translationOverrides));
    localStorage.setItem(STORAGE_KEYS.images, JSON.stringify(imageOverrides));
    localStorage.setItem(STORAGE_KEYS.links, JSON.stringify(linkOverrides));
  }

  // ---- Export / Import ----
  function exportData() {
    const data = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      translations: translationOverrides,
      images: imageOverrides,
      links: linkOverrides
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ttjd-admin-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Data exported successfully!', 'success');
  }

  function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.translations) translationOverrides = data.translations;
        if (data.images) imageOverrides = data.images;
        if (data.links) linkOverrides = data.links;
        saveOverrides();
        showToast('Data imported! Refreshing…', 'success');
        setTimeout(() => location.reload(), 1000);
      } catch(err) {
        showToast('Invalid JSON file.', 'error');
      }
    };
    reader.readAsText(file);
  }

  // ---- Toast ----
  function showToast(message, type) {
    let toast = document.getElementById('adminToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'adminToast';
      toast.className = 'admin-toast';
      document.body.appendChild(toast);
    }

    toast.className = `admin-toast admin-toast--${type}`;
    toast.textContent = message;

    requestAnimationFrame(() => {
      toast.classList.add('visible');
      setTimeout(() => {
        toast.classList.remove('visible');
      }, 2500);
    });
  }

  // ---- Helpers ----
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Live Preview ----
  function initPreview() {
    previewIframe = document.getElementById('previewFrame');

    // Toggle button
    const toggleBtn = document.getElementById('previewToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const previewEl = document.getElementById('adminPreview');
        const mainEl = document.querySelector('.admin-main');
        previewVisible = !previewVisible;

        if (previewVisible) {
          previewEl.classList.remove('collapsed');
          if (mainEl) mainEl.classList.add('has-preview');
          toggleBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Hide';
        } else {
          previewEl.classList.add('collapsed');
          if (mainEl) mainEl.classList.remove('has-preview');
          toggleBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg> Show';
        }
      });
    }
  }

  function scrollPreviewTo(anchor) {
    if (!previewIframe || !previewIframe.contentWindow) return;

    try {
      const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
      if (!iframeDoc) return;

      // Wait for iframe to be ready
      if (iframeDoc.readyState !== 'complete') {
        previewIframe.addEventListener('load', () => scrollPreviewTo(anchor), { once: true });
        return;
      }

      if (anchor === 'body') {
        previewIframe.contentWindow.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = iframeDoc.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } catch(e) {
      // Cross-origin — can't access iframe
    }
  }

  function updatePreviewText(key, lang, newValue) {
    if (!previewIframe || !previewIframe.contentWindow) return;

    try {
      const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
      if (!iframeDoc || iframeDoc.readyState !== 'complete') return;

      // Get the currently active language in the iframe
      const iframeLang = iframeDoc.documentElement.lang || 'en';
      // Determine which language is active — check localStorage of the iframe
      let activeLang = 'en';
      try {
        activeLang = previewIframe.contentWindow.localStorage.getItem('ttjd_lang') || 'en';
      } catch(e) {}

      // Only update the preview if we're editing the active display language
      if (lang !== activeLang) return;

      // Find elements with matching data-i18n key
      const elements = iframeDoc.querySelectorAll(`[data-i18n="${key}"]`);
      elements.forEach(el => {
        el.innerHTML = newValue;
        // Add a subtle highlight effect
        el.style.outline = '2px solid rgba(245,166,35,0.5)';
        el.style.outlineOffset = '4px';
        el.style.transition = 'outline-color 1s ease';
        setTimeout(() => {
          el.style.outlineColor = 'transparent';
        }, 1500);
      });

      // Also handle placeholder updates
      const placeholders = iframeDoc.querySelectorAll(`[data-i18n-placeholder="${key}"]`);
      placeholders.forEach(el => {
        el.placeholder = newValue;
        el.style.outline = '2px solid rgba(245,166,35,0.5)';
        el.style.outlineOffset = '4px';
        setTimeout(() => {
          el.style.outlineColor = 'transparent';
        }, 1500);
      });
    } catch(e) {
      // Cross-origin — can't access iframe
    }
  }

})();
