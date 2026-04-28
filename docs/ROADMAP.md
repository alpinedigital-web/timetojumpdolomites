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
- [x] **Zwei Karten-Standorte**: Saslong (1.600m) + Mont de Côi (2.500m) side-by-side.
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

## Phase 2: Flow Automatisierung & Operations (n8n) — Neues Angebot
- [ ] Webhook-Catch via n8n für erfolgreiche Event-Buchungen / Stripe SetupIntents.
- [ ] Automatisierte Invoice & Confirmation-Email an Teilnehmer.
- [ ] Erinnerungs-Sequenzen: 7 Tage, 5 Tage, 3 Tage vor Abflug automatisiert via n8n senden.
- [ ] Automatischer Opt-In für die gruppenspezifische WhatsApp-Community pro Flugdatum.
- [ ] **Dynamische Preisberechnung**: Automatische Berechnung des Helikopteranteils basierend auf aktueller Load-Belegung.
- [ ] **Sequenzielle Load-Logik**: Intelligente Steuerung bei mehreren Loads pro Datum (Load 1 → 2 → 3).
- [ ] **Multi-Standort DB-Support**: Erweiterung des Supabase-Schemas für mehrere DZs (Saslong, Mont de Côi, zukünftige).
- [ ] **Automatisierte Stripe-Zahlungsabwicklung**: Dynamisches Charging basierend auf finaler Load-Belegung am Sprungtag.

## Phase 3: Infrastruktur Migration (Wix Ablöse)
- [ ] Restliche Inhalte aus Wix exportieren und in die Vanilla/Next-Infrastruktur eingliedern.
- [ ] Domain-Hosting (ARUBA) und DNS-Umzug orchestrieren (Deadline: Juli 2026).
- [ ] GMB (Google My Business) Validierung unterstützen (Büro-Foto).

