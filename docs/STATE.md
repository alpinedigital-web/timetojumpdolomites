# Alpine Digital Agency (Time to Jump Dolomites) — Aktueller Projektstatus
> Letztes Update: 28.04.2026 — Full Website Audit abgeschlossen, 12 Fixes deployed

## Aktueller Fokus
- **Website Audit DONE (28.04.2026)**: 12 Code-Fixes deployed (HTML-Strukturfehler, SEO, UX, Navigation, Maps, Footer, Chat Widget). Verifiziert auf Live-Site.
- **Phase 2.1+2.2 DONE**: Supabase Schema, Edge Function, Frontend Integration, Gruppenbuchung.
- **Nächster Schritt**: translations.js Trust-Cue-Keys aktualisieren (`hero.trust.heli/unesco/days`), dann Phase 2.3 (n8n) oder Phase 3 (DNS).

## Entscheidungen
- **Payment Hold vs. Deposit**: Da reine Authorization-Holds bei Stripe auf 7 Tage begrenzt sind, wird die Karte hinterlegt. Belastungen (z.B. Strafen bei Verpassen des Briefings: 50 €) werden manuell ausgelöst. Zahlung des eigentlichen Flugs erfolgt vor Ort (Karte/Bar).
- **Sequenzielle Loads & Sichtbarkeit**: Helikopter 2 wird erst freigeschaltet, wenn Helikopter 1 (Load 1) voll ist (max. 5 Personen). Die Buchungsdatenbank (Supabase) ermöglicht die sichtbare Anzeige von Nicknames der Mitflieger, um Gruppen zu motivieren.
- **Wix Migration**: Langfristiges Ziel ist der Wegzug von Wix. Das Setup auf der neuen Architektur legt den Grundstein für den nativen Hosting-Wechsel im Juli 2026.
- **10er Tickets entfernt (25.04.2026)**: Pack-Job- und Rental-Bündel (10+1) aus dem Pricing entfernt — David hat die Entscheidung getroffen, diese nicht mehr anzubieten.
- **Keine n8n-Automatismen im aktuellen Scope (22.04.2026)**: Automatisierungen sind nicht im Originalangebot inkludiert. Werden perspektivisch als Phase-2-Angebot aufgenommen.
- **Shop/Blog deaktiviert (25.04.2026)**: Shop- und Blog-Sections samt Nav-Links entfernt. Events-Section durch direkten Link auf #upcoming (Spruenge) ersetzt.
- **AGB-Seite bleibt vorerst auf Englisch (25.04.2026)**: Nur Heading/Label sind mehrsprachig. Volluebersetzung der juristischen Paragraphen ist Phase-2-Scope.
- **Elikos-Referenz entfernt (27.04.2026)**: David will nicht, dass Kunden den Helikopterbetreiber direkt kontaktieren. Alle namentlichen Erwähnungen von „Elikos" wurden durch generische Formulierungen ersetzt.
- **Buchung nur über Plattform (27.04.2026)**: Keine WhatsApp/Telefon-Reservierung mehr. Alle Buchungen laufen ausschließlich über die Website.
- **Equipment Rental vereinfacht (27.04.2026)**: Statt 6 Einzelpreise nur noch 2 Zeilen: 100 €/Tag + 80 €/weiterer Tag. David regelt individuelle Absprachen direkt.
- **Dynamische Anzahlung (27.04.2026)**: Fester 500€-Deposit entfällt. Die Anzahlung entspricht dem anteiligen Helikopterkosten — technische Umsetzung in Phase 2.

## Blocker
- **DNS-Umschaltung**: Migration zur Produktionsdomain (`timetojumpdolomites.com`) blockiert bis **Aruba DNS-Zugangsdaten** von David geliefert werden.
- **Stripe-Integration**: Edge Function deployed und funktional, aber inoperabel bis David **Stripe Business Account** einrichtet und `STRIPE_SECRET_KEY` in Supabase Secrets hinterlegt.
- **FormSubmit.co**: E-Mail-Validierung steht noch aus (Client-Aktion).
- **Hero-Bild & About-Bild**: 6 KI-Varianten generiert (3× Hero, 3× About) in `business/media-input/generated/`. User muss finale Auswahl treffen.
- ~~(Gelöst) Supabase Schema manuell~~ → Migrationen laufen jetzt via MCP-Token direkt.

## Nächste Schritte
1. [x] Supabase Tabellen `events` & `bookings` inkl. RLS Policies anlegen.
2. [x] Stripe Hosted Checkout Backend-Weiche (Edge Function) implementieren.
3. [x] Frontend an Live-Datenbank anbinden (Glassmorphism Modal, Nickname Pills, Scarcity-UI).
4. [x] Booking Modal: Vollständige i18n (9 Sprachen).
5. [x] Flight Cards: Dynamisch gerenderte Supabase-Karten vollständig lokalisiert.
6. [x] Telefonat-Action-Items (Pricing, FAQ, Map, AGB, Equipment Rental, Logo).
7. [x] Phase 2 Schema: locations, pricing_rules, cancellations, group bookings.
8. [x] Edge Function (create-setup-intent) deployed mit Deposit-Berechnung + Short-Notice.
9. [x] Frontend auf events_enriched View umgestellt.
10. [x] Gruppenbuchungs-UI im Booking-Modal.
11. [ ] Hero-/About-Bild finale Auswahl treffen (6 Varianten liegen bereit).
12. [ ] n8n Automatisierung (Webhooks, E-Mails, Erinnerungen) — Phase 2.3.
13. [ ] AGB-Volltext in 9 Sprachen übersetzen.
14. [ ] DNS-Migration (Aruba → Cloudflare) — Phase 3.

## Session-Log
- **28.04.2026 (Full Website Audit — 12 Fixes)**: Kompletter Source-Code-Audit durchgeführt. 4 Blocker, 10 High-Impact, 11 Medium, 5 Low Issues identifiziert. 12 Code-Fixes sofort deployed: (B-01) Fehlendes `</section>` für #experience behoben. (H-01) Hero von 3 auf 2 CTAs reduziert. (H-02) Terms/Privacy aus Hauptnavigation in Footer verschoben. (H-05) Trust Cues auf „Licensed Skydivers Only“/„UNESCO World Heritage“/„Since 2022“ geändert (HTML-Fallback; translations.js Keys noch ausstehend). (H-08) Google Maps Embed-URLs mit echten Koordinaten statt Fake-Place-IDs. (H-09) OG Image Meta-Tag für Social Sharing. (M-01) Doppelter loadUpcomingJumps-Aufruf bei Sprachwechsel entfernt. (M-02) applyTranslations() erhält jetzt lang-Argument im Modal. (M-03) Chat Widget Text korrigiert. (M-04) Zeitzone vereinfacht auf CET/CEST. (M-05) Footer Copyright bereinigt. (M-08) Page Title Keyword-Stuffing behoben. (M-10) Step-4 reveal-delay korrigiert. (M-11) FormSubmit Redirect auf Produktions-URL.
- **28.04.2026 (Phase 1.7 Abschluss)**: Repository-Struktur bereinigt (Korrespondenz → business/), 6 KI-Bildvarianten generiert (3× Hero, 3× About), App-Link aus Navigation entfernt, Cloudflare Build-Output auf public/ konfiguriert.
- **28.04.2026 (AGB & Booking UX Sprint)**: Verbleibende Action Items aus Telefonat vom 27.04 implementiert: (1) terms.html — Hardcoded Preistabelle entfernt, §3.1a Short-Notice-Booking Klausel (<7 Tage = sofortige Vollzahlung, keine Stornierung), §4a Null-Toleranz Substanzenpolitik. (2) index.html/style.css — Amber-Warning-Banner im Booking-Modal für kurzfristige Buchungen. (3) supabase-client.js — data-event-date auf Reserve-Button, dynamische Anzeige der Warnbox basierend auf Tagesbereching. (4) translations.js — `booking.shortNoticeTitle`/`booking.shortNoticeText` in 9 Sprachen. (5) ROADMAP.md — Phase 2 Items aus Telefonat ergänzt (Dynamische Preisberechnung, Multi-Standort DB, Sequenzielle Load-Logik).
- **27.04.2026 (Telefonat-Umsetzung & Media)**: 40-Min-Telefonat mit David Prato transkribiert und bereinigt. 19 Action Items extrahiert, 7 Sofort-Maßnahmen in 3 Batches umgesetzt: (1) index.html — „2+ Loads" entfernt, Equipment Rental auf 2 Zeilen (100€+80€/Tag), Gruppenpreis-Texte generisch, Buchung nur über Plattform, FAQ Q3 ohne Elikos, neuer FAQ Q7 (Direktbuchung), Map mit Saslong + Mont de Côi. (2) terms.html — DolomitesFly/David Prato entfernt, Elikos generisiert. (3) translations.js — Alle betroffenen Keys in 9 Sprachen aktualisiert + 12 neue Keys. Logo von David eingebaut. Media-Input (Teamfotos) archiviert unter Korrespondenz/.
- **25.04.2026 (Abend - UX & CSS Bugfix Session)**: Emergency Contact aufgeteilt (Name + Telefon, zwei Felder). Tooltip-System implementiert (CSS-only data-tooltip mit ::after). Booking-Fehlerbehandlung verbessert (DE/EN Fehlermeldung). Navigation komplett bereinigt: Shop, Blog, Events entfernt; Spruenge -> #upcoming. Flight Card CSS gefixt: Titelkontrast, Button-Overflow. section--light Kontrast global gefixt. DE DE Sprachanzeige behoben (Flag-Emoji hidden). AGB Headings i18n. Alle Navs (index, terms, privacy) synchronisiert.
- **25.04.2026 (QA Test & Bugfix)**: Manueller End-to-End QA-Test ueber lokalen Server durchgefuehrt. Layout, i18n, Modal-Pflichtfelder und Pricing-Cleanups verifiziert. Bug gefunden (Flight Cards reagierten nicht dynamisch auf Sprachwechsel im Dropdown) und behoben durch globales Exposing von loadUpcomingJumps und Aufruf in setLanguage. Status: Bereit fuer Go-Live.
- **25.04.2026 (i18n & Pricing)**: B10 (10er Tickets entfernt), B15 (Language-Button doppelt → Multi-Dropdown-Architektur), B16/B17 (Adresse + Geburtsort im Booking Modal), R5 (Flight Cards i18n → keine gemischten Sprachen). 35+ neue Translation Keys (`fc.*`, `upcoming.*`, `booking.*`). Supabase-Client mit `t()` Helper refaktoriert. Sprachwechsel triggert Flight-Card-Re-Render.
- **22.04.2026 (Gap-Analyse & Modal)**: Faktenbasierte Gap-Analyse erstellt (Originalangebot 900€ vs. tatsächlicher Aufwand ~2.890€ Mehrleistung). Booking Modal mit `data-i18n`-Attributen versehen, neue Pflichtfelder (Geburtsdatum, Geburtsort, Adresse) implementiert. `data-i18n-html` Support in `applyTranslations()` eingebaut.
- **10.04.2026 (Fix & Audit)**: Fatalen Marketing-Fehler der Vorversion korrigiert (3.000 € -> echter Preis 775/825 € pro Load). "Book Now" Links wurden bereinigt und zwingen den User nun in unseren Stripe-Checkout-Flow, statt ihn an Elikos (Helikopterbetreiber) zu verlieren.
- **10.04.2026 (Phase 2)**: Umstellung auf "Stripe Hosted Checkout" (mode: setup) in der Edge Function, um Checkout sicherer und performanter zu gestalten (`success.html` implementiert). Frontend wurde mit Premium Glassmorphism und "Nick-Pills" aufgewertet. Cloudflare Push ausgelöst.
- **10.04.2026**: Evaluierung des DolomiteFly-Meetings mit der Geschäftsführung. Beschluss des Strategiewechsels: Abkehr von simplen Checkouts hin zu einem Supabase/Stripe gesteuerten System (`Phase 1` & `Phase 3` verschmolzen).
- **07.04.2026**: Initialisierung des Alpine Digital (Dolomites) Repositories mit vollem State-Management. Frontend-Erweiterung ("Flight Tracker" UI/UX) fertiggestellt und live auf GitHub `main` gepushed!
