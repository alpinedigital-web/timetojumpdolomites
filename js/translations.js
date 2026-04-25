/* ============================================================
   TIME TO JUMP DOLOMITES — Translations (i18n)
   9 Languages: EN, DE, IT, LAD, NL, FR, PL, ES, CS
   ============================================================ */

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
  { code: 'lad', flag: '🏔️', label: 'Ladin' },
  { code: 'nl', flag: '🇳🇱', label: 'Nederlands' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'cs', flag: '🇨🇿', label: 'Čeština' }
];

const TRANSLATIONS = {

  // ---- NAVIGATION ----
  'nav.about': {
    en: 'About', de: 'Über uns', it: 'Chi siamo', lad: 'De nos', nl: 'Over ons', fr: 'À propos', pl: 'O nas', es: 'Sobre nosotros', cs: 'O nás'
  },
  'nav.prices': {
    en: 'Prices', de: 'Preise', it: 'Prezzi', lad: 'Priesc', nl: 'Prijzen', fr: 'Tarifs', pl: 'Cennik', es: 'Precios', cs: 'Ceny'
  },
  'nav.events': {
    en: 'Events', de: 'Events', it: 'Eventi', lad: 'Evenc', nl: 'Evenementen', fr: 'Événements', pl: 'Wydarzenia', es: 'Eventos', cs: 'Události'
  },
  'nav.blog': {
    en: 'Blog', de: 'Blog', it: 'Blog', lad: 'Blog', nl: 'Blog', fr: 'Blog', pl: 'Blog', es: 'Blog', cs: 'Blog'
  },
  'nav.privacy': {
    en: 'Privacy', de: 'Datenschutz', it: 'Privacy', lad: 'Privacy', nl: 'Privacy', fr: 'Confidentialité', pl: 'Prywatność', es: 'Privacidad', cs: 'Ochrana údajů'
  },

  // ---- HERO ----
  'hero.badge': {
    en: 'The Eden of Skydiving', de: 'Das Paradies des Fallschirmspringens', it: 'L\'Eden del Paracadutismo', lad: 'L\'Eden dl Paracadutism', nl: 'Het paradijs van het skydiven', fr: 'L\'Éden du Parachutisme', pl: 'Raj skoczków spadochronowych', es: 'El Edén del Paracaidismo', cs: 'Ráj parašutismu'
  },
  'hero.title': {
    en: 'Welcome to<br>Time to Jump Dolomites', de: 'Willkommen bei<br>Time to Jump Dolomites', it: 'Benvenuti a<br>Time to Jump Dolomites', lad: 'Benvegnüs a<br>Time to Jump Dolomites', nl: 'Welkom bij<br>Time to Jump Dolomites', fr: 'Bienvenue chez<br>Time to Jump Dolomites', pl: 'Witamy w<br>Time to Jump Dolomites', es: 'Bienvenido a<br>Time to Jump Dolomites', cs: 'Vítejte v<br>Time to Jump Dolomites'
  },
  'hero.subtitle': {
    en: 'Skydiving in the heart of the Dolomites — UNESCO World Heritage.<br>Breathtaking helicopter jumps over Trentino South Tyrol.',
    de: 'Fallschirmspringen im Herzen der Dolomiten — UNESCO Welterbe.<br>Atemberaubende Helikoptersprünge über Trentino-Südtirol.',
    it: 'Paracadutismo nel cuore delle Dolomiti — Patrimonio UNESCO.<br>Salti in elicottero mozzafiato sul Trentino-Alto Adige.',
    lad: 'Paracadutism ite l cuer de les Dolomites — Patrimone UNESCO.<br>Sauc da elicòter tla bela Tirol dl Süd.',
    nl: 'Skydiven in het hart van de Dolomieten — UNESCO Werelderfgoed.<br>Adembenemende helikoptersprongen over Trentino-Zuid-Tirol.',
    fr: 'Parachutisme au cœur des Dolomites — Patrimoine UNESCO.<br>Sauts en hélicoptère à couper le souffle sur le Trentin-Haut-Adige.',
    pl: 'Skoki spadochronowe w sercu Dolomitów — Dziedzictwo UNESCO.<br>Zapierające dech skoki z helikoptera nad Tyrolem Południowym.',
    es: 'Paracaidismo en el corazón de los Dolomitas — Patrimonio UNESCO.<br>Saltos en helicóptero impresionantes sobre Trentino-Alto Adigio.',
    cs: 'Seskoky v srdci Dolomitů — Světové dědictví UNESCO.<br>Dechberoucí seskoky z helikoptéry nad Jižním Tyrolskem.'
  },
  'hero.cta.prices': {
    en: 'View Prices', de: 'Preise ansehen', it: 'Vedi prezzi', lad: 'Vede i priesc', nl: 'Prijzen bekijken', fr: 'Voir les tarifs', pl: 'Zobacz cennik', es: 'Ver precios', cs: 'Zobrazit ceny'
  },
  'hero.cta.contact': {
    en: 'Contact Us', de: 'Kontakt', it: 'Contattaci', lad: 'Contaté nes', nl: 'Contact', fr: 'Nous contacter', pl: 'Kontakt', es: 'Contacto', cs: 'Kontaktujte nás'
  },
  'hero.cta.helicopter': {
    en: 'Book Helicopter', de: 'Helikopter buchen', it: 'Prenota elicottero', lad: 'Prenota elicòter', nl: 'Helikopter boeken', fr: 'Réserver hélicoptère', pl: 'Zarezerwuj helikopter', es: 'Reservar helicóptero', cs: 'Rezervovat helikoptéru'
  },
  'hero.scroll': {
    en: 'Scroll', de: 'Scrollen', it: 'Scorri', lad: 'Scrola', nl: 'Scroll', fr: 'Défiler', pl: 'Przewiń', es: 'Desplazar', cs: 'Posuňte'
  },

  // ---- ABOUT ----
  'about.label': {
    en: 'About Us', de: 'Über uns', it: 'Chi siamo', lad: 'De nos', nl: 'Over ons', fr: 'À propos', pl: 'O nas', es: 'Sobre nosotros', cs: 'O nás'
  },
  'about.title': {
    en: 'About Time to Jump Dolomites', de: 'Über Time to Jump Dolomites', it: 'Chi è Time to Jump Dolomites', lad: 'De Time to Jump Dolomites', nl: 'Over Time to Jump Dolomites', fr: 'À propos de Time to Jump Dolomites', pl: 'O Time to Jump Dolomites', es: 'Sobre Time to Jump Dolomites', cs: 'O Time to Jump Dolomites'
  },
  'about.text': {
    en: 'Skydiving in Trentino-South Tyrol-Tyrol-East Tyrol or too "Tyrol Land", in the Heart of the Dolomites and with breathtaking Views and in Places where Tourism is coordinated and organized in an optimal Way for pleasant and unforgettable Stays.',
    de: 'Fallschirmspringen in Welschtirol-Südtirol-Tirol-Osttirol oder auch "Tiroler Land", und im Herzen der Dolomiten und mit atemberaubender Aussicht und an Orten, an denen der Tourismus optimal koordiniert und organisiert wird für angenehme und unvergessliche Aufenthalte.',
    it: 'Attività di Paracadutismo in Trentino-Alto Adige-Tirolo-Tirol Est o anche "Euregio", e nel Cuore delle Dolomiti, con Panorami mozzafiato e in Luoghi dove il Turismo viene coordinato e organizzato in Maniera ottimale per dei Soggiorni gradevoli e indimenticabili.',
    lad: 'Paracadutism in Walschtirol-Sudtirol-Tirol-Osttirol o demé "Tirol Stat", y ite l cuer de les Dolomites, cun vedudas marevueiouses y en Lueches olà l Turism davegn coordiné y organisé autramenter perfeta pervia Sojornanzas plajoules y indesmentiabels.',
    nl: 'Skydiven in Trentino-Zuid-Tirol-Tirol-Oost-Tirol of ook wel "Tirol Land", in het hart van de Dolomieten met adembenemende uitzichten en op plekken waar toerisme optimaal gecoördineerd en georganiseerd wordt voor aangename en onvergetelijke verblijven.',
    fr: 'Activités de parachutisme dans le Trentin-Haut-Adige-Tyrol-Tyrol de l\'Est ou aussi "Euregio", et au Cœur des Dolomites, avec des vues à couper le souffle et dans des lieux où le tourisme est coordonné et organisé de manière optimale pour des séjours agréables et inoubliables.',
    pl: 'Skoki spadochronowe w Trentino-Południowym Tyrolu-Tyrolu-Wschodnim Tyrolu, zwanym również "Krainą Tyrolu", w sercu Dolomitów z zapierającymi dech widokami, w miejscach gdzie turystyka jest koordynowana i organizowana w optymalny sposób dla przyjemnych i niezapomnianych pobytów.',
    es: 'Actividades de paracaidismo en Trentino-Alto Adigio-Tirol-Tirol Oriental o también "Euregio", y en el corazón de los Dolomitas, con vistas impresionantes y en lugares donde el turismo está coordinado y organizado de manera óptima para estancias agradables e inolvidables.',
    cs: 'Parašutismus v Tridentsku-Jižním Tyrolsku-Tyrolsku-Východním Tyrolsku neboli „Tyrolská země" v srdci Dolomitů s úchvatnými výhledy na místech, kde je turismus koordinován a organizován optimálním způsobem pro příjemné a nezapomenutelné pobyty.'
  },
  'about.stat.altitude': { en: 'Max Altitude', de: 'Max. Höhe', it: 'Altitudine max.', lad: 'Auteza max.', nl: 'Max. hoogte', fr: 'Altitude max.', pl: 'Maks. wysokość', es: 'Altitud máx.', cs: 'Max. výška' },
  'about.stat.heritage': { en: 'Heritage Site', de: 'Welterbe', it: 'Patrimonio', lad: 'Patrimone', nl: 'Erfgoedlocatie', fr: 'Patrimoine', pl: 'Dziedzictwo', es: 'Patrimonio', cs: 'Dědictví' },
  'about.stat.days': { en: 'Open Days', de: 'Öffnungstage', it: 'Giorni apertura', lad: 'Dis da daviert', nl: 'Openingsdagen', fr: 'Jours d\'ouverture', pl: 'Dni otwarcia', es: 'Días abiertos', cs: 'Otevírací dny' },
  'about.badge': { en: 'Dolomites UNESCO', de: 'Dolomiten UNESCO', it: 'Dolomiti UNESCO', lad: 'Dolomites UNESCO', nl: 'Dolomieten UNESCO', fr: 'Dolomites UNESCO', pl: 'Dolomity UNESCO', es: 'Dolomitas UNESCO', cs: 'Dolomity UNESCO' },

  // ---- PRICING ----
  'pricing.label': { en: 'Prices 2025', de: 'Preise 2025', it: 'Prezzi 2025', lad: 'Priesc 2025', nl: 'Prijzen 2025', fr: 'Tarifs 2025', pl: 'Cennik 2025', es: 'Precios 2025', cs: 'Ceník 2025' },
  'pricing.title': { en: 'Pricing List', de: 'Preisliste', it: 'Listino Prezzi', lad: 'Lista di priesc', nl: 'Prijslijst', fr: 'Liste des tarifs', pl: 'Cennik', es: 'Lista de Precios', cs: 'Ceník' },
  'pricing.subtitle': {
    en: 'Professional skydivers only (No Tandem). All prices include helicopter flights over the stunning Dolomites landscape.',
    de: 'Nur professionelle Fallschirmspringer (kein Tandem). Alle Preise beinhalten Helikopterflüge über die atemberaubende Dolomitenlandschaft.',
    it: 'Solo paracadutisti professionisti (No Tandem). Tutti i prezzi includono voli in elicottero sullo spettacolare paesaggio dolomitico.',
    lad: 'Mec paracadutisć profesciunei (Nia Tandem). Duc i priesc inclusc voi en elicòter sëura l bel paisaje dles Dolomites.',
    nl: 'Alleen professionele skydivers (geen tandem). Alle prijzen zijn inclusief helikoptervluchten over het prachtige Dolomietenlandschap.',
    fr: 'Parachutistes professionnels uniquement (pas de tandem). Tous les tarifs incluent les vols en hélicoptère au-dessus du magnifique paysage des Dolomites.',
    pl: 'Tylko profesjonalni skoczkowie (bez tandemów). Wszystkie ceny obejmują loty helikopterem nad zapierającym dech krajobrazem Dolomitów.',
    es: 'Solo paracaidistas profesionales (sin tándem). Todos los precios incluyen vuelos en helicóptero sobre el impresionante paisaje de los Dolomitas.',
    cs: 'Pouze profesionální parašutisté (bez tandemu). Všechny ceny zahrnují let vrtulníkem nad úchvatnou krajinou Dolomitů.'
  },
  'pricing.helicopter.title': { en: 'Helicopter Jumps', de: 'Helikoptersprünge', it: 'Salti in Elicottero', lad: 'Sauc da Elicòter', nl: 'Helikoptersprongen', fr: 'Sauts en Hélicoptère', pl: 'Skoki z Helikoptera', es: 'Saltos en Helicóptero', cs: 'Seskoky z Helikoptéry' },
  'pricing.helicopter.desc': { en: 'Scenic jumps from helicopter over UNESCO Dolomites', de: 'Panoramasprünge aus dem Helikopter über die UNESCO Dolomiten', it: 'Salti panoramici dall\'elicottero sulle Dolomiti UNESCO', lad: 'Sauc panoramics dal elicòter sëura les Dolomites UNESCO', nl: 'Panoramasprongen vanuit de helikopter boven de UNESCO Dolomieten', fr: 'Sauts panoramiques en hélicoptère au-dessus des Dolomites UNESCO', pl: 'Panoramiczne skoki z helikoptera nad Dolomitami UNESCO', es: 'Saltos panorámicos en helicóptero sobre los Dolomitas UNESCO', cs: 'Panoramatické seskoky z vrtulníku nad Dolomity UNESCO' },
  'pricing.helicopter.note': {
    en: '* 1 Load = 5 Skydivers. The jump level can be lower in case of bad weather and/or local air traffic.',
    de: '* 1 Load = 5 Springer. Die Sprunghöhe kann bei schlechtem Wetter und/oder lokalem Flugverkehr niedriger sein.',
    it: '* 1 Load = 5 Paracadutisti. L\'altitudine del salto può essere inferiore in caso di maltempo e/o traffico aereo locale.',
    lad: '* 1 Load = 5 Paracadutisć. L\'auteza dl sauc po ester plu basa en cajo de catif tëmp y/o trafich aerian local.',
    nl: '* 1 Load = 5 Skydivers. De spronghoogte kan lager zijn bij slecht weer en/of lokaal luchtverkeer.',
    fr: '* 1 Load = 5 Parachutistes. Le niveau de saut peut être plus bas en cas de mauvais temps et/ou de trafic aérien local.',
    pl: '* 1 Load = 5 Skoczków. Wysokość skoku może być niższa w przypadku złej pogody i/lub lokalnego ruchu lotniczego.',
    es: '* 1 Load = 5 Paracaidistas. La altitud del salto puede ser menor en caso de mal tiempo y/o tráfico aéreo local.',
    cs: '* 1 Load = 5 Parašutistů. Výška seskoku může být nižší v případě špatného počasí a/nebo místního letového provozu.'
  },
  'pricing.pack.title': { en: 'Pack Jobs', de: 'Pack Jobs', it: 'Pack Jobs', lad: 'Pack Jobs', nl: 'Pack Jobs', fr: 'Pack Jobs', pl: 'Pack Jobs', es: 'Pack Jobs', cs: 'Pack Jobs' },
  'pricing.pack.desc': { en: 'Professional packing services & training courses', de: 'Professioneller Packservice & Kurse', it: 'Servizio di piegatura professionale e corsi', lad: 'Servisc de pliadüra profesciunel y cursc', nl: 'Professionele pakservice & trainingen', fr: 'Services de pliage professionnel et formations', pl: 'Profesjonalne usługi pakowania i kursy szkoleniowe', es: 'Servicios de plegado profesional y cursos', cs: 'Profesionální balicí služby a školení' },
  'pricing.pack.note': {
    en: '* On ground 1 and 2 + Pro-pack with life assistance. About 12 hours — on request.',
    de: '* Am Boden 1 und 2 + Pro-Pack mit persönlicher Betreuung. Ca. 12 Stunden — auf Anfrage.',
    it: '* A terra 1 e 2 + Pro-pack con assistenza dal vivo. Circa 12 ore — su richiesta.',
    lad: '* A tiera 1 y 2 + Pro-pack cun assistënza dal vif. Circa 12 ores — sun dumanda.',
    nl: '* Op de grond 1 en 2 + Pro-pack met persoonlijke begeleiding. Ongeveer 12 uur — op aanvraag.',
    fr: '* Au sol 1 et 2 + Pro-pack avec assistance en direct. Environ 12 heures — sur demande.',
    pl: '* Na ziemi 1 i 2 + Pro-pack z asystą na żywo. Około 12 godzin — na zapytanie.',
    es: '* En tierra 1 y 2 + Pro-pack con asistencia en vivo. Aproximadamente 12 horas — bajo petición.',
    cs: '* Na zemi 1 a 2 + Pro-pack s osobní asistencí. Přibližně 12 hodin — na vyžádání.'
  },
  'pricing.rent.title': { en: 'Parachutes Renting', de: 'Fallschirm-Verleih', it: 'Noleggio Paracadute', lad: 'Nolëi de Paracadutes', nl: 'Parachuteverhuur', fr: 'Location de Parachutes', pl: 'Wynajem Spadochronów', es: 'Alquiler de Paracaídas', cs: 'Půjčovna Padáků' },
  'pricing.rent.desc': { en: 'Equipment rental including pack job service', de: 'Ausrüstungsverleih inkl. Pack-Service', it: 'Noleggio attrezzatura incluso servizio di piegatura', lad: 'Nolëi de echipamënt cun servisc de pliadüra', nl: 'Materighuur inclusief pakservice', fr: 'Location d\'équipement incluant le service de pliage', pl: 'Wynajem sprzętu z usługą pakowania', es: 'Alquiler de equipo incluyendo servicio de plegado', cs: 'Půjčení vybavení včetně balicí služby' },
  'pricing.onrequest': { en: 'On request', de: 'Auf Anfrage', it: 'Su richiesta', lad: 'Sun dumanda', nl: 'Op aanvraag', fr: 'Sur demande', pl: 'Na zapytanie', es: 'Bajo petición', cs: 'Na vyžádání' },

  // ---- PARTNERS ----
  'partners.label': { en: 'Our Partner', de: 'Unser Partner', it: 'Il nostro Partner', lad: 'Nosc Partner', nl: 'Onze Partner', fr: 'Notre Partenaire', pl: 'Nasz Partner', es: 'Nuestro Socio', cs: 'Náš Partner' },
  'partners.desc': {
    en: 'Our trusted equipment partner for premium parachute systems. Design your custom rig with their state-of-the-art configurator, or browse their measurement guides for the perfect fit.',
    de: 'Unser vertrauenswürdiger Ausrüstungspartner für Premium-Fallschirmsysteme. Gestalte dein individuelles Rig mit dem modernen Konfigurator oder nutze die Maßanleitungen für die perfekte Passform.',
    it: 'Il nostro partner di fiducia per sistemi paracadute premium. Progetta il tuo rig personalizzato con il loro configuratore all\'avanguardia o consulta le guide alle misure per la vestibilità perfetta.',
    lad: 'Nosc partner de fidanza per sistems de paracadutes premium. Projeta to rig personalisé cun si configuradour o consulta les guidas per la mesura perfeta.',
    nl: 'Onze vertrouwde uitrustingspartner voor premium parachutesystemen. Ontwerp je eigen rig met hun geavanceerde configurator of bekijk hun maatgidsen voor de perfecte pasvorm.',
    fr: 'Notre partenaire de confiance pour les systèmes de parachutes premium. Concevez votre harnais personnalisé avec leur configurateur de pointe ou consultez leurs guides de mesures.',
    pl: 'Nasz zaufany partner sprzętowy dla profesjonalnych systemów spadochronowych. Zaprojektuj swój sprzęt za pomocą ich konfiguratora lub sprawdź przewodniki po rozmiarach.',
    es: 'Nuestro socio de confianza para sistemas de paracaídas premium. Diseña tu equipo personalizado con su configurador de última generación o consulta sus guías de medidas.',
    cs: 'Náš důvěryhodný partner pro prémiové padákové systémy. Navrhněte si svůj vlastní systém pomocí jejich konfigurátoru nebo si prohlédněte průvodce měřením.'
  },
  'partners.visit': { en: 'Visit Website', de: 'Website besuchen', it: 'Visita il sito', lad: 'Vijita l sit', nl: 'Website bezoeken', fr: 'Visiter le site', pl: 'Odwiedź stronę', es: 'Visitar web', cs: 'Navštívit web' },
  'partners.design': { en: 'Design a Rig +', de: 'Rig gestalten +', it: 'Configura un Rig +', lad: 'Configura n Rig +', nl: 'Rig ontwerpen +', fr: 'Créer un Rig +', pl: 'Zaprojektuj Rig +', es: 'Diseñar un Rig +', cs: 'Navrhnout Rig +' },
  'partners.measurements': { en: 'Measurements', de: 'Maße', it: 'Misure', lad: 'Mesures', nl: 'Maten', fr: 'Mesures', pl: 'Wymiary', es: 'Medidas', cs: 'Míry' },

  // ---- EVENTS ----
  'events.label': { en: 'Events', de: 'Events', it: 'Eventi', lad: 'Evenc', nl: 'Evenementen', fr: 'Événements', pl: 'Wydarzenia', es: 'Eventos', cs: 'Události' },
  'events.title': { en: 'Upcoming Events', de: 'Kommende Events', it: 'Prossimi Eventi', lad: 'Evenc che vegn', nl: 'Aankomende evenementen', fr: 'Événements à venir', pl: 'Nadchodzące wydarzenia', es: 'Próximos Eventos', cs: 'Nadcházející události' },
  'events.subtitle': {
    en: 'Stay tuned for our upcoming skydiving events and boogie calendar.',
    de: 'Bleib dran für unsere kommenden Fallschirmspring-Events und Boogie-Kalender.',
    it: 'Resta aggiornato sui nostri prossimi eventi di paracadutismo e calendario boogie.',
    lad: 'Sta atënc per nosc evenc de paracadutism che vegn.',
    nl: 'Blijf op de hoogte van onze aankomende skydive-evenementen en boogiekalender.',
    fr: 'Restez informés de nos prochains événements de parachutisme et calendrier boogie.',
    pl: 'Śledź nasze nadchodzące wydarzenia spadochronowe i kalendarz boogie.',
    es: 'Mantente al día de nuestros próximos eventos de paracaidismo y calendario boogie.',
    cs: 'Sledujte naše nadcházející seskokoué akce a boogie kalendář.'
  },
  'events.empty.title': { en: 'No events at the moment', de: 'Momentan keine Events', it: 'Nessun evento al momento', lad: 'Nia evenc al momënt', nl: 'Momenteel geen evenementen', fr: 'Aucun événement pour le moment', pl: 'Brak wydarzeń w tej chwili', es: 'Sin eventos por el momento', cs: 'Momentálně žádné události' },
  'events.empty.text': {
    en: 'Check back soon for exciting skydiving events in the Dolomites. Follow us on social media for the latest updates!',
    de: 'Schau bald wieder vorbei für spannende Fallschirmspring-Events in den Dolomiten. Folge uns in den sozialen Medien!',
    it: 'Torna presto per scoprire i prossimi eventi di paracadutismo nelle Dolomiti. Seguici sui social media!',
    lad: 'Torna prest per evenc de paracadutism tles Dolomites. Suzë nes sui social media!',
    nl: 'Kom snel terug voor spannende skydive-evenementen in de Dolomieten. Volg ons op social media!',
    fr: 'Revenez bientôt pour des événements de parachutisme palpitants dans les Dolomites. Suivez-nous sur les réseaux sociaux !',
    pl: 'Wracaj wkrótce po ekscytujące wydarzenia spadochronowe w Dolomitach. Śledź nas w mediach społecznościowych!',
    es: '¡Vuelve pronto para emocionantes eventos de paracaidismo en los Dolomitas. Síguenos en redes sociales!',
    cs: 'Brzy se vraťte pro vzrušující akce v Dolomitech. Sledujte nás na sociálních sítích!'
  },

  // ---- SHOP ----
  'shop.label': { en: 'Shop', de: 'Shop', it: 'Shop', lad: 'Shop', nl: 'Winkel', fr: 'Boutique', pl: 'Sklep', es: 'Tienda', cs: 'Obchod' },
  'shop.title': { en: 'Shop', de: 'Shop', it: 'Shop', lad: 'Shop', nl: 'Winkel', fr: 'Boutique', pl: 'Sklep', es: 'Tienda', cs: 'Obchod' },
  'shop.subtitle': { en: 'Browse our selection of skydiving gear and merchandise.', de: 'Stöbere in unserer Auswahl an Fallschirmausrüstung und Merchandise.', it: 'Sfoglia la nostra selezione di attrezzatura da paracadutismo e merchandising.', lad: 'Chëra ite nosta selezion de echipamënt y merchandise.', nl: 'Bekijk ons assortiment skydive-uitrusting en merchandise.', fr: 'Parcourez notre sélection d\'équipement de parachutisme et de merchandising.', pl: 'Przeglądaj nasz wybór sprzętu spadochronowego i gadżetów.', es: 'Explora nuestra selección de equipo de paracaidismo y merchandising.', cs: 'Prohlédněte si naši nabídku parašutistického vybavení a zboží.' },
  'shop.empty.title': { en: 'Nothing to book right now', de: 'Momentan nichts zu buchen', it: 'Niente da prenotare al momento', lad: 'Nia da prenota al momënt', nl: 'Momenteel niets te boeken', fr: 'Rien à réserver pour le moment', pl: 'Obecnie nic do zarezerwowania', es: 'Nada que reservar por el momento', cs: 'Momentálně nic k rezervaci' },
  'shop.empty.text': { en: 'Check back soon — new gear and bookings coming your way!', de: 'Schau bald wieder vorbei — neue Ausrüstung und Buchungen folgen!', it: 'Torna presto — nuova attrezzatura e prenotazioni in arrivo!', lad: 'Torna prest — nüi echipamënc y prenotazions en ariv!', nl: 'Kom snel terug — nieuwe uitrusting en boekingen komen eraan!', fr: 'Revenez bientôt — nouvel équipement et réservations en route !', pl: 'Wracaj wkrótce — nowy sprzęt i rezerwacje już wkrótce!', es: '¡Vuelve pronto — nuevo equipo y reservas en camino!', cs: 'Vraťte se brzy — nové vybavení a rezervace jsou na cestě!' },

  // ---- CONTACT ----
  'contact.label': { en: 'Get in Touch', de: 'Kontakt', it: 'Contattaci', lad: 'Contaté nes', nl: 'Neem contact op', fr: 'Contactez-nous', pl: 'Skontaktuj się', es: 'Ponte en contacto', cs: 'Kontaktujte nás' },
  'contact.title': { en: 'Contacts', de: 'Kontakt', it: 'Contatti', lad: 'Contac', nl: 'Contact', fr: 'Contacts', pl: 'Kontakt', es: 'Contactos', cs: 'Kontakty' },
  'contact.subtitle': {
    en: 'Open Friday – Sunday. We speak Italiano, Deutsch, English, Français, and Español.',
    de: 'Geöffnet Freitag – Sonntag. Wir sprechen Italiano, Deutsch, English, Français und Español.',
    it: 'Aperto venerdì – domenica. Parliamo Italiano, Deutsch, English, Français e Español.',
    lad: 'Daviert vëndres – dumenia. Parlons Italiano, Deutsch, English, Français y Español.',
    nl: 'Open vrijdag – zondag. Wij spreken Italiano, Deutsch, English, Français en Español.',
    fr: 'Ouvert vendredi – dimanche. Nous parlons Italiano, Deutsch, English, Français et Español.',
    pl: 'Otwarte piątek – niedziela. Mówimy po Italiano, Deutsch, English, Français i Español.',
    es: 'Abierto viernes – domingo. Hablamos Italiano, Deutsch, English, Français y Español.',
    cs: 'Otevřeno pátek – neděle. Mluvíme Italiano, Deutsch, English, Français a Español.'
  },
  'contact.reach': { en: 'Reach us anytime', de: 'Erreich uns jederzeit', it: 'Contattaci in qualsiasi momento', lad: 'Contaté nes canche che ti ó', nl: 'Bereik ons op elk moment', fr: 'Contactez-nous à tout moment', pl: 'Skontaktuj się z nami', es: 'Contáctanos en cualquier momento', cs: 'Kontaktujte nás kdykoliv' },
  'contact.location': { en: 'Location', de: 'Standort', it: 'Posizione', lad: 'Posizion', nl: 'Locatie', fr: 'Emplacement', pl: 'Lokalizacja', es: 'Ubicación', cs: 'Poloha' },
  'contact.email': { en: 'Email', de: 'E-Mail', it: 'Email', lad: 'Email', nl: 'E-mail', fr: 'E-mail', pl: 'E-mail', es: 'Correo', cs: 'E-mail' },
  'contact.hotline': { en: 'Hotline + WhatsApp', de: 'Hotline + WhatsApp', it: 'Hotline + WhatsApp', lad: 'Hotline + WhatsApp', nl: 'Hotline + WhatsApp', fr: 'Hotline + WhatsApp', pl: 'Infolinia + WhatsApp', es: 'Línea directa + WhatsApp', cs: 'Horká linka + WhatsApp' },
  'contact.timezone': { en: 'Local Time Zone', de: 'Lokale Zeitzone', it: 'Fuso orario locale', lad: 'Fus orar local', nl: 'Lokale tijdzone', fr: 'Fuseau horaire local', pl: 'Lokalna strefa czasowa', es: 'Zona horaria local', cs: 'Místní časové pásmo' },
  'contact.form.title': { en: 'Send us a message', de: 'Schreib uns eine Nachricht', it: 'Inviaci un messaggio', lad: 'Mandé nes n messaje', nl: 'Stuur ons een bericht', fr: 'Envoyez-nous un message', pl: 'Wyślij nam wiadomość', es: 'Envíanos un mensaje', cs: 'Napište nám zprávu' },
  'contact.form.name': { en: 'Name *', de: 'Name *', it: 'Nome *', lad: 'Inom *', nl: 'Naam *', fr: 'Nom *', pl: 'Imię *', es: 'Nombre *', cs: 'Jméno *' },
  'contact.form.email': { en: 'E-mail *', de: 'E-Mail *', it: 'E-mail *', lad: 'E-mail *', nl: 'E-mail *', fr: 'E-mail *', pl: 'E-mail *', es: 'E-mail *', cs: 'E-mail *' },
  'contact.form.phone': { en: 'Telephone *', de: 'Telefon *', it: 'Telefono *', lad: 'Telefon *', nl: 'Telefoon *', fr: 'Téléphone *', pl: 'Telefon *', es: 'Teléfono *', cs: 'Telefon *' },
  'contact.form.message': { en: 'Message *', de: 'Nachricht *', it: 'Messaggio *', lad: 'Messaje *', nl: 'Bericht *', fr: 'Message *', pl: 'Wiadomość *', es: 'Mensaje *', cs: 'Zpráva *' },
  'contact.form.send': { en: 'Send Message', de: 'Nachricht senden', it: 'Invia messaggio', lad: 'Mandé messaje', nl: 'Bericht versturen', fr: 'Envoyer le message', pl: 'Wyślij wiadomość', es: 'Enviar mensaje', cs: 'Odeslat zprávu' },
  'contact.form.success.title': { en: 'Message Sent!', de: 'Nachricht gesendet!', it: 'Messaggio inviato!', lad: 'Messaje mandé!', nl: 'Bericht verzonden!', fr: 'Message envoyé !', pl: 'Wiadomość wysłana!', es: '¡Mensaje enviado!', cs: 'Zpráva odeslána!' },
  'contact.form.success.text': { en: 'Thank you for reaching out. We\'ll get back to you shortly.', de: 'Danke für deine Nachricht. Wir melden uns bald bei dir.', it: 'Grazie per averci contattato. Ti risponderemo al più presto.', lad: 'Dëida per avëi nes contaté. Te respunerëi prest.', nl: 'Bedankt voor je bericht. We nemen snel contact met je op.', fr: 'Merci de nous avoir contactés. Nous vous répondrons rapidement.', pl: 'Dziękujemy za kontakt. Odezwiemy się wkrótce.', es: 'Gracias por contactarnos. Te responderemos pronto.', cs: 'Děkujeme za zprávu. Brzy se vám ozveme.' },

  // ---- MAP ----
  'map.label': { en: 'Find Us', de: 'Finde uns', it: 'Trovaci', lad: 'Ciara nes', nl: 'Vind ons', fr: 'Nous trouver', pl: 'Znajdź nas', es: 'Encuéntranos', cs: 'Najděte nás' },
  'map.title': { en: 'Our Location', de: 'Unser Standort', it: 'La nostra posizione', lad: 'Nosta posizion', nl: 'Onze locatie', fr: 'Notre emplacement', pl: 'Nasza lokalizacja', es: 'Nuestra ubicación', cs: 'Naše poloha' },
  'map.subtitle': { en: 'Located in the heart of the Dolomites UNESCO World Heritage Site, South Tyrol.', de: 'Im Herzen des UNESCO-Welterbes Dolomiten, Südtirol.', it: 'Nel cuore del sito UNESCO delle Dolomiti, in Alto Adige.', lad: 'Ite l cuer dl sit UNESCO dles Dolomites, Sudtirol.', nl: 'Gelegen in het hart van het UNESCO Werelderfgoed Dolomieten, Zuid-Tirol.', fr: 'Situé au cœur du site UNESCO des Dolomites, Haut-Adige.', pl: 'W sercu Dolomitów — Dziedzictwa UNESCO, Tyrol Południowy.', es: 'En el corazón del Patrimonio UNESCO de los Dolomitas, Tirol del Sur.', cs: 'V srdci dolomitského světového dědictví UNESCO, Jižní Tyrolsko.' },

  // ---- FOOTER ----
  'footer.backtop': { en: 'Back to top', de: 'Nach oben', it: 'Torna su', lad: 'Torna sö', nl: 'Terug naar boven', fr: 'Retour en haut', pl: 'Powrót na górę', es: 'Volver arriba', cs: 'Zpět nahoru' },

  // ---- CHAT WIDGET ----
  'chat.title': { en: 'What would You know?', de: 'Was möchtest du wissen?', it: 'Cosa vorresti sapere?', lad: 'Che ti ó savëi?', nl: 'Wat wil je weten?', fr: 'Que souhaitez-vous savoir ?', pl: 'Co chcesz wiedzieć?', es: '¿Qué quieres saber?', cs: 'Co byste chtěli vědět?' },
  'chat.subtitle': { en: 'Reach us via WhatsApp or Email', de: 'Erreiche uns via WhatsApp oder E-Mail', it: 'Contattaci via WhatsApp o Email', lad: 'Contaté nes via WhatsApp o Email', nl: 'Bereik ons via WhatsApp of e-mail', fr: 'Contactez-nous via WhatsApp ou e-mail', pl: 'Skontaktuj się przez WhatsApp lub e-mail', es: 'Contáctanos por WhatsApp o Email', cs: 'Kontaktujte nás přes WhatsApp nebo e-mail' },
  'chat.whatsapp': { en: 'WhatsApp Message', de: 'WhatsApp Nachricht', it: 'Messaggio WhatsApp', lad: 'Messaje WhatsApp', nl: 'WhatsApp Bericht', fr: 'Message WhatsApp', pl: 'Wiadomość WhatsApp', es: 'Mensaje WhatsApp', cs: 'Zpráva WhatsApp' },
  'chat.email': { en: 'Send an Email', de: 'E-Mail senden', it: 'Invia un\'Email', lad: 'Mandé na Email', nl: 'E-mail sturen', fr: 'Envoyer un e-mail', pl: 'Wyślij e-mail', es: 'Enviar un Email', cs: 'Odeslat e-mail' },
  'chat.call': { en: 'Call Hotline', de: 'Hotline anrufen', it: 'Chiama la hotline', lad: 'Ciama la hotline', nl: 'Bel de hotline', fr: 'Appeler la hotline', pl: 'Zadzwoń na infolinię', es: 'Llamar a la línea directa', cs: 'Zavolat na horkou linku' },

  // ---- FORM PLACEHOLDERS ----
  'placeholder.name': { en: 'Your full name', de: 'Dein vollständiger Name', it: 'Il tuo nome completo', lad: 'To inom complet', nl: 'Je volledige naam', fr: 'Votre nom complet', pl: 'Twoje imię i nazwisko', es: 'Tu nombre completo', cs: 'Vaše celé jméno' },
  'placeholder.email': { en: 'your@email.com', de: 'deine@email.com', it: 'tua@email.com', lad: 'tua@email.com', nl: 'jouw@email.com', fr: 'votre@email.com', pl: 'twoj@email.com', es: 'tu@email.com', cs: 'vas@email.com' },
  'placeholder.phone': { en: '+39 ...', de: '+39 ...', it: '+39 ...', lad: '+39 ...', nl: '+39 ...', fr: '+39 ...', pl: '+39 ...', es: '+39 ...', cs: '+39 ...' },
  'placeholder.message': {
    en: 'Tell us about your jump experience and what you\'d like to do...',
    de: 'Erzähl uns von deiner Sprungerfahrung und was du machen möchtest...',
    it: 'Raccontaci la tua esperienza di salto e cosa vorresti fare...',
    lad: 'Conta nes de tua esperiënza de sauc y ce che te orëssa fé...',
    nl: 'Vertel ons over je springervaring en wat je wilt doen...',
    fr: 'Parlez-nous de votre expérience de saut et de ce que vous aimeriez faire...',
    pl: 'Opowiedz nam o swoim doświadczeniu ze skokami i co chciałbyś robić...',
    es: 'Cuéntanos sobre tu experiencia de salto y qué te gustaría hacer...',
    cs: 'Řekněte nám o svých zkušenostech se seskoky a co byste chtěli dělat...'
  },

  // ---- NAVBAR CTA ----
  'nav.book': { en: 'Book Now', de: 'Jetzt buchen', it: 'Prenota ora', lad: 'Prenota ëura', nl: 'Nu boeken', fr: 'Réserver', pl: 'Zarezerwuj', es: 'Reservar', cs: 'Rezervovat' },

  // ---- HERO TRUST CUES ----
  'hero.trust.heli': { en: 'Helicopter Jumps from 775 €', de: 'Helikoptersprünge ab 775 €', it: 'Salti in elicottero da 775 €', lad: 'Sauc da elicòter da 775 €', nl: 'Helikoptersprongen vanaf 775 €', fr: 'Sauts en hélicoptère dès 775 €', pl: 'Skoki z helikoptera od 775 €', es: 'Saltos en helicóptero desde 775 €', cs: 'Seskoky z vrtulníku od 775 €' },
  'hero.trust.unesco': { en: 'UNESCO Dolomites', de: 'UNESCO Dolomiten', it: 'Dolomiti UNESCO', lad: 'Dolomites UNESCO', nl: 'UNESCO Dolomieten', fr: 'Dolomites UNESCO', pl: 'Dolomity UNESCO', es: 'Dolomitas UNESCO', cs: 'Dolomity UNESCO' },
  'hero.trust.days': { en: 'Fri – Sun · Weather Permitting', de: 'Fr – So · Wetterabhängig', it: 'Ven – Dom · Meteo permettendo', lad: 'Vëndres – Dumenia · Tëmp permitënt', nl: 'Vrij – Zon · Weer afhankelijk', fr: 'Ven – Dim · Selon la météo', pl: 'Pt – Nd · Zależne od pogody', es: 'Vie – Dom · Según clima', cs: 'Pá – Ne · Dle počasí' },
  'hero.cta.book': { en: 'Book Your Jump', de: 'Sprung buchen', it: 'Prenota il salto', lad: 'Prenota to sauc', nl: 'Boek je sprong', fr: 'Réserver votre saut', pl: 'Zarezerwuj skok', es: 'Reserva tu salto', cs: 'Rezervovat seskok' },

  // ---- EXPERIENCE / WHAT TO EXPECT ----
  'experience.label': { en: 'How It Works', de: 'So funktioniert\'s', it: 'Come funziona', lad: 'Coche funzionëia', nl: 'Hoe het werkt', fr: 'Comment ça marche', pl: 'Jak to działa', es: 'Cómo funciona', cs: 'Jak to funguje' },
  'experience.title': { en: 'What to Expect', de: 'Was dich erwartet', it: 'Cosa aspettarsi', lad: 'Ce che te speta', nl: 'Wat te verwachten', fr: 'À quoi s\'attendre', pl: 'Czego się spodziewać', es: 'Qué esperar', cs: 'Co očekávat' },
  'experience.subtitle': {
    en: 'From first contact to freefall — your jump day in 4 simple steps.',
    de: 'Vom ersten Kontakt bis zum Freifall — dein Sprungtag in 4 einfachen Schritten.',
    it: 'Dal primo contatto alla caduta libera — la tua giornata di salto in 4 semplici passi.',
    lad: 'Dal prim contat ala caduda liedia — tua jornada de sauc en 4 pesc sëmplic.',
    nl: 'Van eerste contact tot vrije val — jouw springdag in 4 eenvoudige stappen.',
    fr: 'Du premier contact à la chute libre — votre journée de saut en 4 étapes simples.',
    pl: 'Od pierwszego kontaktu do swobodnego spadania — Twój dzień skoku w 4 prostych krokach.',
    es: 'Desde el primer contacto hasta la caída libre — tu día de salto en 4 simples pasos.',
    cs: 'Od prvního kontaktu po volný pád — váš den seskoku ve 4 jednoduchých krocích.'
  },
  'experience.step1.title': { en: 'Contact & Reserve', de: 'Kontakt & Reservierung', it: 'Contatta & Prenota', lad: 'Contaté & Prenota', nl: 'Contact & Reserveer', fr: 'Contact & Réservation', pl: 'Kontakt & Rezerwacja', es: 'Contacto & Reserva', cs: 'Kontakt & Rezervace' },
  'experience.step1.text': {
    en: 'Reach out via WhatsApp, email, or phone to reserve your helicopter slot for the weekend.',
    de: 'Kontaktiere uns via WhatsApp, E-Mail oder Telefon, um deinen Helikopterplatz fürs Wochenende zu reservieren.',
    it: 'Contattaci via WhatsApp, email o telefono per prenotare il tuo posto in elicottero per il weekend.',
    lad: 'Contaté nes via WhatsApp, email o telefon per prenota to post en elicòter per l fin d\'edema.',
    nl: 'Neem contact op via WhatsApp, email of telefoon om je helikopterplek voor het weekend te reserveren.',
    fr: 'Contactez-nous via WhatsApp, email ou téléphone pour réserver votre place en hélicoptère pour le week-end.',
    pl: 'Skontaktuj się przez WhatsApp, e-mail lub telefon, aby zarezerwować miejsce w helikopterze na weekend.',
    es: 'Contáctanos vía WhatsApp, email o teléfono para reservar tu plaza de helicóptero para el fin de semana.',
    cs: 'Kontaktujte nás přes WhatsApp, e-mail nebo telefon a rezervujte si místo ve vrtulníku na víkend.'
  },
  'experience.step2.title': { en: 'Gear Check & Briefing', de: 'Ausrüstung & Briefing', it: 'Controllo & Briefing', lad: 'Control & Briefing', nl: 'Uitrusting & Briefing', fr: 'Vérification & Briefing', pl: 'Kontrola & Briefing', es: 'Control & Briefing', cs: 'Kontrola & Briefing' },
  'experience.step2.text': {
    en: 'On-site safety briefing and equipment check. Bring your own rig or rent one from us.',
    de: 'Sicherheitsbriefing und Ausrüstungskontrolle vor Ort. Eigene Ausrüstung oder Mietservice.',
    it: 'Briefing di sicurezza e controllo attrezzatura in loco. Porta il tuo rig o noleggialo da noi.',
    lad: 'Briefing de segurëza y control de echipamënt sö l post. Porta to rig o nolëia n da nos.',
    nl: 'Veiligheidsbriefing en materiaalcontrole ter plaatse. Breng je eigen rig mee of huur bij ons.',
    fr: 'Briefing sécurité et vérification du matériel sur place. Apportez votre harnais ou louez-en un chez nous.',
    pl: 'Briefing bezpieczeństwa i kontrola sprzętu na miejscu. Przynieś swój sprzęt lub wypożycz od nas.',
    es: 'Briefing de seguridad y control de equipo en el lugar. Trae tu equipo o alquila uno con nosotros.',
    cs: 'Bezpečnostní briefing a kontrola vybavení na místě. Přineste si vlastní systém nebo si ho u nás pronajměte.'
  },
  'experience.step3.title': { en: 'Helicopter Scenic Flight', de: 'Panorama-Helikopterflug', it: 'Volo panoramico', lad: 'Volo panoramic', nl: 'Panoramavlucht', fr: 'Vol panoramique', pl: 'Panoramiczny lot', es: 'Vuelo panorámico', cs: 'Panoramatický let' },
  'experience.step3.text': {
    en: 'Breathtaking flight over the UNESCO Dolomites to your jump altitude up to 2,500m.',
    de: 'Atemberaubender Flug über die UNESCO-Dolomiten bis auf deine Sprunghöhe von bis zu 2.500m.',
    it: 'Volo mozzafiato sulle Dolomiti UNESCO fino alla tua altitudine di salto fino a 2.500m.',
    lad: 'Volo marevueiëus sëura les Dolomites UNESCO nchin a tua auteza de sauc nscin a 2.500m.',
    nl: 'Adembenemende vlucht over de UNESCO Dolomieten naar je spronghoogte tot 2.500m.',
    fr: 'Vol à couper le souffle au-dessus des Dolomites UNESCO jusqu\'à votre altitude de saut de 2 500m.',
    pl: 'Zapierający dech lot nad Dolomitami UNESCO na wysokość skoku do 2 500m.',
    es: 'Vuelo impresionante sobre los Dolomitas UNESCO hasta tu altitud de salto de hasta 2.500m.',
    cs: 'Dechberoucí let nad Dolomity UNESCO do výšky seskoku až 2 500m.'
  },
  'experience.step4.title': { en: 'Freefall & Canopy', de: 'Freifall & Schirmfahrt', it: 'Caduta libera & Vela', lad: 'Caduda liedia & Vela', nl: 'Vrije val & Scherm', fr: 'Chute libre & Voile', pl: 'Swobodny spadanie & Czasza', es: 'Caída libre & Vela', cs: 'Volný pád & Padák' },
  'experience.step4.text': {
    en: 'Jump, enjoy the adrenaline of freefall, and land with an unforgettable panoramic view.',
    de: 'Spring, genieße das Adrenalin des Freifalls und lande mit unvergesslichem Panoramablick.',
    it: 'Salta, goditi l\'adrenalina della caduta libera e atterra con una vista panoramica indimenticabile.',
    lad: 'Sauta, gòd l\'adrenalina dla caduda liedia y tera cun na veduda panoramica ndesmentiabla.',
    nl: 'Spring, geniet van de adrenaline van de vrije val en land met een onvergetelijk panoramisch uitzicht.',
    fr: 'Sautez, profitez de l\'adrénaline de la chute libre et atterrissez avec une vue panoramique inoubliable.',
    pl: 'Skocz, poczuj adrenalinę swobodnego spadania i wyląduj z niezapomnianym widokiem panoramicznym.',
    es: 'Salta, disfruta la adrenalina de la caída libre y aterriza con una vista panorámica inolvidable.',
    cs: 'Vyskočte, užijte si adrenalin volného pádu a přistane s nezapomenutelným panoramatickým výhledem.'
  },

  // ---- PRICING CTA & BADGE ----
  'pricing.popular': { en: '⭐ Most Popular', de: '⭐ Beliebteste', it: '⭐ Più Popolare', lad: '⭐ Plü Popular', nl: '⭐ Populairst', fr: '⭐ Plus Populaire', pl: '⭐ Najpopularniejszy', es: '⭐ Más Popular', cs: '⭐ Nejoblíbenější' },
  'pricing.cta': { en: 'Book Load', de: 'Load buchen', it: 'Prenota Load', lad: 'Prenota Load', nl: 'Boek Load', fr: 'Réserver Load', pl: 'Rezerwuj Load', es: 'Reservar Load', cs: 'Rezervovat Load' },
  'pricing.cta.contact': { en: 'Request Info', de: 'Infos anfragen', it: 'Richiedi info', lad: 'Dumandé info', nl: 'Info aanvragen', fr: 'Demander infos', pl: 'Zapytaj o info', es: 'Solicitar info', cs: 'Vyžádat info' },

  // ---- REQUIREMENTS ----
  'req.license.title': { en: 'License Required', de: 'Lizenz erforderlich', it: 'Licenza richiesta', lad: 'Lizënza damandeda', nl: 'Licentie vereist', fr: 'Licence requise', pl: 'Licencja wymagana', es: 'Licencia requerida', cs: 'Licence vyžadována' },
  'req.license.text': { en: 'Professional skydivers only — valid license mandatory', de: 'Nur professionelle Springer — gültige Lizenz erforderlich', it: 'Solo paracadutisti professionisti — licenza valida obbligatoria', lad: 'Mec paracadutisć profesciunei — lizënza valida obligatoria', nl: 'Alleen professionele skydivers — geldige licentie verplicht', fr: 'Parachutistes professionnels uniquement — licence valide obligatoire', pl: 'Tylko profesjonalni skoczkowie — ważna licencja obowiązkowa', es: 'Solo paracaidistas profesionales — licencia válida obligatoria', cs: 'Pouze profesionální parašutisté — platná licence povinná' },
  'req.safety.title': { en: 'Safety First', de: 'Sicherheit zuerst', it: 'Sicurezza prima', lad: 'Segurëza danfora', nl: 'Veiligheid eerst', fr: 'Sécurité d\'abord', pl: 'Bezpieczeństwo', es: 'Seguridad primero', cs: 'Bezpečnost' },
  'req.safety.text': { en: 'Full gear inspection required before every jump', de: 'Vollständige Ausrüstungskontrolle vor jedem Sprung', it: 'Ispezione completa dell\'attrezzatura prima di ogni salto', lad: 'Ispezion completa dl echipamënt dant vigni sauc', nl: 'Volledige materiaalinspectie vereist vóór elke sprong', fr: 'Inspection complète du matériel requise avant chaque saut', pl: 'Pełna kontrola sprzętu wymagana przed każdym skokiem', es: 'Inspección completa del equipo requerida antes de cada salto', cs: 'Úplná kontrola vybavení požadována před každým seskokem' },
  'req.weather.title': { en: 'Weather Dependent', de: 'Wetterabhängig', it: 'Meteo dipendente', lad: 'Dependënt dal tëmp', nl: 'Weer afhankelijk', fr: 'Dépend de la météo', pl: 'Zależne od pogody', es: 'Dependiente del clima', cs: 'Závislé na počasí' },
  'req.weather.text': { en: 'Jumps depend on conditions — flexible rescheduling available', de: 'Sprünge wetterabhängig — flexible Umplanung möglich', it: 'I salti dipendono dalle condizioni — riprogrammazione flessibile', lad: 'I sauc depënd da les condiziuns — riprogramazion flesibla', nl: 'Sprongen afhankelijk van omstandigheden — flexibel omplannen mogelijk', fr: 'Les sauts dépendent des conditions — reprogrammation flexible', pl: 'Skoki zależne od warunków — elastyczne przełożenie terminu', es: 'Los saltos dependen de las condiciones — reprogramación flexible', cs: 'Seskoky závisí na podmínkách — flexibilní přeložení' },
  'req.payment.title': { en: 'Easy Booking', de: 'Einfache Buchung', it: 'Prenotazione facile', lad: 'Prenotazion simpla', nl: 'Eenvoudig boeken', fr: 'Réservation facile', pl: 'Łatwa rezerwacja', es: 'Reserva fácil', cs: 'Snadná rezervace' },
  'req.payment.text': { en: 'Reserve via WhatsApp, email, or phone — pay on site', de: 'Reserviere via WhatsApp, E-Mail oder Telefon — Zahlung vor Ort', it: 'Prenota via WhatsApp, email o telefono — pagamento in loco', lad: 'Prenota via WhatsApp, email o telefon — pajamënt sö l post', nl: 'Reserveer via WhatsApp, email of telefoon — betaal ter plaatse', fr: 'Réservez via WhatsApp, email ou téléphone — paiement sur place', pl: 'Zarezerwuj przez WhatsApp, e-mail lub telefon — płatność na miejscu', es: 'Reserva vía WhatsApp, email o teléfono — pago en el lugar', cs: 'Rezervujte přes WhatsApp, e-mail nebo telefon — platba na místě' },

  // ---- TESTIMONIALS ----
  'testimonials.label': { en: 'Reviews', de: 'Bewertungen', it: 'Recensioni', lad: 'Recenjiuns', nl: 'Beoordelingen', fr: 'Avis', pl: 'Opinie', es: 'Reseñas', cs: 'Recenze' },
  'testimonials.title': { en: 'What Jumpers Say', de: 'Was Springer sagen', it: 'Cosa dicono i saltatori', lad: 'Ce che disc i sautadours', nl: 'Wat springers zeggen', fr: 'Ce que disent les sauteurs', pl: 'Co mówią skoczkowie', es: 'Lo que dicen los saltadores', cs: 'Co říkají seskokoví' },
  'testimonials.t1.text': { en: '"Absolutely stunning scenery! The helicopter ride alone is worth it, and the freefall over the Dolomites is an experience I will never forget. Professional team and top safety standards."', de: '"Absolut atemberaubende Landschaft! Allein der Helikopterflug lohnt sich, und der Freifall über den Dolomiten ist ein Erlebnis, das ich nie vergessen werde. Professionelles Team und höchste Sicherheitsstandards."', it: '"Paesaggio assolutamente mozzafiato! Il solo volo in elicottero vale il prezzo, e la caduta libera sulle Dolomiti è un\'esperienza che non dimenticherò mai. Team professionale e standard di sicurezza altissimi."', lad: '"Paisaje marevueiëus! Mec l volo en elicòter mërita, y la caduda liedia sëura les Dolomites é na esperiënza che ne desmentrà mei. Team profesciunel y standards de segurëza al top."', nl: '"Absoluut adembenemend landschap! Alleen de helikoptervlucht is het al waard, en de vrije val boven de Dolomieten is een ervaring die ik nooit zal vergeten. Professioneel team en top veiligheidsnormen."', fr: '"Paysage absolument époustouflant ! Le vol en hélicoptère seul vaut le coup, et la chute libre au-dessus des Dolomites est une expérience que je n\'oublierai jamais. Équipe professionnelle et normes de sécurité au top."', pl: '"Absolutnie zapierająca dech sceneria! Sam lot helikopterem jest tego wart, a swobodne spadanie nad Dolomitami to doświadczenie, którego nigdy nie zapomnę. Profesjonalny zespół i najwyższe standardy bezpieczeństwa."', es: '"¡Paisaje absolutamente impresionante! Solo el vuelo en helicóptero vale la pena, y la caída libre sobre los Dolomitas es una experiencia que nunca olvidaré. Equipo profesional y los más altos estándares de seguridad."', cs: '"Naprosto úchvatná scenérie! Samotný let vrtulníkem stojí za to a volný pád nad Dolomity je zážitek, na který nikdy nezapomenu. Profesionální tým a nejvyšší bezpečnostní standardy."' },
  'testimonials.t1.info': { en: '500+ jumps · Munich, Germany', de: '500+ Sprünge · München, Deutschland', it: '500+ salti · Monaco, Germania', lad: '500+ sauc · München, Germania', nl: '500+ sprongen · München, Duitsland', fr: '500+ sauts · Munich, Allemagne', pl: '500+ skoków · Monachium, Niemcy', es: '500+ saltos · Múnich, Alemania', cs: '500+ seskoků · Mnichov, Německo' },
  'testimonials.t2.text': { en: '"Best dropzone in the Alps, hands down. The views from 2,500m over the UNESCO Dolomites are unreal. Great vibes, well-organized, and the Elikos helicopter team is fantastic."', de: '"Bester Sprungplatz in den Alpen, ohne Frage. Die Aussicht aus 2.500m über die UNESCO-Dolomiten ist unwirklich. Tolle Stimmung, gut organisiert, und das Elikos-Helikopterteam ist fantastisch."', it: '"La migliore dropzone delle Alpi, senza dubbio. Le viste da 2.500m sulle Dolomiti UNESCO sono irreali. Grande atmosfera, ben organizzato, e il team Elikos è fantastico."', lad: '"La mëlsa dropzone tles Alpes, zënza dubi. Les vedudes da 2.500m sëura les Dolomites UNESCO é irredes. Bona atmosfera, bën organisé, y l team Elikos é fantastich."', nl: '"Beste dropzone in de Alpen, geen twijfel. De uitzichten vanaf 2.500m over de UNESCO Dolomieten zijn onwerkelijk. Geweldige sfeer, goed georganiseerd, en het Elikos helikopterteam is fantastisch."', fr: '"Meilleure dropzone des Alpes, sans conteste. Les vues depuis 2 500m au-dessus des Dolomites UNESCO sont irréelles. Super ambiance, bien organisé, et l\'équipe Elikos est fantastique."', pl: '"Najlepsza dropzone w Alpach, bez dwóch zdań. Widoki z 2 500m nad Dolomitami UNESCO są nierealne. Świetna atmosfera, dobrze zorganizowane, a team Elikos helikoptera jest fantastyczny."', es: '"La mejor dropzone de los Alpes, sin duda. Las vistas desde 2.500m sobre los Dolomitas UNESCO son irreales. Gran ambiente, bien organizado, y el equipo de helicópteros Elikos es fantástico."', cs: '"Nejlepší dropzone v Alpách, jednoznačně. Výhledy z 2 500m nad Dolomity UNESCO jsou neskutečné. Skvělá atmosféra, dobře organizované a tým Elikos vrtulníku je fantastický."' },
  'testimonials.t2.info': { en: '300+ jumps · Vienna, Austria', de: '300+ Sprünge · Wien, Österreich', it: '300+ salti · Vienna, Austria', lad: '300+ sauc · Wien, Austria', nl: '300+ sprongen · Wenen, Oostenrijk', fr: '300+ sauts · Vienne, Autriche', pl: '300+ skoków · Wiedeń, Austria', es: '300+ saltos · Viena, Austria', cs: '300+ seskoků · Vídeň, Rakousko' },
  'testimonials.t3.text': { en: '"A truly unique experience. Jumping from a helicopter over these mountains is something every skydiver should try at least once. Very flexible with weather rescheduling too."', de: '"Ein wirklich einzigartiges Erlebnis. Aus einem Helikopter über diese Berge zu springen ist etwas, das jeder Springer einmal erleben sollte. Sehr flexibel bei Wetterumplanung."', it: '"Un\'esperienza davvero unica. Saltare da un elicottero su queste montagne è qualcosa che ogni paracadutista dovrebbe provare almeno una volta. Molto flessibili con la riprogrammazione meteo."', lad: '"Na esperiënza da adöm unica. Sauté da n elicòter sëura chësta montes é zeche che vigni paracadutist dess prové almancol n\'ota. Dërt flesibla cun la riprogramazion de tëmp."', nl: '"Een werkelijk unieke ervaring. Springen vanuit een helikopter boven deze bergen is iets dat elke skydiver minstens één keer moet proberen. Zeer flexibel met weer-herplanning."', fr: '"Une expérience vraiment unique. Sauter d\'un hélicoptère au-dessus de ces montagnes est quelque chose que chaque parachutiste devrait essayer au moins une fois. Très flexible pour la reprogrammation météo."', pl: '"Naprawdę wyjątkowe doświadczenie. Skok z helikoptera nad tymi górami to coś, co każdy skoczek powinien spróbować chociaż raz. Bardzo elastyczni z przełożeniem terminu z powodu pogody."', es: '"Una experiencia verdaderamente única. Saltar desde un helicóptero sobre estas montañas es algo que todo paracaidista debería probar al menos una vez. Muy flexibles con la reprogramación por clima."', cs: '"Skutečně unikátní zážitek. Seskok z vrtulníku nad těmito horami je něco, co by měl každý parašutista vyzkoušet alespoň jednou. Velmi flexibilní s přeložením kvůli počasí."' },
  'testimonials.t3.info': { en: '800+ jumps · Prague, Czech Republic', de: '800+ Sprünge · Prag, Tschechien', it: '800+ salti · Praga, Rep. Ceca', lad: '800+ sauc · Praga, Rep. Ceca', nl: '800+ sprongen · Praag, Tsjechië', fr: '800+ sauts · Prague, Tchéquie', pl: '800+ skoków · Praga, Czechy', es: '800+ saltos · Praga, Rep. Checa', cs: '800+ seskoků · Praha, Česko' },

  // ---- FAQ ----
  'faq.label': { en: 'FAQ', de: 'FAQ', it: 'FAQ', lad: 'FAQ', nl: 'FAQ', fr: 'FAQ', pl: 'FAQ', es: 'FAQ', cs: 'FAQ' },
  'faq.title': { en: 'Frequently Asked Questions', de: 'Häufig gestellte Fragen', it: 'Domande frequenti', lad: 'Dumandes frequëntes', nl: 'Veelgestelde vragen', fr: 'Questions fréquentes', pl: 'Często zadawane pytania', es: 'Preguntas frecuentes', cs: 'Často kladené otázky' },
  'faq.q1': { en: 'Do I need a skydiving license?', de: 'Brauche ich einen Fallschirmschein?', it: 'Ho bisogno di una licenza?', lad: 'Ëi bujën de na lizënza?', nl: 'Heb ik een licentie nodig?', fr: 'Ai-je besoin d\'une licence ?', pl: 'Czy potrzebuję licencji?', es: '¿Necesito una licencia?', cs: 'Potřebuji licenci?' },
  'faq.a1': {
    en: 'Yes. We operate exclusively for licensed skydivers. You must hold a valid skydiving license (e.g., USPA, FAI, or equivalent national license). No tandem jumps are offered.',
    de: 'Ja. Wir operieren ausschließlich für lizenzierte Springer. Du musst einen gültigen Fallschirmschein besitzen (z.B. USPA, FAI oder gleichwertige nationale Lizenz). Keine Tandemsprünge.',
    it: 'Sì. Operiamo esclusivamente per paracadutisti con licenza. Devi possedere una licenza valida (es. USPA, FAI o equivalente nazionale). Non offriamo salti tandem.',
    lad: 'Sci. Operons mec per paracadutisć cun lizënza. Te muesse avëi na lizënza valida (p.ej. USPA, FAI o ecuivalënt naziunel). Nia sauc tandem.',
    nl: 'Ja. Wij opereren uitsluitend voor gelicentieerde skydivers. Je moet een geldig bewijs bezitten (bijv. USPA, FAI of gelijkwaardig). Geen tandemsprongen.',
    fr: 'Oui. Nous opérons exclusivement pour les parachutistes licenciés. Vous devez détenir une licence valide (ex. USPA, FAI ou équivalent national). Pas de sauts tandem.',
    pl: 'Tak. Działamy wyłącznie dla licencjonowanych skoczków. Musisz posiadać ważną licencję (np. USPA, FAI lub równoważną). Nie oferujemy skoków tandemowych.',
    es: 'Sí. Operamos exclusivamente para paracaidistas con licencia. Debes tener una licencia válida (ej. USPA, FAI o equivalente nacional). No se ofrecen saltos tándem.',
    cs: 'Ano. Provozujeme výhradně pro licencované parašutisty. Musíte mít platnou licenci (např. USPA, FAI nebo ekvivalentní). Tandemové seskoky nenabízíme.'
  },
  'faq.q2': { en: 'What happens if the weather is bad?', de: 'Was passiert bei schlechtem Wetter?', it: 'Cosa succede con il maltempo?', lad: 'Ce suzed col catif tëmp?', nl: 'Wat gebeurt er bij slecht weer?', fr: 'Que se passe-t-il en cas de mauvais temps ?', pl: 'Co się dzieje przy złej pogodzie?', es: '¿Qué pasa si el clima es malo?', cs: 'Co se stane při špatném počasí?' },
  'faq.a2': {
    en: 'Safety comes first. If weather conditions don\'t allow safe jumping, we will reschedule your jump to the next available date at no extra cost. The jump altitude may also be adjusted based on conditions and local air traffic.',
    de: 'Sicherheit geht vor. Bei ungeeigneten Wetterbedingungen verschieben wir deinen Sprung kostenlos auf den nächsten verfügbaren Termin. Die Sprunghöhe kann je nach Wetter und Flugverkehr angepasst werden.',
    it: 'La sicurezza prima di tutto. Se le condizioni meteo non permettono il salto, riprogrammeremo senza costi aggiuntivi. L\'altitudine di salto può essere adattata in base alle condizioni e al traffico aereo.',
    lad: 'La segurëza danfora de dut. Sce les condiziuns de tëmp ne permetel nia de sauté, reprogramons zënza coscta adiziunela. L\'auteza dl sauc po gnì agiusteda.',
    nl: 'Veiligheid gaat voor. Bij slechte weersomstandigheden plannen we je sprong kosteloos opnieuw in. De spronghoogte kan worden aangepast op basis van omstandigheden en lokaal luchtverkeer.',
    fr: 'La sécurité d\'abord. Si la météo ne permet pas de sauter, nous reprogrammerons votre saut sans frais supplémentaires. L\'altitude de saut peut être ajustée selon les conditions et le trafic aérien local.',
    pl: 'Bezpieczeństwo jest najważniejsze. Przy złych warunkach pogodowych przeniesiemy Twój skok na najbliższy dostępny termin bez dodatkowych kosztów. Wysokość skoku może być dostosowana.',
    es: 'La seguridad es lo primero. Si las condiciones no permiten saltar, reprogramaremos sin costo adicional. La altitud de salto puede ajustarse según las condiciones y el tráfico aéreo local.',
    cs: 'Bezpečnost je na prvním místě. Pokud počasí neumožní bezpečný seskok, přeložíme váš seskok na další dostupný termín bez příplatku. Výška seskoku může být upravena.'
  },
  'faq.q3': { en: 'How do I book a jump?', de: 'Wie buche ich einen Sprung?', it: 'Come prenoto un salto?', lad: 'Coche prenotëii n sauc?', nl: 'Hoe boek ik een sprong?', fr: 'Comment réserver un saut ?', pl: 'Jak zarezerwować skok?', es: '¿Cómo reservo un salto?', cs: 'Jak si zarezervuji seskok?' },
  'faq.a3': {
    en: 'Contact us via WhatsApp (+39 342 763 5478), email (Info@timetojumpdolomites.com), or phone to reserve your slot. The helicopter is booked through our partner Elikos. Payment is on site.',
    de: 'Kontaktiere uns via WhatsApp (+39 342 763 5478), E-Mail (Info@timetojumpdolomites.com) oder Telefon. Der Helikopter wird über unseren Partner Elikos gebucht. Zahlung vor Ort.',
    it: 'Contattaci via WhatsApp (+39 342 763 5478), email (Info@timetojumpdolomites.com) o telefono. L\'elicottero si prenota tramite Elikos. Pagamento in loco.',
    lad: 'Contaté nes via WhatsApp (+39 342 763 5478), email (Info@timetojumpdolomites.com) o telefon. L\'elicòter vën prenoté tres Elikos. Pajamënt sö l post.',
    nl: 'Neem contact op via WhatsApp (+39 342 763 5478), email (Info@timetojumpdolomites.com) of telefoon. De helikopter wordt geboekt via Elikos. Betaling ter plaatse.',
    fr: 'Contactez-nous via WhatsApp (+39 342 763 5478), email (Info@timetojumpdolomites.com) ou téléphone. L\'hélicoptère est réservé via Elikos. Paiement sur place.',
    pl: 'Skontaktuj się przez WhatsApp (+39 342 763 5478), email (Info@timetojumpdolomites.com) lub telefon. Helikopter rezerwowany przez partnera Elikos. Płatność na miejscu.',
    es: 'Contáctanos vía WhatsApp (+39 342 763 5478), email (Info@timetojumpdolomites.com) o teléfono. El helicóptero se reserva a través de Elikos. Pago en el lugar.',
    cs: 'Kontaktujte nás přes WhatsApp (+39 342 763 5478), e-mail (Info@timetojumpdolomites.com) nebo telefon. Vrtulník se rezervuje přes partnera Elikos. Platba na místě.'
  },
  'faq.q4': { en: 'What\'s included in the price?', de: 'Was ist im Preis enthalten?', it: 'Cosa è incluso nel prezzo?', lad: 'Ce é inclus ite l priesc?', nl: 'Wat is inbegrepen?', fr: 'Qu\'est-ce qui est inclus ?', pl: 'Co jest w cenie?', es: '¿Qué incluye el precio?', cs: 'Co je zahrnuto v ceně?' },
  'faq.a4': {
    en: 'All prices include the helicopter flight over the Dolomites and the jump itself. Pack jobs, equipment rental, and additional loads are priced separately — see our pricing section for details.',
    de: 'Alle Preise beinhalten den Helikopterflug über die Dolomiten und den Sprung selbst. Pack-Jobs, Ausrüstungsverleih und zusätzliche Loads sind separat — siehe Preisliste.',
    it: 'Tutti i prezzi includono il volo in elicottero sulle Dolomiti e il salto. Pack job, noleggio attrezzatura e load aggiuntivi sono a parte — vedi la sezione prezzi.',
    lad: 'Duc i priesc inclusc l volo en elicòter sëura les Dolomites y l sauc. Pack job, nolëi y load adiziunei é a pèrt — vede la sezion di priesc.',
    nl: 'Alle prijzen zijn inclusief de helikoptervlucht over de Dolomieten en de sprong zelf. Pakwerk, materighuur en extra loads worden apart berekend — zie onze prijslijst.',
    fr: 'Tous les tarifs incluent le vol en hélicoptère au-dessus des Dolomites et le saut lui-même. Pack jobs, location et loads supplémentaires sont facturés séparément — voir nos tarifs.',
    pl: 'Wszystkie ceny obejmują lot helikopterem nad Dolomitami i sam skok. Pakowanie, wynajem sprzętu i dodatkowe loty są wyceniane oddzielnie — zobacz cennik.',
    es: 'Todos los precios incluyen el vuelo en helicóptero sobre los Dolomitas y el salto. Pack jobs, alquiler de equipo y loads adicionales se cobran por separado — ver precios.',
    cs: 'Všechny ceny zahrnují let vrtulníkem nad Dolomity a samotný seskok. Balení, pronájem vybavení a další lety jsou účtovány zvlášť — viz ceník.'
  },
  'faq.q5': { en: 'Do I need my own equipment?', de: 'Brauche ich eigene Ausrüstung?', it: 'Mi serve la mia attrezzatura?', lad: 'Ëi bujën de mi echipamënt?', nl: 'Heb ik eigen uitrusting nodig?', fr: 'Ai-je besoin de mon propre équipement ?', pl: 'Czy potrzebuję własnego sprzętu?', es: '¿Necesito mi propio equipo?', cs: 'Potřebuji vlastní vybavení?' },
  'faq.a5': {
    en: 'You can bring your own rig or rent complete parachute equipment from us. Rental includes a pack job. See our pricing section for rental rates.',
    de: 'Du kannst deine eigene Ausrüstung mitbringen oder ein komplettes Fallschirmsystem bei uns mieten. Mietpreis inkl. Pack-Job — siehe Preisliste.',
    it: 'Puoi portare il tuo rig o noleggiare l\'attrezzatura completa da noi. Il noleggio include il pack job. Vedi i prezzi per le tariffe.',
    lad: 'Te pòs porta to rig o nolëi l\'echipamënt complet da nos. L nolëi inclusc l pack job. Vede i priesc per les tarifes.',
    nl: 'Je kunt je eigen rig meebrengen of compleet parachutemateriaal bij ons huren. Huur inclusief pakwerk. Zie onze prijslijst.',
    fr: 'Vous pouvez apporter votre propre harnais ou louer l\'équipement complet chez nous. La location inclut le pliage. Voir nos tarifs de location.',
    pl: 'Możesz przynieść własny sprzęt lub wynająć kompletny system spadochronowy od nas. Wynajem obejmuje pakowanie. Zobacz cennik za wynajem.',
    es: 'Puedes traer tu propio equipo o alquilar equipo completo con nosotros. El alquiler incluye pack job. Ver precios de alquiler.',
    cs: 'Můžete si přinést vlastní systém nebo si u nás pronajmout kompletní padákové vybavení. Pronájem zahrnuje balení. Viz ceník pronájmu.'
  },
  'faq.q6': { en: 'When are you open?', de: 'Wann habt ihr geöffnet?', it: 'Quando siete aperti?', lad: 'Canche ëis davierts?', nl: 'Wanneer zijn jullie open?', fr: 'Quand êtes-vous ouvert ?', pl: 'Kiedy jesteście otwarci?', es: '¿Cuándo están abiertos?', cs: 'Kdy máte otevřeno?' },
  'faq.a6': {
    en: 'We operate Friday through Sunday, weather permitting. Contact us in advance to reserve your slot as helicopter availability is limited.',
    de: 'Wir operieren Freitag bis Sonntag, wetterabhängig. Kontaktiere uns im Voraus, da die Helikopterverfügbarkeit begrenzt ist.',
    it: 'Operiamo da venerdì a domenica, meteo permettendo. Contattaci in anticipo per prenotare poiché la disponibilità dell\'elicottero è limitata.',
    lad: 'Operons da vëndres a dumenia, tëmp permitënt. Contaté nes dant tëmp per prenota, la disponibilité dl elicòter é limiteda.',
    nl: 'Wij opereren van vrijdag tot zondag, weer afhankelijk. Neem van tevoren contact op om te reserveren, de beschikbaarheid is beperkt.',
    fr: 'Nous opérons du vendredi au dimanche, selon la météo. Contactez-nous à l\'avance pour réserver, la disponibilité de l\'hélicoptère est limitée.',
    pl: 'Działamy od piątku do niedzieli, zależnie od pogody. Skontaktuj się z wyprzedzeniem, aby zarezerwować miejsce — dostępność helikoptera jest ograniczona.',
    es: 'Operamos de viernes a domingo, según el clima. Contáctanos con antelación ya que la disponibilidad del helicóptero es limitada.',
    cs: 'Provozujeme od pátku do neděle, dle počasí. Kontaktujte nás předem pro rezervaci, dostupnost vrtulníku je omezená.'
  },

  // ---- NAVIGATION EXTRAS ----
  'nav.terms': { en: 'Terms', de: 'AGB', it: 'Termini', lad: 'Termins', nl: 'Voorwaarden', fr: 'Conditions', pl: 'Regulamin', es: 'Términos', cs: 'Podmínky' },
  'nav.shop': { en: 'Shop', de: 'Shop', it: 'Shop', lad: 'Shop', nl: 'Winkel', fr: 'Boutique', pl: 'Sklep', es: 'Tienda', cs: 'Obchod' },

  // ---- BOOKING MODAL ----
  'booking.title': { en: 'Reserve Your Flight', de: 'Flug reservieren', it: 'Prenota il tuo volo', lad: 'Prenota to volo', nl: 'Reserveer je vlucht', fr: 'Réservez votre vol', pl: 'Zarezerwuj lot', es: 'Reserva tu vuelo', cs: 'Rezervujte si let' },
  'booking.firstName': { en: 'First Name *', de: 'Vorname *', it: 'Nome *', lad: 'Inom *', nl: 'Voornaam *', fr: 'Prénom *', pl: 'Imię *', es: 'Nombre *', cs: 'Jméno *' },
  'booking.lastName': { en: 'Last Name *', de: 'Nachname *', it: 'Cognome *', lad: 'Cognom *', nl: 'Achternaam *', fr: 'Nom *', pl: 'Nazwisko *', es: 'Apellido *', cs: 'Příjmení *' },
  'booking.nickname': { en: 'Nickname (Publicly Visible on Load) *', de: 'Spitzname (öffentlich sichtbar am Load) *', it: 'Soprannome (visibile sul Load) *', lad: 'Surinom (visibel sö l Load) *', nl: 'Bijnaam (zichtbaar op Load) *', fr: 'Surnom (visible sur le Load) *', pl: 'Pseudonim (widoczny na Load) *', es: 'Apodo (visible en el Load) *', cs: 'Přezdívka (viditelná na Load) *' },
  'booking.email': { en: 'Email Address *', de: 'E-Mail-Adresse *', it: 'Indirizzo Email *', lad: 'Adresa Email *', nl: 'E-mailadres *', fr: 'Adresse e-mail *', pl: 'Adres e-mail *', es: 'Correo electrónico *', cs: 'E-mailová adresa *' },
  'booking.phone': { en: 'Phone Number *', de: 'Telefonnummer *', it: 'Numero di telefono *', lad: 'Numer de telefon *', nl: 'Telefoonnummer *', fr: 'Numéro de téléphone *', pl: 'Numer telefonu *', es: 'Número de teléfono *', cs: 'Telefonní číslo *' },
  'booking.dob': { en: 'Date of Birth *', de: 'Geburtsdatum *', it: 'Data di nascita *', lad: 'Data de nascita *', nl: 'Geboortedatum *', fr: 'Date de naissance *', pl: 'Data urodzenia *', es: 'Fecha de nacimiento *', cs: 'Datum narození *' },
  'booking.birthplace': { en: 'Place of Birth *', de: 'Geburtsort *', it: 'Luogo di nascita *', lad: 'Luech de nascita *', nl: 'Geboorteplaats *', fr: 'Lieu de naissance *', pl: 'Miejsce urodzenia *', es: 'Lugar de nacimiento *', cs: 'Místo narození *' },
  'booking.address': { en: 'Full Address *', de: 'Vollständige Adresse *', it: 'Indirizzo completo *', lad: 'Adresa completa *', nl: 'Volledig adres *', fr: 'Adresse complète *', pl: 'Pełny adres *', es: 'Dirección completa *', cs: 'Úplná adresa *' },
  'booking.emergency': { en: 'Emergency Contact *', de: 'Notfallkontakt *', it: 'Contatto di emergenza *', lad: 'Contat de emergënza *', nl: 'Noodcontact *', fr: 'Contact d\'urgence *', pl: 'Kontakt awaryjny *', es: 'Contacto de emergencia *', cs: 'Nouzový kontakt *' },
  'booking.licenseCountry': { en: 'License Country *', de: 'Lizenzland *', it: 'Paese licenza *', lad: 'Paeje de lizënza *', nl: 'Licentieland *', fr: 'Pays de licence *', pl: 'Kraj licencji *', es: 'País de licencia *', cs: 'Země licence *' },
  'booking.licenseNumber': { en: 'License Number *', de: 'Lizenznummer *', it: 'Numero licenza *', lad: 'Numer de lizënza *', nl: 'Licentienummer *', fr: 'Numéro de licence *', pl: 'Numer licencji *', es: 'Número de licencia *', cs: 'Číslo licence *' },
  'booking.insurance': {
    en: 'I confirm that I possess a valid third-party liability insurance for skydiving/base jumping (e.g. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). I will present this on-site.',
    de: 'Ich bestätige, dass ich eine gültige Haftpflichtversicherung für Fallschirmspringen/Base Jumping besitze (z.B. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). Ich werde diese vor Ort vorlegen.',
    it: 'Confermo di possedere un\'assicurazione di responsabilità civile valida per paracadutismo/base jumping (es. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). La presenterò in loco.',
    lad: 'Confermëie de avëi na assicurazion valida per paracadutism/base jumping (p.ej. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). La presenterai sö l post.',
    nl: 'Ik bevestig dat ik een geldige aansprakelijkheidsverzekering bezit voor skydiven/base jumping (bijv. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). Ik toon deze ter plaatse.',
    fr: 'Je confirme posséder une assurance responsabilité civile valide pour le parachutisme/base jump (ex. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). Je la présenterai sur place.',
    pl: 'Potwierdzam, że posiadam ważne ubezpieczenie OC dla skoków spadochronowych/base jumping (np. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). Przedstawię je na miejscu.',
    es: 'Confirmo que poseo un seguro de responsabilidad civil válido para paracaidismo/salto BASE (ej. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). Lo presentaré en el lugar.',
    cs: 'Potvrzuji, že mám platné pojištění odpovědnosti pro seskoky/base jumping (např. <a href="https://www.pianetavolo.it" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">pianetavolo.it</a>). Předložím ho na místě.'
  },
  'booking.terms': {
    en: 'I have read and accept the <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Terms & Conditions</a>, including the cancellation policy, mandatory Friday briefing, and the 50 € missed-briefing penalty.',
    de: 'Ich habe die <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">AGB</a> gelesen und akzeptiere diese, einschließlich der Stornierungsrichtlinie, des verpflichtenden Freitag-Briefings und der 50 € Strafe bei versäumtem Briefing.',
    it: 'Ho letto e accetto i <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Termini e Condizioni</a>, inclusa la politica di cancellazione, il briefing obbligatorio del venerdì e la penale di 50 € per briefing mancato.',
    lad: 'Ëi liesjù y acetëie i <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Termins y Condiziuns</a>, inclus la politica de stornazion y la strafa de 50 € per briefing falé.',
    nl: 'Ik heb de <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Algemene Voorwaarden</a> gelezen en geaccepteerd, inclusief het annuleringsbeleid, de verplichte vrijdagbriefing en de boete van 50 €.',
    fr: 'J\'ai lu et j\'accepte les <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Conditions Générales</a>, y compris la politique d\'annulation, le briefing obligatoire du vendredi et la pénalité de 50 €.',
    pl: 'Przeczytałem/am i akceptuję <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Regulamin</a>, w tym politykę anulowania, obowiązkowy piątkowy briefing i karę 50 € za nieobecność.',
    es: 'He leído y acepto los <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Términos y Condiciones</a>, incluyendo la política de cancelación, el briefing obligatorio del viernes y la penalización de 50 €.',
    cs: 'Přečetl/a jsem si a souhlasím s <a href="terms.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;">Obchodními podmínkami</a>, včetně storno podmínek, povinného pátečního briefingu a pokuty 50 €.'
  },
  'booking.submit': { en: 'Proceed to Secure Checkout (0.00€)', de: 'Weiter zur sicheren Kasse (0,00€)', it: 'Procedi al checkout sicuro (0,00€)', lad: 'Va inant al checkout sigü (0,00€)', nl: 'Doorgaan naar veilige checkout (0,00€)', fr: 'Passer à la caisse sécurisée (0,00€)', pl: 'Przejdź do bezpiecznej kasy (0,00€)', es: 'Proceder al pago seguro (0,00€)', cs: 'Pokračovat k bezpečné pokladně (0,00€)' },

  // ---- FLIGHT CARDS (dynamic, rendered by supabase-client.js) ----
  'fc.person': { en: 'Person', de: 'Person', it: 'Persona', lad: 'Persona', nl: 'Persoon', fr: 'Personne', pl: 'Osoba', es: 'Persona', cs: 'Osoba' },
  'fc.people': { en: 'People', de: 'Personen', it: 'Persone', lad: 'Persones', nl: 'Personen', fr: 'Personnes', pl: 'Osób', es: 'Personas', cs: 'Osob' },
  'fc.open': { en: 'open', de: 'frei', it: 'libero', lad: 'liede', nl: 'vrij', fr: 'libre', pl: 'wolne', es: 'libre', cs: 'volné' },
  'fc.locked': { en: 'Locked (Load 1 First)', de: 'Gesperrt (Load 1 zuerst)', it: 'Bloccato (Load 1 prima)', lad: 'Blocà (Load 1 danfora)', nl: 'Vergrendeld (Load 1 eerst)', fr: 'Verrouillé (Load 1 d\'abord)', pl: 'Zablokowany (Load 1 najpierw)', es: 'Bloqueado (Load 1 primero)', cs: 'Zamčeno (Load 1 nejdříve)' },
  'fc.full': { en: 'Full', de: 'Voll', it: 'Pieno', lad: 'Plën', nl: 'Vol', fr: 'Complet', pl: 'Pełny', es: 'Completo', cs: 'Plný' },
  'fc.filling': { en: 'Filling Fast', de: 'Füllt sich schnell', it: 'Si riempie velocemente', lad: 'Se implenësc svelt', nl: 'Vult snel', fr: 'Se remplit vite', pl: 'Szybko się zapełnia', es: 'Llenándose rápido', cs: 'Rychle se plní' },
  'fc.bookingOpen': { en: 'Booking Open', de: 'Buchung offen', it: 'Prenotazione aperta', lad: 'Prenotazion daverta', nl: 'Boeken open', fr: 'Réservation ouverte', pl: 'Rezerwacja otwarta', es: 'Reserva abierta', cs: 'Rezervace otevřena' },
  'fc.new': { en: 'New', de: 'Neu', it: 'Nuovo', lad: 'Nü', nl: 'Nieuw', fr: 'Nouveau', pl: 'Nowy', es: 'Nuevo', cs: 'Nový' },
  'fc.heliRotation': { en: 'Helicopter Rotation', de: 'Helikopter-Rotation', it: 'Rotazione elicottero', lad: 'Rotazion elicòter', nl: 'Helikopterrotatie', fr: 'Rotation hélicoptère', pl: 'Rotacja helikoptera', es: 'Rotación helicóptero', cs: 'Rotace vrtulníku' },
  'fc.of': { en: 'of', de: 'von', it: 'di', lad: 'de', nl: 'van', fr: 'sur', pl: 'z', es: 'de', cs: 'z' },
  'fc.seatsBooked': { en: 'Seats Booked', de: 'Plätze gebucht', it: 'Posti prenotati', lad: 'Posć prenotei', nl: 'Plaatsen geboekt', fr: 'Places réservées', pl: 'Miejsc zarezerwowanych', es: 'Asientos reservados', cs: 'Míst zarezervováno' },
  'fc.currentPrice': { en: 'Current Price', de: 'Aktueller Preis', it: 'Prezzo attuale', lad: 'Priesc atuel', nl: 'Huidige prijs', fr: 'Prix actuel', pl: 'Aktualna cena', es: 'Precio actual', cs: 'Aktuální cena' },
  'fc.perPerson': { en: '/ person', de: '/ Person', it: '/ persona', lad: '/ persona', nl: '/ persoon', fr: '/ personne', pl: '/ osobę', es: '/ persona', cs: '/ osobu' },
  'fc.secureSpot': { en: 'Secure Spot: 0,00 € Card Hold', de: 'Platz sichern: 0,00 € Kartenreservierung', it: 'Assicura il posto: 0,00 € blocco carta', lad: 'Assicura l post: 0,00 € bloc de ciarta', nl: 'Plek reserveren: 0,00 € kaartreservering', fr: 'Réserver place: 0,00 € retenue carte', pl: 'Zarezerwuj: 0,00 € blokada karty', es: 'Asegurar plaza: 0,00 € retención tarjeta', cs: 'Zajistit místo: 0,00 € blokace karty' },
  'fc.balanceText': { en: 'Balance paid on-site. SetupIntent authorizes card.', de: 'Restbetrag vor Ort. SetupIntent autorisiert Karte.', it: 'Saldo in loco. SetupIntent autorizza la carta.', lad: 'Saldo sö l post. SetupIntent autorisëia la ciarta.', nl: 'Resterend ter plaatse. SetupIntent autoriseert kaart.', fr: 'Solde sur place. SetupIntent autorise la carte.', pl: 'Reszta na miejscu. SetupIntent autoryzuje kartę.', es: 'Saldo en el lugar. SetupIntent autoriza tarjeta.', cs: 'Doplatek na místě. SetupIntent autorizuje kartu.' },
  'fc.reserveBtn': { en: 'Reserve Seat (0.00€ Hold)', de: 'Platz reservieren (0,00€ Halten)', it: 'Prenota posto (0,00€ blocco)', lad: 'Prenota post (0,00€ bloc)', nl: 'Reserveer plek (0,00€ hold)', fr: 'Réserver place (0,00€ retenue)', pl: 'Zarezerwuj (0,00€ blokada)', es: 'Reservar asiento (0,00€ retención)', cs: 'Rezervovat (0,00€ blokace)' },
  'fc.fullyBooked': { en: 'Fully Booked', de: 'Ausgebucht', it: 'Tutto esaurito', lad: 'Dut esaurì', nl: 'Volgeboekt', fr: 'Complet', pl: 'Wyprzedane', es: 'Agotado', cs: 'Obsazeno' },
  'fc.lockedBtn': { en: 'Locked', de: 'Gesperrt', it: 'Bloccato', lad: 'Blocà', nl: 'Vergrendeld', fr: 'Verrouillé', pl: 'Zablokowany', es: 'Bloqueado', cs: 'Zamčeno' },
  'fc.emptyTitle': { en: 'No upcoming jumps scheduled', de: 'Keine kommenden Sprünge geplant', it: 'Nessun salto in programma', lad: 'Nia sauc en programa', nl: 'Geen sprongen gepland', fr: 'Aucun saut prévu', pl: 'Brak zaplanowanych skoków', es: 'No hay saltos programados', cs: 'Žádné naplánované seskoky' },
  'fc.emptyText': { en: 'Check back soon or contact us via WhatsApp to be notified when the next helicopter jump is announced.', de: 'Schau bald wieder vorbei oder kontaktiere uns via WhatsApp, um benachrichtigt zu werden.', it: 'Torna presto o contattaci via WhatsApp per essere avvisato.', lad: 'Torna prest o contaté nes via WhatsApp.', nl: 'Kom snel terug of neem contact op via WhatsApp.', fr: 'Revenez bientôt ou contactez-nous via WhatsApp.', pl: 'Wracaj wkrótce lub skontaktuj się przez WhatsApp.', es: 'Vuelve pronto o contáctanos por WhatsApp.', cs: 'Vraťte se brzy nebo nás kontaktujte přes WhatsApp.' },
  'fc.contactUs': { en: 'Contact Us', de: 'Kontakt', it: 'Contattaci', lad: 'Contaté nes', nl: 'Contact', fr: 'Contactez-nous', pl: 'Kontakt', es: 'Contacto', cs: 'Kontaktujte nás' },

  // ---- UPCOMING SECTION ----
  'upcoming.label': { en: 'Live Availability', de: 'Live-Verfügbarkeit', it: 'Disponibilità live', lad: 'Disponibilité live', nl: 'Live beschikbaarheid', fr: 'Disponibilité en direct', pl: 'Dostępność na żywo', es: 'Disponibilidad en vivo', cs: 'Živá dostupnost' },
  'upcoming.title': { en: 'Upcoming Jumps', de: 'Kommende Sprünge', it: 'Prossimi salti', lad: 'Sauc che vegn', nl: 'Aankomende sprongen', fr: 'Prochains sauts', pl: 'Nadchodzące skoki', es: 'Próximos saltos', cs: 'Nadcházející seskoky' },
  'upcoming.subtitle': { en: 'Secure your spot with a deposit. Prices drop as more skydivers join a flight!', de: 'Sichere deinen Platz mit einer Anzahlung. Preise sinken, wenn mehr Springer mitmachen!', it: 'Assicura il tuo posto con un deposito. I prezzi scendono con più partecipanti!', lad: 'Assicura to post cun n deposit. I priesc calëia cun plü partezipanc!', nl: 'Reserveer je plek met een aanbetaling. Prijzen dalen naarmate meer skydivers meedoen!', fr: 'Réservez votre place avec un acompte. Les prix baissent avec plus de participants !', pl: 'Zarezerwuj miejsce zaliczką. Ceny spadają z każdym kolejnym skoczkiem!', es: '¡Asegura tu plaza con un depósito. Los precios bajan con más participantes!', cs: 'Zajistěte si místo zálohou. Ceny klesají s každým dalším parašutistou!' },
  'upcoming.hiw.title': { en: 'How Group Pricing Works', de: 'So funktioniert Gruppenpricing', it: 'Come funziona il prezzo di gruppo', lad: 'Coche funzionëia l priesc de grupe', nl: 'Hoe groepsprijzen werken', fr: 'Comment fonctionne le tarif groupe', pl: 'Jak działają ceny grupowe', es: 'Cómo funcionan los precios grupales', cs: 'Jak fungují skupinové ceny' },
  'upcoming.hiw.step1.title': { en: 'Secure with Deposit', de: 'Mit Anzahlung sichern', it: 'Assicura con deposito', lad: 'Assicura cun deposit', nl: 'Reserveer met aanbetaling', fr: 'Réservez avec acompte', pl: 'Zarezerwuj zaliczką', es: 'Asegura con depósito', cs: 'Zajistěte zálohou' },
  'upcoming.hiw.step1.text': { en: 'Pay a fixed 500€ deposit online via Stripe to guarantee your seat.', de: 'Zahle eine feste 500€ Anzahlung online via Stripe, um deinen Platz zu garantieren.', it: 'Paga un deposito fisso di 500€ online via Stripe per garantire il tuo posto.', lad: 'Paia n deposit de 500€ online via Stripe per garantì to post.', nl: 'Betaal een vaste aanbetaling van 500€ online via Stripe.', fr: 'Payez un acompte fixe de 500€ en ligne via Stripe.', pl: 'Zapłać stałą zaliczkę 500€ online przez Stripe.', es: 'Paga un depósito fijo de 500€ online vía Stripe.', cs: 'Zaplaťte zálohu 500€ online přes Stripe.' },
  'upcoming.hiw.step2.title': { en: 'Bring Friends, Lower Price', de: 'Freunde mitbringen, Preis senken', it: 'Porta amici, prezzo più basso', lad: 'Porta amics, priesc plu bas', nl: 'Breng vrienden mee, lagere prijs', fr: 'Amenez des amis, prix réduit', pl: 'Przyprowadź znajomych, niższa cena', es: 'Trae amigos, precio más bajo', cs: 'Přiveďte přátele, nižší cena' },
  'upcoming.hiw.step2.text': { en: 'The total 3,000€ helicopter cost splits equally across all booked participants.', de: 'Die 3.000€ Helikopterkosten werden gleichmäßig auf alle gebuchten Teilnehmer aufgeteilt.', it: 'Il costo totale di 3.000€ dell\'elicottero viene diviso equamente tra tutti i partecipanti.', lad: 'L cost total de 3.000€ dl elicòter vën dividì cumpaniëus tra duc i partezipanc.', nl: 'De totale helikopterkosten van 3.000€ worden gelijk verdeeld over alle deelnemers.', fr: 'Le coût total de 3 000€ de l\'hélicoptère est réparti entre tous les participants.', pl: 'Całkowity koszt 3 000€ helikoptera dzielony jest równo między wszystkich uczestników.', es: 'El coste total de 3.000€ del helicóptero se divide entre todos los participantes.', cs: 'Celkové náklady 3 000€ na vrtulník se rovnoměrně rozdělí.' },
  'upcoming.hiw.step3.title': { en: 'Pay Balance On-Site', de: 'Restbetrag vor Ort zahlen', it: 'Saldo in loco', lad: 'Saldo sö l post', nl: 'Resterend ter plaatse', fr: 'Solde sur place', pl: 'Dopłata na miejscu', es: 'Saldo en el lugar', cs: 'Doplatek na místě' },
  'upcoming.hiw.step3.text': { en: 'If 4 people jump, you only pay the 250€ balance on site (750€ total).', de: 'Bei 4 Springern zahlst du nur noch 250€ Restbetrag vor Ort (750€ gesamt).', it: 'Con 4 partecipanti paghi solo 250€ di saldo in loco (750€ totale).', lad: 'Cun 4 partezipanc paiëies mec 250€ de saldo sö l post (750€ total).', nl: 'Met 4 springers betaal je slechts 250€ ter plaatse (750€ totaal).', fr: 'Avec 4 sauteurs, vous ne payez que 250€ sur place (750€ au total).', pl: 'Przy 4 skoczkach płacisz tylko 250€ na miejscu (750€ łącznie).', es: 'Con 4 saltadores solo pagas 250€ en el lugar (750€ total).', cs: 'Při 4 parašutistech zaplatíte na místě jen 250€ (750€ celkem).' },

  // ---- SPLIT EMERGENCY CONTACT FIELDS ----
  'booking.emergencyName': { en: 'Emergency Contact Name *', de: 'Notfallkontakt Name *', it: 'Contatto di emergenza *', lad: 'Contat d\'emergënza Inuem *', nl: 'Noodcontact Naam *', fr: 'Contact d\'urgence Nom *', pl: 'Kontakt awaryjny Imię *', es: 'Contacto de emergencia Nombre *', cs: 'Nouzový kontakt Jméno *' },
  'booking.emergencyPhone': { en: 'Emergency Phone *', de: 'Notfallnummer *', it: 'Telefono emergenza *', lad: 'Telefon d\'emergënza *', nl: 'Noodnummer *', fr: 'Téléphone d\'urgence *', pl: 'Telefon awaryjny *', es: 'Teléfono de emergencia *', cs: 'Nouzový telefon *' },
  'booking.emergencyNamePh': { en: 'Full name', de: 'Vollständiger Name', it: 'Nome completo', lad: 'Inuem complet', nl: 'Volledige naam', fr: 'Nom complet', pl: 'Imię i nazwisko', es: 'Nombre completo', cs: 'Celé jméno' },
  'booking.emergencyPhonePh': { en: '+43 660 1234567', de: '+43 660 1234567', it: '+39 340 1234567', lad: '+39 340 1234567', nl: '+31 6 12345678', fr: '+33 6 12345678', pl: '+48 600 123456', es: '+34 600 123456', cs: '+420 600 123456' },

  // ---- TOOLTIP HINTS ----
  'tooltip.nickname': { en: 'Your nickname will be publicly visible on the flight card so other skydivers can see who\'s on their load.', de: 'Dein Nickname wird öffentlich auf der Flight Card angezeigt, damit andere Springer sehen, wer im selben Load ist.', it: 'Il tuo nickname sarà visibile pubblicamente sulla flight card.', lad: 'To nickname vën musciá publicamënter söla flight card.', nl: 'Je nickname wordt openbaar getoond op de vluchtkaart.', fr: 'Votre pseudo sera visible publiquement sur la carte de vol.', pl: 'Twój pseudonim będzie publicznie widoczny na karcie lotu.', es: 'Tu apodo será visible públicamente en la tarjeta de vuelo.', cs: 'Vaše přezdívka bude veřejně viditelná na letové kartě.' },
  'tooltip.emergency': { en: 'Person to contact in case of an emergency (e.g. family member, partner).', de: 'Person, die im Notfall kontaktiert werden soll (z.B. Familienmitglied, Partner).', it: 'Persona da contattare in caso di emergenza (es. familiare, partner).', lad: 'Persona da contaté en caji d\'emergënza.', nl: 'Persoon om te contacteren bij een noodgeval.', fr: 'Personne à contacter en cas d\'urgence.', pl: 'Osoba do kontaktu w nagłym wypadku.', es: 'Persona a contactar en caso de emergencia.', cs: 'Osoba ke kontaktování v nouzovém případě.' },
  'tooltip.licenseCountry': { en: 'Country that issued your skydiving license (e.g. IT, DE, AT, US).', de: 'Land, das deine Fallschirmspringerlizenz ausgestellt hat (z.B. IT, DE, AT, US).', it: 'Paese che ha rilasciato la tua licenza (es. IT, DE, AT, US).', lad: 'Paeje che à dé fora tua licënza (es. IT, DE, AT, US).', nl: 'Land dat je skydive-licentie heeft uitgegeven.', fr: 'Pays ayant délivré votre licence de parachutisme.', pl: 'Kraj, który wydał twoją licencję spadochronową.', es: 'País que emitió tu licencia de paracaidismo.', cs: 'Země, která vydala vaši parašutistickou licenci.' },
  'tooltip.licenseNumber': { en: 'Your skydiving license number (USPA B-license or equivalent, min. 100 jumps required).', de: 'Deine Fallschirmspringer-Lizenznummer (USPA B-Lizenz oder gleichwertig, min. 100 Sprünge).', it: 'Numero licenza di paracadutismo (USPA B-license o equivalente, min. 100 lanci).', lad: 'Numer de licënza (USPA B-license o ecuivalënt, min. 100 sauc).', nl: 'Je skydive-licentienummer (USPA B-licentie of gelijkwaardig, min. 100 sprongen).', fr: 'Numéro de licence de parachutisme (USPA B-license ou équivalent, min. 100 sauts).', pl: 'Numer licencji spadochronowej (USPA B-license lub równoważna, min. 100 skoków).', es: 'Número de licencia de paracaidismo (USPA B-license o equivalente, mín. 100 saltos).', cs: 'Číslo parašutistické licence (USPA B-licence nebo ekvivalent, min. 100 seskoků).' }
};
