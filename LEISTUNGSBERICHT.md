# LEISTUNGSBERICHT: Time to Jump Dolomites (Alpine Digital Agency)
**Stand:** April 2026

## Kennzahlen
| KPI | Status |
|---|---|
| Aktuelle Version | 1.4.0 |
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
- **QA-Test & Bugfixing:** Manueller End-to-End-Test durchgefuehrt, um UI, Typografie, und Modal-Inhalte auf Desktop und Mobile zu verifizieren. Live-Re-Render Bug beim Sprachwechsel behoben.
- **Gap-Analyse & Scope-Management:** Faktenbasierte Dokumentation des tatsaechlichen Aufwands (~2.890 EUR Mehrleistung ueber Originalangebot von 900 EUR). Grundlage fuer Phase-2-Angebotsstellung.

### Phase 4: UX Optimization & Site Cleanup (25.04.2026 Abend)
*Usability-Verbesserungen, visuelle Bugfixes und Bereinigung nicht benoetigter Sektionen.*
- **Emergency Contact Redesign:** Einzelnes Textfeld in zwei separate Eingabefelder (Name + Telefonnummer) aufgeteilt fuer saubere Datenerfassung und bessere UX.
- **Kontextuelle Tooltip-Hints:** CSS-only Fragezeichen-Icons bei kritischen Formularfeldern (Nickname, Notfallkontakt, Lizenzland, Lizenznummer) mit Hover-Erklaerungen in 9 Sprachen.
- **Flight Card Visual Fixes:** Titelkontrast auf hellem Hintergrund verbessert, Button-Overflow behoben (Buttons bleiben jetzt im Container).
- **Seitenweiter Kontrastfix:** section--light Hintergrund bekommt dunkle Textfarbe — betrifft "Finde uns" (Map), "Kommende Spruenge" (Upcoming) und weitere helle Sections.
- **Navigation-Bereinigung:** Shop, Blog und leere Events-Sektion komplett entfernt. "Events" umbenannt in "Spruenge" mit Direktlink auf die Live-Verfuegbarkeit (#upcoming). Alle drei HTML-Seiten synchronisiert.
- **Sprachanzeige-Fix:** "DE DE" Doppelanzeige im Language-Dropdown behoben (Windows-spezifisches Flag-Emoji-Rendering).
- **AGB-Seite i18n:** Headings (Label, Ueberschrift, Aktualisierungsdatum) in 9 Sprachen uebersetzt. Volltext-Uebersetzung als Phase-2-Scope dokumentiert.
- **Booking Error UX:** Verbesserte Fehlermeldung bei fehlgeschlagener Reservierung (lokalisiert DE/EN, mit technischem Detail).
