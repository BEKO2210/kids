# KI-Meisterkurs

[![Test & Deploy](https://github.com/BEKO2210/kids/actions/workflows/deploy.yml/badge.svg)](https://github.com/BEKO2210/kids/actions/workflows/deploy.yml)
[![Tests](https://img.shields.io/badge/tests-280%2B-brightgreen.svg)](./tests)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue.svg)](https://BEKO2210.github.io/kids/)

> Ein interaktiver 5-Tage-Kurs über Künstliche Intelligenz für junge Entdecker (Maxim, Alia und Amir)

**Live-Version:** [https://BEKO2210.github.io/kids/](https://BEKO2210.github.io/kids/)

---

## Inhalt

Der Kurs besteht aus 5 aufeinanderbauenden Lektionen:

| Tag | Thema | Badge |
|-----|-------|-------|
| [Tag 1](https://BEKO2210.github.io/kids/tag-1.html) | Was ist KI wirklich? | KI-Entdecker |
| [Tag 2](https://BEKO2210.github.io/kids/tag-2.html) | Prompt Engineering | Prompt-Meister |
| [Tag 3](https://BEKO2210.github.io/kids/tag-3.html) | Kreativ mit KI | Kreativ-Genie |
| [Tag 4](https://BEKO2210.github.io/kids/tag-4.html) | Problemlösen mit KI | Problemlöser |
| [Tag 5](https://BEKO2210.github.io/kids/tag-5.html) | Das Abschlussprojekt | KI-Experte |

### Weitere Ressourcen

- [Eltern-Guide](https://BEKO2210.github.io/kids/eltern.html) - Informationen für Eltern
- [Wochenplan](https://BEKO2210.github.io/kids/wochenplan.html) - Zeitplan für alle 5 Tage
- [Arbeitsblätter](https://BEKO2210.github.io/kids/arbeitsblaetter.html) - Interaktive Übungen

---

## Features

- **Mobile-First Design** - Optimiert für Smartphones und Tablets
- **Keine Emojis** - Professionelle SVG-Icons statt bunter Emojis
- **280+ Tests** - Automatisierte Tests für Qualitätssicherung
- **GitHub Actions CI/CD** - Automatische Tests und Deployment
- **Barrierefrei** - Semantic HTML, gute Kontraste, Screenreader-freundlich

---

## Technischer Stack

| Komponente | Technologie |
|------------|-------------|
| **Markup** | Semantic HTML5 |
| **Styling** | Vanilla CSS (Mobile-First) |
| **Icons** | SVG (Lucide-style) |
| **Font** | Inter (Google Fonts) |
| **Testing** | Jest + jsdom |
| **CI/CD** | GitHub Actions |
| **Hosting** | GitHub Pages |

---

## Lokale Entwicklung

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### Installation

```bash
# Repository klonen
git clone https://github.com/BEKO2210/kids.git
cd kids

# Dependencies installieren
npm install
```

### Tests ausführen

```bash
# Alle Tests
npm test

# Mit Watch-Modus
npm run test:watch

# Mit Coverage-Report
npm run test:coverage

# HTML validieren
npm run lint:html

# CSS validieren
npm run lint:css

# Alles validieren (wie im CI)
npm run ci
```

### Lokaler Server

Da es sich um statische HTML-Dateien handelt, kannst du einen einfachen Server verwenden:

```bash
# Mit Python
python -m http.server 8000

# Mit Node.js
npx serve .

# Mit PHP
php -S localhost:8000
```

Dann öffne [http://localhost:8000](http://localhost:8000)

---

## Deployment

Das Deployment erfolgt automatisch via GitHub Actions:

1. Push auf `main` Branch
2. Tests werden ausgeführt
3. Bei erfolgreichen Tests: Deployment auf GitHub Pages

**Manuelles Deployment:**
- Gehe zu **Actions** → **Test & Deploy to GitHub Pages**
- Klicke **Run workflow**

---

## Projektstruktur

```
kids/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # CI/CD Workflow
│       └── README.md           # Workflow-Dokumentation
├── tests/
│   ├── validation.test.js      # HTML/CSS Validierung
│   ├── content.test.js         # Inhalts-Tests
│   └── quality.test.js         # Code-Qualität
├── index.html                  # Startseite
├── tag-1.html bis tag-5.html   # Lektionen
├── eltern.html                 # Eltern-Guide
├── wochenplan.html             # Zeitplan
├── arbeitsblaetter.html        # Übungen
├── styles.css                  # Haupt-Stylesheet
├── package.json                # Dependencies & Scripts
├── .htmlvalidate.json          # HTML-Linting Config
└── .stylelintrc.json           # CSS-Linting Config
```

---

## Test-Übersicht

| Kategorie | Anzahl | Beschreibung |
|-----------|--------|--------------|
| Struktur | 3 | Dateien existieren |
| HTML-Validierung | 99 | DOCTYPE, Tags, Attribute |
| Meta-Tags | 9 | Titel, Charset, Viewport |
| Navigation | 3 | Links, Konsistenz |
| CSS-Validierung | 8 | Syntax, Variablen |
| Accessibility | 27 | A11y-Checks |
| Content | 10 | Inhaltsprüfung |
| Performance | 4 | Dateigrößen |
| Konsistenz | 3 | Cross-Page |
| Tag-Inhalte | 25 | Lektions-Checks |
| Eltern-Guide | 4 | Guide-Tests |
| Wochenplan | 3 | Plan-Tests |
| Arbeitsblätter | 3 | Worksheet-Tests |
| Index-Seite | 6 | Startseite |
| HTML-Semantik | 15 | Semantic-Checks |
| Code-Qualität | 14 | Formatierung |
| Cross-Browser | 3 | Browser-Support |
| Mobile | 4 | Responsiveness |
| SEO | 18 | SEO-Checks |
| Sicherheit | 18 | Security-Tests |
| **Gesamt** | **~280+** | |

---

## Design-Prinzipien

1. **Mobile-First** - Basis-Styles für Mobile, Breakpoints für größere Screens
2. **Kein horizontales Scrollen** - `overflow-x: hidden`, responsive Grids
3. **Konsistente Abstände** - Padding links/rechts auf allen Screens
4. **Professionell** - Keine Emojis, SVG-Icons, gute Typografie
5. **Zugänglich** - Semantic HTML, gute Kontraste, Keyboard-Navigation

---

## Browser-Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 |
| Firefox | Latest 2 |
| Safari | Latest 2 |
| Edge | Latest 2 |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Android 10+ |

---

## Lizenz

Dieses Projekt ist für den privaten, nicht-kommerziellen Gebrauch bestimmt.

---

## Mitwirkende

- **Kurs-Designer:** Erstellt für Maxim, Alia und Amir
- **Technische Umsetzung:** GitHub Actions CI/CD, Jest Testing

---

## Kontakt

Bei Fragen oder Anregungen erstelle ein Issue im Repository.
