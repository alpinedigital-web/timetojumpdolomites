/* ============================================================
   TIME TO JUMP DOLOMITES — Translations (i18n)
   4 Languages: EN, DE, IT, LAD
   ============================================================ */

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
  { code: 'lad', flag: '🏔️', label: 'Ladin' }
];

const TRANSLATIONS = {

  // ---- NAVIGATION ----
  'nav.about': {
    en: 'About', de: 'Über uns', it: 'Chi siamo', lad: 'De nos'
  },
  'nav.prices': {
    en: 'Prices', de: 'Preise', it: 'Prezzi', lad: 'Priesc'
  },
  'nav.jumps': {
    en: 'Jumps', de: 'Sprünge', it: 'Salti', lad: 'Sauc'
  },
  'nav.terms': {
    en: 'Terms', de: 'AGB', it: 'Termini', lad: 'Termins'
  },
  'nav.privacy': {
    en: 'Privacy', de: 'Datenschutz', it: 'Privacy', lad: 'Privacy'
  },

  // ---- TERMS PAGE (i18n for headings) ----
  'terms.label': {
    en: 'Legal', de: 'Rechtliches', it: 'Legale', lad: 'Legal'
  },
  'terms.heading': {
    en: 'Terms & Conditions', de: 'Allgemeine Geschäftsbedingungen', it: 'Termini e Condizioni', lad: 'Termins y Condiziuns'
  },
  'terms.updated': {
    en: 'Last updated: April 2026', de: 'Zuletzt aktualisiert: April 2026', it: 'Ultimo aggiornamento: Aprile 2026', lad: 'Ultim ajornament: Auril 2026'
  },

  // ---- HERO ----
  'hero.badge': {
    en: 'The Eden of Skydiving', de: 'Das Paradies des Fallschirmspringens', it: 'L\'Eden del Paracadutismo', lad: 'L\'Eden dl Paracadutism'
  },
  'hero.title': {
    en: 'Welcome to<br>Time to Jump Dolomites', de: 'Willkommen bei<br>Time to Jump Dolomites', it: 'Benvenuti a<br>Time to Jump Dolomites', lad: 'Benvegnüs a<br>Time to Jump Dolomites'
  },
  'hero.subtitle': {
    en: 'Skydiving in the heart of the Dolomites — UNESCO World Heritage.<br>Breathtaking helicopter jumps over Trentino South Tyrol.',
    de: 'Fallschirmspringen im Herzen der Dolomiten — UNESCO Welterbe.<br>Atemberaubende Helikoptersprünge über Trentino-Südtirol.',
    it: 'Paracadutismo nel cuore delle Dolomiti — Patrimonio UNESCO.<br>Salti in elicottero mozzafiato sul Trentino-Alto Adige.',
    lad: 'Paracadutism ite l cuer de les Dolomites — Patrimone UNESCO.<br>Sauc da elicòter tla bela Tirol dl Süd.'
  },
  'hero.cta.prices': {
    en: 'View Prices', de: 'Preise ansehen', it: 'Vedi prezzi', lad: 'Vede i priesc'
  },
  'hero.cta.contact': {
    en: 'Contact Us', de: 'Kontakt', it: 'Contattaci', lad: 'Contaté nes'
  },
  'hero.cta.helicopter': {
    en: 'Book Helicopter', de: 'Helikopter buchen', it: 'Prenota elicottero', lad: 'Prenota elicòter'
  },
  'hero.scroll': {
    en: 'Scroll', de: 'Scrollen', it: 'Scorri', lad: 'Scrola'
  },

  // ---- ABOUT ----
  'about.label': {
    en: 'About Us', de: 'Über uns', it: 'Chi siamo', lad: 'De nos'
  },
  'about.title': {
    en: 'About Time to Jump Dolomites', de: 'Über Time to Jump Dolomites', it: 'Chi è Time to Jump Dolomites', lad: 'De Time to Jump Dolomites'
  },
  'about.text': {
    en: 'Skydiving in Trentino-South Tyrol-Tyrol-East Tyrol or too "Tyrol Land", in the Heart of the Dolomites and with breathtaking Views and in Places where Tourism is coordinated and organized in an optimal Way for pleasant and unforgettable Stays.',
    de: 'Fallschirmspringen in Welschtirol-Südtirol-Tirol-Osttirol oder auch "Tiroler Land", und im Herzen der Dolomiten und mit atemberaubender Aussicht und an Orten, an denen der Tourismus optimal koordiniert und organisiert wird für angenehme und unvergessliche Aufenthalte.',
    it: 'Attività di Paracadutismo in Trentino-Alto Adige-Tirolo-Tirol Est o anche "Euregio", e nel Cuore delle Dolomiti, con Panorami mozzafiato e in Luoghi dove il Turismo viene coordinato e organizzato in Maniera ottimale per dei Soggiorni gradevoli e indimenticabili.',
    lad: 'Paracadutism in Walschtirol-Sudtirol-Tirol-Osttirol o demé "Tirol Stat", y ite l cuer de les Dolomites, cun vedudas marevueiouses y en Lueches olà l Turism davegn coordiné y organisé autramenter perfeta pervia Sojornanzas plajoules y indesmentiabels.'
  },
  'about.stat.altitude': { en: 'Max Altitude', de: 'Max. Höhe', it: 'Altitudine max.', lad: 'Auteza max.' },
  'about.stat.heritage': { en: 'Heritage Site', de: 'Welterbe', it: 'Patrimonio', lad: 'Patrimone' },
  'about.stat.days': { en: 'Open Days', de: 'Öffnungstage', it: 'Giorni apertura', lad: 'Dis da daviert' },
  'about.badge': { en: 'Dolomites UNESCO', de: 'Dolomiten UNESCO', it: 'Dolomiti UNESCO', lad: 'Dolomites UNESCO' },

  // ---- PRICING ----
  'pricing.label': { en: 'Prices 2025', de: 'Preise 2025', it: 'Prezzi 2025', lad: 'Priesc 2025' },
  'pricing.title': { en: 'Pricing List', de: 'Preisliste', it: 'Listino Prezzi', lad: 'Lista di priesc' },
  'pricing.subtitle': {
    en: 'Professional skydivers only (No Tandem). All prices include helicopter flights over the stunning Dolomites landscape.',
    de: 'Nur professionelle Fallschirmspringer (kein Tandem). Alle Preise beinhalten Helikopterflüge über die atemberaubende Dolomitenlandschaft.',
    it: 'Solo paracadutisti professionisti (No Tandem). Tutti i prezzi includono voli in elicottero sullo spettacolare paesaggio dolomitico.',
    lad: 'Mec paracadutisć profesciunei (Nia Tandem). Duc i priesc inclusc voi en elicòter sëura l bel paisaje dles Dolomites.'
  },
  'pricing.helicopter.title': { en: 'Helicopter Jumps', de: 'Helikoptersprünge', it: 'Salti in Elicottero', lad: 'Sauc da Elicòter' },
  'pricing.helicopter.desc': { en: 'Scenic jumps from helicopter over UNESCO Dolomites', de: 'Panoramasprünge aus dem Helikopter über die UNESCO Dolomiten', it: 'Salti panoramici dall\'elicottero sulle Dolomiti UNESCO', lad: 'Sauc panoramics dal elicòter sëura les Dolomites UNESCO' },
  'pricing.helicopter.note': {
    en: '* 1 Load = 5 Skydivers. The jump level can be lower in case of bad weather and/or local air traffic.',
    de: '* 1 Load = 5 Springer. Die Sprunghöhe kann bei schlechtem Wetter und/oder lokalem Flugverkehr niedriger sein.',
    it: '* 1 Load = 5 Paracadutisti. L\'altitudine del salto può essere inferiore in caso di maltempo e/o traffico aereo locale.',
    lad: '* 1 Load = 5 Paracadutisć. L\'auteza dl sauc po ester plu basa en cajo de catif tëmp y/o trafich aerian local.'
  },
  'pricing.pack.title': { en: 'Pack Jobs', de: 'Pack Jobs', it: 'Pack Jobs', lad: 'Pack Jobs' },
  'pricing.pack.desc': { en: 'Professional packing services & training courses', de: 'Professioneller Packservice & Kurse', it: 'Servizio di piegatura professionale e corsi', lad: 'Servisc de pliadüra profesciunel y cursc' },
  'pricing.pack.note': {
    en: '* On ground 1 and 2 + Pro-pack with life assistance. About 12 hours — on request.',
    de: '* Am Boden 1 und 2 + Pro-Pack mit persönlicher Betreuung. Ca. 12 Stunden — auf Anfrage.',
    it: '* A terra 1 e 2 + Pro-pack con assistenza dal vivo. Circa 12 ore — su richiesta.',
    lad: '* A tiera 1 y 2 + Pro-pack cun assistënza dal vif. Circa 12 ores — sun dumanda.'
  },
  'pricing.rent.title': { en: 'Parachutes Renting', de: 'Fallschirm-Verleih', it: 'Noleggio Paracadute', lad: 'Nolëi de Paracadutes' },
  'pricing.rent.desc': { en: 'Equipment rental including pack job service', de: 'Ausrüstungsverleih inkl. Pack-Service', it: 'Noleggio attrezzatura incluso servizio di piegatura', lad: 'Nolëi de echipamënt cun servisc de pliadüra' },
  'pricing.onrequest': { en: 'On request', de: 'Auf Anfrage', it: 'Su richiesta', lad: 'Sun dumanda' },
  'pricing.rent.day': { en: '1 Day Rent + 1 Pack Job', de: '1 Tag Miete + 1 Pack Job', it: '1 Giorno Noleggio + 1 Pack Job', lad: '1 Dì Nolëi + 1 Pack Job' },
  'pricing.rent.additional': { en: 'Each additional day', de: 'Jeder weitere Tag', it: 'Ogni giorno aggiuntivo', lad: 'Vigni dì adiziunel' },

  // ---- PARTNERS ----
  'partners.label': { en: 'Our Partner', de: 'Unser Partner', it: 'Il nostro Partner', lad: 'Nosc Partner' },
  'partners.desc': {
    en: 'Our trusted equipment partner for premium parachute systems. Design your custom rig with their state-of-the-art configurator, or browse their measurement guides for the perfect fit.',
    de: 'Unser vertrauenswürdiger Ausrüstungspartner für Premium-Fallschirmsysteme. Gestalte dein individuelles Rig mit dem modernen Konfigurator oder nutze die Maßanleitungen für die perfekte Passform.',
    it: 'Il nostro partner di fiducia per sistemi paracadute premium. Progetta il tuo rig personalizzato con il loro configuratore all\'avanguardia o consulta le guide alle misure per la vestibilità perfetta.',
    lad: 'Nosc partner de fidanza per sistems de paracadutes premium. Projeta to rig personalisé cun si configuradour o consulta les guidas per la mesura perfeta.'
  },
  'partners.visit': { en: 'Visit Website', de: 'Website besuchen', it: 'Visita il sito', lad: 'Vijita l sit' },
  'partners.design': { en: 'Design a Rig +', de: 'Rig gestalten +', it: 'Configura un Rig +', lad: 'Configura n Rig +' },
  'partners.measurements': { en: 'Measurements', de: 'Maße', it: 'Misure', lad: 'Mesures' },

  // ---- EVENTS ----
  'events.label': { en: 'Events', de: 'Events', it: 'Eventi', lad: 'Evenc' },
  'events.title': { en: 'Upcoming Events', de: 'Kommende Events', it: 'Prossimi Eventi', lad: 'Evenc che vegn' },
  'events.subtitle': {
    en: 'Stay tuned for our upcoming skydiving events and boogie calendar.',
    de: 'Bleib dran für unsere kommenden Fallschirmspring-Events und Boogie-Kalender.',
    it: 'Resta aggiornato sui nostri prossimi eventi di paracadutismo e calendario boogie.',
    lad: 'Sta atënc per nosc evenc de paracadutism che vegn.'
  },
  'events.empty.title': { en: 'No events at the moment', de: 'Momentan keine Events', it: 'Nessun evento al momento', lad: 'Nia evenc al momënt' },
  'events.empty.text': {
    en: 'Check back soon for exciting skydiving events in the Dolomites. Follow us on social media for the latest updates!',
    de: 'Schau bald wieder vorbei für spannende Fallschirmspring-Events in den Dolomiten. Folge uns in den sozialen Medien!',
    it: 'Torna presto per scoprire i prossimi eventi di paracadutismo nelle Dolomiti. Seguici sui social media!',
    lad: 'Torna prest per evenc de paracadutism tles Dolomites. Suzë nes sui social media!'
  },

  // ---- SHOP ----
  'shop.label': { en: 'Shop', de: 'Shop', it: 'Shop', lad: 'Shop' },
  'shop.title': { en: 'Shop', de: 'Shop', it: 'Shop', lad: 'Shop' },
  'shop.subtitle': { en: 'Browse our selection of skydiving gear and merchandise.', de: 'Stöbere in unserer Auswahl an Fallschirmausrüstung und Merchandise.', it: 'Sfoglia la nostra selezione di attrezzatura da paracadutismo e merchandising.', lad: 'Chëra ite nosta selezion de echipamënt y merchandise.' },
  'shop.empty.title': { en: 'Nothing to book right now', de: 'Momentan nichts zu buchen', it: 'Niente da prenotare al momento', lad: 'Nia da prenota al momënt' },
  'shop.empty.text': { en: 'Check back soon — new gear and bookings coming your way!', de: 'Schau bald wieder vorbei — neue Ausrüstung und Buchungen folgen!', it: 'Torna presto — nuova attrezzatura e prenotazioni in arrivo!', lad: 'Torna prest — nüi echipamënc y prenotazions en ariv!' },

  // ---- CONTACT ----
  'contact.label': { en: 'Get in Touch', de: 'Kontakt', it: 'Contattaci', lad: 'Contaté nes' },
  'contact.title': { en: 'Contacts', de: 'Kontakt', it: 'Contatti', lad: 'Contac' },
  'contact.subtitle': {
    en: 'Open Friday – Sunday. We speak Italiano, Deutsch, English, Français, and Español.',
    de: 'Geöffnet Freitag – Sonntag. Wir sprechen Italiano, Deutsch, English, Français und Español.',
    it: 'Aperto venerdì – domenica. Parliamo Italiano, Deutsch, English, Français e Español.',
    lad: 'Daviert vëndres – dumenia. Parlons Italiano, Deutsch, English, Français y Español.'
  },
  'contact.reach': { en: 'Reach us anytime', de: 'Erreich uns jederzeit', it: 'Contattaci in qualsiasi momento', lad: 'Contaté nes canche che ti ó' },
  'contact.location': { en: 'Location', de: 'Standort', it: 'Posizione', lad: 'Posizion' },
  'contact.email': { en: 'Email', de: 'E-Mail', it: 'Email', lad: 'Email' },
  'contact.hotline': { en: 'Hotline + WhatsApp', de: 'Hotline + WhatsApp', it: 'Hotline + WhatsApp', lad: 'Hotline + WhatsApp' },
  'contact.timezone': { en: 'Local Time Zone', de: 'Lokale Zeitzone', it: 'Fuso orario locale', lad: 'Fus orar local' },
  'contact.form.title': { en: 'Send us a message', de: 'Schreib uns eine Nachricht', it: 'Inviaci un messaggio', lad: 'Mandé nes n messaje' },
  'contact.form.name': { en: 'Name *', de: 'Name *', it: 'Nome *', lad: 'Inom *' },
  'contact.form.email': { en: 'E-mail *', de: 'E-Mail *', it: 'E-mail *', lad: 'E-mail *' },
  'contact.form.phone': { en: 'Telephone *', de: 'Telefon *', it: 'Telefono *', lad: 'Telefon *' },
  'contact.form.message': { en: 'Message *', de: 'Nachricht *', it: 'Messaggio *', lad: 'Messaje *' },
  'contact.form.send': { en: 'Send Message', de: 'Nachricht senden', it: 'Invia messaggio', lad: 'Mandé messaje' },
  'contact.form.success.title': { en: 'Message Sent!', de: 'Nachricht gesendet!', it: 'Messaggio inviato!', lad: 'Messaje mandé!' },
  'contact.form.success.text': { en: 'Thank you for reaching out. We\'ll get back to you shortly.', de: 'Danke für deine Nachricht. Wir melden uns bald bei dir.', it: 'Grazie per averci contattato. Ti risponderemo al più presto.', lad: 'Dëida per avëi nes contaté. Te respunerëi prest.' },

  // ---- MAP ----
  'map.label': { en: 'Find Us', de: 'Finde uns', it: 'Trovaci', lad: 'Ciara nes' },
  'map.title': { en: 'Our Locations', de: 'Unsere Standorte', it: 'Le nostre posizioni', lad: 'Nostes posizions' },
  'map.subtitle': { en: 'Two jump locations in the heart of the Dolomites UNESCO World Heritage Site, South Tyrol.', de: 'Zwei Sprunggebiete im Herzen des UNESCO-Welterbes Dolomiten, Südtirol.', it: 'Due zone di salto nel cuore del sito UNESCO delle Dolomiti, in Alto Adige.', lad: 'Doi lueches de sauc ite l cuer dl sit UNESCO dles Dolomites, Sudtirol.' },
  'map.saslong.title': { en: '📍 Saslong — 1,600m Jump', de: '📍 Saslong — 1.600m Sprung', it: '📍 Saslong — Salto 1.600m', lad: '📍 Saslong — Sauc 1.600m' },
  'map.saslong.desc': { en: 'Landing zone near the famous Saslong slope, Val Gardena.', de: 'Landezone nahe der berühmten Saslong-Piste, Gröden.', it: 'Zona di atterraggio vicino alla famosa pista Saslong, Val Gardena.', lad: 'Zona de aterëi dlongia la famosa pista Saslong, Gherdëina.' },
  'map.montdecoi.title': { en: '📍 Mont de Côi — 2,500m Jump', de: '📍 Mont de Côi — 2.500m Sprung', it: '📍 Mont de Côi — Salto 2.500m', lad: '📍 Mont de Côi — Sauc 2.500m' },
  'map.montdecoi.desc': { en: 'Landing zone at Sportzentrum Mont de Côi, St. Christina / S. Cristina.', de: 'Landezone am Sportzentrum Mont de Côi, St. Christina.', it: 'Zona di atterraggio al Centro Sportivo Mont de Côi, S. Cristina.', lad: 'Zona de aterëi al Zentrum Sportif Mont de Côi, S. Cristina.' },

  // ---- FOOTER ----
  'footer.backtop': { en: 'Back to top', de: 'Nach oben', it: 'Torna su', lad: 'Torna sö' },

  // ---- CHAT WIDGET ----
  'chat.title': { en: 'What would You know?', de: 'Was möchtest du wissen?', it: 'Cosa vorresti sapere?', lad: 'Che ti ó savëi?' },
  'chat.subtitle': { en: 'Reach us via WhatsApp or Email', de: 'Erreiche uns via WhatsApp oder E-Mail', it: 'Contattaci via WhatsApp o Email', lad: 'Contaté nes via WhatsApp o Email' },
  'chat.whatsapp': { en: 'WhatsApp Message', de: 'WhatsApp Nachricht', it: 'Messaggio WhatsApp', lad: 'Messaje WhatsApp' },
  'chat.email': { en: 'Send an Email', de: 'E-Mail senden', it: 'Invia un\'Email', lad: 'Mandé na Email' },
  'chat.call': { en: 'Call Hotline', de: 'Hotline anrufen', it: 'Chiama la hotline', lad: 'Ciama la hotline' },

  // ---- FORM PLACEHOLDERS ----
  'placeholder.name': { en: 'Your full name', de: 'Dein vollständiger Name', it: 'Il tuo nome completo', lad: 'To inom complet' },
  'placeholder.email': { en: 'your@email.com', de: 'deine@email.com', it: 'tua@email.com', lad: 'tua@email.com' },
  'placeholder.phone': { en: '+39 ...', de: '+39 ...', it: '+39 ...', lad: '+39 ...' },
  'placeholder.message': {
    en: 'Tell us about your jump experience and what you\'d like to do...',
    de: 'Erzähl uns von deiner Sprungerfahrung und was du machen möchtest...',
    it: 'Raccontaci la tua esperienza di salto e cosa vorresti fare...',
    lad: 'Conta nes de tua esperiënza de sauc y ce che te orëssa fé...'
  },

  // ---- NAVBAR CTA ----
  'nav.book': { en: 'Book Now', de: 'Jetzt buchen', it: 'Prenota ora', lad: 'Prenota ëura' },

  // ---- HERO TRUST CUES ----
  'hero.trust.heli': { en: 'Helicopter Jumps from 775 €', de: 'Helikoptersprünge ab 775 €', it: 'Salti in elicottero da 775 €', lad: 'Sauc da elicòter da 775 €' },
  'hero.trust.unesco': { en: 'UNESCO Dolomites', de: 'UNESCO Dolomiten', it: 'Dolomiti UNESCO', lad: 'Dolomites UNESCO' },
  'hero.trust.days': { en: 'Fri – Sun · Weather Permitting', de: 'Fr – So · Wetterabhängig', it: 'Ven – Dom · Meteo permettendo', lad: 'Vëndres – Dumenia · Tëmp permitënt' },
  'hero.cta.book': { en: 'Book Your Jump', de: 'Sprung buchen', it: 'Prenota il salto', lad: 'Prenota to sauc' },

  // ---- EXPERIENCE / WHAT TO EXPECT ----
  'experience.label': { en: 'How It Works', de: 'So funktioniert\'s', it: 'Come funziona', lad: 'Coche funzionëia' },
  'experience.title': { en: 'What to Expect', de: 'Was dich erwartet', it: 'Cosa aspettarsi', lad: 'Ce che te speta' },
  'experience.subtitle': {
    en: 'From first contact to freefall — your jump day in 4 simple steps.',
    de: 'Vom ersten Kontakt bis zum Freifall — dein Sprungtag in 4 einfachen Schritten.',
    it: 'Dal primo contatto alla caduta libera — la tua giornata di salto in 4 semplici passi.',
    lad: 'Dal prim contat ala caduda liedia — tua jornada de sauc en 4 pesc sëmplic.'
  },
  'experience.step1.title': { en: 'Book Online', de: 'Online buchen', it: 'Prenota online', lad: 'Prenota online' },
  'experience.step1.text': {
    en: 'Reserve your helicopter slot directly through our booking platform — select your date, fill in your details, and secure your seat.',
    de: 'Reserviere deinen Helikopterplatz direkt über unsere Buchungsplattform — Datum wählen, Daten eingeben, Platz sichern.',
    it: 'Prenota il tuo posto in elicottero direttamente sulla nostra piattaforma — scegli la data, inserisci i tuoi dati e assicura il tuo posto.',
    lad: 'Prenota to post en elicòter diretamënter söla nosta plataforma — sëurie la data, mëte ite ti dac y assicura to post.'
  },
  'experience.step2.title': { en: 'Gear Check & Briefing', de: 'Ausrüstung & Briefing', it: 'Controllo & Briefing', lad: 'Control & Briefing' },
  'experience.step2.text': {
    en: 'On-site safety briefing and equipment check. Bring your own rig or rent one from us.',
    de: 'Sicherheitsbriefing und Ausrüstungskontrolle vor Ort. Eigene Ausrüstung oder Mietservice.',
    it: 'Briefing di sicurezza e controllo attrezzatura in loco. Porta il tuo rig o noleggialo da noi.',
    lad: 'Briefing de segurëza y control de echipamënt sö l post. Porta to rig o nolëia n da nos.'
  },
  'experience.step3.title': { en: 'Helicopter Scenic Flight', de: 'Panorama-Helikopterflug', it: 'Volo panoramico', lad: 'Volo panoramic' },
  'experience.step3.text': {
    en: 'Breathtaking flight over the UNESCO Dolomites to your jump altitude up to 2,500m.',
    de: 'Atemberaubender Flug über die UNESCO-Dolomiten bis auf deine Sprunghöhe von bis zu 2.500m.',
    it: 'Volo mozzafiato sulle Dolomiti UNESCO fino alla tua altitudine di salto fino a 2.500m.',
    lad: 'Volo marevueiëus sëura les Dolomites UNESCO nchin a tua auteza de sauc nscin a 2.500m.'
  },
  'experience.step4.title': { en: 'Freefall & Canopy', de: 'Freifall & Schirmfahrt', it: 'Caduta libera & Vela', lad: 'Caduda liedia & Vela' },
  'experience.step4.text': {
    en: 'Jump, enjoy the adrenaline of freefall, and land with an unforgettable panoramic view.',
    de: 'Spring, genieße das Adrenalin des Freifalls und lande mit unvergesslichem Panoramablick.',
    it: 'Salta, goditi l\'adrenalina della caduta libera e atterra con una vista panoramica indimenticabile.',
    lad: 'Sauta, gòd l\'adrenalina dla caduda liedia y tera cun na veduda panoramica ndesmentiabla.'
  },

  // ---- PRICING CTA & BADGE ----
  'pricing.popular': { en: '⭐ Most Popular', de: '⭐ Beliebteste', it: '⭐ Più Popolare', lad: '⭐ Plü Popular' },
  'pricing.cta': { en: 'Book Load', de: 'Load buchen', it: 'Prenota Load', lad: 'Prenota Load' },
  'pricing.cta.contact': { en: 'Request Info', de: 'Infos anfragen', it: 'Richiedi info', lad: 'Dumandé info' },

  // ---- REQUIREMENTS ----
  'req.license.title': { en: 'License Required', de: 'Lizenz erforderlich', it: 'Licenza richiesta', lad: 'Lizënza damandeda' },
  'req.license.text': { en: 'Professional skydivers only — valid license mandatory', de: 'Nur professionelle Springer — gültige Lizenz erforderlich', it: 'Solo paracadutisti professionisti — licenza valida obbligatoria', lad: 'Mec paracadutisć profesciunei — lizënza valida obligatoria' },
  'req.safety.title': { en: 'Safety First', de: 'Sicherheit zuerst', it: 'Sicurezza prima', lad: 'Segurëza danfora' },
  'req.safety.text': { en: 'Full gear inspection required before every jump', de: 'Vollständige Ausrüstungskontrolle vor jedem Sprung', it: 'Ispezione completa dell\'attrezzatura prima di ogni salto', lad: 'Ispezion completa dl echipamënt dant vigni sauc' },
  'req.weather.title': { en: 'Weather Dependent', de: 'Wetterabhängig', it: 'Meteo dipendente', lad: 'Dependënt dal tëmp' },
  'req.weather.text': { en: 'Jumps depend on conditions — flexible rescheduling available', de: 'Sprünge wetterabhängig — flexible Umplanung möglich', it: 'I salti dipendono dalle condizioni — riprogrammazione flessibile', lad: 'I sauc depënd da les condiziuns — riprogramazion flesibla' },
  'req.payment.title': { en: 'Easy Booking', de: 'Einfache Buchung', it: 'Prenotazione facile', lad: 'Prenotazion simpla' },
  'req.payment.text': { en: 'Book exclusively via our platform — balance payable on site', de: 'Ausschließlich über unsere Plattform buchen — Restbetrag vor Ort', it: 'Prenota esclusivamente sulla nostra piattaforma — saldo in loco', lad: 'Prenota mec sëura nosta plataforma — saldo sö l post' },

  // ---- TESTIMONIALS ----
  'testimonials.label': { en: 'Reviews', de: 'Bewertungen', it: 'Recensioni', lad: 'Recenjiuns' },
  'testimonials.title': { en: 'What Jumpers Say', de: 'Was Springer sagen', it: 'Cosa dicono i saltatori', lad: 'Ce che disc i sautadours' },
  'testimonials.t1.text': { en: '"Absolutely stunning scenery! The helicopter ride alone is worth it, and the freefall over the Dolomites is an experience I will never forget. Professional team and top safety standards."', de: '"Absolut atemberaubende Landschaft! Allein der Helikopterflug lohnt sich, und der Freifall über den Dolomiten ist ein Erlebnis, das ich nie vergessen werde. Professionelles Team und höchste Sicherheitsstandards."', it: '"Paesaggio assolutamente mozzafiato! Il solo volo in elicottero vale il prezzo, e la caduta libera sulle Dolomiti è un\'esperienza che non dimenticherò mai. Team professionale e standard di sicurezza altissimi."', lad: '"Paisaje marevueiëus! Mec l volo en elicòter mërita, y la caduda liedia sëura les Dolomites é na esperiënza che ne desmentrà mei. Team profesciunel y standards de segurëza al top."' },
  'testimonials.t1.info': { en: '500+ jumps · Munich, Germany', de: '500+ Sprünge · München, Deutschland', it: '500+ salti · Monaco, Germania', lad: '500+ sauc · München, Germania' },
  'testimonials.t2.text': { en: '"Best dropzone in the Alps, hands down. The views from 2,500m over the UNESCO Dolomites are unreal. Great vibes, well-organized, and the Elikos helicopter team is fantastic."', de: '"Bester Sprungplatz in den Alpen, ohne Frage. Die Aussicht aus 2.500m über die UNESCO-Dolomiten ist unwirklich. Tolle Stimmung, gut organisiert, und das Elikos-Helikopterteam ist fantastisch."', it: '"La migliore dropzone delle Alpi, senza dubbio. Le viste da 2.500m sulle Dolomiti UNESCO sono irreali. Grande atmosfera, ben organizzato, e il team Elikos è fantastico."', lad: '"La mëlsa dropzone tles Alpes, zënza dubi. Les vedudes da 2.500m sëura les Dolomites UNESCO é irredes. Bona atmosfera, bën organisé, y l team Elikos é fantastich."' },
  'testimonials.t2.info': { en: '300+ jumps · Vienna, Austria', de: '300+ Sprünge · Wien, Österreich', it: '300+ salti · Vienna, Austria', lad: '300+ sauc · Wien, Austria' },
  'testimonials.t3.text': { en: '"A truly unique experience. Jumping from a helicopter over these mountains is something every skydiver should try at least once. Very flexible with weather rescheduling too."', de: '"Ein wirklich einzigartiges Erlebnis. Aus einem Helikopter über diese Berge zu springen ist etwas, das jeder Springer einmal erleben sollte. Sehr flexibel bei Wetterumplanung."', it: '"Un\'esperienza davvero unica. Saltare da un elicottero su queste montagne è qualcosa che ogni paracadutista dovrebbe provare almeno una volta. Molto flessibili con la riprogrammazione meteo."', lad: '"Na esperiënza da adöm unica. Sauté da n elicòter sëura chësta montes é zeche che vigni paracadutist dess prové almancol n\'ota. Dërt flesibla cun la riprogramazion de tëmp."' },
  'testimonials.t3.info': { en: '800+ jumps · Prague, Czech Republic', de: '800+ Sprünge · Prag, Tschechien', it: '800+ salti · Praga, Rep. Ceca', lad: '800+ sauc · Praga, Rep. Ceca' },

  // ---- FAQ ----
  'faq.label': { en: 'FAQ', de: 'FAQ', it: 'FAQ', lad: 'FAQ' },
  'faq.title': { en: 'Frequently Asked Questions', de: 'Häufig gestellte Fragen', it: 'Domande frequenti', lad: 'Dumandes frequëntes' },
  'faq.q1': { en: 'Do I need a skydiving license?', de: 'Brauche ich einen Fallschirmschein?', it: 'Ho bisogno di una licenza?', lad: 'Ëi bujën de na lizënza?' },
  'faq.a1': {
    en: 'Yes. We operate exclusively for licensed skydivers. You must hold a valid skydiving license (e.g., USPA, FAI, or equivalent national license). No tandem jumps are offered.',
    de: 'Ja. Wir operieren ausschließlich für lizenzierte Springer. Du musst einen gültigen Fallschirmschein besitzen (z.B. USPA, FAI oder gleichwertige nationale Lizenz). Keine Tandemsprünge.',
    it: 'Sì. Operiamo esclusivamente per paracadutisti con licenza. Devi possedere una licenza valida (es. USPA, FAI o equivalente nazionale). Non offriamo salti tandem.',
    lad: 'Sci. Operons mec per paracadutisć cun lizënza. Te muesse avëi na lizënza valida (p.ej. USPA, FAI o ecuivalënt naziunel). Nia sauc tandem.'
  },
  'faq.q2': { en: 'What happens if the weather is bad?', de: 'Was passiert bei schlechtem Wetter?', it: 'Cosa succede con il maltempo?', lad: 'Ce suzed col catif tëmp?' },
  'faq.a2': {
    en: 'Safety comes first. If weather conditions don\'t allow safe jumping, we will reschedule your jump to the next available date at no extra cost. The jump altitude may also be adjusted based on conditions and local air traffic.',
    de: 'Sicherheit geht vor. Bei ungeeigneten Wetterbedingungen verschieben wir deinen Sprung kostenlos auf den nächsten verfügbaren Termin. Die Sprunghöhe kann je nach Wetter und Flugverkehr angepasst werden.',
    it: 'La sicurezza prima di tutto. Se le condizioni meteo non permettono il salto, riprogrammeremo senza costi aggiuntivi. L\'altitudine di salto può essere adattata in base alle condizioni e al traffico aereo.',
    lad: 'La segurëza danfora de dut. Sce les condiziuns de tëmp ne permetel nia de sauté, reprogramons zënza coscta adiziunela. L\'auteza dl sauc po gnì agiusteda.'
  },
  'faq.q3': { en: 'How do I book a jump?', de: 'Wie buche ich einen Sprung?', it: 'Come prenoto un salto?', lad: 'Coche prenotëii n sauc?' },
  'faq.a3': {
    en: 'Book your jump exclusively through our website. Select your preferred date and helicopter load, fill in your details, and secure your spot with a deposit. The remaining balance is paid on-site.',
    de: 'Buche deinen Sprung ausschließlich über unsere Website. Wähle Datum und Helikopter-Load, fülle deine Daten aus und sichere deinen Platz mit einer Anzahlung. Der Restbetrag wird vor Ort bezahlt.',
    it: 'Prenota il tuo salto esclusivamente tramite il nostro sito web. Seleziona la data e il load, compila i tuoi dati e assicura il tuo posto con un deposito. Il saldo si paga in loco.',
    lad: 'Prenota to sauc mec tres nosc sit web. Tscherna la data y l load, dà ite ti dates y assicura to post cun n deposit. L saldo vën paié sö l post.'
  },
  'faq.q4': { en: 'What\'s included in the price?', de: 'Was ist im Preis enthalten?', it: 'Cosa è incluso nel prezzo?', lad: 'Ce é inclus ite l priesc?' },
  'faq.a4': {
    en: 'All prices include the helicopter flight over the Dolomites and the jump itself. Pack jobs, equipment rental, and additional loads are priced separately — see our pricing section for details.',
    de: 'Alle Preise beinhalten den Helikopterflug über die Dolomiten und den Sprung selbst. Pack-Jobs, Ausrüstungsverleih und zusätzliche Loads sind separat — siehe Preisliste.',
    it: 'Tutti i prezzi includono il volo in elicottero sulle Dolomiti e il salto. Pack job, noleggio attrezzatura e load aggiuntivi sono a parte — vedi la sezione prezzi.',
    lad: 'Duc i priesc inclusc l volo en elicòter sëura les Dolomites y l sauc. Pack job, nolëi y load adiziunei é a pèrt — vede la sezion di priesc.'
  },
  'faq.q5': { en: 'Do I need my own equipment?', de: 'Brauche ich eigene Ausrüstung?', it: 'Mi serve la mia attrezzatura?', lad: 'Ëi bujën de mi echipamënt?' },
  'faq.a5': {
    en: 'You can bring your own rig or rent complete parachute equipment from us. Rental includes a pack job. See our pricing section for rental rates.',
    de: 'Du kannst deine eigene Ausrüstung mitbringen oder ein komplettes Fallschirmsystem bei uns mieten. Mietpreis inkl. Pack-Job — siehe Preisliste.',
    it: 'Puoi portare il tuo rig o noleggiare l\'attrezzatura completa da noi. Il noleggio include il pack job. Vedi i prezzi per le tariffe.',
    lad: 'Te pòs porta to rig o nolëi l\'echipamënt complet da nos. L nolëi inclusc l pack job. Vede i priesc per les tarifes.'
  },
  'faq.q6': { en: 'When are you open?', de: 'Wann habt ihr geöffnet?', it: 'Quando siete aperti?', lad: 'Canche ëis davierts?' },
  'faq.a6': {
    en: 'We operate Friday through Sunday, weather permitting. Contact us in advance to reserve your slot as helicopter availability is limited.',
    de: 'Wir operieren Freitag bis Sonntag, wetterabhängig. Kontaktiere uns im Voraus, da die Helikopterverfügbarkeit begrenzt ist.',
    it: 'Operiamo da venerdì a domenica, meteo permettendo. Contattaci in anticipo per prenotare poiché la disponibilità dell\'elicottero è limitata.',
    lad: 'Operons da vëndres a dumenia, tëmp permitënt. Contaté nes dant tëmp per prenota, la disponibilité dl elicòter é limiteda.'
  },
  'faq.q7': { en: 'Can I book the helicopter directly?', de: 'Kann ich den Helikopter direkt buchen?', it: 'Posso prenotare l\'elicottero direttamente?', lad: 'Poi prenota l\'elicòter diretamënter?' },
  'faq.a7': {
    en: 'No. All helicopter bookings for skydiving are managed exclusively through Time to Jump Dolomites. Please do not contact the helicopter operator directly — all reservations must go through our booking platform.',
    de: 'Nein. Alle Helikopterbuchungen für Fallschirmsprünge werden ausschließlich über Time to Jump Dolomites abgewickelt. Bitte kontaktiere den Helikopterbetreiber nicht direkt — alle Reservierungen müssen über unsere Buchungsplattform erfolgen.',
    it: 'No. Tutte le prenotazioni dell\'elicottero per il paracadutismo sono gestite esclusivamente da Time to Jump Dolomites. Non contattare direttamente l\'operatore dell\'elicottero — tutte le prenotazioni devono passare dalla nostra piattaforma.',
    lad: 'Na. Dutes les prenotazions dl elicòter per l paracadutism vën gestides mec tres Time to Jump Dolomites. Ne contaté nia l operator dl elicòter diretamënter.'
  },

  // ---- NAVIGATION EXTRAS ----
  'nav.terms': { en: 'Terms', de: 'AGB', it: 'Termini', lad: 'Termins' },
  'nav.shop': { en: 'Shop', de: 'Shop', it: 'Shop', lad: 'Shop' },

  // ---- BOOKING MODAL ----
  'booking.title': { en: 'Reserve Your Flight', de: 'Flug reservieren', it: 'Prenota il tuo volo', lad: 'Prenota to volo' },
  'booking.firstName': { en: 'First Name *', de: 'Vorname *', it: 'Nome *', lad: 'Inom *' },
  'booking.lastName': { en: 'Last Name *', de: 'Nachname *', it: 'Cognome *', lad: 'Cognom *' },
  'booking.nickname': { en: 'Nickname (Publicly Visible on Load) *', de: 'Spitzname (öffentlich sichtbar am Load) *', it: 'Soprannome (visibile sul Load) *', lad: 'Surinom (visibel sö l Load) *' },
  'booking.email': { en: 'Email Address *', de: 'E-Mail-Adresse *', it: 'Indirizzo Email *', lad: 'Adresa Email *' },
  'booking.phone': { en: 'Phone Number *', de: 'Telefonnummer *', it: 'Numero di telefono *', lad: 'Numer de telefon *' },
  'booking.dob': { en: 'Date of Birth *', de: 'Geburtsdatum *', it: 'Data di nascita *', lad: 'Data de nascita *' },
  'booking.birthplace': { en: 'Place of Birth *', de: 'Geburtsort *', it: 'Luogo di nascita *', lad: 'Luech de nascita *' },
  'booking.address': { en: 'Full Address *', de: 'Vollständige Adresse *', it: 'Indirizzo completo *', lad: 'Adresa completa *' },
  'booking.emergency': { en: 'Emergency Contact *', de: 'Notfallkontakt *', it: 'Contatto di emergenza *', lad: 'Contat de emergënza *' },
  'booking.licenseCountry': { en: 'License Country *', de: 'Lizenzland *', it: 'Paese licenza *', lad: 'Paeje de lizënza *' },
  'booking.licenseNumber': { en: 'License Number *', de: 'Lizenznummer *', it: 'Numero licenza *', lad: 'Numer de lizënza *' },
  'booking.insurance': {
    en: 'I confirm that I possess a valid third-party liability insurance for skydiving/base jumping (e.g. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). I will present this on-site.',
    de: 'Ich bestätige, dass ich eine gültige Haftpflichtversicherung für Fallschirmspringen/Base Jumping besitze (z.B. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). Ich werde diese vor Ort vorlegen.',
    it: 'Confermo di possedere un\'assicurazione di responsabilità civile valida per paracadutismo/base jumping (es. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). La presenterò in loco.',
    lad: 'Confermëie de avëi na assicurazion valida per paracadutism/base jumping (p.ej. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). La presenterai sö l post.'
  },
  'booking.terms': {
    en: 'I have read and accept the <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Terms & Conditions</a>, including the cancellation policy, mandatory Friday briefing, and the 50 € missed-briefing penalty.',
    de: 'Ich habe die <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">AGB</a> gelesen und akzeptiere diese, einschließlich der Stornierungsrichtlinie, des verpflichtenden Freitag-Briefings und der 50 € Strafe bei versäumtem Briefing.',
    it: 'Ho letto e accetto i <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Termini e Condizioni</a>, inclusa la politica di cancellazione, il briefing obbligatorio del venerdì e la penale di 50 € per briefing mancato.',
    lad: 'Ëi liesjù y acetëie i <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Termins y Condiziuns</a>, inclus la politica de stornazion y la strafa de 50 € per briefing falé.'
  },
  'booking.submit': { en: 'Proceed to Secure Checkout (0.00€)', de: 'Weiter zur sicheren Kasse (0,00€)', it: 'Procedi al checkout sicuro (0,00€)', lad: 'Va inant al checkout sigü (0,00€)' },

  // ---- FLIGHT CARDS (dynamic, rendered by supabase-client.js) ----
  'fc.person': { en: 'Person', de: 'Person', it: 'Persona', lad: 'Persona' },
  'fc.people': { en: 'People', de: 'Personen', it: 'Persone', lad: 'Persones' },
  'fc.open': { en: 'open', de: 'frei', it: 'libero', lad: 'liede' },
  'fc.locked': { en: 'Locked (Load 1 First)', de: 'Gesperrt (Load 1 zuerst)', it: 'Bloccato (Load 1 prima)', lad: 'Blocà (Load 1 danfora)' },
  'fc.full': { en: 'Full', de: 'Voll', it: 'Pieno', lad: 'Plën' },
  'fc.filling': { en: 'Filling Fast', de: 'Füllt sich schnell', it: 'Si riempie velocemente', lad: 'Se implenësc svelt' },
  'fc.bookingOpen': { en: 'Booking Open', de: 'Buchung offen', it: 'Prenotazione aperta', lad: 'Prenotazion daverta' },
  'fc.new': { en: 'New', de: 'Neu', it: 'Nuovo', lad: 'Nü' },
  'fc.heliRotation': { en: 'Helicopter Rotation', de: 'Helikopter-Rotation', it: 'Rotazione elicottero', lad: 'Rotazion elicòter' },
  'fc.of': { en: 'of', de: 'von', it: 'di', lad: 'de' },
  'fc.seatsBooked': { en: 'Seats Booked', de: 'Plätze gebucht', it: 'Posti prenotati', lad: 'Posć prenotei' },
  'fc.currentPrice': { en: 'Current Price', de: 'Aktueller Preis', it: 'Prezzo attuale', lad: 'Priesc atuel' },
  'fc.perPerson': { en: '/ person', de: '/ Person', it: '/ persona', lad: '/ persona' },
  'fc.secureSpot': { en: 'Secure Spot: 0,00 € Card Hold', de: 'Platz sichern: 0,00 € Kartenreservierung', it: 'Assicura il posto: 0,00 € blocco carta', lad: 'Assicura l post: 0,00 € bloc de ciarta' },
  'fc.balanceText': { en: 'Balance paid on-site. SetupIntent authorizes card.', de: 'Restbetrag vor Ort. SetupIntent autorisiert Karte.', it: 'Saldo in loco. SetupIntent autorizza la carta.', lad: 'Saldo sö l post. SetupIntent autorisëia la ciarta.' },
  'fc.reserveBtn': { en: 'Reserve Seat (0.00€ Hold)', de: 'Platz reservieren (0,00€ Halten)', it: 'Prenota posto (0,00€ blocco)', lad: 'Prenota post (0,00€ bloc)' },
  'fc.fullyBooked': { en: 'Fully Booked', de: 'Ausgebucht', it: 'Tutto esaurito', lad: 'Dut esaurì' },
  'fc.lockedBtn': { en: 'Locked', de: 'Gesperrt', it: 'Bloccato', lad: 'Blocà' },
  'fc.emptyTitle': { en: 'No upcoming jumps scheduled', de: 'Keine kommenden Sprünge geplant', it: 'Nessun salto in programma', lad: 'Nia sauc en programa' },
  'fc.emptyText': { en: 'Check back soon or contact us via WhatsApp to be notified when the next helicopter jump is announced.', de: 'Schau bald wieder vorbei oder kontaktiere uns via WhatsApp, um benachrichtigt zu werden.', it: 'Torna presto o contattaci via WhatsApp per essere avvisato.', lad: 'Torna prest o contaté nes via WhatsApp.' },
  'fc.contactUs': { en: 'Contact Us', de: 'Kontakt', it: 'Contattaci', lad: 'Contaté nes' },

  // ---- UPCOMING SECTION ----
  'upcoming.label': { en: 'Live Availability', de: 'Live-Verfügbarkeit', it: 'Disponibilità live', lad: 'Disponibilité live' },
  'upcoming.title': { en: 'Upcoming Jumps', de: 'Kommende Sprünge', it: 'Prossimi salti', lad: 'Sauc che vegn' },
  'upcoming.subtitle': { en: 'Secure your spot with a deposit. Prices drop as more skydivers join a flight!', de: 'Sichere deinen Platz mit einer Anzahlung. Preise sinken, wenn mehr Springer mitmachen!', it: 'Assicura il tuo posto con un deposito. I prezzi scendono con più partecipanti!', lad: 'Assicura to post cun n deposit. I priesc calëia cun plü partezipanc!' },
  'upcoming.hiw.title': { en: 'How Group Pricing Works', de: 'So funktioniert Gruppenpricing', it: 'Come funziona il prezzo di gruppo', lad: 'Coche funzionëia l priesc de grupe' },
  'upcoming.hiw.step1.title': { en: 'Secure with Deposit', de: 'Mit Anzahlung sichern', it: 'Assicura con deposito', lad: 'Assicura cun deposit' },
  'upcoming.hiw.step1.text': { en: 'Pay a deposit equal to your share of the helicopter cost to guarantee your seat.', de: 'Zahle eine Anzahlung in Höhe deines Helikopteranteils, um deinen Platz zu sichern.', it: 'Paga un deposito pari alla tua quota elicottero per garantire il tuo posto.', lad: 'Paia n deposit uguel a tua cuota dl elicòter per garantì to post.' },
  'upcoming.hiw.step2.title': { en: 'Bring Friends, Lower Price', de: 'Freunde mitbringen, Preis senken', it: 'Porta amici, prezzo più basso', lad: 'Porta amics, priesc plu bas' },
  'upcoming.hiw.step2.text': { en: 'The helicopter cost splits equally across all booked participants — the more join, the less you pay.', de: 'Die Helikopterkosten werden gleichmäßig aufgeteilt — je mehr mitmachen, desto günstiger wird es.', it: 'Il costo dell\'elicottero viene diviso equamente — più partecipanti, meno paghi.', lad: 'L cost dl elicòter vën dividì cumpaniëus — plü partezipanc, manciamënt paies.' },
  'upcoming.hiw.step3.title': { en: 'Pay Balance On-Site', de: 'Restbetrag vor Ort zahlen', it: 'Saldo in loco', lad: 'Saldo sö l post' },
  'upcoming.hiw.step3.text': { en: 'Pay only the remaining balance on-site on the day of the jump (card or cash).', de: 'Zahle den Restbetrag am Sprungtag vor Ort (Karte oder Bar).', it: 'Paga solo il saldo residuo in loco il giorno del salto (carta o contanti).', lad: 'Paia mec l saldo che resta sö l post l dì dl sauc (ciarta o cuntanc).' },

  // ---- SPLIT EMERGENCY CONTACT FIELDS ----
  'booking.emergencyName': { en: 'Emergency Contact Name *', de: 'Notfallkontakt Name *', it: 'Contatto di emergenza *', lad: 'Contat d\'emergënza Inuem *' },
  'booking.emergencyPhone': { en: 'Emergency Phone *', de: 'Notfallnummer *', it: 'Telefono emergenza *', lad: 'Telefon d\'emergënza *' },
  'booking.emergencyNamePh': { en: 'Full name', de: 'Vollständiger Name', it: 'Nome completo', lad: 'Inuem complet' },
  'booking.emergencyPhonePh': { en: '+43 660 1234567', de: '+43 660 1234567', it: '+39 340 1234567', lad: '+39 340 1234567' },

  // ---- TOOLTIP HINTS ----
  'tooltip.nickname': { en: 'Your nickname will be publicly visible on the flight card so other skydivers can see who\'s on their load.', de: 'Dein Nickname wird öffentlich auf der Flight Card angezeigt, damit andere Springer sehen, wer im selben Load ist.', it: 'Il tuo nickname sarà visibile pubblicamente sulla flight card.', lad: 'To nickname vën musciá publicamënter söla flight card.' },
  'tooltip.emergency': { en: 'Person to contact in case of an emergency (e.g. family member, partner).', de: 'Person, die im Notfall kontaktiert werden soll (z.B. Familienmitglied, Partner).', it: 'Persona da contattare in caso di emergenza (es. familiare, partner).', lad: 'Persona da contaté en caji d\'emergënza.' },
  'tooltip.licenseCountry': { en: 'Country that issued your skydiving license (e.g. IT, DE, AT, US).', de: 'Land, das deine Fallschirmspringerlizenz ausgestellt hat (z.B. IT, DE, AT, US).', it: 'Paese che ha rilasciato la tua licenza (es. IT, DE, AT, US).', lad: 'Paeje che à dé fora tua licënza (es. IT, DE, AT, US).' },
  'tooltip.licenseNumber': { en: 'Your skydiving license number (USPA B-license or equivalent, min. 100 jumps required).', de: 'Deine Fallschirmspringer-Lizenznummer (USPA B-Lizenz oder gleichwertig, min. 100 Sprünge).', it: 'Numero licenza di paracadutismo (USPA B-license o equivalente, min. 100 lanci).', lad: 'Numer de licënza (USPA B-license o ecuivalënt, min. 100 sauc).' },

  // ---- PRICING LABEL ----
  'pricing.label': { en: 'Prices 2026', de: 'Preise 2026', it: 'Prezzi 2026', lad: 'Priesc 2026' },

  // ---- REQUIREMENTS ----
  'req.license.title': { en: 'License Required', de: 'Lizenz erforderlich', it: 'Licenza richiesta', lad: 'Licënza debujën' },
  'req.license.text': { en: 'Professional skydivers only — valid license mandatory', de: 'Nur professionelle Springer — gültige Lizenz Pflicht', it: 'Solo paracadutisti autonomi — licenza valida obbligatoria', lad: 'Mec paracadutisć autonoms — licënza valida obligatoria' },
  'req.safety.title': { en: 'Safety First', de: 'Sicherheit zuerst', it: 'Sicurezza prima di tutto', lad: 'Segurëza dant l rest' },
  'req.safety.text': { en: 'Full gear inspection required before every jump', de: 'Vollständige Ausrüstungskontrolle vor jedem Sprung', it: 'Controllo completo dell\'attrezzatura prima di ogni salto', lad: 'Control complet dl echipamënt dant vigni sauc' },
  'req.weather.title': { en: 'Weather Dependent', de: 'Wetterabhängig', it: 'Dipende dal meteo', lad: 'Depënn dal tëmp' },
  'req.weather.text': { en: 'Jumps depend on conditions — flexible rescheduling available', de: 'Sprünge wetterabhängig — flexible Umplanung möglich', it: 'I salti dipendono dalle condizioni — riprogrammazione flessibile', lad: 'I sauc depënn dal tëmp — reprogramaziun flesibla' },
  'req.payment.title': { en: 'Easy Booking', de: 'Einfache Buchung', it: 'Prenotazione facile', lad: 'Prenotaziun fazila' },
  'req.payment.text': { en: 'Book exclusively via our platform — balance payable on site', de: 'Buchung ausschließlich über unsere Plattform — Restbetrag vor Ort', it: 'Prenota esclusivamente sulla nostra piattaforma — saldo in loco', lad: 'Prenota esclusivamënter söla nosta plataforma — saldo sö l post' },
  'req.substance.title': { en: 'Zero Tolerance Policy', de: 'Null-Toleranz-Richtlinie', it: 'Politica di tolleranza zero', lad: 'Politica de toleranza zero' },
  'req.substance.text': { en: 'Absolutely no alcohol or drugs before or during jumping — worldwide safety standard', de: 'Absolut kein Alkohol oder Drogen vor oder während des Springens — weltweiter Sicherheitsstandard', it: 'Assolutamente vietati alcol o droghe prima o durante i salti — standard di sicurezza mondiale', lad: 'Assolutamënter nia alcol o droghe dant o durant i sauc — standard de segurëza mundial' },

  // ---- TESTIMONIALS ----
  'testimonials.t2.text': { en: '"Best dropzone in the Alps, hands down. The views from 2,500m over the UNESCO Dolomites are unreal. Great vibes, well-organized, and the helicopter team is fantastic."', de: '"Beste Dropzone der Alpen, ohne Frage. Der Blick aus 2.500m über die UNESCO-Dolomiten ist surreal. Tolle Stimmung, gut organisiert und das Helikopter-Team ist fantastisch."', it: '"La migliore dropzone delle Alpi, senza dubbio. La vista da 2.500m sulle Dolomiti UNESCO è irreale. Grande atmosfera, ben organizzato e il team dell\'elicottero è fantastico."', lad: '"La mëusa dropzone de les Alpes, zënza dubi. La ududa da 2.500m sö les Dolomites UNESCO é irreala. Bela atmosfera y l team dl elicòter é fantastic."' },

  // ---- SHORT-NOTICE BOOKING WARNING ----
  'booking.shortNoticeTitle': {
    en: 'Short-Notice Booking',
    de: 'Kurzfristige Buchung',
    it: 'Prenotazione a breve termine',
    lad: 'Prenotazion a curt termin'
  },
  'booking.shortNoticeText': {
    en: 'You are booking less than 7 days before the jump date. No cancellation or refund is possible. Full payment of your helicopter share is due immediately.',
    de: 'Du buchst weniger als 7 Tage vor dem Sprungtermin. Keine Stornierung oder Rückerstattung möglich. Die vollständige Zahlung deines Helikopteranteils ist sofort fällig.',
    it: 'Stai prenotando a meno di 7 giorni dalla data del salto. Non è possibile alcuna cancellazione o rimborso. Il pagamento completo della tua quota elicottero è dovuto immediatamente.',
    lad: 'Te prenotes a manciamënt de 7 dis dant la data dl sauc. Nia stornazion o remborsament posibel. L paiamënt complet de tua cuota dl elicòter é da paié söbit.'
  }
};

