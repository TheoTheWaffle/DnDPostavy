# DnD Postavy

Samostatný statický web pro osobní D&D 5e 2014 postavy. Funguje jako RPG character menu, codex a build-planning databáze.

## Lokální spuštění

Stačí otevřít `index.html` v prohlížeči. Pokud chceš stejné chování jako na hostingu, spusť jednoduchý statický server:

```powershell
python -m http.server 8000
```

Potom otevři `http://localhost:8000`.

## GitHub Pages

Projekt používá pouze relativní odkazy, takže může běžet z projektové cesty jako:

`https://TheoTheWaffle.github.io/DnDPostavy/`

V GitHubu zapni Pages pro větev/repozitář, ve kterém budou tyto soubory.

## Jak přidat postavu

1. Otevři `data/characters.js`.
2. Přidej nový objekt do `window.characters`.
3. Nastav unikátní `id`, například `nova-postava`.
4. Vyplň `classes`, `stats`, `attacks`, `resources`, `features`, `equipment` a `story`.
5. Odkaz bude fungovat jako `characters/character.html?id=nova-postava`.

## Jak změnit level postavy

V `data/characters.js` uprav hodnotu `level` uvnitř konkrétní class:

```js
classes: [
  { classKey: "barbarian", className: "Barbarian", level: 3, subclass: null }
]
```

Total level se počítá automaticky jako součet všech class levelů.

## Jak přidat class progression

1. Přidej soubor do `data/classes/`.
2. Zapiš data do `window.classProgressions`.
3. Přidej script tag do `index.html`, `characters/index.html` a `characters/character.html`.
4. V character datech použij odpovídající `classKey`.

## Jak přidat subclass progression

1. Přidej soubor do `data/subclasses/`.
2. Zapiš data do `window.subclassProgressions`.
3. Přidej script tag do HTML stránek.
4. V character class objektu nastav `subclass` na id subclass.

## Poznámky k datům

Pravidla jsou stručně shrnutá vlastními slovy pro D&D 5e 2014. Joliho základní údaje jsou doplněné podle `Joli_Level10_DnD_Character_Sheet.pdf`; aktuální build je Monk 6 / Warlock 4.
