# Alpine Digital Agency (Time to Jump Dolomites) — Aktueller Projektstatus
> Letztes Update: 27.04.2026 — Telefonat-Umsetzung, Content-Korrektur, Logo-Update, Media-Input

## Aktueller Fokus
- **Telefonat-Umsetzung (27.04.2026)**: 19 Action Items aus 40-Min-Telefonat mit David identifiziert; 7 Sofort-Maßnahmen (Batch 1-3) umgesetzt.
- **Media-Integration**: Davids Logo eingebunden. Hero-Bild (5er Stern-Formation) und About-Bild (64.jpg ausgebessert) ausstehend (KI-Generierung).

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
- **Stripe-Integration**: Checkout funktional scaffolded, aber inoperabel bis David **Stripe Business Account** einrichtet.
- **FormSubmit.co**: E-Mail-Validierung steht noch aus (Client-Aktion).
- **Hero-Bild & About-Bild**: KI-Generierung (5er Stern-Formation + 64.jpg-Verbesserung) ausstehend — Bilder müssen als `img/hero.jpg` und `img/about.png` eingesetzt werden.
- (Gelöst) Supabase Schema muss weiterhin MANUELL im Dashboard ausgeführt werden (`20260410_init_dolomites.sql`).

## Nächste Schritte
1. [x] Supabase Tabellen `events` & `bookings` inkl. RLS Policies anlegen (SQL erstellt).
2. [x] Stripe Hosted Checkout Backend-Weiche (Edge Function) implementieren.
3. [x] Frontend `index.html` an Live-Datenbank anbinden (Glassmorphism Modal, Nickname Pills, Scarcity-UI gebaut).
4. [x] Booking Modal: Vollständige i18n mit `data-i18n` und `data-i18n-html` Attributen (9 Sprachen).
5. [x] Flight Cards: Dynamisch gerenderte Supabase-Karten vollständig lokalisiert (keine gemischten Sprachen).
6. [x] Language-Dropdown: Desktop + Mobile synchronisiert, kein doppelter Button mehr.
7. [x] Pricing: 10er Tickets (Pack Jobs + Rental) entfernt.
8. [ ] n8n Automatisierung an Supabase-Webhook anknuepfen fuer WhatsApp Benachrichtigung (-> Phase 2 Angebot).
9. [x] Emergency Contact in Name + Telefon aufgetrennt, Tooltip-Hints bei Formularfeldern.
10. [x] Navigation bereinigt: Shop/Blog/Events entfernt, Spruenge -> #upcoming.
11. [x] CSS-Fixes: Flight Card Kontrast, Button-Overflow, section--light Kontrast, DE DE Language-Display.
12. [x] AGB/Terms Headings i18n (Label, Heading, Updated).
13. [ ] AGB-Volltext in 9 Sprachen uebersetzen (Phase 2).
14. [x] Telefonat-Action-Items umgesetzt (Pricing, FAQ, Map, AGB, Equipment Rental, Logo).
15. [ ] Hero-Bild (5er Stern-Formation) und About-Bild (64.jpg) via KI generieren und einbinden.

## Session-Log
- **27.04.2026 (Telefonat-Umsetzung & Media)**: 40-Min-Telefonat mit David Prato transkribiert und bereinigt. 19 Action Items extrahiert, 7 Sofort-Maßnahmen in 3 Batches umgesetzt: (1) index.html — „2+ Loads" entfernt, Equipment Rental auf 2 Zeilen (100€+80€/Tag), Gruppenpreis-Texte generisch, Buchung nur über Plattform, FAQ Q3 ohne Elikos, neuer FAQ Q7 (Direktbuchung), Map mit Saslong + Mont de Côi. (2) terms.html — DolomitesFly/David Prato entfernt, Elikos generisiert. (3) translations.js — Alle betroffenen Keys in 9 Sprachen aktualisiert + 12 neue Keys. Logo von David eingebaut. Media-Input (Teamfotos) archiviert unter Korrespondenz/.
- **25.04.2026 (Abend - UX & CSS Bugfix Session)**: Emergency Contact aufgeteilt (Name + Telefon, zwei Felder). Tooltip-System implementiert (CSS-only data-tooltip mit ::after). Booking-Fehlerbehandlung verbessert (DE/EN Fehlermeldung). Navigation komplett bereinigt: Shop, Blog, Events entfernt; Spruenge -> #upcoming. Flight Card CSS gefixt: Titelkontrast, Button-Overflow. section--light Kontrast global gefixt. DE DE Sprachanzeige behoben (Flag-Emoji hidden). AGB Headings i18n. Alle Navs (index, terms, privacy) synchronisiert.
- **25.04.2026 (QA Test & Bugfix)**: Manueller End-to-End QA-Test ueber lokalen Server durchgefuehrt. Layout, i18n, Modal-Pflichtfelder und Pricing-Cleanups verifiziert. Bug gefunden (Flight Cards reagierten nicht dynamisch auf Sprachwechsel im Dropdown) und behoben durch globales Exposing von loadUpcomingJumps und Aufruf in setLanguage. Status: Bereit fuer Go-Live.
- **25.04.2026 (i18n & Pricing)**: B10 (10er Tickets entfernt), B15 (Language-Button doppelt → Multi-Dropdown-Architektur), B16/B17 (Adresse + Geburtsort im Booking Modal), R5 (Flight Cards i18n → keine gemischten Sprachen). 35+ neue Translation Keys (`fc.*`, `upcoming.*`, `booking.*`). Supabase-Client mit `t()` Helper refaktoriert. Sprachwechsel triggert Flight-Card-Re-Render.
- **22.04.2026 (Gap-Analyse & Modal)**: Faktenbasierte Gap-Analyse erstellt (Originalangebot 900€ vs. tatsächlicher Aufwand ~2.890€ Mehrleistung). Booking Modal mit `data-i18n`-Attributen versehen, neue Pflichtfelder (Geburtsdatum, Geburtsort, Adresse) implementiert. `data-i18n-html` Support in `applyTranslations()` eingebaut.
- **10.04.2026 (Fix & Audit)**: Fatalen Marketing-Fehler der Vorversion korrigiert (3.000 € -> echter Preis 775/825 € pro Load). "Book Now" Links wurden bereinigt und zwingen den User nun in unseren Stripe-Checkout-Flow, statt ihn an Elikos (Helikopterbetreiber) zu verlieren.
- **10.04.2026 (Phase 2)**: Umstellung auf "Stripe Hosted Checkout" (mode: setup) in der Edge Function, um Checkout sicherer und performanter zu gestalten (`success.html` implementiert). Frontend wurde mit Premium Glassmorphism und "Nick-Pills" aufgewertet. Cloudflare Push ausgelöst.
- **10.04.2026**: Evaluierung des DolomiteFly-Meetings mit der Geschäftsführung. Beschluss des Strategiewechsels: Abkehr von simplen Checkouts hin zu einem Supabase/Stripe gesteuerten System (`Phase 1` & `Phase 3` verschmolzen).
- **07.04.2026**: Initialisierung des Alpine Digital (Dolomites) Repositories mit vollem State-Management. Frontend-Erweiterung ("Flight Tracker" UI/UX) fertiggestellt und live auf GitHub `main` gepushed!
