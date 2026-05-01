# ROADMAP: Time to Jump Dolomites (Alpine Digital)

## Phase 1: Core Booking Engine (Supabase + Stripe) [COMPLETED]
- [x] Einbau High-End Scarcity-Ticker (Live Upcoming Jumps).
- [x] Design und Psychologische Kommunikation des "Hold" Modells via SetupIntent.
- [x] **Supabase Backend**: Event- und Buchungs-Tabellen anlegen, sequenzielle Logik (Load 1 voll -> Load 2 offen) implementieren.
- [x] **Stripe Checkout**: "Save Card for later" Mechanismus einbauen (0,00 € Hold), um Strafgebühren gemäß AGB abbuchen zu können.
- [x] Custom Checkout Formular im Frontend bauen (Lizenz, Versicherung (pianetavolo.it), Geburtsdatum, Notfallkontakt etc.).
- [x] Erfolgsseite nach Buchung bauen (inkl. Link zur WhatsApp-Gruppe).

## Phase 1.5: Lokalisierung & UX-Polish [COMPLETED]
- [x] **Booking Modal i18n**: Alle Labels, Checkboxes, Buttons mit `data-i18n` / `data-i18n-html` Attributen versehen (9 Sprachen).
- [x] **Flight Cards i18n**: Dynamisch gerenderte Supabase-Karten vollständig lokalisiert via `t()` Helper. Keine gemischten Sprachen mehr.
- [x] **Fehlende Formularfelder**: Geburtsort (`birthPlace`), vollständige Adresse (`address`) gemäß Besuchsbericht ergänzt.
- [x] **Language-Dropdown Fix (B15)**: Multi-Dropdown-Architektur (Desktop + Mobile synchronisiert).
- [x] **Pricing-Bereinigung (B10)**: 10er Ticket-Bündel (Pack Jobs + Rental) entfernt.
- [x] **Gap-Analyse**: Dokumentation Originalangebot vs. Ist-Zustand inkl. kommerzielle Bewertung der Mehrleistung.

## Phase 1.6: UX Optimization & Site Cleanup [COMPLETED]
- [x] **Emergency Contact Split**: Einzelfeld in Name + Telefon aufgetrennt fuer saubere Datenerfassung.
- [x] **Tooltip-Hints**: CSS-only Fragezeichen-Icons bei Nickname, Emergency Contact, Lizenz mit Hover-Erklaerung.
- [x] **Edge Function Error UX**: Verbesserte Fehlermeldung (DE/EN) statt rohem Fehlerdump.
- [x] **Navigation Cleanup**: Shop, Blog, Events-Section komplett entfernt. Events -> "Spruenge" (#upcoming).
- [x] **Flight Card CSS Fixes**: Titelkontrast (dunkel auf weiss), Button-Overflow (flex-wrap), Sizing.
- [x] **section--light Kontrast**: Globaler Fix fuer alle Light-Sections (Map, Upcoming).
- [x] **Language Dropdown Fix**: DE DE Doppelanzeige behoben (Flag-Emoji hidden auf Windows).
- [x] **AGB Headings i18n**: terms.label, terms.heading, terms.updated in 9 Sprachen.
- [x] **Nav-Konsistenz**: index.html, terms.html, privacy.html synchronisiert.

## Phase 1.7: Telefonat-Umsetzung & Media-Integration [COMPLETED]
- [x] **Telefonat-Transkription**: 40-Min-Telefonat mit David (27.04.2026) transkribiert, bereinigt, archiviert.
- [x] **„2 or more Loads" entfernt**: Pricing-Abschnitt vereinfacht (keine „auf Anfrage"-Preise mehr).
- [x] **Equipment Rental vereinfacht**: Von 6 Einzelpreise auf 2 Zeilen (100 €/Tag + 80 €/weiterer Tag).
- [x] **Gruppenpreis-Texte flexibilisiert**: Hardcoded Beträge entfernt, generische Formulierungen.
- [x] **Buchung nur über Plattform**: WhatsApp/Telefon-Reservierung entfernt, Website-only.
- [x] **Elikos-Referenzen entfernt**: FAQ, AGB, Sicherheitsbriefing — alle Nennungen generisiert.
- [x] **FAQ Q7 ergänzt**: „Can I book the helicopter directly?" mit klarer Absage.
- [x] **Zwei Karten-Standorte**: Saslong (1.600m) + Molin da Coi (2.500m) side-by-side.
- [x] **AGB bereinigt**: DolomitesFly/David Prato entfernt, Elikos generisiert.
- [x] **i18n aktualisiert**: Alle betroffenen Keys in 9 Sprachen (12 neue Keys).
- [x] **Logo**: Davids Original-Logo eingebunden.
- [x] **AGB §3.1a**: Short-Notice-Booking Klausel (< 7 Tage = sofortige Vollzahlung, keine Stornierung).
- [x] **AGB §4a**: Null-Toleranz Substanzenpolitik (Alkohol/Drogen-Verbot).
- [x] **AGB Preistabelle**: Hardcoded Preise entfernt, generische Erklärung eingefügt.
- [x] **Booking-Modal Warnung**: Kurzfristige-Buchung Warnbox (< 7 Tage) mit Amber-Banner.
- [x] **i18n Short-Notice Keys**: `booking.shortNoticeTitle` / `booking.shortNoticeText` in 9 Sprachen.
- [x] **Hero-Bild**: KI-generiertes Panorama mit 5er Stern-Formation über Dolomiten.
- [x] **About-Bild**: KI-generiertes Heli-Ausstieg Bild eingebunden.
- [x] **App-Link entfernt**: Externer App-Link aus Desktop- und Mobile-Navigation entfernt.
- [x] **Korrespondenz-Reste bereinigt**: Verwaiste Dateien nach business/ verschoben.

## Phase 1.8: Audit & Sprach-Reduktion [COMPLETED]
- [x] **Full Website Audit**: 12 kritische Fixes deployed (HTML-Struktur, SEO, Maps, Navigation).
- [x] **Sprach-Archivierung**: 9 → 4 Sprachen (EN, DE, IT, LAD). NL, FR, PL, ES, CS entfernt.

## Phase 1.9: Content-Korrekturen per David (29.04.2026) [COMPLETED]
- [x] **IT: „Assicurati il posto"**: Grammatikkorrektur in allen Vorkommen (Experience, FAQ, Booking, Upcoming).
- [x] **IT: „Con licenza" statt „Professionisti"**: Pricing-Subtitle, Requirements-Block, beide Instanzen.
- [x] **IT: „Gli skydivers"**: Reviews-Heading von „i saltatori" auf „gli skydivers" geändert.
- [x] **FAQ: BASE-Lizenz + 100 Sprünge + Versicherung**: faq.a1 in allen 4 Sprachen komplett überarbeitet.
- [x] **IT: „Vedi listino prezzi"**: Hero CTA + FAQ A5 aktualisiert.
- [x] **Elikos entfernt**: Testimonial t2 — letzte Referenz bereinigt.
- [x] **Rental Pricing**: Neue Zeile „1 Jump = 25 €" + „(no pack job)" Label bei Additional Day.
- [x] **Offizieller Vereinsname**: Footer-Key `footer.org` mit i18n (IT/DE/EN/LAD).
- [x] **Maps: Saslong → Monte Pana**: Koordinaten 46.543967, 11.741500.
- [x] **Maps: Mont de Côi → Molin da Coi**: Name + Koordinaten 46.565239, 11.690443.
- [x] **Kurse-Section**: Vollständige AFF-Ausbildungskurse — Davids Texte (EN/DE/IT) integriert. 2-Phasen-Curriculum, 7-Level-Progression, Requirements, Included Items, €3.400 Pricing. Skydiver-Registrierungsinfo (B-Lizenz, 100 Sprünge, Versicherung €70/€110) als eigener Info-Block. Tandem-FAQ (Q8/A8). Nav-Link "Courses". Pipe-separated i18n-Listen dynamisch gerendert.

---

## Phase 2: Backend & Übergabe-System [IN PROGRESS]

### 2.1 Supabase Schema & Backend [COMPLETED]
- [x] **Multi-Standort DB-Support**: `locations` Tabelle (Saslong + Molin da Coi) mit GPS, Altitude, Maps.
- [x] **Dynamische Preisberechnung**: `pricing_rules` Tabelle + `events_enriched` View mit automatischer Preisberechnung.
- [x] **Sequenzielle Load-Logik**: `load_number` + `parent_event_id` auf `events`, Frontend-Lock-Logik.
- [x] **Gruppenbuchung**: `group_leader_id`, `invite_token`, `group_size` auf `bookings`.
- [x] **Storno-System**: `cancellations` Tabelle + `calc_cancellation_fee()` Funktion (30%/>7d, 100%/<7d).
- [x] **Stripe Edge Function**: `create-setup-intent` deployed — dynamische Deposit-Berechnung, Short-Notice Erkennung, Gruppenbuchungs-Support.
- [x] **Security Hardening**: RLS auf allen Tabellen, SECURITY INVOKER View, search_path fix.

### 2.2 Frontend Integration [COMPLETED]
- [x] **events_enriched View**: Frontend nutzt vorberechnete Felder (booked_count, availability_status, current_price_per_person).
- [x] **Gruppenbuchungs-UI**: Toggle im Booking-Modal, Gruppengröße, Invite-Token per URL.
- [x] **Load-Badges**: Load-Nummer und Short-Notice Badges auf Flight Cards.
- [x] **Invite-Link Flow**: URL-Parameter `?invite=token` öffnet automatisch Booking-Modal.

### 2.3 Admin Panel Rebuild [COMPLETED — 28.04.2026]
- [x] **Supabase Auth**: Hardcoded `Jump2025!` Passwort entfernt → echte Supabase-Auth-Session.
- [x] **Admin-User angelegt**: `admin@timetojumpdolomites.com` (mit Identity + Auth-Record).
- [x] **RLS Policies**: anon=SELECT only, authenticated=full CRUD auf events/bookings.
- [x] **Events CRUD Tab**: David kann Events erstellen, bearbeiten, stornieren — direkt in Supabase.
- [x] **Bookings Tab**: Alle Buchungen mit Kontaktdaten, Status-Filter, Suche, CSV-Export.
- [x] **Settings/Stats Tab**: Event-Übersicht, Buchungszähler, Revenue-Dashboard.
- [x] **Schema-Mapping**: Alle Feldnamen korrekt gegen echte DB gemappt (jump_date, capacity, first/last_name, license_country).

### 2.4 Abandoned Checkout Cleanup [COMPLETED — 28.04.2026]
- [x] **`cleanup_abandoned_bookings()`**: SQL-Funktion setzt `reserved` > 30min auf `expired`.
- [x] **`cleanup-bookings` Edge Function**: HTTP-aufrufbar per externem Cron (verify_jwt=false).
- [x] **Frontend-Integration**: Auto-Cleanup bei jedem Event-Page-Load.
- [x] **Admin-Integration**: Auto-Cleanup beim Admin-Dashboard-Laden.
- [x] **`updated_at` Column**: Zu `bookings` hinzugefügt für Tracking.

### 2.5 Stripe Production Mode — ⏳ BLOCKIERT: Stripe Key von David
- [ ] `mode: "setup"` → `mode: "payment"` umstellen (Deposit sofort einziehen).
- [ ] Edge Function `create-setup-intent` umbenennen → `create-checkout-session`.
- [ ] Booking-Insert Timing anpassen: Booking erst nach Stripe-Bestätigung (nicht vorher).

### 2.6 Stripe Webhook — ⏳ BLOCKIERT: Stripe Key + Webhook Secret
- [ ] Edge Function `stripe-webhook` implementieren (reagiert auf `checkout.session.completed`).
- [ ] Webhook Signature Verification (Stripe-Secret).
- [ ] Booking-Status: `reserved` → `confirmed` bei erfolgreicher Zahlung.
- [ ] Webhook löst E-Mail-Versand aus (2.7).

### 2.7 E-Mail-Automatisierung — ⏳ BLOCKIERT: Resend/SendGrid API Key
- [ ] Edge Function `send-email` (oder Webhook-intern).
- [ ] **Template: Buchungsbestätigung an Kunden** (Datum, Location, Load, Referenz-Nr).
- [ ] **Template: Buchungsbenachrichtigung an David** (auf persönliche E-Mail-Adresse).
- [ ] **Stornierungsbenachrichtigung** an beide Parteien.
- [ ] FormSubmit.co: E-Mail-Adresse auf Davids persönliche Adresse umstellen + Aktivierung.

---

## Phase 3: Infrastruktur & Go-Live

### 3.1 DNS-Migration — ⏳ BLOCKIERT: Aruba-Zugangsdaten von David
- [ ] Aruba DNS-Zugangsdaten von David erhalten.
- [ ] Cloudflare DNS einrichten, SSL-Zertifikat.
- [ ] FormSubmit.co Aktivierung (David klickt Bestätigungs-E-Mail).
- [ ] Stripe Live-Key in Supabase Secrets eintragen.
- [ ] Webhook-Signing-Secret in Supabase eintragen.

### 3.2 End-to-End Verifikation
- [ ] Vollständiger Produktions-Test auf finaler Domain.
- [ ] Booking → Stripe → Webhook → Bestätigungs-E-Mail → Admin Panel prüfen.

---

## Bekannte technische Schulden (aus Deep Audit 28.04.2026)

### MEDIUM Priorität
- [ ] **Booking vor Payment Race Condition**: Edge Function legt Booking an VOR Stripe-Session-Erstellung. Korrektur: Reihenfolge umdrehen oder Booking erst via Webhook.
- [ ] **`events_enriched` View N+1**: 3 identische korrelierte Subqueries pro Event. Optimierung: Ein einziger `LEFT JOIN` mit `COUNT()`.
- [ ] **`pricing_rules` ist tote Tabelle**: Angelegt und RLS konfiguriert, aber nirgendwo gelesen. Preis kommt aus `events.price_per_load`.
- [ ] **`cancellations` nie aufgerufen**: Tabelle + Funktion existieren, aber kein Trigger/API nutzt sie.
- [ ] **`calc_cancellation_fee()` Rechenfehler**: `CEIL(deposit * 30)` ergibt 30× statt 30%. Korrekt wäre `CEIL(deposit * 0.30)`.
- [ ] **Gruppenbuchungs-Invite**: Verwendet `alert()` statt Modal für den generierten Invite-Link.

### LOW Priorität
- [ ] **`success.html` ehrlicher Text**: "0.00€ hold" stimmt nicht bei Short-Notice. "WhatsApp confirmation" existiert nicht. Booking-Details (Datum, Load, Referenz) fehlen.
- [ ] **Erinnerungs-Sequenzen**: 7d/5d/3d vor Abflug — Phase 2+ Scope.
- [ ] **AGB-Volltext in 4 Sprachen**: Juristischer Inhalt bisher nur auf Englisch.
