---
description: Session beenden — State aktualisieren, Roadmap-Checkboxen setzen, Zusammenfassungs-Commit
---

# /done — Session-Ende Ritual

// turbo-all

Führe **alle** Schritte durch. Ziel: **alle Projektdokumente sind nach /done zu 100% synchron.**

---

## 1. Session zusammenfassen (intern)
- Was wurde gebaut/gefixt?
- Welche Entscheidungen getroffen?

## 2. Projekt-Dokumente aktualisieren
Alle Dokumente liegen im Projekt-Root:
- **STATE.md**: Session-Log und Entscheidungen *appendieren* (niemals löschen). Blocker aktualisieren.
- **ROADMAP.md**: Abgeschlossene Tasks mit `[x]` markieren.
- **CHANGELOG.md**: Aktuelle Code-Änderungen dokumentieren.
- **LEISTUNGSBERICHT.md**: Neue Phase ergänzen, falls neue Milestones erreicht wurden.
- **README.md**: Bei groben Systemänderungen anpassen.

## 3. Quellcode Pushen (Git)
Prüfe per Git den uncommited Code:
```powershell
git add .
git commit -m "chore: Automatischer Session-Sync und Update der Tracking-Artefakte"
git push origin main
```

## 4. Artefakte extern sichern
Kopiere wichtige Artefakte (walkthrough, plans) in den dedizierten Ordner:
```powershell
Copy-Item -Path "c:\Users\badmin\.gemini\antigravity\brain\<conversation-id>\_artifacts\*.md" -Destination "c:\Users\badmin\Documents\Artifakte AlpineDigital\$(Get-Date -Format 'yyyy-MM-dd')_SessionBackup.md" -ErrorAction SilentlyContinue
```

## 5. Abschluss zeigen
```
✅ **Session für Alpine Digital abgeschlossen** — [Datum]

📝 Aktualisiert & Gepushed:
- STATE.md ✓
- ROADMAP.md ✓
- CHANGELOG.md ✓
```
