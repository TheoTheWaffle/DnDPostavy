window.characters = {
  berengar: {
    id: "berengar",
    name: 'Berengar "Bery" Taveinson',
    race: "Hill Dwarf",
    background: "Guild Merchant",
    alignment: "Good",
    portrait: "../assets/characters/Berengar.png",
    cardPortrait: "./assets/characters/Berengar.png",
    description: "Trpasličí hostinský a obchodník, který chrání svou rodinu, hospodu i družinu velkým kladivem a ještě větší tvrdohlavostí.",
    flavorQuote: "Když nepomůže domluva, pomůže kladivo. Když nepomůže kladivo, bylo moc malé.",
    classes: [{ classKey: "barbarian", className: "Barbarian", level: 3, subclass: "wildMagic" }],
    stats: { strength: 14, dexterity: 14, constitution: 19, intelligence: 9, wisdom: 10, charisma: 12 },
    hp: 49,
    ac: 16,
    initiative: 2,
    speed: "25 ft",
    proficiencyBonus: 2,
    languages: ["Common", "Dwarvish", "Elvish"],
    proficiencies: ["Brewer's Tools", "Light Armor", "Medium Armor", "Shields", "Simple Weapons", "Martial Weapons"],
    skillProficiencies: ["athletics", "insight", "intimidation", "persuasion"],
    attacks: [
      { name: "Maul", ability: "strength", proficient: true, magicBonus: 0, damageDice: "2d6", damageType: "bludgeoning", range: "Melee", notes: "Heavy, two-handed" },
      { name: "Longbow", ability: "dexterity", proficient: true, magicBonus: 0, damageDice: "1d8", damageType: "piercing", range: "150/600 ft", notes: "Ammunition, heavy, two-handed" },
      { name: "Handaxe", ability: "strength", proficient: true, magicBonus: 0, damageDice: "1d6", damageType: "slashing", range: "Melee or 20/60 ft", notes: "Light, thrown" }
    ],
    resources: [
      { name: "Rage", current: 2, maximum: 3, recharge: "Long Rest", note: "+2 damage" }
    ],
    equipment: ["Maul", "Longbow", "Brewer's Tools", "Traveler's clothes", "Merchant gear"],
    features: [
      {
        name: "Dwarven Toughness",
        source: "Hill Dwarf",
        levelUnlocked: 1,
        actionType: "Passive",
        uses: null,
        recharge: null,
        shortDescription: "Tvoje maximum HP je vyšší díky trpasličí odolnosti.",
        details: ["Získáváš 1 extra HP za každý character level."],
        tags: ["race", "defense"]
      },
      {
        name: "Rage",
        source: "Barbarian 1",
        levelUnlocked: 1,
        actionType: "Bonus Action",
        uses: "2 / Long Rest",
        recharge: "Long Rest",
        shortDescription: "Vstoupíš do bojového vzteku.",
        details: ["Rage aktivuješ jako bonus action, pokud nejsi v heavy armor.", "Výhoda na Strength checks a Strength saves.", "+2 damage k melee útokům používajícím Strength.", "Resistance proti bludgeoning, piercing a slashing damage.", "Trvá 1 minutu; skončí dřív, pokud upadneš do bezvědomí nebo v tahu nezaútočíš na nepřítele a neutrpíš damage.", "Během Rage nemůžeš kouzlit ani držet koncentraci."],
        tags: ["combat", "resource"]
      },
      {
        name: "Unarmored Defense",
        source: "Barbarian 1",
        levelUnlocked: 1,
        actionType: "Passive",
        uses: null,
        recharge: null,
        shortDescription: "Bez zbroje můžeš používat odolnost těla jako obranu.",
        details: ["AC může být 10 + Dexterity modifier + Constitution modifier, pokud nenosíš armor."],
        tags: ["defense"]
      },
      {
        name: "Danger Sense",
        source: "Barbarian 2",
        levelUnlocked: 2,
        actionType: "Passive",
        uses: null,
        recharge: null,
        shortDescription: "Instinktivně reaguješ na viditelné nebezpečí.",
        details: ["Výhoda na Dexterity saving throws proti efektům, které vidíš, například pasti a kouzla."],
        tags: ["defense"]
      },
      {
        name: "Reckless Attack",
        source: "Barbarian 2",
        levelUnlocked: 2,
        actionType: "Attack Choice",
        uses: null,
        recharge: null,
        shortDescription: "Útočíš bez ohledu na vlastní krytí.",
        details: ["Při prvním Strength melee útoku ve svém tahu můžeš získat advantage.", "Útoky proti tobě mají advantage do začátku tvého dalšího tahu."],
        tags: ["combat", "risk"]
      },
      {
        name: "Magic Awareness",
        source: "Path of Wild Magic 3",
        levelUnlocked: 3,
        actionType: "Action",
        uses: "3 / Long Rest",
        recharge: "Long Rest",
        shortDescription: "Vnímáš soustředěnou magii v okolí.",
        details: ["Do konce svého dalšího tahu víš o každém kouzlu nebo magickém předmětu do 60 ft, který není za úplným krytem, a při zaznamenání kouzla znáš jeho školu."],
        tags: ["subclass", "magic"]
      },
      {
        name: "Wild Surge",
        source: "Path of Wild Magic 3",
        levelUnlocked: 3,
        actionType: "Rage",
        uses: null,
        recharge: null,
        shortDescription: "Při vstupu do Rage vyvoláš náhodný magický efekt.",
        details: ["Při vstupu do Rage hodíš na tabulce Wild Magic. Pokud efekt vyžaduje záchranný hod, DC je 14."],
        tags: ["subclass", "rage", "magic"],
        wildSurgeTable: [
          { roll: 1, effect: "Bytosti podle tvé volby do 30 ft hází Constitution save; při neúspěchu utrpí 1d12 necrotic damage. Ty získáš 1d12 temporary HP." },
          { roll: 2, effect: "Teleportuj se až 30 ft na volné místo, které vidíš. Do konce Rage můžeš tento teleport opakovat jako bonus action." },
          { roll: 3, effect: "U vybrané bytosti poblíž se objeví magický duch, který na konci tahu vybuchne a může způsobit 1d6 force damage okolním tvorům." },
          { roll: 4, effect: "Jedna držená zbraň začne působit force damage a získá light a thrown vlastnosti. Po odhození se na konci tahu vrátí do ruky." },
          { roll: 5, effect: "Když tě někdo během Rage zasáhne, utrpí 1d6 force damage jako magickou odvetu." },
          { roll: 6, effect: "Získáš +1 AC a spojenci do 10 ft od tebe získají stejný bonus." },
          { roll: 7, effect: "Dočasně vyrostou květiny a liány; prostor do 15 ft kolem tebe je pro nepřátele difficult terrain." },
          { roll: 8, effect: "Z hrudi vyšlehne paprsek. Vybraný tvor do 30 ft hází Constitution save; při neúspěchu utrpí 1d6 radiant damage a je krátce blinded." }
        ]
      }
    ],
    story: "Já jsem Berengar, pro přátele Bery. Já a má žena jsme se našli kdysi, když jsem já sám bloudil v okolí univerzity a potkal ji. Já sám jsem tam byl, protože jsem potřeboval najít ideální materiál na vyrábění alkoholu. Jelikož jsem sám z okolí kopců, jsem zvyklý na žití mezi hobity, lidmi a i elfy. Samotnou hospodu už máme v rodině."
  },
  joli: {
    id: "joli",
    name: "Joli Rouge",
    race: "Human",
    background: "Pirate",
    alignment: "Good",
    portrait: "../assets/characters/joli.png",
    cardPortrait: "./assets/characters/joli.png",
    description: "A pirate, monk, and warlock's chosen champion who sails from port to port in search of stories, wine, and unexpected fights.",
    flavorQuote: "Every new port hides a story, a friend, and sometimes a fight worth having.",
    classes: [
      { classKey: "monk", className: "Monk", level: 6, subclass: "drunkenMaster" },
      { classKey: "warlock", className: "Warlock", level: 4, subclass: "fathomless" }
    ],
    pact: "Pact of the Blade",
    stats: { strength: 10, dexterity: 16, constitution: 14, intelligence: 11, wisdom: 15, charisma: 15 },
    hp: 66,
    ac: 16,
    initiative: 4,
    speed: "45 ft",
    proficiencyBonus: 4,
    languages: ["Common"],
    proficiencies: ["Navigator's Tools", "Vehicles (water)", "Simple Weapons", "Shortswords", "Monk Weapons", "Improvised Weapons", "Pact Weapon"],
    skillProficiencies: ["acrobatics", "athletics", "performance"],
    attacks: [
      { name: "Rapír +2", ability: "dexterity", proficient: true, magicBonus: 2, damageDice: "1d8", damageType: "piercing", range: "Melee", notes: "Finesse weapon; using Dexterity" },
      { name: "Fist", ability: "dexterity", proficient: true, magicBonus: 0, damageDice: "1d8", damageType: "bludgeoning", range: "Melee", notes: "Martial Arts; using Dexterity" },
      { name: "Bambitka / pistol", ability: "dexterity", proficient: true, magicBonus: 0, damageDice: "1d8", damageType: "piercing", range: "Ranged", notes: "Ranged weapon; using Dexterity" },
      { name: "Eldritch Blast", ability: "charisma", proficient: true, magicBonus: 0, damageDice: "1d10", damageType: "force", range: "300 ft", damageAbility: "charisma", notes: "Agonizing Blast, Eldritch Spear" },
    ],
    resources: [
      { name: "Ki", current: 7, maximum: 7, recharge: "Short Rest", note: "Monk techniques" },
      { name: "Warlock Spell Slots", current: 2, maximum: 2, recharge: "Short Rest", note: "2nd-level slots" }
    ],
    spellcasting: {
      className: "Warlock",
      ability: "Charisma",
      saveDc: 14,
      attackBonus: 6,
      spells: [
        { name: "Eldritch Blast", level: "Cantrip", type: "Attack spell", range: "300 ft", duration: "Instantaneous", description: "You fire a beam of crackling magical energy. On a hit, it deals 1d10 force damage; Agonizing Blast adds your Charisma modifier to the damage.", higherLevels: "At character level 5 you fire 2 beams, 3 at level 11, and 4 at level 17. Make a separate attack roll for each beam." },
        { name: "Prestidigitation", level: "Cantrip", type: "Utility spell", range: "10 ft", duration: "Up to 1 hour", description: "You perform a minor magical trick, such as creating a harmless sensory effect, lighting or snuffing a small flame, cleaning an object, or marking a surface." },
        { name: "Mage Hand", level: "Cantrip", type: "Utility spell", range: "30 ft", duration: "1 minute", description: "A spectral hand appears at a point you choose. You can manipulate objects, open an unlocked container, retrieve or stow an item, or pour out the contents of a vial." },
        { name: "Thunderwave", level: "1st-level", type: "Action", range: "Self (15 ft cube)", duration: "Instantaneous", description: "A wave of thunderous force affects creatures in the cube. On a failed Constitution save, a creature takes 2d8 thunder damage and is pushed 10 ft; on a success, it takes half damage.", higherLevels: "The damage increases by 1d8 for each slot level above 1st." },
        { name: "Invisibility", level: "2nd-level", type: "Action · concentration", range: "Touch", duration: "Up to 1 hour", description: "A creature you touch becomes invisible. The spell ends for a target when it attacks or casts a spell.", higherLevels: "You can target one additional creature for each slot level above 2nd." },
        { name: "Suggestion", level: "2nd-level", type: "Action · concentration", range: "30 ft", duration: "Up to 8 hours", description: "You suggest a reasonable course of activity to a creature that can hear and understand you. On a failed Wisdom save, it follows the suggestion until it is completed or the spell ends." },
        { name: "Armor of Agathys", level: "1st-level", type: "Action", range: "Self", duration: "1 hour", description: "A protective magical force surrounds you. You gain 5 temporary hit points. If a creature hits you with a melee attack while these hit points remain, it takes 5 cold damage." },
        { name: "Shatter", level: "2nd-level", type: "Action", range: "60 ft", duration: "Instantaneous", description: "A painfully loud ringing sound erupts at a point within range. Creatures in a 10-foot-radius sphere make a Constitution save; on a failure they take 3d8 thunder damage, or half on a success.", higherLevels: "The damage increases by 1d8 for each slot level above 2nd." }
      ]
    },
    equipment: ["Pirátské kalhoty", "Viol", "Rapír", "2x Citron", "2x Pomeranč", "Karty", "Louč", "Boots of Speed", "Bambitka", "Tráva marihuana hodně", "Spory na houbičky halucinogenní", "4x Minor Healing Potions (2d4 + 2)", "Amulet pohody", "1000 GP"],
    invocations: ["Agonizing Blast", "Eldritch Spear"],
    features: [
      {
        name: "Unarmored Defense",
        source: "Monk 1",
        levelUnlocked: 1,
        actionType: "Passive",
        shortDescription: "Bez zbroje používáš obratnost a moudrost jako obranu.",
        details: ["AC může být 10 + Dexterity modifier + Wisdom modifier, pokud nenosíš armor ani štít."],
        tags: ["defense"]
      },
      {
        name: "Martial Arts",
        source: "Monk 1",
        levelUnlocked: 1,
        actionType: "Passive",
        shortDescription: "Mnišské zbraně a neozbrojené údery jsou rychlé a přesné.",
        details: ["Můžeš používat Dexterity pro útok a damage u monk weapons a unarmed strikes.", "Po útoku můžeš jako bonus action provést unarmed strike."],
        tags: ["combat"]
      },
      {
        name: "Ki",
        source: "Monk 2",
        levelUnlocked: 2,
        actionType: "Resource",
        uses: "6 / Short Rest",
        recharge: "Short Rest",
        shortDescription: "Vnitřní energie pro mnišské techniky.",
        details: ["Používá se na Flurry of Blows, Patient Defense, Step of the Wind a další monk schopnosti."],
        tags: ["resource"]
      },
      {
        name: "Flurry of Blows",
        source: "Monk 2",
        levelUnlocked: 2,
        actionType: "Bonus Action",
        uses: "1 Ki",
        shortDescription: "Po Attack action provedeš dva rychlé neozbrojené útoky.",
        details: ["Stojí 1 Ki point a používá se po Attack action."],
        tags: ["combat", "ki"]
      },
      {
        name: "Patient Defense",
        source: "Monk 2",
        levelUnlocked: 2,
        actionType: "Bonus Action",
        uses: "1 Ki",
        shortDescription: "Zaujmeš obranný postoj.",
        details: ["Stojí 1 Ki point a provede Dodge jako bonus action."],
        tags: ["defense", "ki"]
      },
      {
        name: "Step of the Wind",
        source: "Monk 2",
        levelUnlocked: 2,
        actionType: "Bonus Action",
        uses: "1 Ki",
        shortDescription: "Rychlý pohyb přes bojiště.",
        details: ["Stojí 1 Ki point a umožní Dash nebo Disengage jako bonus action; skoky jsou v tomto tahu delší."],
        tags: ["movement", "ki"]
      },
      {
        name: "Unarmored Movement",
        source: "Monk 2",
        levelUnlocked: 2,
        actionType: "Passive",
        shortDescription: "Pohybuješ se rychleji bez zbroje.",
        details: ["Bonus k rychlosti, pokud nenosíš armor ani štít."],
        tags: ["movement"]
      },
      {
        name: "Drunken Technique",
        source: "Way of the Drunken Master 3",
        levelUnlocked: 3,
        actionType: "Passive",
        shortDescription: "Flurry of Blows tě zároveň rozhýbe mimo dosah.",
        details: ["Po použití Flurry of Blows získáš Disengage a zvýšenou rychlost do konce tahu."],
        tags: ["subclass", "movement"]
      },
      {
        name: "Extra Attack",
        source: "Monk 5",
        levelUnlocked: 5,
        actionType: "Passive",
        shortDescription: "Při Attack action můžeš zaútočit dvakrát.",
        details: ["Platí pro Attack action ve tvém tahu."],
        tags: ["combat"]
      },
      {
        name: "Stunning Strike",
        source: "Monk 5",
        levelUnlocked: 5,
        actionType: "On Hit",
        uses: "1 Ki",
        shortDescription: "Po zásahu melee weapon attackem můžeš zkusit ochromit cíl.",
        details: ["Cíl hází Constitution save proti tvému Ki save DC.", "Při neúspěchu je stunned do konce tvého dalšího tahu."],
        tags: ["combat", "ki"]
      },
      {
        name: "Tavern Brawler",
        source: "Feat",
        levelUnlocked: 1,
        actionType: "Passive / Bonus Action",
        shortDescription: "Jsi zvyklá bojovat improvizovaně a zblízka.",
        details: ["Proficiency s improvised weapons.", "Unarmed strike používá d4, pokud nepoužíváš lepší monk die.", "Po zásahu unarmed strikem nebo improvised weapon můžeš zkusit grapple jako bonus action."],
        tags: ["feat", "combat"]
      },
      {
        name: "Tipsy Sway",
        source: "Way of the Drunken Master 6",
        levelUnlocked: 6,
        actionType: "Reaction / Movement",
        shortDescription: "Opilecký pohyb obrací chyby a rány proti okolí.",
        details: ["Obsahuje Leap to Your Feet a Redirect Attack ve stručné podobě pro hru.", "Pomáhá rychle vstát a přesměrovat neúspěšný melee útok."],
        tags: ["subclass", "defense"]
      },
      {
        name: "Ability Score Improvement",
        source: "Warlock 4",
        levelUnlocked: 4,
        actionType: "Passive",
        shortDescription: "You improve one ability score or choose a feat.",
        details: ["Increase one ability score by 2, two ability scores by 1, or choose a feat, following the normal rules."],
        tags: ["warlock", "progression"]
      },
      {
        name: "Tentacle of the Deep",
        source: "The Fathomless 1",
        levelUnlocked: 1,
        actionType: "Bonus Action",
        uses: "Proficiency Bonus / Long Rest",
        recharge: "Long Rest",
        shortDescription: "Vyvoláš spectral tentacle, které útočí a zpomaluje.",
        details: ["Bonus action vytvoří chapadlo v dosahu.", "Chapadlo může útočit cold damage a snížit rychlost cíle."],
        tags: ["warlock", "subclass"]
      },
      {
        name: "Gift of the Sea",
        source: "The Fathomless 1",
        levelUnlocked: 1,
        actionType: "Passive",
        shortDescription: "Mořská moc ti dává plavání a dýchání pod vodou.",
        details: ["Získáváš swim speed 40 ft a můžeš dýchat pod vodou."],
        tags: ["warlock", "movement"]
      },
      {
        name: "Pact Magic",
        source: "Warlock 1",
        levelUnlocked: 1,
        actionType: "Magic",
        shortDescription: "Sesíláš warlock kouzla přes Charisma a sloty se vrací na short rest.",
        details: ["Na Warlock 3 máš 2 pact spell slots.", "Sloty jsou 2nd level."],
        tags: ["warlock", "magic"]
      },
      {
        name: "Pact of the Blade",
        source: "Warlock 3",
        levelUnlocked: 3,
        actionType: "Action",
        shortDescription: "Dokážeš vytvořit nebo svázat pact weapon.",
        details: ["Zbraň můžeš přivolat a používat jako pact weapon podle pravidel pact boonu."],
        tags: ["warlock", "combat"]
      },
      {
        name: "Agonizing Blast",
        source: "Eldritch Invocation",
        levelUnlocked: 2,
        actionType: "Passive",
        shortDescription: "Eldritch Blast přidává Charisma modifier do damage.",
        details: ["Bonus se vztahuje na každý zásah Eldritch Blastem."],
        tags: ["warlock", "invocation"]
      },
      {
        name: "Eldritch Spear",
        source: "Eldritch Invocation",
        levelUnlocked: 2,
        actionType: "Passive",
        shortDescription: "Eldritch Blast má extrémně dlouhý dostřel.",
        details: ["Dosah Eldritch Blastu je 300 ft."],
        tags: ["warlock", "invocation"]
      }
    ],
    story: "Mnoho konců, mnoho proměnných...\n\n1. Po dlouhodobé ignoraci mého patrona se budu plavit co nejdéle můžu, dokud nebude má loď jeho chapadly chycena a rozdrcena a jeho dar mi nebude sebrán, mezitím co se budu topit v největších hlubinách moře. Dále se přenese kletba na mé potomky, pokud nějaké budu mít.\n\n2. Poslušný a neposlušný, ale pořád ne dostatečně. Ke konci mého smrtelného života budu stáhnut do hlubin k němu a budu navždy jednou z jeho chobotnic.\n\n3. Splnil jsem cíle mého patrona a snažil jsem se i s ním spřátelit, abych mohl žít šťastně a být největším pirátem na všech oceánech.\n\n4. Po všech letech v jeho službách, kdy jsem i šířil mou víru v něj mezi ostatní, jsem založil rodinu, ale s ní byl stále na moři. Po letech v jeho službách mi nabídl být po jeho boku, ovšem za cenu toho, že budu muset pomáhat v jeho službách na dně hlubiny či v hlubinné pláni.\n\n4.1 ???? Po všech plavbách na dně hlubiny mi nabídl volnost, ovšem já chtěl víc a nepřijít o moc. On mi dovolil čerpat ještě víc a s touto mocí jsem se rozhodl sbírat více a více znalostí, dokud nesepíšu knihu, která by ovšem ničila mysli kvůli jejímu blízkému spojení s mým patronem a vším věděním, které jsme nasbírali."
  }
};
