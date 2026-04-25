# Alpine Digital Agency (Time to Jump Dolomites) — Aktueller Projektstatus
> Letztes Update: 25.04.2026 — Booking Modal i18n (9 Sprachen), Flight Card Lokalisierung, Pricing-Bereinigung

## Aktueller Fokus
- **Internationalisierung (i18n)**: Vollständige Lokalisierung der gesamten Website inkl. dynamisch gerenderter Flight Cards (Supabase) in 9 Sprachen (EN, DE, IT, LAD, NL, FR, PL, ES, CS).
- **Booking Modal Extension**: Erweiterung des Buchungsformulars um Geburtsort, vollständige Adresse und Geburtsdatum gemäß Besuchsbericht vom 07.04.

## Entscheidungen
- **Payment Hold vs. Deposit**: Da reine Authorization-Holds bei Stripe auf 7 Tage begrenzt sind, wird die Karte hinterlegt. Belastungen (z.B. Strafen bei Verpassen des Briefings: 50 €) werden manuell ausgelöst. Zahlung des eigentlichen Flugs erfolgt vor Ort (Karte/Bar).
- **Sequenzielle Loads & Sichtbarkeit**: Helikopter 2 wird erst freigeschaltet, wenn Helikopter 1 (Load 1) voll ist (max. 5 Personen). Die Buchungsdatenbank (Supabase) ermöglicht die sichtbare Anzeige von Nicknames der Mitflieger, um Gruppen zu motivieren.
- **Wix Migration**: Langfristiges Ziel ist der Wegzug von Wix. Das Setup auf der neuen Architektur legt den Grundstein für den nativen Hosting-Wechsel im Juli 2026.
- **10er Tickets entfernt (25.04.2026)**: Pack-Job- und Rental-Bündel (10+1) aus dem Pricing entfernt — David hat die Entscheidung getroffen, diese nicht mehr anzubieten.
- **Keine n8n-Automatismen im aktuellen Scope (22.04.2026)**: Automatisierungen sind nicht im Originalangebot inkludiert. Werden perspektivisch als Phase-2-Angebot aufgenommen.

## Blocker
- **DNS-Umschaltung**: Migration zur Produktionsdomain (`timetojumpdolomites.com`) blockiert bis **Aruba DNS-Zugangsdaten** von David geliefert werden.
- **Stripe-Integration**: Checkout funktional scaffolded, aber inoperabel bis David **Stripe Business Account** einrichtet.
- **FormSubmit.co**: E-Mail-Validierung steht noch aus (Client-Aktion).
- (Gelöst) Supabase Schema muss weiterhin MANUELL im Dashboard ausgeführt werden (`20260410_init_dolomites.sql`).

## Nächste Schritte
1. [x] Supabase Tabellen `events` & `bookings` inkl. RLS Policies anlegen (SQL erstellt).
2. [x] Stripe Hosted Checkout Backend-Weiche (Edge Function) implementieren.
3. [x] Frontend `index.html` an Live-Datenbank anbinden (Glassmorphism Modal, Nickname Pills, Scarcity-UI gebaut).
4. [x] Booking Modal: Vollständige i18n mit `data-i18n` und `data-i18n-html` Attributen (9 Sprachen).
5. [x] Flight Cards: Dynamisch gerenderte Supabase-Karten vollständig lokalisiert (keine gemischten Sprachen).
6. [x] Language-Dropdown: Desktop + Mobile synchronisiert, kein doppelter Button mehr.
7. [x] Pricing: 10er Tickets (Pack Jobs + Rental) entfernt.
8. [ ] n8n Automatisierung an Supabase-Webhook anknüpfen für WhatsApp Benachrichtigung (→ Phase 2 Angebot).

## Session-Log
- **25.04.2026 (QA Test & Bugfix)**: Manueller End-to-End QA-Test über lokalen Server durchgeführt. Layout, i18n, Modal-Pflichtfelder und Pricing-Cleanups verifiziert. Bug gefunden (Flight Cards reagierten nicht dynamisch auf Sprachwechsel im Dropdown) und behoben durch globales Exposing von `loadUpcomingJumps` und Aufruf in `setLanguage`. Status: Bereit für Go-Live.
- **25.04.2026 (i18n & Pricing)**: B10 (10er Tickets entfernt), B15 (Language-Button doppelt → Multi-Dropdown-Architektur), B16/B17 (Adresse + Geburtsort im Booking Modal), R5 (Flight Cards i18n → keine gemischten Sprachen). 35+ neue Translation Keys (`fc.*`, `upcoming.*`, `booking.*`). Supabase-Client mit `t()` Helper refaktoriert. Sprachwechsel triggert Flight-Card-Re-Render.
- **22.04.2026 (Gap-Analyse & Modal)**: Faktenbasierte Gap-Analyse erstellt (Originalangebot 900€ vs. tatsächlicher Aufwand ~2.890€ Mehrleistung). Booking Modal mit `data-i18n`-Attributen versehen, neue Pflichtfelder (Geburtsdatum, Geburtsort, Adresse) implementiert. `data-i18n-html` Support in `applyTranslations()` eingebaut.
- **10.04.2026 (Fix & Audit)**: Fatalen Marketing-Fehler der Vorversion korrigiert (3.000 € -> echter Preis 775/825 € pro Load). "Book Now" Links wurden bereinigt und zwingen den User nun in unseren Stripe-Checkout-Flow, statt ihn an Elikos (Helikopterbetreiber) zu verlieren.
- **10.04.2026 (Phase 2)**: Umstellung auf "Stripe Hosted Checkout" (mode: setup) in der Edge Function, um Checkout sicherer und performanter zu gestalten (`success.html` implementiert). Frontend wurde mit Premium Glassmorphism und "Nick-Pills" aufgewertet. Cloudflare Push ausgelöst.
- **10.04.2026**: Evaluierung des DolomiteFly-Meetings mit der Geschäftsführung. Beschluss des Strategiewechsels: Abkehr von simplen Checkouts hin zu einem Supabase/Stripe gesteuerten System (`Phase 1` & `Phase 3` verschmolzen).
- **07.04.2026**: Initialisierung des Alpine Digital (Dolomites) Repositories mit vollem State-Management. Frontend-Erweiterung ("Flight Tracker" UI/UX) fertiggestellt und live auf GitHub `main` gepushed!
