# Tests für KI-Meisterkurs

Dieses Verzeichnis enthält alle Tests für den KI-Meisterkurs.

## Test-Struktur

- `validation.test.js` - HTML/CSS Validierung und Struktur-Tests
- `content.test.js` - Inhalts- und Semantik-Tests
- `quality.test.js` - Code-Qualität und Best-Practices

## Installation

```bash
npm install
```

## Tests ausführen

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

# Alles validieren
npm run validate
```

## Test-Übersicht

| Test-Kategorie | Anzahl |
|---------------|--------|
| Struktur-Tests | 3 |
| HTML-Validierung | 99 (11 pro Datei × 9 Dateien) |
| Meta-Tag Tests | 9 |
| Navigation-Tests | 3 |
| CSS-Validierung | 8 |
| Accessibility Tests | 27 |
| Content-Tests | 10 |
| Performance-Tests | 4 |
| Konsistenz-Tests | 3 |
| Tag-Inhalte | 25 |
| Eltern-Guide | 4 |
| Wochenplan | 3 |
| Arbeitsblätter | 3 |
| Index-Seite | 6 |
| HTML-Semantik | 15 |
| Code-Qualität | 14 |
| Cross-Browser | 3 |
| Mobile | 4 |
| SEO | 18 |
| Sicherheit | 18 |
| Zusammenfassung | 2 |
| **Gesamt** | **~280+** |

## CI/CD Integration

Die Tests können in GitHub Actions oder andere CI-Systeme integriert werden:

```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run validate
```
