# CHANGELOG: Time to Jump Dolomites

## [1.3.0] - 2026-04-25
### Added
- **Booking Modal i18n (9 Sprachen)**: Alle Labels, Checkbox-Texte und Submit-Button mit `data-i18n` / `data-i18n-html` Attributen versehen. 15+ neue Translation Keys (`booking.*`).
- **Flight Cards i18n**: Dynamisch gerenderte Supabase-Karten vollständig lokalisiert. Neuer `t()` Translation Helper in `supabase-client.js`. 22 neue Keys (`fc.*`). Monatsnamen via `toLocaleDateString()`.
- **Upcoming Section i18n**: "How Group Pricing Works" Sektion vollständig mit Translation Keys versehen (`upcoming.*`).
- **Fehlende Formularfelder**: Geburtsort (`birthPlace`) und vollständige Adresse (`address`) im Booking Modal ergänzt.
- **Mobile Language Switcher**: Eigener Language-Dropdown im Mobile-Nav (`langDropdownMobile`) mit CSS-Slide-Animation.
- **`data-i18n-html` Handler**: Neuer Translation-Modus in `applyTranslations()` für Checkbox-Labels mit eingebettetem HTML (Links).

### Fixed
- **QA Bugfix**: `loadUpcomingJumps` global zugänglich gemacht und in `setLanguage` aufgerufen, damit sich die Supabase Flight Cards auch ohne Reload dynamisch an die Sprache anpassen.
- **B15 Language-Button doppelt**: Language-Dropdown-Architektur von `getElementById` auf `querySelectorAll('.lang-dropdown')` refaktoriert. Desktop + Mobile synchronisiert.
- **R5 Gemischte Sprachen**: Flight Cards (Supabase-Rendered) zeigen jetzt konsistent die gewählte Sprache an. Sprachwechsel triggert automatischen Re-Render der Flight Cards.

### Removed
- **B10 10er Tickets**: `10 + 1 Pack Jobs` (200€) und `10+1 Jumps Rent + Pack Jobs` (450€) aus Pricing-Sektion entfernt.

## [1.2.1] - 2026-04-10
### Fixed
- **Pricing Logic**: Falsche 3.000 € Dummy-Baseprice Angaben aus der Vorversion mit den echten Live-Werten (775 € Saslong, 825 € Mulin) ersetzt und korrekterweise dynamisch durch 5 Skydiver dividiert.
- **Booking Flow Bypass**: Alle externen Navigations-Links zu "Elikos" (dem Helikopter Code-Share) wurden entfernt oder ins interne `#upcoming` umgeleitet, um zu verhindern, dass User am Stripe-Checkout vorbei direkt den Partner buchen könnten.

## [1.2.0] - 2026-04-10
### Added
- **Stripe Hosted Checkout**: Migration der "Payment Hold"-Logik von rohem UI auf performante Stripe Checkout Sessions im `mode: 'setup'`.
- **Backend Architecture (`supabase/functions/create-setup-intent`)**: Edge Function eingeführt, welche Customer und Sessions erstellt sowie initial die Buchung in die `bookings` Tabelle persistiert.
- **Booking Modal (Glassmorphism)**: Neuentwicklung des Frontends. Das Modal verlangt alle wichtigen Vorab-Infos (Lizenz, Geburtsdatum, Notfallkontakt) im hochmodernen Glass-Design.
- **Sichtbare Nicknames (Social Proof)**: Einführung von Piloten-Avataren (Nick-Pills) in der Flight Card zur Steigerung der Nachfrage. Sequenzielle Load-Sichtbarkeit visualisiert (Load 2 gesperrt, bis Load 1 voll ist).
- **Redirection Loop**: Implementierung einer Premium `success.html` zur Bestätigung des Kreditkarten-Holds.
## [1.1.0] - 2026-04-07
### Added
- **Flight Tracker & Group Pricing Logic (`index.html`)**: Neue Sektion "Upcoming Jumps" eingeführt. Zeigt ausstehende Rotationen, Platzbelegung (z.B. 2 von 4) und rechnet das dynamische Preismodell vor. 
- **Design System Updates (`css/style.css`)**: Gradients, Flight-Card Hover-Effekte, Responsive-Optimierungen für das neue Tracker-Modul. 
- **Alpine Digital Tracking**: Antigravity Infrastruktur (`STATE.md`, `ROADMAP.md`, `CHANGELOG.md`, `LEISTUNGSBERICHT.md`, `/start`, `/done`) als dritte Instanz aufgesetzt.
- **Content Synchronization (`index.html`)**: Abgleich mit der alten Website durchgeführt. Shop- und App-Links in der Navigation nachgezogen, `<title>` Tag für SEO-Erhalt angepasst.

## [1.0.0] - Vor April 2026
### Added
- **Premium Visual Overhaul**: Komplette Neuentwicklung der Website-Basis (HTML/CSS) auf Basis der alten Website.
- **Responsive Design System**: Einführung eines modernen, responsiven Frameworks inklusive Dark-Mode, Typography-Anpassungen (Google Fonts) und Glassmorphism-UI-Komponenten.
- **Content-Migration (Part 1)**: Initiale Integration der bestehenden Strukturen (Texte, Basis-Preise, Partner).
