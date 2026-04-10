# LEISTUNGSBERICHT: Time to Jump Dolomites (Alpine Digital Agency)
**Stand:** April 2026

## Kennzahlen
| KPI | Status |
|---|---|
| Aktuelle Version | 1.1.0 |
| GitHub Synchronität | Sync ✅ |
| Fokus | SetupIntent Booking Engine (Phase 2) |

---

## Erbrachte Leistungen

### Phase 1: Grundlagen & Premium Visual Overhaul (Initialisierung)
*Ausgangslage: Die alte Website des Kunden entsprach nicht mehr aktuellen Premium-Standards und lieferte eine schwache User Experience. Das Ziel war ein komplettes Re-Design von Grund auf.*
- **Modernes Re-Design:** Komplette Neuentwicklung der Website-Architektur basierend auf der alten Website. Entwicklung einer klaren, hochmodernen Visualisierung (Dark Mode, Glassmorphismus, flüssige Animationen).
- **Mobile First & Responsive Design:** Aufbau einer responsiven Struktur, die das atemberaubende Bildmaterial der Dolomiten auf allen Endgeräten perfekt in Szene setzt.
- **Content-Migration (Part 1):** Initiale Übernahme der Grundstruktur (Preise, FAQs, Kontakte) in ein zukunftssicheres, sauberes HTML/CSS Basis-Setup.

### Strategischer Meilenstein (10.04.2026): Workshop & Pivot
*Offizielles Vor-Ort-Besprechungsprotokoll zwischen **David (Dolomites Jump)** und **Axel Mühlbacher (SolumInvest GmbH / Alpine Digital)**.*
- **Zieldefinition:** Steuerung der Commitment-Hemmschwelle bei gleichzeitiger Absicherung der finanziellen Ausfallsrisiken (Helikopter-Leerflüge & No-Shows).
- **Beschluss 1 (Payment Hold anstelle von Deposit):** Wegfall des starren 500€ Deposits zugunsten einer Kreditkarten-Hinterlegung (0,00€ Hold via Stripe SetupIntent). Strafklauseln (z.B. für verpasste Briefings) können manuell eingezogen werden, während der Ticketpreis flexibel vor Ort gezahlt wird.
- **Beschluss 2 (Sequenzielle Loads & Sichtbarkeit):** Einführung einer Scarcity- und Motivations-Logik. Helikopter 2 wird erst freigeschaltet, wenn Helikopter 1 voll besetzt ist (max. 5 Personen). Zur Förderung der Gruppenbildung werden die "Nicknames" der gebuchten Fluggäste eines Loads öffentlich sichtbar gemacht.
- **Beschluss 3 (Bürokratie-Reduktion im Vorfeld):** Alle essenziellen Metadaten (Lizenzland, Lizenznummer, Geburtsdatum, Notfallkontakt, Nachweis der Haftpflichtversicherung z.B. pianetavolo.it) werden zwingend beim Checkout abgefragt, um die Abwicklung am Sprungplatz zu verschlanken.
- **Beschluss 4 (Migration):** Langfristige Ablöse des alten Wix-Setups und Transition auf die native Architektur bis Juli 2026.

### Phase 2: Booking Engine Development (Supabase & Stripe)
*Technische Umsetzung der im Workshop definierten Booking-Logik.*
- **Backend Setup (Supabase):** Architektur der Datenstruktur für `events` und `bookings` inkl. Row Level Security.
- **Frontend Formular:** Implementierung des komplexen Buchungsformulars (Lizenz, Versicherung, Nickname etc.) direkt auf der Website.
