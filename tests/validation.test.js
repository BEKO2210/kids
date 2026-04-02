const fs = require('fs');
const path = require('path');

// Hilfsfunktionen
const readFile = (filename) => fs.readFileSync(path.join(__dirname, '..', filename), 'utf8');
const fileExists = (filename) => fs.existsSync(path.join(__dirname, '..', filename));

// Alle HTML-Dateien
const htmlFiles = [
  'index.html',
  'tag-1.html',
  'tag-2.html',
  'tag-3.html',
  'tag-4.html',
  'tag-5.html',
  'eltern.html',
  'wochenplan.html',
  'arbeitsblaetter.html'
];

describe('Struktur-Tests', () => {
  test('Alle HTML-Dateien existieren', () => {
    htmlFiles.forEach(file => {
      expect(fileExists(file)).toBe(true);
    });
  });

  test('CSS-Datei existiert', () => {
    expect(fileExists('styles.css')).toBe(true);
  });

  test('Package.json existiert', () => {
    expect(fileExists('package.json')).toBe(true);
  });
});

describe('HTML-Validierung', () => {
  htmlFiles.forEach(file => {
    describe(`${file}`, () => {
      let content;
      
      beforeAll(() => {
        content = readFile(file);
      });

      test('hat korrekte DOCTYPE Deklaration', () => {
        expect(content).toMatch(/^\s*<!DOCTYPE html>/i);
      });

      test('hat html-Tag mit lang="de"', () => {
        expect(content).toMatch(/<html[^>]*lang="de"[^>]*>/i);
      });

      test('hat head-Tag', () => {
        expect(content).toMatch(/<head>/i);
      });

      test('hat body-Tag', () => {
        expect(content).toMatch(/<body>/i);
      });

      test('hat korrekte Meta-Charset (UTF-8)', () => {
        expect(content).toMatch(/<meta[^>]*charset="UTF-8"[^>]*>/i);
      });

      test('hat viewport Meta-Tag', () => {
        expect(content).toMatch(/<meta[^>]*name="viewport"[^>]*>/i);
      });

      test('hat title-Tag', () => {
        expect(content).toMatch(/<title>[^<]+<\/title>/i);
      });

      test('hat link zu styles.css', () => {
        expect(content).toMatch(/href="styles\.css"/);
      });

      test('hat Navigation mit navbar-Klasse', () => {
        expect(content).toMatch(/class="navbar"/);
      });

      test('hat Footer', () => {
        expect(content).toMatch(/<footer/);
      });

      test('hat kein ungeschlossenes Tag (grundlegende Prüfung)', () => {
        const htmlTags = content.match(/<[^/][^>]*>/g) || [];
        const closingTags = content.match(/<\/[^>]+>/g) || [];
        // Grobe Prüfung - sollte ungefähr gleich viele sein
        expect(closingTags.length).toBeGreaterThan(htmlTags.length * 0.5);
      });
    });
  });
});

describe('Meta-Tag Tests', () => {
  htmlFiles.forEach(file => {
    test(`${file} hat sinnvollen Title`, () => {
      const content = readFile(file);
      const titleMatch = content.match(/<title>([^<]+)<\/title>/);
      expect(titleMatch).toBeTruthy();
      expect(titleMatch[1].length).toBeGreaterThan(5);
      expect(titleMatch[1]).toMatch(/KI-Meisterkurs|Tag [1-5]|Eltern|Wochenplan|Arbeitsblätter/);
    });
  });
});

describe('Navigation-Tests', () => {
  test('Alle Seiten haben konsistente Navigation', () => {
    const requiredLinks = ['index.html'];
    
    htmlFiles.forEach(file => {
      const content = readFile(file);
      expect(content).toMatch(/href="index\.html"/);
    });
  });

  test('Lektionsseiten haben Links zu allen Tags', () => {
    const lessonFiles = ['tag-1.html', 'tag-2.html', 'tag-3.html', 'tag-4.html', 'tag-5.html'];
    
    lessonFiles.forEach(file => {
      const content = readFile(file);
      for (let i = 1; i <= 5; i++) {
        expect(content).toMatch(new RegExp(`href="tag-${i}\.html"`));
      }
    });
  });

  test('Keine broken Links (interne Links existieren)', () => {
    const linkRegex = /href="([^"]+)\.html"/g;
    
    htmlFiles.forEach(file => {
      const content = readFile(file);
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        const linkedFile = match[1] + '.html';
        if (!linkedFile.startsWith('http')) {
          expect(fileExists(linkedFile) || htmlFiles.includes(linkedFile)).toBe(true);
        }
      }
    });
  });
});

describe('CSS-Validierung', () => {
  let cssContent;
  
  beforeAll(() => {
    cssContent = readFile('styles.css');
  });

  test('CSS-Datei ist nicht leer', () => {
    expect(cssContent.length).toBeGreaterThan(1000);
  });

  test('hat CSS-Variablen (:root)', () => {
    expect(cssContent).toMatch(/:root\s*\{/);
  });

  test('hat responsive Breakpoints (@media)', () => {
    expect(cssContent).toMatch(/@media/);
  });

  test('hat keine Syntax-Fehler (große Klammern sind balanciert)', () => {
    const openBraces = (cssContent.match(/\{/g) || []).length;
    const closeBraces = (cssContent.match(/\}/g) || []).length;
    expect(openBraces).toBe(closeBraces);
    expect(openBraces).toBeGreaterThan(10);
  });

  test('hat Farbvariablen definiert', () => {
    expect(cssContent).toMatch(/--primary:/);
    expect(cssContent).toMatch(/--bg:/);
    expect(cssContent).toMatch(/--text-primary:/);
  });

  test('hat Button-Styles', () => {
    expect(cssContent).toMatch(/\.btn\s*\{/);
  });

  test('hat Card-Styles', () => {
    expect(cssContent).toMatch(/\.card\s*\{/);
  });

  test('hat Navigation-Styles', () => {
    expect(cssContent).toMatch(/\.navbar\s*\{/);
  });
});

describe('Accessibility Tests', () => {
  htmlFiles.forEach(file => {
    test(`${file} hat lang-Attribut`, () => {
      const content = readFile(file);
      expect(content).toMatch(/<html[^>]*lang=/);
    });

    test(`${file} hat keine leeren Links`, () => {
      const content = readFile(file);
      const emptyLinks = content.match(/<a[^>]*>\s*<\/a>/g);
      expect(emptyLinks).toBeNull();
    });

    test(`${file} hat keine leeren Alt-Attribute bei Bildern (wenn Bilder existieren)`, () => {
      const content = readFile(file);
      if (content.includes('<img')) {
        const imgTags = content.match(/<img[^>]*>/g) || [];
        imgTags.forEach(img => {
          expect(img).toMatch(/alt=/);
        });
      }
    });
  });
});

describe('Content-Tests', () => {
  test('index.html hat Hero-Bereich', () => {
    const content = readFile('index.html');
    expect(content).toMatch(/class="hero"/);
  });

  test('index.html hat Progress-Anzeige', () => {
    const content = readFile('index.html');
    expect(content).toMatch(/progress/i);
  });

  test('Alle Lektionsseiten haben Checklisten', () => {
    const lessonFiles = ['tag-1.html', 'tag-2.html', 'tag-3.html', 'tag-4.html', 'tag-5.html'];
    lessonFiles.forEach(file => {
      const content = readFile(file);
      expect(content).toMatch(/class="checklist"/);
    });
  });

  test('Alle Lektionsseiten haben Navigation zwischen Tags', () => {
    const lessonFiles = ['tag-1.html', 'tag-2.html', 'tag-3.html', 'tag-4.html', 'tag-5.html'];
    lessonFiles.forEach(file => {
      const content = readFile(file);
      // Hat Links zu vorheriger/nächster Seite oder zurück zur Übersicht
      expect(content).toMatch(/Zurück|Weiter|Übersicht/);
    });
  });
});

describe('Performance-Tests', () => {
  test('CSS ist inline nicht zu groß (unter 50KB)', () => {
    const stats = fs.statSync(path.join(__dirname, '..', 'styles.css'));
    expect(stats.size).toBeLessThan(50 * 1024);
  });

  test('HTML-Dateien sind nicht zu groß (unter 100KB)', () => {
    htmlFiles.forEach(file => {
      const stats = fs.statSync(path.join(__dirname, '..', file));
      expect(stats.size).toBeLessThan(100 * 1024);
    });
  });

  test('Keine externen Scripts (nur CSS)', () => {
    htmlFiles.forEach(file => {
      const content = readFile(file);
      // Erlaubt: Google Fonts, aber keine externen JS
      const externalScripts = content.match(/<script[^>]*src="https?:/g);
      expect(externalScripts).toBeNull();
    });
  });
});

describe('Konsistenz-Tests', () => {
  test('Alle Seiten haben denselben Footer-Text', () => {
    const contents = htmlFiles.map(f => readFile(f));
    const footerTexts = contents.map(c => {
      const match = c.match(/<footer[^>]*>[\s\S]*?<p>([^<]+)<\/p>/);
      return match ? match[1].trim() : null;
    });
    
    const uniqueTexts = [...new Set(footerTexts)];
    expect(uniqueTexts.length).toBe(1);
  });

  test('Alle Seiten nutzen dieselbe CSS-Datei', () => {
    htmlFiles.forEach(file => {
      const content = readFile(file);
      expect(content).toMatch(/href="styles\.css"/);
      // Prüfe dass keine anderen CSS-Dateien (außer styles.css) verwendet werden
      const cssLinks = content.match(/href="[^"]*\.css"/g) || [];
      cssLinks.forEach(link => {
        expect(link).toBe('href="styles.css"');
      });
    });
  });

  test('Consistente Inter-Font Einbindung', () => {
    htmlFiles.forEach(file => {
      const content = readFile(file);
      expect(content).toMatch(/fonts\.googleapis\.com/);
      expect(content).toMatch(/Inter/);
    });
  });
});
