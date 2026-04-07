# ROADMAP: Time to Jump Dolomites (Alpine Digital)

## Phase 1: Checkout & Conversion UX [IN PROGRESS]
- [x] Einbau High-End Scarcity-Ticker (Live Upcoming Jumps).
- [x] Design und Psychologische Kommunikation des "Deposit First" Modells (Share the cost).
- [ ] Tally/Stripe Payment Links hinter den Call-to-Action verfugen (`href`).
- [ ] Erfolgsseite nach Zahlung bauen (z. B. "Dein Platz ist gesichert!") mit Link zur WhatsApp-Gruppe.

## Phase 2: Flow Automatisierung (n8n)
- [ ] Webhook-Catch via n8n für erfolgreiche Stripe-Belastungen.
- [ ] Automatisierte Invoice & Confirmation-Email an Teilnehmer.
- [ ] Automatischer Opt-In für die gruppenspezifische WhatsApp-Community pro Flugdatum.

## Phase 3: Dynamische Datenbank Integration (Optional)
- [ ] Supabase anbinden für echten Live-Counter auf der Website.
- [ ] Buchungszahlen (2 von 4 Plätzen) live durch n8n in Supabase up-syncen.
