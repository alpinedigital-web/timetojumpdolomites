# CHANGELOG: Time to Jump Dolomites

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
