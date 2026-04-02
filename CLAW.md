# CLAW.md – Kids KI-Meisterkurs

This file provides guidance to Claw Code when working on this repository.

## Detected Stack
- **Languages:** HTML5, CSS3, JavaScript (vanilla)
- **Frameworks:** None (static site)
- **Testing:** Jest with jsdom environment
- **Linting:** html-validate, stylelint

## Verification Commands
```bash
# Full validation suite
npm run validate

# Individual checks
npm test                    # Jest tests (291 tests)
npm run lint:html          # HTML validation
npm run lint:css           # CSS linting
npm run ci                 # CI pipeline
```

## Repository Shape
```
kids-repo/
├── index.html              # Landing page with progress tracking
├── tag-1.html … tag-5.html # 5 lesson pages
├── eltern.html             # Parent guide
├── wochenplan.html         # Weekly schedule
├── arbeitsblaetter.html    # 4 worksheets
├── styles.css              # Unified stylesheet (design system)
├── package.json            # NPM config + test scripts
├── tests/                  # Jest test suite
│   ├── validation.test.js  # HTML structure, links, meta
│   ├── content.test.js     # Content presence, semantics
│   └── quality.test.js     # CSS, mobile, security
├── .github/workflows/      # GitHub Actions CI/CD
├── .htmlvalidate.json      # HTML validation rules
└── .stylelintrc.json       # CSS linting rules
```

## Design System (Immutable)
- **Primary:** Indigo `#4f46e5`
- **Accents:** Teal `#14b8a6`, Coral `#f97316`, Purple `#8b5cf6`
- **Font:** Inter (Google Fonts)
- **Icons:** SVG (Lucide-style), no emojis
- **Layout:** Mobile-first, responsive grid

## Working Agreement
1. **Stack erkennen** – Prüfe package.json, README, Struktur vor Änderungen
2. **Kleine Änderungen** – Ein Fix pro Commit, reviewbar
3. **Verifikation nach jeder Änderung** – `npm run validate` muss passen
4. **Keine blinden Änderungen** – Bestehende Design-Regeln respektieren
5. **Dokumentation** – Jeder Fix: Problem → Datei → Verifikation

## Critical Checklist (immer prüfen)
- [ ] Build: `npm run validate` passiert
- [ ] Lint: Keine HTML/CSS Fehler
- [ ] Mobile First: Alle Breakpoints testen (320px, 640px, 768px, 1024px)
- [ ] Buttons: Klare CTA, sichtbare States
- [ ] Formulare: Labels, Validation, Focus-States
- [ ] Ladezustände: Progress-Tracking funktioniert
- [ ] Fehlerzustände: 404, broken links
- [ ] Console Errors: Keine JS Fehler
- [ ] Broken Links: Alle internen Links valid
