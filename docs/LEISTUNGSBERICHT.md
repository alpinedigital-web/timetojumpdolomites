# LEISTUNGSBERICHT: Time to Jump Dolomites (Alpine Digital Agency)
**Stand:** April 2026

## Kennzahlen
| KPI | Status |
|---|---|
| Aktuelle Version | 2.3.0 |
| GitHub Synchronität | Sync ✅ |
| Fokus | Content-Korrekturen per David (Voice Memos + WhatsApp): IT-Übersetzungen, Pricing, Maps, Vereinsname — 12/17 Punkte erledigt. |

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

### Phase 5: Telefonat-Umsetzung & Go-Live Cleanup (27.–28.04.2026)
*Alle 19 Action Items aus dem 40-Minuten-Telefonat mit David Prato umgesetzt. Repository-Struktur professionalisiert.*
- **Pricing Cleanup:** „2 or more Loads“ entfernt, Equipment Rental vereinfacht (100€ + 80€/Tag), Gruppenpreis-Texte generisch.
- **Elikos-Referenz entfernt:** FAQ, AGB, Sicherheitsbriefing — alle Nennungen generisiert.
- **Zwei Karten-Standorte:** Saslong (1.600m) + Mont de Côi (2.500m) side-by-side.
- **AGB-Erweiterung:** §3.1a Short-Notice-Booking, §4a Substanzenpolitik, Preistabelle entfernt.
- **Booking-Modal Warnung:** Amber-Banner bei kurzfristiger Buchung (< 7 Tage).
- **Repository-Restrukturierung:** Saubere Trennung in public/, docs/, business/, supabase/.
- **Cloudflare Pages:** Build-Output auf public/ konfiguriert, Live-Deployment verifiziert.

### Phase 6: Backend & Booking-System (28.04.2026)
*Komplette Supabase-Infrastruktur für das Buchungssystem gemäß Telefonat-Absprache aufgebaut.*
- **Multi-Standort DB:** `locations` Tabelle mit Saslong + Mont de Côi (GPS, Altitude, Maps-Embed).
- **Dynamische Preise:** `pricing_rules` Tabelle pro Location und Season (775€/825€).
- **Sequenzielle Loads:** `events` erweitert um `load_number`, `parent_event_id` für Load 1 → 2 → 3 Steuerung.
- **Gruppenbuchung:** `bookings` erweitert um `group_leader_id`, `invite_token`, `group_size`. Hauptperson bucht, Mitspringer per Invite-Link.
- **Storno-System:** `cancellations` Tabelle + `calc_cancellation_fee()` Funktion (30% bei > 7 Tagen, 100% bei < 7 Tagen).
- **Events Enriched View:** Vorberechnete Felder (booked_count, availability_status, current_price_per_person, is_short_notice).
- **Edge Function `create-setup-intent`:** Deployed mit dynamischer Deposit-Berechnung, Short-Notice Payment-Mode (Stripe `payment` statt `setup`), Gruppenbuchung mit Token-Generierung.
- **Frontend-Integration:** supabase-client.js komplett auf events_enriched View umgestellt, Gruppenbuchungs-UI im Modal, Load-Badges, Invite-Link-Flow.
- **Security Hardening:** RLS auf allen Tabellen, SECURITY INVOKER View, search_path fix auf Funktionen.

### Phase 7: Full Website Audit & UX-Fixes (28.04.2026)
*Systematischer Source-Code-Audit mit 30 identifizierten Issues. 12 sofort fixbar, rest erfordert Client-Aktion oder Design-Entscheidung.*
- **HTML-Strukturfehler (B-01):** Fehlendes `</section>` für Experience-Section behoben — Upcoming Jumps war als verschachteltes Kind gerendert.
- **SEO-Optimierung:** Page Title de-dupliziert ("Tyrol Tyrol"), OG Image Meta-Tag für Social Sharing hinzugefügt.
- **Navigation-Redesign:** Terms/Privacy aus der Hauptnavigation entfernt und als Footer-Links positioniert.
- **Hero-Conversion:** Von 3 auf 2 CTAs reduziert ("Contact Us" entfernt), Trust Cues auf authentische Signale umgestellt.
- **Google Maps:** Fake-Place-IDs durch koordinatenbasierte Embed-URLs für Saslong (46.548°N) und Mont de Côi (46.557°N) ersetzt.
- **JavaScript-Bugfixes:** Doppelter Supabase-Request bei Sprachwechsel eliminiert, Translation-Bug im Booking-Modal behoben.
- **Content-Korrekturen:** Chat Widget Text, Zeitzone, Footer Copyright, FormSubmit Redirect-URL, Animation-Delay.

### Phase 8: Übergabe-Sprint — Admin Panel & Operational Readiness (28.04.2026)
*Kompletter Admin-Panel-Neubau für Davids operativen Betrieb. Sicherheitslücke geschlossen. Automatische Bereinigung abgebrochener Checkouts.*
- **Admin Panel Rebuild:** Bisheriges CMS-Panel (localStorage-basiert, nur für Übersetzungen) komplett ersetzt durch operatives Event-Management-Tool. 3 Tabs: Events CRUD, Buchungsübersicht, Dashboard-Statistiken.
- **Sicherheitsfix (KRITISCH):** Hardcoded Admin-Passwort `Jump2025!` aus öffentlich erreichbarem JavaScript entfernt. Login jetzt über Supabase Auth (`signInWithPassword()`). Admin-User mit Identity-Record angelegt.
- **RLS Policies:** Row-Level-Security auf allen Tabellen: Anonyme User (Website-Besucher) erhalten nur SELECT-Rechte, authentifizierte Admin-User erhalten vollen CRUD-Zugang.
- **Events CRUD:** David kann direkt im Admin Panel Termine erstellen, bearbeiten und stornieren — ohne Supabase-Dashboard-Zugang.
- **Buchungsübersicht:** Alle Buchungen mit Status-Filter, Freitext-Suche, Detail-Modal (Kontaktdaten, Stripe-ID, Lizenz, Notfallkontakt) und CSV-Export.
- **Abandoned Checkout Cleanup:** SQL-Funktion `cleanup_abandoned_bookings()` setzt `reserved`-Buchungen älter als 30 Minuten automatisch auf `expired`. Integriert in Frontend-Laden + Admin-Dashboard + HTTP-aufrufbare Edge Function.
- **Schema-Mapping korrigiert:** 7 Feldnamen im Admin-Panel gegen das echte Supabase-Schema abgeglichen (jump_date, capacity, first/last_name etc.).
- **Sprach-Archivierung:** Sprachsupport von 9 auf 4 Sprachen reduziert (EN, DE, IT, LAD). 5 Sprachen aus translations.js entfernt.
- **Deep Audit Integration:** Technische Schulden aus extern beauftragtem Code-Audit dokumentiert und in ROADMAP als priorisierte Backlog-Items aufgenommen.

### Phase 9: Content-Korrekturen per Kundenfeedback (29.04.2026)
*David lieferte 2 Voice Memos und WhatsApp-Nachrichten mit 17 Korrekturwünschen. 12 sofort umgesetzt, 5 ausstehend (Input vom Kunden nötig).*
- **Voice-Memo-Transkription:** 2 Audio-Memos via OpenAI Whisper (medium) transkribiert und in strukturierte Änderungsliste überführt.
- **IT-Sprachkorrekturen:** 6 grammatikalische/stilistische Fixes: „assicurati il posto", „con licenza", „gli skydivers", „Vedi listino prezzi" — alle konsistent in translations.js durchgezogen.
- **FAQ-Präzisierung:** Lizenzanforderungen verschärft auf BASE-Lizenz + min. 100 Sprünge + verpflichtende Haftpflichtversicherung.
- **Pricing-Update:** Neue Zeile „1 Sprung = 25 €" (ohne Packjob) bei Fallschirm-Verleih eingeführt, bestehende Zeilen mit Pack-Job-Hinweis ergänzt.
- **Offizieller Vereinsname:** Footer dynamisch auf „Time to Jump Dolomites — associazione sportiva dilettantistica" umgestellt (IT/EN/DE/LAD via i18n).
- **Maps-Korrektur:** Saslong-Position auf Monte Pana aktualisiert (46.543967°N, 11.741500°E). „Mont de Côi" durchgängig in „Molin da Coi" umbenannt mit korrekten Koordinaten (46.565239°N, 11.690443°E).
- **Elikos-Bereinigung:** Letzte verbleibende Referenz in Testimonials entfernt. Vollständige Grep-Verifizierung: 0 Treffer.
- **Änderungsdokumentation:** Konsolidierte Tracking-Datei `david-aenderungswuensche-2026-04-29.md` mit Statusübersicht aller 17 Punkte.
