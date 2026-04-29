# Änderungswünsche David Prato — 29.04.2026
> Quelle: Voice Memo „Memo 1" (3:27 Min), transkribiert via Whisper (medium)

---

## Rohe Transkription

> „Guten Morgen Axel, genau wie du sagtest, machen wir so, ist das beste für beide.
> Also es fehlen den Überlink zu die App und zu Elikos.
> Bei dem Punkt, was erwartet dich, Punkt eins, da steht **Assicura tu posto**.
> Es sollte sein **Assicura ti il posto**, weil sonst klingt ganz etwas anders.
> Aber das schreibe ich jetzt gleich drunter.
> Und dasselbe findet man danach beim nächsten Sprünge, **Assicura ti il posto**. Ist richtig.
> Bei den Sloganen und Escrojump habe ich nicht verstanden, was heißt Short Notice.
> Ok, darunter steht **Rotazioneli Kotterl**, also die Flüge.
> Ich würde schreiben Abneuen, also **Dalle Name**.
> Und das gleiche Bananen.
> Bei den Sprünge kannst du das gleiche Datum eintippen. Also Saslong und Molinda Koi.
> Beim Preislicht, wie gesagt, da steht **Solo Paracadutisti Professionisti**, also No Profis.
> Wie gesagt, da schreibt ihr auch unten, **Solo Paracadutisti Con Licenza**. Da würde ich schreiben.
> Beim Rezensionen steht **Cosa Dicono e Saltatori**.
> Da würde ich schreiben **Cosa Dicono e Paracadutisti**.
> Bei die FAQ brauche ich eine Lizenz.
> Ja, da würde ich schreiben eine Baby-Botsen-Lizenz.
> Weil so ist es auch ein bisschen genauer. Und 100 Sprünge. Und das für die Versicherung.
> Aber sollte das... Nein, das für die Versicherung, was ich dir erklärt habe. Also von der Versicherung. Oder hast du gemeint, in Kochandas zu schreiben.
> Da unten immer bei die FAQ brauche ich meine Riege. Hast du geschrieben, wie die **Prezipe le tarife**. Da ist es **wie die Prezipe e le tarife**.
> Beim Google Maps, also Saslong ist nicht ganz genau. Weil da ist es eben... eine falsche Zone. Das müsstest du sehen, da wo Monte Pana steht. Also wo auf Google Maps meine Position ist.
> Und das von **Molinda Coy**. Da steht noch **Monte de Coy**. Da müsstest du ändern **Molinda Coy**.
> Und die Position natürlich auch ändern. Das schicke ich dir jetzt auf WhatsApp. Die Positionen sind korrekt."

---

## Gebündelte Änderungswünsche

### Ä1 — Italienische Übersetzung: „Assicura tu posto" → „Assicura**ti il** posto"
- **Wo:** CTA-Buttons / „Was erwartet dich"-Abschnitt + Flight Cards (nächste Sprünge)
- **Was:** Grammatikfehler in der italienischen Übersetzung des „Sichere dir deinen Platz"-CTAs
- **Korrekt:** `Assicurati il posto` (reflexiv, 2. Person Singular)
- **Betrifft:** `translations.js` — alle IT-Keys die „Assicura tu posto" enthalten
- **Priorität:** 🔴 Hoch (sichtbarer Sprachfehler auf der Startseite)

---

### Ä2 — „Short Notice" für David unklar
- **Wo:** Flight Cards / Booking-Badges
- **Was:** David versteht nicht, was „Short Notice" bedeutet. Prüfen, ob der italienische Text verständlich ist oder ob eine bessere Formulierung nötig ist (z.B. „Prenotazione last-minute" o.ä.)
- **Betrifft:** `translations.js` — IT-Keys für Short-Notice-Badge und Booking-Warning
- **Priorität:** 🟡 Mittel (UX/Verständlichkeit für IT-Besucher)

---

### Ä3 — Flüge-Label: „Rotazioneli" → „Dalle Name" (unklar)
- **Wo:** Flight Cards — Untertext bei Sprüngen
- **Was:** David bemängelt die Formulierung unter den Flügen. Whisper-Transkription unklar (starker Dialekt). Vermutlich soll der Beschreibungstext der Rotationsflüge geändert werden. **→ Rückfrage an David nötig per WhatsApp, was genau gemeint ist.**
- **Priorität:** 🟡 Mittel (Rückfrage erforderlich)

---

### Ä4 — Sprünge: Gleiche Daten für Saslong & Molinda Coi
- **Wo:** Events / Flight Cards
- **Was:** David möchte, dass bei den Sprüngen das gleiche Datum für beide Locations (Saslong und Molinda Coi) angezeigt wird — ggf. parallele Events eintragen.
- **Betrifft:** Supabase `events`-Tabelle — Daten-Eingabe durch David im Admin Panel
- **Priorität:** 🟢 Niedrig (Content-Pflege, kein Code-Change)

---

### Ä5 — Pricing-Abschnitt IT: „Professionisti" → „Con Licenza"
- **Wo:** Pricing-Section, Disclaimer-Text
- **Was:** Statt „Solo Paracadutisti Professionisti" soll es heißen: **„Solo Paracadutisti Con Licenza"** — also nicht „Profis" sondern „Lizenzierte Fallschirmspringer"
- **Betrifft:** `translations.js` — IT-Keys im Pricing-Bereich (vermutlich `pricing.disclaimer` o.ä.)
- **Priorität:** 🔴 Hoch (falsche Zielgruppen-Ansprache)

---

### Ä6 — Rezensionen IT: „Saltatori" → „Paracadutisti"
- **Wo:** Testimonials/Reviews-Section — IT-Heading
- **Was:** „Cosa Dicono **e Saltatori**" → „Cosa Dicono **i Paracadutisti**"
- **Hinweis:** Auch Artikel-Fehler: „e" → „i" (bestimmter Artikel Plural maskulin)
- **Betrifft:** `translations.js` — IT-Key für Reviews-Heading
- **Priorität:** 🔴 Hoch (grammatikalisch falsch)

---

### Ä7 — FAQ: Lizenzanforderung präzisieren
- **Wo:** FAQ-Section — „Brauche ich eine Lizenz?"
- **Was:** Statt generischem „Ja, du brauchst eine Lizenz" soll spezifisch stehen:
  - **Base-Jumping-Lizenz** (nicht nur Skydiving-Lizenz)
  - **Minimum 100 Sprünge** Erfahrung
  - **Versicherung** erforderlich (David betont dies besonders)
- **Betrifft:** `translations.js` — FAQ-Answer-Keys (alle 4 Sprachen)
- **Priorität:** 🔴 Hoch (rechtlich relevante Information)

---

### Ä8 — FAQ IT: „Prezipe le tarife" → „Prezipe e le tarife"
- **Wo:** FAQ-Section — IT-Übersetzung einer Frage/Antwort
- **Was:** Fehlender Konjunktor. Korrekt: „…**e** le tarife" (mit „und")
- **Betrifft:** `translations.js` — IT-FAQ-Keys
- **Priorität:** 🟡 Mittel (kleiner Grammatikfehler)

---

### Ä9 — Google Maps: Saslong-Position korrigieren
- **Wo:** Map-Section — Saslong Embed
- **Was:** Die aktuelle Kartenposition für Saslong zeigt eine „falsche Zone". David sagt, es müsste bei **Monte Pana** sein (wo seine tatsächliche Position ist). Exakte Koordinaten kommen per WhatsApp.
- **Betrifft:** `index.html` — Google Maps Embed-URL für Saslong
- **Priorität:** 🔴 Hoch (falsche Location auf der Karte)
- **⏳ Blockiert:** Warten auf WhatsApp-Nachricht mit korrekten Koordinaten

---

### Ä10 — Standort-Name: „Monte de Coi" → „Molinda Coi"
- **Wo:** Map-Section + ggf. alle Referenzen auf der Seite
- **Was:** Der zweite Standort heißt nicht „Monte de Coi" sondern **„Molinda Coi"** (bzw. „Col de Moline" / lokaler Name). Alle Referenzen müssen korrigiert werden. Exakte GPS-Position kommt ebenfalls per WhatsApp.
- **Betrifft:** `index.html`, `translations.js`, ggf. `events`-Tabelle in Supabase
- **Priorität:** 🔴 Hoch (falscher Ortsname)
- **⏳ Blockiert:** Warten auf WhatsApp-Nachricht mit korrekten Koordinaten

---

### Ä11 — Links zu App und Elikos entfernen
- **Wo:** Header/Navigation oder Footer
- **Was:** David sagt „es fehlen den Überlink zu die App und zu Elikos" — vermutlich meint er, dass noch irgendwo Links zu einer externen App oder Elikos vorhanden sind, die entfernt werden müssen.
- **Hinweis:** App-Link und Elikos-Referenzen wurden bereits in Phase 1.7 entfernt. **→ Erneut prüfen ob Reste vorhanden sind.**
- **Betrifft:** Volltext-Suche über alle HTML/JS-Dateien
- **Priorität:** 🟡 Mittel (sollte bereits erledigt sein — Verifizierung nötig)

---

## Memo 2 — Transkription (40 Sek)
> Quelle: Voice Memo „Memo 2 - 40 sekunden" (40 Sek), transkribiert via Whisper (medium)

> „Noch etwas bei Noleggio Paracadute, also aus Leihen des Rigs.
> Du hast hingeschrieben da ein Tag plus einen Packjob und unten jede zusätzliche Tage.
> Ich würde noch erst reinschreiben lassen, **ein Sprung 25 Euro**. Also nur ein Sprung.
> Und das war's. Also das.
> Und jeden zusätzlichen Tag würde ich schreiben, **in Klammer, ohne Packjob**."

---

## WhatsApp-Nachrichten von David (29.04.2026)

### Textkorrekturen IT
> „Assicura il tuo posto...falsch
> Assicurati il posto....richtig
> (Jetzt klingt versichere dein Platz)"
>
> „dalle 09:00"
>
> „Solo paracadutisti con licenza (No Tandem)."
>
> „Cosa dicono i paracadutisti — Oder — Cosa dicono gli skydivers (Klingt wahrscheinlich besser...)"
>
> „Vedi listino prezzi (noch besser...)"

### Google Maps Positionen
> „Diese Position ist von Monte Pana:"
> https://maps.app.goo.gl/Yztcr46xRka6L5eGA?g_st=awb
> **Koordinaten: 46.543967, 11.741500** (aufgelöst)

> „Und die ist Molin da Coi:"
> https://maps.app.goo.gl/g9HDcPT9aM93Z3gGA?g_st=awb
> **Koordinaten: 46.565239, 11.690443** (aufgelöst)

### Offizieller Vereinsname
> „Siamo ufficialmente:
> **Time to Jump Dolomites associazione sportiva dilettantistica**
> Wir sind offiziell:
> **Time to Jump Dolomites Sport Verein**
> 🍾🥂🎉🪂"

### Kurs-Text
> David sendet in Kürze einen Text für die „Fallschirmspringer-Kurse" (reine Beschreibung, keine Vormerkfunktion). → **⏳ Ausstehend**

---

## Zusätzliche Änderungswünsche (aus Memo 2 + WhatsApp)

### Ä12 — Rental/Leihgebühren: Neues Pricing-Tier „1 Sprung = 25 €"
- **Wo:** Pricing-Section — „Noleggio Paracadute" / Rental-Tabelle
- **Was:** Zusätzliche Zeile einfügen: **1 Sprung = 25 €** (ohne Packjob). Die bestehende „1 Tag + 1 Packjob"-Zeile bleibt. Bei „jeder zusätzliche Tag" den Klammerzusatz „(ohne Packjob)" hinzufügen.
- **Betrifft:** `translations.js` — Rental-Pricing-Keys (alle 4 Sprachen), ggf. `index.html` Layout-Anpassung
- **Priorität:** 🔴 Hoch (Preisanpassung)

---

### Ä13 — Offizieller Vereinsname im Footer/Impressum
- **Wo:** Footer, Impressum, ggf. Header
- **Was:** Offizieller Name des Vereins einfügen:
  - IT: **Time to Jump Dolomites associazione sportiva dilettantistica**
  - DE: **Time to Jump Dolomites Sport Verein**
- **Betrifft:** `index.html` (Footer), `translations.js`, ggf. `privacy.html` / `terms.html`
- **Priorität:** 🔴 Hoch (rechtliche Pflichtangabe)

---

### Ä14 — Neuer Content-Block: Fallschirmspringer-Kurse
- **Wo:** Neue Section auf der Startseite (zwischen bestehenden Sections)
- **Was:** Beschreibungstext für Fallschirmspringer-Kurse einbinden. Keine Buchungsfunktion, nur informativ. Text wird noch von David geliefert.
- **Betrifft:** `index.html` (neue Section), `translations.js` (4 Sprachen), `css/style.css`
- **Priorität:** 🟡 Mittel (⏳ Blockiert — Text ausstehend)

---

### Ä15 — IT: „Vedi listino prezzi" als bessere CTA-Alternative
- **Wo:** Pricing-Link / CTA-Button IT
- **Was:** David schlägt „**Vedi listino prezzi**" vor als verständlichere Alternative. Prüfen, wo der aktuelle CTA steht und ggf. ersetzen.
- **Betrifft:** `translations.js` — IT-Keys für Pricing-CTA
- **Priorität:** 🟡 Mittel

---

### Ä16 — IT Zeitangabe: „dalle 09:00"
- **Wo:** Event-/Flight-Cards — Startzeit
- **Was:** David betont die korrekte italienische Formulierung „**dalle 09:00**" (ab 09:00). Sicherstellen, dass die IT-Übersetzung korrekt ist.
- **Betrifft:** `translations.js` — IT-Keys für Zeitangaben
- **Priorität:** 🟡 Mittel

---

### Ä17 — IT Reviews: Alternative „Cosa dicono gli skydivers"
- **Wo:** Testimonials/Reviews-Section — IT-Heading
- **Was:** David schlägt als Alternative zu „Cosa dicono i paracadutisti" auch „**Cosa dicono gli skydivers**" vor (klingt laut David besser). → Entscheidung: Letztere verwenden, da David sie bevorzugt.
- **Hinweis:** Ergänzt/ersetzt Ä6 — statt „i Paracadutisti" nun „gli skydivers"
- **Betrifft:** `translations.js` — IT-Key für Reviews-Heading
- **Priorität:** 🔴 Hoch (Davids Präferenz)

---

## Zusammenfassung

| Prio | # | Beschreibung | Status |
|------|---|-------------|--------|
| 🔴 | Ä1 | IT: „Assicurati il posto" | ✅ Erledigt |
| 🟡 | Ä2 | „Short Notice" IT-Verständlichkeit | ⬜ Rückfrage |
| 🟡 | Ä3 | Flüge-Beschreibungstext (Rückfrage) | ❓ Rückfrage |
| 🟢 | Ä4 | Gleiche Daten Saslong/Molin da Coi | ⬜ Content-Pflege |
| 🔴 | Ä5 | IT: „Con Licenza" statt „Professionisti" | ✅ Erledigt |
| 🔴 | Ä6 | IT: „i Paracadutisti" → „gli skydivers" (per Ä17) | ✅ Erledigt |
| 🔴 | Ä7 | FAQ: BASE-Lizenz + 100 Sprünge + Versicherung | ✅ Erledigt |
| 🟡 | Ä8 | IT: „e le tarife" Konjunktor | ✅ Erledigt |
| 🔴 | Ä9 | Maps: Saslong → Monte Pana (46.543967, 11.741500) | ✅ Erledigt |
| 🔴 | Ä10 | „Monte de Coi" → „Molin da Coi" (46.565239, 11.690443) | ✅ Erledigt |
| 🟡 | Ä11 | App/Elikos-Links entfernt + verifiziert | ✅ Erledigt |
| 🔴 | Ä12 | Rental: 1 Sprung = 25 € + Packjob-Label | ✅ Erledigt |
| 🔴 | Ä13 | Offizieller Vereinsname (Footer/Impressum) | ✅ Erledigt |
| 🟡 | Ä14 | Neuer Block: Fallschirmspringer-Kurse | ⏳ Blockiert (Text ausstehend) |
| 🟡 | Ä15 | IT: „Vedi listino prezzi" CTA | ✅ Erledigt |
| 🟡 | Ä16 | IT: „dalle 09:00" Zeitformat | ✅ Erledigt (dynamisch) |
| 🔴 | Ä17 | IT Reviews: „gli skydivers" (Davids Präferenz) | ✅ Erledigt |

**12 von 17 Punkten umgesetzt ✅** — implementiert am 29.04.2026
**Blockiert / Rückfrage nötig:** Ä2, Ä3, Ä14
**Content-Pflege (David im Admin Panel):** Ä4
