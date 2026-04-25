# Gap-Analyse & Statusbericht — DolomitesFly
**Stand: 25. April 2026**  
**Referenz:** Angebot Nr. 02/2026 (Solum Invest GmbH, 15. März 2026, EUR 900,– netto)  
**Vergleichsbasis:** Besuchsbericht Meeting David, 07.04.2026

---

## 1. Scope-Vergleich: Angebot vs. Ist-Stand

### ✅ Im Angebot inkludiert (EUR 900,–) — Status: ERLEDIGT

| # | Leistung laut Angebot | Status | Anmerkung |
|---|---|---|---|
| A1 | Vollständige Landingpage (12 Sektionen, responsiv) | ✅ Done | Alle Sektionen live |
| A2 | Mehrsprachigkeit (9 Sprachen, Dropdown, LocalStorage) | ✅ Done | EN, DE, IT, LAD, NL, FR, PL, ES, CS |
| A3 | Kontaktformular mit E-Mail-Versand (FormSubmit.co) | ✅ Done | Wartet auf Aktivierung durch David (s. C2) |
| A4 | WhatsApp/E-Mail/Telefon Chat-Widget | ✅ Done | Floating Widget live |
| A5 | Security Headers (CSP, X-Frame etc.) | ✅ Done | `_headers` konfiguriert |
| A6 | SEO-Grundstruktur (Meta-Tags, OG, semantisches HTML) | ✅ Done | |
| A7 | Datenschutzseite (privacy.html) | ✅ Done | |
| A8 | DNS-Migration & Cloudflare-Einrichtung | ⏳ Wartet | Blockiert durch fehlende Aruba-Zugangsdaten (s. C1) |
| A9 | 2 Feedback-Schleifen | ✅ Done | Deutlich mehr als 2 Schleifen absolviert |

**Fazit Angebotsumfang:** Alle zugesagten Leistungen sind fertiggestellt oder warten auf Client-Aktion. Der rein vertraglich geschuldete Scope ist erfüllt.

---

### 🎁 Goodwill / Mehrleistung (nicht im Angebot, trotzdem umgesetzt)

Diese Positionen gehen **über das Angebot hinaus** und wurden als Mehrleistung erbracht. Sie entsprechen Anforderungen aus dem Besuchsbericht vom 07.04.2026.

| # | Leistung | Besuchsbericht-Ref. | Geschätzter Aufwand | Status |
|---|---|---|---|---|
| B1 | **Supabase-Backend** (Events + Bookings + RLS) | "Event-Portal", "Reservierung" | ~3h | ✅ Done |
| B2 | **Stripe SetupIntent** (0€ Card Hold, Edge Function) | "Kreditkarte blocken" | ~3h | ✅ Done |
| B3 | **Dynamische Flight Cards** (Live-Verfügbarkeit, Scarcity-UI) | "Reservierungsanzeige", "Nickname anzeigen" | ~4h | ✅ Done |
| B4 | **Nickname-Pills** (öffentliche Passagierliste, Social Proof) | "Wer hat gebucht anzeigen" | ~1h | ✅ Done |
| B5 | **Sequenzielle Load-Logik** (Load 2 erst nach Load 1 voll) | "Sequenzielle Buchung" | ~1h | ✅ Done |
| B6 | **Dynamisches Gruppenpricing** (Preis sinkt mit mehr Springern) | "775€ / 5 Personen" | ~1h | ✅ Done |
| B7 | **Booking Modal** (Glassmorphism, alle Pflichtfelder) | "Daten der Person" | ~2h | ✅ Done |
| B8 | **AGB-Seite** (terms.html, Stornobedingungen, Briefing-Strafe) | "AGBs", "Storno-Richtlinie" | ~2h | ✅ Done |
| B9 | **Erfolgsseite** (success.html, WhatsApp-Gruppe) | "Gruppe zugefügt" | ~1h | ✅ Done |
| B10 | **10er Tickets entfernt** | "Rausnehmen aus Pricing" | ~0,5h | ✅ Done |
| B11 | **Pricing-Korrektur** (775€/825€ statt 3.000€ Dummy) | Preise laut Meeting | ~0,5h | ✅ Done |
| B12 | **Admin-Dashboard** (admin.html, Event-Verwaltung) | Implied | ~2h | ✅ Done |
| B13 | **CSP-Header-Erweiterung** (Supabase-API erlauben) | Technisch notwendig | ~0,5h | ✅ Done |
| B14 | **Booking Modal i18n** (9 Sprachen, data-i18n-html) | Mehrsprachigkeit | ~2h | ✅ Done |
| B15 | **Language-Dropdown Fix** (Desktop + Mobile synchronisiert) | UX-Bug | ~1h | ✅ Done |
| B16 | **Adresse im Formular** (Straße, PLZ, Land) | "Adresse vollständig" | ~0,5h | ✅ Done |
| B17 | **Geburtsort im Formular** | "Geburtsdatum und Ort" | ~0,5h | ✅ Done |
| B18 | **Flight Cards i18n** (22 Keys, t()-Helper, Re-Render) | Keine gemischten Sprachen | ~2h | ✅ Done |
| | | | **Σ ~28h** | |

**Kommerzielle Bewertung der Mehrleistung:**

| | Berechnung | Betrag |
|---|---|---|
| Geschätzter Aufwand | ~28 Stunden × EUR 85,–/h (lt. Angebot) | **EUR 2.380,–** |
| Davon fakturiert | | EUR 0,– |
| **Goodwill / nicht verrechnete Mehrleistung** | | **EUR 2.380,–** |

> **WICHTIG:** Die gesamte Booking-Engine (Supabase + Stripe + Flight Cards + Modal) war **explizit nicht Bestandteil des Angebots**. Im Angebot stand unter §2 klar: *"Shop, Eventkalender, Blog, Admin-Panel — benötigen Backend + Datenbank, welches im aktuellen Angebot nicht enthalten ist."* Wir haben diese Leistungen trotzdem als Goodwill erbracht.

---

### ⏳ Offene Punkte — Aktion durch David erforderlich

| # | Punkt | Wer | Status |
|---|---|---|---|
| C1 | **Aruba DNS-Zugangsdaten** liefern | David | ❌ Offen |
| C2 | **FormSubmit.co** Bestätigungs-E-Mail bestätigen | David | ❌ Offen |
| C3 | **Stripe Business Account** einrichten | David | ❌ Offen |
| C4 | **GMB Validierung** (Büro-Foto für Google My Business) | David | ❌ Offen |
| C5 | **Reverse Charge** Validierung (steuerlich) | Axel | ✅ Erledigt |

---

### 🔮 Noch nicht umgesetzt — erfordert neues Angebot (Phase 2)

| # | Leistung | Besuchsbericht-Ref. | Geschätzter Aufwand |
|---|---|---|---|
| P1 | **Automatische Reminder-E-Mails** (7d/5d/3d vor Abflug) | "Info-Mail Sequenz" | ~4h |
| P2 | **Automatische WhatsApp-Gruppeneinladung** | "Gruppe zugefügt automatisch" | ~3h |
| P3 | **Stripe Live-Checkout** (Karte tatsächlich blocken) | "Kreditkarte blocken" | ~3h |
| P4 | **Gruppenbuchung** (1 Person bucht für mehrere) | "Eine Person kann für Gruppe reservieren" | ~4h |
| P5 | **Instagram/Facebook-Unterstützung** | "Instagram regulär posten" | ~3h |
| P6 | **Wix-Ablöse & Domain-Umzug** (technisch) | "Wix kündigen Juli 2026" | ~2h |
| | | | **Σ ~19h ≈ EUR 1.615,–** |

---

## 2. Zusammenfassung

```
┌─────────────────────────────────────────────────────────────┐
│  Angebot Nr. 02/2026                         EUR    900,–  │
│  Tatsächlich erbrachte Leistung (28h × 85€)  EUR  2.380,–  │
│  ─────────────────────────────────────────────────────────  │
│  Nicht verrechnete Mehrleistung (Goodwill)   EUR  1.480,–  │
│                                                             │
│  Offene Phase 2 (neues Angebot)              EUR ~1.615,–  │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Nachricht an David

> **Betreff:** Update Website timetojumpdolomites.com — Aktueller Status & nächste Schritte

Hallo David,

hier ein kurzes Update zum aktuellen Stand der Website.

**Was ist seit unserem Meeting am 7. April passiert:**

Wir haben neben der bereits fertigen Website (die ja im ursprünglichen Angebot enthalten war) auch das komplette Buchungssystem umgesetzt, das wir beim Meeting besprochen haben:

- ✅ **Dynamische Flight Cards** mit Live-Verfügbarkeit direkt von der Datenbank
- ✅ **Reservierungsformular** mit allen Pflichtfeldern (Lizenz, Versicherung, Notfallkontakt, Geburtsdatum, Geburtsort, vollständige Adresse)
- ✅ **Nickname-Anzeige** — Passagiere sehen, wer im gleichen Load gebucht hat
- ✅ **Sequenzielle Loads** — Load 2 wird erst freigeschaltet, wenn Load 1 voll ist
- ✅ **Dynamisches Gruppenpricing** — Preis sinkt automatisch mit jedem weiteren Springer
- ✅ **Stripe-Vorbereitung** für Kreditkarten-Hold (0€ Card Hold)
- ✅ **AGB-Seite** mit Stornobedingungen und Briefing-Strafe (50€)
- ✅ **Vollständige Mehrsprachigkeit** — alle 9 Sprachen funktionieren jetzt durchgängig, auch im Buchungsformular und in den Flight Cards (keine gemischten Sprachen mehr)
- ✅ **10er Tickets** aus dem Pricing entfernt, wie besprochen

**Was von deiner Seite noch offen ist:**

1. **Aruba DNS-Zugangsdaten** — damit wir die Domain `timetojumpdolomites.com` auf die neue Seite umschalten können
2. **Stripe Account** einrichten — damit die Kreditkarten-Reservierung live gehen kann
3. **FormSubmit.co bestätigen** — eine Bestätigungs-E-Mail an info@timetojumpdolomites.com muss einmalig bestätigt werden
4. **GMB Validierung** — Büro-Foto für Google My Business bereitstellen

**Wichtiger Hinweis zum Umfang:**

Das gesamte Buchungssystem (Datenbank, Stripe-Integration, Flight Cards, Reservierungsformular etc.) war im ursprünglichen Angebot von EUR 900,– **nicht enthalten** — dort stand explizit, dass Eventkalender, Shop und Admin-Panel ein Backend benötigen, das separat angeboten wird. Wir haben das trotzdem als Goodwill bereits umgesetzt.

Für **weitere Funktionen** (automatische Erinnerungs-E-Mails, WhatsApp-Gruppeneinladung, Gruppenbuchung etc.) würden wir ein separates Angebot erstellen. Das ist fair, da wir aktuell schon deutlich über den ursprünglich vereinbarten Leistungsumfang hinausgegangen sind.

Sobald du mir die Aruba-Zugangsdaten und den Stripe-Account lieferst, können wir innerhalb von 48 Stunden live gehen.

Beste Grüße,
Axel

---

*Diese Nachricht kann direkt per E-Mail oder WhatsApp an David geschickt werden.*
