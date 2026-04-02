# GitHub Actions Workflow

Dieser Workflow testet, baut und deployed die Webseite automatisch auf GitHub Pages.

## Workflow-Übersicht

```
┌─────────┐    ┌─────────┐    ┌─────────┐
│  Test   │───▶│  Build  │───▶│ Deploy  │
└─────────┘    └─────────┘    └─────────┘
```

### 1. Test Job
- Installiert Dependencies
- Führt alle Jest-Tests aus
- Generiert Coverage-Report
- Validiert HTML und CSS

### 2. Build Job
- Prüft, dass alle erforderlichen Dateien vorhanden sind
- Erstellt `.nojekyll` (verhindert Jekyll-Verarbeitung)
- Uploaded Build-Artifact

### 3. Deploy Job
- Deployed auf GitHub Pages
- Nur bei Push auf `main`

## Einrichtung

### Schritt 1: GitHub Pages aktivieren

1. Gehe zu **Settings** → **Pages** im Repository
2. Wähle unter **Source**: **GitHub Actions**

### Schritt 2: Workflow Permissions

Stelle sicher, dass die Workflow-Permissions korrekt sind:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

Dies ist bereits in der Workflow-Datei konfiguriert.

## Lokale Tests

```bash
# Alle Tests ausführen
npm test

# Mit Coverage
npm run test:coverage

# HTML validieren
npm run lint:html

# CSS validieren
npm run lint:css

# Alles (wie im CI)
npm run ci
```

## Deployment-Status

Der Deployment-Status wird angezeigt:
- In der GitHub Actions Übersicht
- Als Status-Badge im README
- Auf der GitHub Pages Umgebungsseite

## Manuelles Deployment

Du kannst den Workflow manuell auslösen:
1. Gehe zu **Actions** → **Test & Deploy to GitHub Pages**
2. Klicke **Run workflow**
3. Wähle den Branch (meist `main`)

## Fehlerbehebung

### Tests schlagen fehl
```bash
# Lokal prüfen
npm test
```

### HTML Validation Fehler
```bash
npm run lint:html
```

### CSS Validation Fehler
```bash
npm run lint:css
```

### Deployment nicht sichtbar
- Prüfe unter **Settings** → **Pages** ob GitHub Actions als Source gewählt ist
- Prüfe ob der Workflow erfolgreich durchgelaufen ist
- Warte 1-2 Minuten nach dem Deployment

## URL der Webseite

Nach erfolgreichem Deployment ist die Webseite erreichbar unter:
```
https://BEKO2210.github.io/kids/
```
