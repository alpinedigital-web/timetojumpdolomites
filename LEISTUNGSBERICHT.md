# LEISTUNGSBERICHT: Time to Jump Dolomites (Alpine Digital Agency)
**Stand:** April 2026

## Kennzahlen
| KPI | Status |
|---|---|
| Aktuelle Version | 1.3.0 |
| GitHub Synchronität | Sync ✅ |
| Fokus | i18n & UX-Polish abgeschlossen, Blocker bei Client (Stripe/DNS) |

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

### Phase 3: Lokalisierung & UX-Polish (22.–25.04.2026)
*Vollständige Internationalisierung und Qualitätssicherung der Website.*
- **Booking Modal i18n (9 Sprachen):** Alle Labels, Checkbox-Texte (mit HTML-Links für AGB/Versicherung) und Submit-Button über `data-i18n` / `data-i18n-html` Attribute lokalisierbar gemacht. 15+ neue Translation Keys.
- **Flight Cards i18n:** Dynamisch gerenderte Supabase-Karten (Status-Badges, Seat-Counter, Pricing-Tiers, Deposit-Info, CTA-Buttons) vollständig lokalisiert via `t()` Helper. 22 neue Keys. Sprachwechsel triggert automatischen Re-Render.
- **Fehlende Formularfelder:** Geburtsort und vollständige Adresse gemäß Besuchsbericht vom 07.04 nachgezogen.
- **Language-Dropdown Refactoring:** Multi-Dropdown-Architektur für Desktop + Mobile. Synchronisierte Sprachauswahl ohne doppelte Anzeige.
- **Pricing-Bereinigung:** 10er Ticket-Bündel (Pack Jobs + Rental) entfernt.
- **Gap-Analyse & Scope-Management:** Faktenbasierte Dokumentation des tatsächlichen Aufwands (~2.890€ Mehrleistung über Originalangebot von 900€). Grundlage für Phase-2-Angebotsstellung.
