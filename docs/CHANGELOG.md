# CHANGELOG: Time to Jump Dolomites

## [2.2.0] - 2026-04-28
### Added — Admin Panel Rebuild (Phase 2.3)
- **Supabase Auth Login**: Hardcoded `Jump2025!` Passwort komplett entfernt. Admin-Login über `supabase.auth.signInWithPassword()`.
- **Admin-User**: `admin@timetojumpdolomites.com` in Supabase Auth angelegt (mit Identity-Record).
- **RLS Policies**: `anon` = SELECT only, `authenticated` = full CRUD auf `events`, `bookings`, `locations`.
- **Events CRUD Tab**: Events direkt erstellen, bearbeiten, stornieren — alle Felder korrekt gegen Supabase-Schema gemappt.
- **Bookings Tab**: Komplette Buchungsübersicht mit Status-Filter, Freitext-Suche, Detail-Modal (Kontaktdaten, Stripe-ID, Lizenz, Notfallkontakt).
- **CSV Export**: Alle Buchungsdaten als CSV mit BOM für Excel-Kompatibilität.
- **Stats Dashboard**: Event-Zähler, Buchungs-Zähler, Revenue-Übersicht, Expired-Zähler.

### Added — Abandoned Checkout Cleanup (Phase 2.4)
- **`cleanup_abandoned_bookings()` SQL-Funktion**: Setzt `reserved`-Bookings älter als 30 Minuten auf `expired`. Gibt Anzahl betroffener Rows zurück.
- **`cleanup-bookings` Edge Function**: HTTP-aufrufbar (GET/POST), nutzt Service-Role-Key, für externen Cron-Aufruf geeignet.
- **Frontend Auto-Cleanup**: `sb.rpc('cleanup_abandoned_bookings')` wird bei jedem Event-Page-Load aufgerufen.
- **Admin Auto-Cleanup**: Cleanup läuft beim Laden des Admin-Dashboards.
- **`updated_at` Column**: Zu `bookings`-Tabelle hinzugefügt.

### Fixed — Admin Schema-Mapping
- `flight_date` → `jump_date` (5 Stellen in admin.js).
- `max_capacity` → `capacity`.
- `confirmed_count` → `booked_count`.
- `full_name` → `first_name` + `last_name` (mit `fullName()` Helper).
- `nationality` → `license_country`.
- `equipment_rental` → `emergency_contact`.
- `stripe_checkout_session_id` → `stripe_setup_intent_id || stripe_payment_intent_id`.
- Events CRUD: `time_slot` wird jetzt separat gespeichert.

### Changed
- **admin.css**: Alte CMS-Styles entfernt (editor-card, dropzone, preview-pane, sidebar). Nur noch Scrollbar + Login-Error.
- **admin.html**: Komplett neu — 3-Tab-Layout (Events, Bookings, Settings) mit Tailwind CDN.

### Security
- Hardcoded Admin-Passwort `Jump2025!` aus öffentlich erreichbarem JS entfernt.
- Admin-Authentifizierung läuft über Supabase Auth Sessions.
- `cleanup-bookings` Edge Function mit `verify_jwt=false` (für Cron), aber `SECURITY DEFINER` SQL-Funktion.

### Documentation
- **ROADMAP.md**: Komplett umstrukturiert — Phase 2.3–2.7 mit granularen Checkboxen, technische Schulden aus Deep Audit integriert.
- **STATE.md**: Session-Log, neue Blocker (E-Mail API Key), Entscheidungs-Log ergänzt.

### Known Technical Debt (aus Deep Audit)
- Booking-Insert vor Stripe-Session (Race Condition) — Fix geplant für Phase 2.5.
- `events_enriched` View: 3 Subqueries statt 1 JOIN — Performance-Optimierung bei Bedarf.
- `pricing_rules` + `cancellations`: Tote Tabellen, nirgendwo referenziert.
- `calc_cancellation_fee()`: Rechenfehler (`* 30` statt `* 0.30`).
- `success.html`: Verspricht nicht-existente WhatsApp-Bestätigung.


### Fixed — Full Website Audit (12 Fixes)
- **B-01 HTML-Strukturfehler**: Fehlendes `</section>` nach `#experience` behoben — `#upcoming` war als Kindelement gerendert.
- **H-01 Hero CTAs**: Von 3 auf 2 reduziert (Book Your Jump + View Prices). "Contact Us" entfernt.
- **H-02 Navigation bereinigt**: Terms/Privacy aus Hauptnavigation entfernt, stattdessen im Footer verlinkt.
- **H-05 Trust Cues**: "Helicopter Jumps from 775 €" → "Licensed Skydivers Only", "UNESCO Dolomites" → "UNESCO World Heritage Site", "Fri – Sun" → "Operating since 2022".
- **H-08 Google Maps**: Fake-Place-IDs (`0x1234567890abcdef`) durch koordinatenbasierte Embed-URLs ersetzt.
- **H-09 OG Image**: `og:image` Meta-Tag für Social Sharing Preview hinzugefügt.
- **M-01 Doppelter API-Call**: Zweifacher `loadUpcomingJumps()` Aufruf bei Sprachwechsel entfernt.
- **M-02 Translation-Bug**: `applyTranslations()` im Booking-Modal erhält jetzt korrektes `lang`-Argument.
- **M-03 Chat Widget**: "What would You know?" → "Questions? We're here."
- **M-04 Zeitzone**: Hardcoded Sommer-/Winterzeit-Daten durch "Central European Time (CET/CEST)" ersetzt.
- **M-05 Footer Copyright**: "Time to Jump Dolomites 2026 © Since 2022 ©" → "© 2022–2026 Time to Jump Dolomites".
- **M-08 SEO Title**: "Tyrol Tyrol" Keyword-Stuffing behoben.
- **M-10 Animation**: Step 4 `reveal-delay-3` → `reveal-delay-4` für sequenzielle Einblendung.
- **M-11 FormSubmit**: Redirect-URL von Staging auf Produktionsdomain aktualisiert.

### Known Issue
- `translations.js` Trust-Cue-Keys (`hero.trust.heli/unesco/days`) enthalten noch die alten Übersetzungen in 9 Sprachen. HTML-Fallback ist korrekt, i18n-Override steht noch aus.


## [2.0.0] - 2026-04-28
### Added — Supabase Phase 2 Schema
- **`locations` Tabelle**: Multi-Standort-Support — Saslong (1600m) + Mont de Côi (2500m) mit GPS-Koordinaten, Altitude, Maps-Embed.
- **`pricing_rules` Tabelle**: Dynamische Preise pro Location und Season (775€ Saslong, 825€ Mont de Côi).
- **`cancellations` Tabelle**: Audit-Trail für Stornierungen mit Fee-Berechnung und Refund-Tracking.
- **`events_enriched` View**: Vorberechnete Felder — `booked_count`, `availability_status`, `current_price_per_person`, `is_short_notice`.
- **`calc_cancellation_fee()` Funktion**: Automatische Storno-Berechnung (30% > 7 Tage, 100% < 7 Tage).
- **`events` erweitert**: `location_id` (FK), `load_number`, `parent_event_id`, `max_loads_per_day`.
- **`bookings` erweitert**: `group_leader_id`, `invite_token`, `group_size`, `deposit_amount_cents`, `total_amount_cents`, `stripe_setup_intent_id`, `stripe_payment_intent_id`, `is_short_notice`, `payment_method`, `birth_place`.

### Added — Edge Function
- **`create-setup-intent` deployed**: Dynamische Deposit-Berechnung (Helikopterpreis ÷ Teilnehmer), Short-Notice Erkennung (< 7 Tage = sofortige Zahlung), Gruppenbuchung mit Invite-Token-Generierung.

### Added — Frontend
- **`events_enriched` View**: Flight Cards nutzen jetzt vorberechnete Felder statt Client-seitiger Berechnung.
- **Gruppenbuchungs-UI**: Toggle "I'm booking for a group" im Booking-Modal, Gruppengröße 2-5, Invite-Token via URL (`?invite=token`).
- **Load-Badges**: Load-Nummer und ⚡ SHORT NOTICE Badges auf Flight Cards.
- **Invite-Link Flow**: URL-Parameter öffnet automatisch Booking-Modal für Gruppen-Mitglieder.

### Added — Media
- **6 KI-Bildvarianten**: 3× Hero (Tracking, Diamond, GoPro) + 3× About (Interior, Exterior, Group Edge) in `business/media-input/generated/`.

### Changed
- **Navigation**: App-Link aus Desktop + Mobile Navigation entfernt.
- **Repository**: `Korrespondenz/`-Reste nach `business/` verschoben, alte Ordner gelöscht.

### Security
- RLS auf allen neuen Tabellen (locations, cancellations, pricing_rules).
- `events_enriched` View mit `SECURITY INVOKER` statt `SECURITY DEFINER`.
- `calc_cancellation_fee()` mit immutablem `search_path`.

## [1.6.0] - 2026-04-28
### Added
- **AGB §3.1a Short-Notice-Booking**: Klausel für Buchungen < 7 Tage — sofortige Vollzahlung, keine Stornierung/Rückerstattung möglich.
- **AGB §4a Substanzenpolitik**: Null-Toleranz Alkohol/Drogen-Verbot vor und während des Springens, sofortiger Ausschluss bei Verstoß.
- **Booking-Modal Warnbox**: Amber-farbenes Warning-Banner erscheint dynamisch wenn Event < 7 Tage entfernt. Warnung in 9 Sprachen.
- **i18n Keys**: `booking.shortNoticeTitle`, `booking.shortNoticeText` in allen 9 Sprachen.
- **ROADMAP Phase 2 erweitert**: Dynamische Preisberechnung, Multi-Standort DB, Sequenzielle Load-Logik, Stripe-Automation.

### Changed
- **AGB Preistabelle entfernt**: Hardcoded Preismatrix durch generische Erklärung ersetzt (Preis hängt von Load-Belegung und Treibstoff ab).
- **Repository komplett reorganisiert**:
  - `public/` — Alle deployable Website-Dateien (HTML, CSS, JS, IMG)
  - `docs/` — Projekt-Dokumentation (ROADMAP, STATE, CHANGELOG, LEISTUNGSBERICHT)
  - `business/` — Korrespondenz, Angebote, Rechnungen, Scripts, Media-Input, interne Präsentationen
  - `supabase/` — Backend (Edge Functions + Migrations)
- **Dateinamen normalisiert**: ISO-Datumspräfix für alle Korrespondenz-Dateien.
- **README.md**: Vollständig neu geschrieben mit Struktur-Doku, Quick Start und Deployment-Info.
- **.gitignore**: Aktualisiert für neue Pfade (business/media-input/, .docx, .pdf).

### Meta
- **Cloudflare Pages**: Build-Output-Directory muss auf `public/` umgestellt werden.

## [1.5.0] - 2026-04-27
### Added
- **FAQ Q7**: Neuer FAQ-Eintrag „Can I book the helicopter directly?" mit klarer Absage an Direktbuchungen beim Helikopterbetreiber (9 Sprachen).
- **Zwei Karten-Standorte**: Map-Sektion von einer generischen Ortisei-Karte auf zwei spezifische Landing Zones umgestellt: Saslong (1.600m) und Mont de Côi (2.500m), Side-by-Side Layout.
- **Neue i18n-Keys**: `map.saslong.*`, `map.montdecoi.*`, `pricing.rent.day`, `pricing.rent.additional`, `faq.q7`, `faq.a7` in allen 9 Sprachen.

### Changed
- **Pricing: „2 or more Loads"** entfernt — nicht mehr „auf Anfrage", sondern komplett raus.
- **Equipment Rental vereinfacht**: Von 6 Einzelzeilen (45€/100€/180€/260€/340€/420€) auf 2 Zeilen: „1 Day Rent + 1 Pack Job = 100 €" + „Each additional day = +80 €".
- **Gruppenpreis-Texte flexibilisiert**: Hardcoded Beträge (500€, 3.000€, 250€, 750€) aus den „How it Works"-Steps entfernt. Texte sind jetzt generisch und zukunftssicher.
- **Reservierungshinweis**: „Reserve via WhatsApp, email, or phone" → „Book exclusively via our platform" (Requirements-Karte + FAQ A3).
- **FAQ A3 aktualisiert**: Elikos-Referenz entfernt, Buchungsweg ausschließlich über Website beschrieben.
- **AGB (terms.html)**: „DolomitesFly / " und „operated by David Prato" entfernt. „helicopter operator Elikos" → „the helicopter operator".
- **Logo**: Davids Original-Logo (LOGO.PNG.png) eingebunden, ersetzt das bisherige 3D-Badge.

### Meta
- **Telefonat-Transkript**: 40-Minuten-Telefonat mit David Prato (27.04.2026) transkribiert, bereinigt und als Referenzdokument unter `Korrespondenz/` archiviert.
- **Media-Input**: Davids Foto-Lieferung (Logo, Teamfotos, Referenzbilder) unter `Korrespondenz/media-input-dp-27-04-2026/` abgelegt.

## [1.4.0] - 2026-04-25 (Abend)
### Added
- **Emergency Contact Split**: Einzelfeld aufgetrennt in `emergencyName` + `emergencyPhone` mit separaten Labels und Placeholders (9 Sprachen).
- **Tooltip-System**: CSS-only Fragezeichen-Icons (`.form-tooltip`) bei Nickname, Emergency Contact, License Country/Number. Hover zeigt kontextuellen Hilfetext via `data-tooltip` / `data-tooltip-key` Attributen.
- **Tooltip i18n**: `data-tooltip-key` Handler in `applyTranslations()` fuer dynamische Sprachanpassung der Tooltip-Texte.
- **AGB Headings i18n**: `terms.label`, `terms.heading`, `terms.updated` Translation Keys (9 Sprachen).
- **nav.jumps Key**: Neuer Navigation Translation Key "Spruenge" in allen 9 Sprachen.

### Fixed
- **Flight Card Titelkontrast**: Explizite Farbe (`color: var(--color-primary)`, `font-weight: 700`) fuer lesbare Titel auf hellem Hintergrund.
- **Button-Overflow**: Flight Card Footer mit `flex-wrap: wrap` und angepasstem Button-Sizing — Buttons bleiben im Container.
- **section--light Kontrast**: Globaler Fix fuer alle Light-Sections (Map, Upcoming) — dunkle Textfarbe auf hellem Hintergrund.
- **DE DE Sprachanzeige**: Flag-Emoji (`lang-dropdown__flag`) auf `display: none` gesetzt — Windows rendert Flag-Emojis als Text, was zu "DE DE" fuehrte.
- **Edge Function Error UX**: Verbesserte Fehlermeldung (DE/EN mit technischem Detail) statt rohem Error-Dump.
- **Nav-Konsistenz**: Alle drei HTML-Dateien (index, terms, privacy) mit identischer Navigation synchronisiert.

### Removed
- **Events-Section**: Leere Events-Sektion komplett entfernt. "Spruenge" Nav-Link zeigt direkt auf #upcoming (Live-Verfuegbarkeit).
- **Shop-Section**: Komplett entfernt (Nav + HTML).
- **Blog-Link**: Aus allen Navigationen entfernt.

## [1.3.0] - 2026-04-25
### Added
- **Booking Modal i18n (9 Sprachen)**: Alle Labels, Checkbox-Texte und Submit-Button mit `data-i18n` / `data-i18n-html` Attributen versehen. 15+ neue Translation Keys (`booking.*`).
- **Flight Cards i18n**: Dynamisch gerenderte Supabase-Karten vollständig lokalisiert. Neuer `t()` Translation Helper in `supabase-client.js`. 22 neue Keys (`fc.*`). Monatsnamen via `toLocaleDateString()`.
- **Upcoming Section i18n**: "How Group Pricing Works" Sektion vollständig mit Translation Keys versehen (`upcoming.*`).
- **Fehlende Formularfelder**: Geburtsort (`birthPlace`) und vollständige Adresse (`address`) im Booking Modal ergänzt.
- **Mobile Language Switcher**: Eigener Language-Dropdown im Mobile-Nav (`langDropdownMobile`) mit CSS-Slide-Animation.
- **`data-i18n-html` Handler**: Neuer Translation-Modus in `applyTranslations()` für Checkbox-Labels mit eingebettetem HTML (Links).

### Fixed
- **QA Bugfix**: `loadUpcomingJumps` global zugänglich gemacht und in `setLanguage` aufgerufen, damit sich die Supabase Flight Cards auch ohne Reload dynamisch an die Sprache anpassen.
- **B15 Language-Button doppelt**: Language-Dropdown-Architektur von `getElementById` auf `querySelectorAll('.lang-dropdown')` refaktoriert. Desktop + Mobile synchronisiert.
- **R5 Gemischte Sprachen**: Flight Cards (Supabase-Rendered) zeigen jetzt konsistent die gewählte Sprache an. Sprachwechsel triggert automatischen Re-Render der Flight Cards.

### Removed
- **B10 10er Tickets**: `10 + 1 Pack Jobs` (200€) und `10+1 Jumps Rent + Pack Jobs` (450€) aus Pricing-Sektion entfernt.

## [1.2.1] - 2026-04-10
### Fixed
- **Pricing Logic**: Falsche 3.000 € Dummy-Baseprice Angaben aus der Vorversion mit den echten Live-Werten (775 € Saslong, 825 € Mulin) ersetzt und korrekterweise dynamisch durch 5 Skydiver dividiert.
- **Booking Flow Bypass**: Alle externen Navigations-Links zu "Elikos" (dem Helikopter Code-Share) wurden entfernt oder ins interne `#upcoming` umgeleitet, um zu verhindern, dass User am Stripe-Checkout vorbei direkt den Partner buchen könnten.

## [1.2.0] - 2026-04-10
### Added
- **Stripe Hosted Checkout**: Migration der "Payment Hold"-Logik von rohem UI auf performante Stripe Checkout Sessions im `mode: 'setup'`.
- **Backend Architecture (`supabase/functions/create-setup-intent`)**: Edge Function eingeführt, welche Customer und Sessions erstellt sowie initial die Buchung in die `bookings` Tabelle persistiert.
- **Booking Modal (Glassmorphism)**: Neuentwicklung des Frontends. Das Modal verlangt alle wichtigen Vorab-Infos (Lizenz, Geburtsdatum, Notfallkontakt) im hochmodernen Glass-Design.
- **Sichtbare Nicknames (Social Proof)**: Einführung von Piloten-Avataren (Nick-Pills) in der Flight Card zur Steigerung der Nachfrage. Sequenzielle Load-Sichtbarkeit visualisiert (Load 2 gesperrt, bis Load 1 voll ist).
- **Redirection Loop**: Implementierung einer Premium `success.html` zur Bestätigung des Kreditkarten-Holds.
## [1.1.0] - 2026-04-07
### Added
- **Flight Tracker & Group Pricing Logic (`index.html`)**: Neue Sektion "Upcoming Jumps" eingeführt. Zeigt ausstehende Rotationen, Platzbelegung (z.B. 2 von 4) und rechnet das dynamische Preismodell vor. 
- **Design System Updates (`css/style.css`)**: Gradients, Flight-Card Hover-Effekte, Responsive-Optimierungen für das neue Tracker-Modul. 
- **Alpine Digital Tracking**: Antigravity Infrastruktur (`STATE.md`, `ROADMAP.md`, `CHANGELOG.md`, `LEISTUNGSBERICHT.md`, `/start`, `/done`) als dritte Instanz aufgesetzt.
- **Content Synchronization (`index.html`)**: Abgleich mit der alten Website durchgeführt. Shop- und App-Links in der Navigation nachgezogen, `<title>` Tag für SEO-Erhalt angepasst.

## [1.0.0] - Vor April 2026
### Added
- **Premium Visual Overhaul**: Komplette Neuentwicklung der Website-Basis (HTML/CSS) auf Basis der alten Website.
- **Responsive Design System**: Einführung eines modernen, responsiven Frameworks inklusive Dark-Mode, Typography-Anpassungen (Google Fonts) und Glassmorphism-UI-Komponenten.
- **Content-Migration (Part 1)**: Initiale Integration der bestehenden Strukturen (Texte, Basis-Preise, Partner).
