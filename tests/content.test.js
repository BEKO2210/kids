const fs = require('fs');
const path = require('path');

const readFile = (filename) => fs.readFileSync(path.join(__dirname, '..', filename), 'utf8');

describe('Tag-spezifische Inhalte', () => {
  const tags = [
    { file: 'tag-1.html', title: 'Was ist KI', badge: 'KI-Entdecker' },
    { file: 'tag-2.html', title: 'Prompt Engineering', badge: 'Prompt-Meister' },
    { file: 'tag-3.html', title: 'Kreativ', badge: 'Kreativ-Genie' },
    { file: 'tag-4.html', title: 'Problemlösen', badge: 'Problemlöser' },
    { file: 'tag-5.html', title: 'Abschlussprojekt', badge: 'KI-Experte' }
  ];

  tags.forEach(({ file, title, badge }) => {
    describe(`${file}`, () => {
      let content;
      
      beforeAll(() => {
        content = readFile(file);
      });

      test(`enthält Titel: ${title}`, () => {
        expect(content).toMatch(new RegExp(title, 'i'));
      });

      test(`enthält Badge: ${badge}`, () => {
        expect(content).toMatch(new RegExp(badge.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
      });

      test('hat Info-Boxen', () => {
        expect(content).toMatch(/class="info-box/);
      });

      test('hat Kapitel-Überschriften (h2)', () => {
        expect(content).toMatch(/<h2>/);
      });

      test('hat Unterüberschriften (h3)', () => {
        expect(content).toMatch(/<h3>/);
      });
    });
  });
});

describe('Eltern-Guide Tests', () => {
  let content;
  
  beforeAll(() => {
    content = readFile('eltern.html');
  });

  test('enthält Sicherheitshinweise', () => {
    expect(content).toMatch(/Sicherheit/i);
  });

  test('enthält Datenschutz-Hinweise', () => {
    expect(content).toMatch(/Datenschutz|Daten/i);
  });

  test('enthält FAQ-Bereich', () => {
    expect(content).toMatch(/FAQ|Fragen/i);
  });

  test('hat Tabelle mit KI-Tools', () => {
    expect(content).toMatch(/<table/);
    expect(content).toMatch(/ChatGPT|Copilot/i);
  });
});

describe('Wochenplan Tests', () => {
  let content;
  
  beforeAll(() => {
    content = readFile('wochenplan.html');
  });

  test('enthält alle 5 Tage', () => {
    for (let i = 1; i <= 5; i++) {
      expect(content).toMatch(new RegExp(`Tag ${i}|tag-${i}`, 'i'));
    }
  });

  test('hat Zeitplan-Tabelle', () => {
    expect(content).toMatch(/<table/);
    expect(content).toMatch(/Zeit|Aktivität/i);
  });

  test('enthält Materialien-Liste', () => {
    expect(content).toMatch(/Materialien|Arbeitsblätter/i);
  });
});

describe('Arbeitsblätter Tests', () => {
  let content;
  
  beforeAll(() => {
    content = readFile('arbeitsblaetter.html');
  });

  test('enthält alle 4 Arbeitsblätter', () => {
    expect(content).toMatch(/KI oder Nicht/i);
    expect(content).toMatch(/Prompt-Upgrade|Prompt Upgrade/i);
    expect(content).toMatch(/Charakter-Designer|Charakter Designer/i);
    expect(content).toMatch(/Debug-Detektiv|Debug Detektiv/i);
  });

  test('hat Checkboxes für Ausfüllen', () => {
    expect(content).toMatch(/type="checkbox"/);
  });

  test('hat Eingabefelder', () => {
    expect(content).toMatch(/<input|textarea|pre/);
  });
});

describe('Index-Seite Tests', () => {
  let content;
  
  beforeAll(() => {
    content = readFile('index.html');
  });

  test('hat Willkommens-Text', () => {
    expect(content).toMatch(/Willkommen|wir lernen/i);
  });

  test('hat Kursbeschreibung', () => {
    expect(content).toMatch(/5 Tage|fünf Tage|Meisterkurs/i);
  });

  test('hat CTA-Buttons', () => {
    expect(content).toMatch(/btn-primary/);
    expect(content).toMatch(/Los geht|Starten|Beginnen/i);
  });

  test('zeigt Zielgruppe (Maxim, Alia, Amir)', () => {
    expect(content).toMatch(/Maxim|Alia|Amir/);
  });

  test('hat Progress-Bar Komponente', () => {
    expect(content).toMatch(/progress|fortschritt/i);
  });

  test('hat alle 5 Kurskarten', () => {
    const cardMatches = content.match(/class="card"/g);
    expect(cardMatches.length).toBeGreaterThanOrEqual(5);
  });
});

describe('HTML-Semantik Tests', () => {
  const files = ['index.html', 'tag-1.html', 'eltern.html'];
  
  files.forEach(file => {
    describe(`${file}`, () => {
      let content;
      
      beforeAll(() => {
        content = readFile(file);
      });

      test('verwendet semantische Tags (header, main, footer)', () => {
        expect(content).toMatch(/<header/);
        expect(content).toMatch(/<main/);
        expect(content).toMatch(/<footer/);
      });

      test('hat korrekte Heading-Hierarchie (h1 vor h2)', () => {
        const h1Index = content.search(/<h1/);
        const h2Index = content.search(/<h2/);
        if (h1Index !== -1 && h2Index !== -1) {
          expect(h1Index).toBeLessThan(h2Index);
        }
      });

      test('hat nur einen h1 pro Seite', () => {
        const h1Matches = content.match(/<h1/g);
        expect(h1Matches.length).toBe(1);
      });

      test('verwendet nav-Tag für Navigation', () => {
        expect(content).toMatch(/<nav/);
      });

      test('hat Listen (ul/ol) wo angebracht', () => {
        expect(content).toMatch(/<ul|<ol/);
      });
    });
  });
});
