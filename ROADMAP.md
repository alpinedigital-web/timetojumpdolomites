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

## Phase 2: Flow Automatisierung & Operations (n8n) — Neues Angebot
- [ ] Webhook-Catch via n8n für erfolgreiche Event-Buchungen / Stripe SetupIntents.
- [ ] Automatisierte Invoice & Confirmation-Email an Teilnehmer.
- [ ] Erinnerungs-Sequenzen: 7 Tage, 5 Tage, 3 Tage vor Abflug automatisiert via n8n senden.
- [ ] Automatischer Opt-In für die gruppenspezifische WhatsApp-Community pro Flugdatum.

## Phase 3: Infrastruktur Migration (Wix Ablöse)
- [ ] Restliche Inhalte aus Wix exportieren und in die Vanilla/Next-Infrastruktur eingliedern.
- [ ] Domain-Hosting (ARUBA) und DNS-Umzug orchestrieren (Deadline: Juli 2026).
- [ ] GMB (Google My Business) Validierung unterstützen (Büro-Foto).
