# Alpine Digital Agency (Time to Jump Dolomites) — Aktueller Projektstatus
> Letztes Update: 10.04.2026 — Pivot zu dynamischem Event-Booking (Supabase & Stripe SetupIntent) gestartet

## Aktueller Fokus
- **Phase 1-3 Merge**: Umbau der Buchungs-Pipeline von statischem Deposit-Checkout auf eine dynamische Event-Datenbank via Supabase.
- **Payment Logik (Save Card for Later)**: Einführung von Stripe SetupIntents, um Kreditkarten bei der Buchung für den Kunden mit 0,00 € zu autorisieren, anstatt fixe Deposits abzubuchen.

## Entscheidungen
- **Payment Hold vs. Deposit**: Da reine Authorization-Holds bei Stripe auf 7 Tage begrenzt sind, wird die Karte hinterlegt. Belastungen (z.B. Strafen bei Verpassen des Briefings: 50 €) werden manuell ausgelöst. Zahlung des eigentlichen Flugs erfolgt vor Ort (Karte/Bar).
- **Sequenzielle Loads & Sichtbarkeit**: Helikopter 2 wird erst freigeschaltet, wenn Helikopter 1 (Load 1) voll ist (max. 5 Personen). Die Buchungsdatenbank (Supabase) ermöglicht die sichtbare Anzeige von Nicknames der Mitflieger, um Gruppen zu motivieren.
- **Wix Migration**: Langfristiges Ziel ist der Wegzug von Wix. Das Setup auf der neuen Architektur legt den Grundstein für den nativen Hosting-Wechsel im Juli 2026.

## Blocker
- (Gelöst) Supabase Schema muss weiterhin MANUELL im Dashboard ausgeführt werden (`20260410_init_dolomites.sql`).

## Nächste Schritte
1. [x] Supabase Tabellen `events` & `bookings` inkl. RLS Policies anlegen (SQL erstellt).
2. [x] Stripe Hosted Checkout Backend-Weiche (Edge Function) implementieren.
3. [x] Frontend `index.html` an Live-Datenbank anbinden (Glassmorphism Modal, Nickname Pills, Scarcity-UI gebaut).
4. [ ] n8n Automatisierung an Supabase-Webhook anknüpfen für WhatsApp Benachrichtigung.

## Session-Log
- **10.04.2026 (Fix & Audit)**: Fatalen Marketing-Fehler der Vorversion korrigiert (3.000 € -> echter Preis 775/825 € pro Load). "Book Now" Links wurden bereinigt und zwingen den User nun in unseren Stripe-Checkout-Flow, statt ihn an Elikos (Helikopterbetreiber) zu verlieren.
- **10.04.2026 (Phase 2)**: Umstellung auf "Stripe Hosted Checkout" (mode: setup) in der Edge Function, um Checkout sicherer und performanter zu gestalten (`success.html` implementiert). Frontend wurde mit Premium Glassmorphism und "Nick-Pills" aufgewertet. Cloudflare Push ausgelöst.
- **10.04.2026**: Evaluierung des DolomiteFly-Meetings mit der Geschäftsführung. Beschluss des Strategiewechsels: Abkehr von simplen Checkouts hin zu einem Supabase/Stripe gesteuerten System (`Phase 1` & `Phase 3` verschmolzen).
- **07.04.2026**: Initialisierung des Alpine Digital (Dolomites) Repositories mit vollem State-Management. Frontend-Erweiterung ("Flight Tracker" UI/UX) fertiggestellt und live auf GitHub `main` gepushed!
