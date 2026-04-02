# 🎯 TAG 2: Prompt Engineering - Die Kunst der perfekten Frage
**Badge zu gewinnen:** 🥈 Prompt-Meister

---

## 🌟 Willkommen zurück, Prompt-Meister in Ausbildung!

Gestern habt ihr gelernt, was KI ist. Heute lernt ihr das Wichtigste überhaupt:
> **Die Qualität der Antwort hängt von der Qualität der Frage ab!**

Stellt euch vor, ihr geht in ein Restaurant:
- ❌ "Bring Essen!" → Was bekommt ihr? Vielleicht was ihr nicht mögt!
- ✅ "Ich möchte eine Pizza Margherita, mittelgroß, ohne Basilikum, bitte" → Genau was ihr wollt!

Genau so ist es mit KI!

---

## 🧱 Kapitel 1: Roblox-Command-Bar als Prompt-Beispiel

Kennt ihr die **Command Bar** in Roblox Studio? Das ist ein perfektes Beispiel für schlechte vs. gute "Prompts"!

### Beispiel 1: Schlechter Befehl
```lua
-- Ihr tippt:
spawn()

-- Was passiert? NICHTS! Oder ein Fehler!
-- Zu wenig Information!
```

### Beispiel 2: Guter Befehl
```lua
-- Ihr tippt:
local part = Instance.new("Part")
part.Position = Vector3.new(0, 10, 0)
part.Color = Color3.fromRGB(255, 0, 0)
part.Size = Vector3.new(5, 5, 5)
part.Anchored = true
part.Parent = workspace

-- Was passiert? Eine rote, verankerte Platte erscheint bei Position (0,10,0)!
```

**Der Unterschied:** Im zweiten Beispiel sagt ihr EXAKT was, wo, wie und welche Farbe!

---

## 🎮 Minecraft-Beispiel: Der /give Befehl

In Minecraft könnt ihr Items mit dem `/give` Befehl bekommen.

### Schlechter "Prompt":
```
/give @s diamond
```
→ Funktioniert, aber ihr bekommt nur 1 Diamanten

### Besserer Prompt:
```
/give @s minecraft:diamond 64
```
→ 64 Diamanten! Besser!

### Perfekter Prompt (mit allen Details):
```
/give @s minecraft:diamond_sword{display:{Name:'"Feuerschwert"'},Enchantments:[{id:sharpness,lvl:5},{id:fire_aspect,lvl:2}]} 1
```
→ Ein Schwert mit Namen, Schärfe 5 UND Feuer-Aspect 2!

**Was lernt ihr daraus?**
> Je mehr Details, desto besser das Ergebnis!

---

## 📝 Das 5-Sterne-Prompt-Rezept

Ein perfekter Prompt hat 5 Bestandteile:

```
⭐ ROLLE: Wer soll die KI sein?
⭐ AUFGABE: Was genau soll sie machen?
⭐ KONTEXT: Hintergrundinformationen
⭐ FORMAT: Wie soll die Antwort aussehen?
⭐ BESCHRÄNKUNGEN: Was soll sie NICHT tun?
```

### Beispiel: Minecraft-Haus bauen

#### ❌ Schlechter Prompt (1 Stern):
```
Beschreib ein Minecraft-Haus.
```
*Was bekommt ihr? Eine langweilige, generische Beschreibung.*

#### ⭐⭐⭐ Besserer Prompt (3 Sterne):
```
Beschreib ein großes Minecraft-Haus im mittelalterlichen Stil 
mit einem Turm und einem Garten.
```
*Besser! Aber immer noch ziemlich generisch.*

#### ⭐⭐⭐⭐⭐ Perfekter Prompt (5 Sterne):
```
ROLLE: Du bist ein erfahrener Minecraft-Architekt und 
       Bauevent-Organisator.

AUFGABE: Entwerfe ein detailliertes Konzept für ein 
         mittelalterliches Schloss.

KONTEXT: Das Schloss soll in einer Gebirgsbiom gebaut werden.
         Es soll für 3 Spieler (Maxim, Alia, Amir) Wohnraum bieten.
         Jeder soll einen eigenen Turm haben.

FORMAT: Gib mir eine Liste mit:
        1. Gesamtgröße (Blöcke)
        2. Benötigte Materialien mit Mengen
        3. Beschreibung jedes Turms (wer bekommt welchen)
        4. Spezielle Features (Geheimgänge, Redstone-Tricks?)

BESCHRÄNKUNGEN: Verwende nur vanilla Materialien (keine Mods).
               Keine Redstone-Automatisierung (zu kompliziert für Anfänger).
```

**Was bekommt ihr?** Eine detaillierte, nutzbare Bauanleitung!

---

## 🎪 Übung: Der Roblox-Spiel-Designer

### Aufgabe:
Entwerft zusammen ein neues Roblox-Spiel mit Hilfe eines KI-Tools (z.B. ChatGPT, Claude).

### Phase 1: Ohne guten Prompt (5 Minuten)

Maxim, Alia und Amir - einer von euch gibt folgenden Prompt ein:
```
Ich will ein Roblox Spiel machen.
```

**Notiert:** Was für Ideen bekommt ihr? Sind sie speziell? Nutzbar?

### Phase 2: Mit dem 5-Sterne-Prompt (15 Minuten)

Nutzt jetzt diesen strukturierten Prompt:

```
ROLLE: Du bist ein erfahrener Roblox-Spieleentwickler mit 
       über 50 veröffentlichten Spielen.

AUFGABE: Entwickle ein Spielkonzept für ein 
         kooperatives Abenteuerspiel für 3 Spieler.

KONTEXT: 
- Die 3 Spieler sind Geschwister (Maxim, Alia, Amir)
- Sie möchten ein Spiel, das Teamwork erfordert
- Das Spiel soll im Weltraum spielen
- Jeder Spieler soll eine einzigartige Fähigkeit haben
- Es soll Puzzles geben, die nur zusammen lösbar sind

FORMAT: Strukturiere die Antwort so:
1. SPIELNAME (kreativer Name)
2. KURZBESCHREIBUNG (2-3 Sätze)
3. SPIELERROLLEN (Tabelle mit Name, Fähigkeit, Aufgabe)
4. 3 BEISPIEL-LEVEL (mit spezifischen Puzzles)
5. FORTSCHRITTSSYSTEM (Wie werden Charaktere besser?)
6. UMSETZUNGSTIPP (Was ist das erste, was man bauen sollte?)

BESCHRÄNKUNGEN: 
- Kein Kampf/Violence (familienfreundlich)
- Keine komplexen Skripte für Anfänger
- Spielzeit pro Runde max. 15 Minuten
```

**Vergleicht die beiden Ergebnisse!**

---

## 🧪 Experiment: Der Iterations-Prozess

**Wichtig:** Ein Prompt ist selten perfekt beim ersten Mal!

### Das Verbessern eines Prompts (Iteration):

**Runde 1:**
```
Erklär mir Redstone in Minecraft.
```
*KI gibt generelle Erklärung - vielleicht zu einfach oder zu komplex*

**Runde 2 (nachlesen und spezifizieren):**
```
Erklär mir Redstone in Minecraft. Ich bin Anfänger und 
verstehe noch nicht, wie man Türen öffnet.
```
*Besser! Aber immer noch nicht perfekt.*

**Runde 3 (noch spezifischer):**
```
Erklär mir Schritt für Schritt, wie man in Minecraft 
eine geheime Tür mit einem Hebel baut. 
Ich bin Anfänger und verstehe "Redstone-Staub" und 
"Redstone-Fackeln" noch nicht. 
Liste die genauen Materialien auf, die ich brauche.
```
*Perfekt! Das ist umsetzbar!*

---

## 🎯 Praxis: Die Prompt-Challenge

### Aufgabe für Maxim, Alia und Amir:

Jeder bekommt eine Aufgabe und soll den perfekten Prompt schreiben.

#### Maxim - Der Baumeister:
Du willst eine automatische Farm in Minecraft bauen.

#### Alia - Die Kreative:
Du willst eine Geschichte über 3 Abenteurer im Weltraum schreiben.

#### Amir - Der Strateg:
Du willst Tipps für ein Roblox Obby (Obstacle Course).

### Schritt-für-Schritt:

1. **Schreibt einen ersten, schlechten Prompt** (bewusst schlecht!)
2. **Analysiert:** Was fehlt? Was ist unklar?
3. **Verwendet das 5-Sterne-Rezept**
4. **Testet euren Prompt** (wenn möglich mit einer KI)
5. **Verbessert** basierend auf der Antwort

---

## 💡 Pro-Tipps für Prompt-Meister

### 1. Beispiele geben (Few-Shot Prompting)
```
Schreibe mir einen Dialog zwischen zwei Minecraft-Spielern.

Beispiel-Stil:
Spieler 1: "Hast du Diamanten gesehen?"
Spieler 2: "Ja, auf Ebene -54, aber pass auf die Lava auf!"

Jetzt schreibe einen Dialog über das Finden eines Dorfes.
```

### 2. Schritt-für-Schritt verlangen
```
Erkläre mir, wie man in Roblox ein Script schreibt.
Gehe Schritt für Schritt vor und warte nach jedem 
Schritt auf mein "OK" bevor du zum nächsten gehst.
```

### 3. Rollenspiele nutzen
```
Spiele einen erfahrenen Minecraft-Speedrunner.
Ich bin ein Anfänger und stelle dir Fragen.
Antworte enthusiastisch und gib praktische Tipps.
```

### 4. Format vorgeben
```
Gib mir die Antwort in diesem Format:
- Zuerst eine Zusammenfassung in einem Satz
- Dann eine nummerierte Liste mit Details
- Zuletzt einen praktischen Tipp
```

---

## 🎮 Das Prompt-Spiel: "Der Roblox-Architekt"

### Spielregeln:
1. Ein Spieler ist der "Architekt" (gibt Prompts)
2. Ein Spieler ist die "KI" (interpretiert den Prompt)
3. Ein Spieler ist der "Tester" (bewertet das Ergebnis)

### Runde 1:
- **Architekt (Maxim):** "Bau ein Haus"
- **KI (Alia):** *zeichnet ein einfaches Quadrat*
- **Tester (Amir):** "1/10 - Zu wenig Details!"

### Runde 2:
- **Architekt (Maxim):** "Bau ein zweistöckiges Haus mit blauem Dach, 
  einer Garage für ein Auto, und einem Pool im Garten"
- **KI (Alia):** *zeichnet ein detailliertes Haus*
- **Tester (Amir):** "8/10 - Viel besser!"

### Wechseln, bis jeder jede Rolle hatte!

---

## ✅ Checkliste für den Prompt-Meister Badge

- [ ] Ich verstehe das 5-Sterne-Prompt-Rezept
- [ ] Ich kann einen schlechten von einem guten Prompt unterscheiden
- [ ] Ich habe mindestens 3 Prompts verbessert (iteriert)
- [ ] Ich kann der KI eine Rolle zuweisen
- [ ] Ich verlange spezifische Formate

---

## 📝 Arbeitsblatt: Prompt-Upgrade

Druckt aus: `arbeitsblaetter/tag2_prompt_upgrade.pdf`

### Aufgabe: Verbessere diese schlechten Prompts!

**Beispiel 1:**
```
Schreib über Minecraft.
```
⭐ Mein verbesserter Prompt:
_________________________________________________
_________________________________________________
_________________________________________________

**Beispiel 2:**
```
Wie baue ich was in Roblox?
```
⭐ Mein verbesserter Prompt:
_________________________________________________
_________________________________________________
_________________________________________________

**Beispiel 3:**
```
Erklär Redstone.
```
⭐ Mein verbesserter Prompt:
_________________________________________________
_________________________________________________
_________________________________________________

---

## 🏠 Hausaufgabe: Der Prompt-Sammler

Sammelt bis morgen:
- 3 Beispiele für schlechte Prompts (die ihr irgendwo gesehen habt)
- Eure verbesserte Version dazu

**Tipp:** Fragt auch mal die Eltern, wie sie nach etwas googlen! 😄

---

## 💬 Eltern-Notiz

**Heutige Lernerfolge:**
Die Kinder lernen, präzise zu kommunizieren - eine Fähigkeit, die im echten Leben genauso wichtig ist wie bei KI!

**Gesprächsthemen:**
- Wann habt ihr zuletzt eine unklare Anweisung bekommen?
- Was passiert im Restaurant, wenn man nicht genau bestellt?
- Wie könntet ihr eure Alltagsanweisungen präziser machen?

---

**🎉 Super! Morgen wird kreativ - wir lassen die KI für uns Kunst und Geschichten erstellen!**
