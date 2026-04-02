# 📝 Arbeitsblatt: Der Debug-Detektiv

**Name:** _________________________ **Datum:** _____________

---

## Der Debug-Prozess

```
1. PROBLEM BESCHREIBEN
        ↓
2. VERMUTUNGEN AUSSPRECHEN
        ↓
3. TESTS PLANEN
        ↓
4. KI UM HILFE FRAGEN (richtig!)
        ↓
5. LÖSUNG TESTEN
```

---

## Fall 1: Der verschwundene Block

**Beschreibung:**
Du platzierst einen Block in Roblox mit `Instance.new("Part")`, aber er erscheint nicht in der Welt.

### Meine Vermutungen:
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

### Was ich testen werde:
Test 1: _________________________________________________

Test 2: _________________________________________________

Test 3: _________________________________________________

### Mein Prompt an die KI:
_________________________________________________
_________________________________________________
_________________________________________________
_________________________________________________
_________________________________________________

### Die Lösung (nach dem KI-Gespräch):
_________________________________________________
_________________________________________________

---

## Fall 2: Der Redstone-Zufallsgenerator

**Beschreibung:**
Dein Redstone-Command-Block soll zufällig "Kopf" oder "Zahl" ausgeben, aber er gibt immer "Kopf" aus.

**Aktueller Code:**
```
/say @r
```

### Meine Analyse:
Das Problem ist: _________________________________________________

Weil: _________________________________________________

### Mein Prompt an die KI:
_________________________________________________
_________________________________________________
_________________________________________________
_________________________________________________

### Die Lösung:
_________________________________________________
_________________________________________________

---

## Fall 3: Der eigens erlebte Bug

**Beschreibe ein Problem, das DU hattest:**

**Wann ist es passiert?** _________________________________________________

**Was wolltest du machen?** _________________________________________________

**Was ist stattdessen passiert?** _________________________________________________

**Gab es eine Fehlermeldung?** _________________________________________________

### Meine Vermutungen:
1. _________________________________________________
2. _________________________________________________

### Mein Prompt an die KI:
_________________________________________________
_________________________________________________
_________________________________________________
_________________________________________________

### Die Lösung:
_________________________________________________
_________________________________________________

### Was ich daraus gelernt habe:
_________________________________________________
_________________________________________________

---

## Fall 4: Minecraft Redstone-Problem

**Beschreibung:**
Ein Kolben soll sich ausfahren, wenn ein Hebel umgelegt wird. Stattdessen passiert nichts.

**Aufbau-Skizze:**
```
[Hebel] → [Redstone-Staub] → [Block] → [Kolben]
```

### Mögliche Ursachen:
- [ ] Kein Strom (Hebel nicht verbunden?)
- [ ] Falsche Kolben-Ausrichtung
- [ ] Zu weit weg (Redstone-Signal zu schwach)
- [ ] Blockiert der Kolben etwas?
- [ ] Sticky vs. Normaler Kolben?

### Mein Test-Plan:
Schritt 1: _________________________________________________

Schritt 2: _________________________________________________

Schritt 3: _________________________________________________

### Mein Prompt an die KI:
_________________________________________________
_________________________________________________
_________________________________________________
_________________________________________________

---

## Meine persönliche Debug-Checkliste

Immer wenn etwas nicht funktioniert:

- [ ] Problem genau beschreiben (WAS genau passiert?)
- [ ] Fehlermeldung notieren (genauer Text!)
- [ ] Vermutungen aufschreiben (mindestens 3)
- [ ] Letzte Änderung checken (was habe ich zuletzt geändert?)
- [ ] Schritt zurückgehen (funktioniert eine einfachere Version?)
- [ ] KI fragen (mit Kontext und Vermutungen!)

---

## Bonus: Der Bug-Jäger

Finde den Fehler in diesem Code:

```lua
-- Ziel: Wenn der Spieler den Block berührt, 
-- wird "Hallo!" ausgegeben

local block = workspace.Block

function onTouch()
    print("Hallo!")
end

block.Touched:Connect(onTouch)
print("Script fertig geladen")
```

**Mögliche Probleme:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

**Wie würdest du testen, welches Problem es ist?**
_________________________________________________
_________________________________________________
_________________________________________________
