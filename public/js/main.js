/* ============================================================
   TIME TO JUMP DOLOMITES — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar Scroll Effect ----
  const navbar = document.getElementById('navbar');
  const hasHero = document.querySelector('.hero');

  if (hasHero) {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  } else {
    navbar.classList.add('scrolled');
  }

  // ---- Mobile Hamburger Toggle ----
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Scroll Reveal Animations ----
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ---- Contact Form (sends via FormSubmit.co) ----
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const telephone = document.getElementById('telephone').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !telephone || !message) return;

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';

      // Send via AJAX to FormSubmit.co (include anti-spam fields)
      const formData = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })
      .then(res => {
        if (res.ok) {
          contactForm.style.display = 'none';
          formSuccess.classList.add('visible');
          setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = '';
            formSuccess.classList.remove('visible');
          }, 6000);
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(() => {
        alert('Could not send your message. Please try again or contact us directly via WhatsApp/Email.');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origHTML;
      });
    });
  }

  // ---- Chat Widget ----
  const chatToggle = document.getElementById('chatToggle');
  const chatPanel = document.getElementById('chatPanel');

  if (chatToggle && chatPanel) {
    chatToggle.addEventListener('click', () => {
      chatPanel.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#chatWidget')) {
        chatPanel.classList.remove('open');
      }
    });
  }

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // ---- Active Nav Link on Scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (sections.length > 0 && navLinks.length > 0) {
    const updateActiveLink = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('navbar__link--active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('navbar__link--active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
  }

  // ---- Parallax Hero Effect ----
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroContent = hero.querySelector('.hero__content');
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        const opacity = 1 - scroll / (window.innerHeight * 0.8);
        const translateY = scroll * 0.3;
        if (heroContent) {
          heroContent.style.transform = `translateY(${translateY}px)`;
          heroContent.style.opacity = Math.max(0, opacity);
        }
      }
    }, { passive: true });
  }

  // ---- FAQ Accordion ----
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all first
        faqItems.forEach(i => i.classList.remove('open'));
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // ============================================================
  //  GLOBAL i18n LANGUAGE SYSTEM
  // ============================================================

  // Build the language dropdown UI (supports multiple instances)
  function buildLanguageDropdown() {
    if (typeof LANGUAGES === 'undefined') return;

    const currentLang = localStorage.getItem('ttjd_lang') || 'en';
    const currentLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

    document.querySelectorAll('.lang-dropdown').forEach(langDropdown => {
      // Set the toggle button
      const toggle = langDropdown.querySelector('.lang-dropdown__toggle');
      if (toggle) {
        toggle.innerHTML = `<span class="lang-dropdown__flag">${currentLangObj.flag}</span><span class="lang-dropdown__code">${currentLangObj.code.toUpperCase()}</span><svg class="lang-dropdown__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;
      }

      // Build the menu
      const menu = langDropdown.querySelector('.lang-dropdown__menu');
      if (menu) {
        menu.innerHTML = '';
        LANGUAGES.forEach(lang => {
          const item = document.createElement('button');
          item.className = 'lang-dropdown__item' + (lang.code === currentLang ? ' active' : '');
          item.type = 'button';
          item.dataset.lang = lang.code;
          item.innerHTML = `<span class="lang-dropdown__flag">${lang.flag}</span>${lang.label}`;
          item.addEventListener('click', () => {
            setLanguage(lang.code);
            langDropdown.classList.remove('open');
          });
          menu.appendChild(item);
        });
      }

      // Toggle dropdown
      if (toggle) {
        toggle.addEventListener('click', (e) => {
          e.stopPropagation();
          // Close all other dropdowns first
          document.querySelectorAll('.lang-dropdown').forEach(dd => {
            if (dd !== langDropdown) dd.classList.remove('open');
          });
          langDropdown.classList.toggle('open');
        });
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.lang-dropdown')) {
        document.querySelectorAll('.lang-dropdown').forEach(dd => dd.classList.remove('open'));
      }
    });
  }

  // Apply translations to all elements with data-i18n
  function applyTranslations(lang) {
    if (typeof TRANSLATIONS === 'undefined') return;

    // Text content — use textContent by default for XSS safety;
    // only use innerHTML for keys explicitly known to contain safe markup (e.g. <br>)
    const SAFE_HTML_KEYS = new Set(['hero.title','hero.subtitle','courses.structure']);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        if (SAFE_HTML_KEYS.has(key)) {
          el.innerHTML = TRANSLATIONS[key][lang];
        } else {
          el.textContent = TRANSLATIONS[key][lang];
        }
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.placeholder = TRANSLATIONS[key][lang];
      }
    });

    // HTML content (for labels with links, e.g. checkbox labels)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.innerHTML = TRANSLATIONS[key][lang];
      }
    });

    // Tooltip data-attribute translations
    document.querySelectorAll('[data-tooltip-key]').forEach(el => {
      const key = el.dataset.tooltipKey;
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.setAttribute('data-tooltip', TRANSLATIONS[key][lang]);
      }
    });

    // Pipe-separated list items for course sections
    const listMappings = [
      { listId: 'coursePhase1List', key: 'courses.phase1.items' },
      { listId: 'coursePhase2List', key: 'courses.phase2.items' },
      { listId: 'courseIncludedList', key: 'courses.included.items' }
    ];
    listMappings.forEach(({ listId, key }) => {
      const listEl = document.getElementById(listId);
      if (listEl && TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        const items = TRANSLATIONS[key][lang].split('|');
        listEl.innerHTML = items.map(item => `<li>${item.trim()}</li>`).join('');
      }
    });

    // Update <html lang>
    document.documentElement.lang = lang;
  }

  // Set language and persist
  function setLanguage(lang) {
    localStorage.setItem('ttjd_lang', lang);
    applyTranslations(lang);
    
    // Trigger re-render of Flight Cards if the supabase client is loaded
    if (window.ttjd && typeof window.ttjd.loadUpcomingJumps === 'function') {
      window.ttjd.loadUpcomingJumps();
    }

    // Update ALL dropdown toggles and active states
    const langObj = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];
    document.querySelectorAll('.lang-dropdown').forEach(langDropdown => {
      const toggle = langDropdown.querySelector('.lang-dropdown__toggle');
      if (toggle) {
        toggle.innerHTML = `<span class="lang-dropdown__flag">${langObj.flag}</span><span class="lang-dropdown__code">${langObj.code.toUpperCase()}</span><svg class="lang-dropdown__arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;
      }
      langDropdown.querySelectorAll('.lang-dropdown__item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
      });
    });

    // Re-render flight cards is already handled by window.ttjd.loadUpcomingJumps() above
  }

  // Initialize i18n
  buildLanguageDropdown();
  const savedLang = localStorage.getItem('ttjd_lang') || 'en';
  applyTranslations(savedLang);

});
