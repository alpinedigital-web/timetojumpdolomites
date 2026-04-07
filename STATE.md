# Alpine Digital Agency (Time to Jump Dolomites) — Aktueller Projektstatus
> Letztes Update: 07.04.2026 — Live Flight Tracker (Deposit System) implementiert

## Aktueller Fokus
- Optimierung der Buchungs-Pipeline via "Deposit First" Modell.
- Integration der finalen Payment Links (Tally / Stripe).

## Entscheidungen
- **Payment Logik**: Anstelle dynamischer Stripe-Checkouts wird künftig ein fixes Deposit-Modell (z. B. 500 €) genutzt, um den Flug zu sichern, wobei der Restbetrag vor Ort bezahlt wird. Dies verhindert "No Shows".
- **Flight Tracker**: Startseite (`index.html`) nutzt eine visuelle "Live Availability"-Ansicht (Scarcity), die live aufzeigt, wie Preise pro Kopf mit steigender Teilnehmeranzahl sinken.
- **Projekt-Instanzierung**: Dieses Projekt (Time to Jump Dolomites) wurde formell als eigenständige Instanz für "Alpine Digital Agency" innerhalb des Antigravity-Umfelds ausgegliedert, voll ausgestattet mit Standard-Tracking (`/start`, `/done`, `STATE.md`, etc.).

## Blocker
- Es werden noch die live Checkout/Stripe-Links vom Kunden (Tally / Stripe) benötigt, um sie im Ticker-Button aktiv zu verknüpfen.

## Nächste Schritte
1. [ ] Checkouts (Stripe/Tally) in die "Upcoming Jumps" Sektion einpflegen.
2. [ ] Feedback-Loop zum neuen Design (Conversion Test).

## Session-Log
- **07.04.2026**: Initialisierung des Alpine Digital (Dolomites) Repositories mit vollem State-Management. Frontend-Erweiterung ("Flight Tracker" UI/UX) fertiggestellt und live auf GitHub `main` gepushed!
