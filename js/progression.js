function abilityModifier(score) {
  return Math.floor((Number(score) - 10) / 2);
}

function signed(value) {
  if (typeof value === "string") return value;
  return value >= 0 ? `+${value}` : `${value}`;
}

function totalCharacterLevel(character) {
  return character.classes.reduce((sum, item) => sum + item.level, 0);
}

function classesLabel(character) {
  return character.classes.map((item) => `${item.className} ${item.level}`).join(" / ");
}

function subclassesLabel(character) {
  const labels = character.classes
    .map((item) => item.subclass && window.subclassProgressions[item.subclass]?.name)
    .filter(Boolean);
  return labels.length ? labels.join(" / ") : "Bez subclass";
}

function getClassProgression(classKey) {
  return window.classProgressions?.[classKey] || null;
}

function getSubclassProgression(subclassKey) {
  return subclassKey ? window.subclassProgressions?.[subclassKey] || null : null;
}

function featuresForLevel(classItem, level) {
  const classData = getClassProgression(classItem.classKey);
  const subclassData = getSubclassProgression(classItem.subclass);
  const base = classData?.levels?.[level] || [];
  const subclass = subclassData?.levels?.[level] || [];
  return [...base, ...subclass];
}

function progressionState(level, currentLevel) {
  if (level <= currentLevel) return "unlocked";
  if (level === currentLevel + 1) return "next";
  return "future";
}

function nextLevelChanges(classItem) {
  const current = classItem.level;
  const next = current + 1;
  if (next > 20) return null;
  const classData = getClassProgression(classItem.classKey);
  const resources = [];

  Object.entries(classData?.resourceProgression || {}).forEach(([key, table]) => {
    const before = table[current];
    const after = table[next];
    if (before !== after) {
      resources.push({ key, before, after });
    }
  });

  return {
    className: classItem.className,
    current,
    next,
    features: featuresForLevel(classItem, next),
    resources
  };
}

function resourceName(key) {
  const names = {
    rages: "Rages",
    rageDamage: "Rage damage",
    ki: "Ki",
    martialArts: "Martial Arts die",
    pactSlots: "Pact slots",
    slotLevel: "Slot level"
  };
  return names[key] || key;
}

const skillDefinitions = [
  { key: "acrobatics", name: "Acrobatics", ability: "dexterity" },
  { key: "animalHandling", name: "Animal Handling", ability: "wisdom" },
  { key: "arcana", name: "Arcana", ability: "intelligence" },
  { key: "athletics", name: "Athletics", ability: "strength" },
  { key: "deception", name: "Deception", ability: "charisma" },
  { key: "history", name: "History", ability: "intelligence" },
  { key: "insight", name: "Insight", ability: "wisdom" },
  { key: "intimidation", name: "Intimidation", ability: "charisma" },
  { key: "investigation", name: "Investigation", ability: "intelligence" },
  { key: "medicine", name: "Medicine", ability: "wisdom" },
  { key: "nature", name: "Nature", ability: "intelligence" },
  { key: "perception", name: "Perception", ability: "wisdom" },
  { key: "performance", name: "Performance", ability: "charisma" },
  { key: "persuasion", name: "Persuasion", ability: "charisma" },
  { key: "religion", name: "Religion", ability: "intelligence" },
  { key: "sleightOfHand", name: "Sleight of Hand", ability: "dexterity" },
  { key: "stealth", name: "Stealth", ability: "dexterity" },
  { key: "survival", name: "Survival", ability: "wisdom" }
];

function skillBonus(character, skill) {
  const abilityBonus = abilityModifier(character.stats[skill.ability]);
  const isProficient = character.skillProficiencies?.includes(skill.key);
  const isExpertise = character.skillExpertise?.includes(skill.key);
  const jackBonus = character.jackOfAllTrades && !isProficient ? Math.floor(character.proficiencyBonus / 2) : 0;
  const proficiency = isExpertise ? character.proficiencyBonus * 2 : isProficient ? character.proficiencyBonus : jackBonus;
  return abilityBonus + proficiency;
}

function attackAbilityModifier(character, attack) {
  if (!attack.ability) return 0;
  return abilityModifier(character.stats[attack.ability]);
}

function calculatedAttackBonus(character, attack) {
  if (typeof attack.attackBonus === "number" && !attack.ability) return attack.attackBonus;
  return attackAbilityModifier(character, attack)
    + (attack.proficient ? character.proficiencyBonus : 0)
    + (attack.magicBonus || 0)
    + (attack.attackBonusOverride || 0);
}

function calculatedDamageBonus(character, attack) {
  if (typeof attack.damageBonusOverride === "number") return attack.damageBonusOverride;
  if (attack.addAbilityToDamage === false) return attack.magicBonus || 0;
  const ability = attack.damageAbility || attack.ability;
  const abilityBonus = ability ? abilityModifier(character.stats[ability]) : 0;
  return abilityBonus + (attack.magicBonus || 0);
}

function calculatedDamage(character, attack) {
  if (attack.damage && !attack.damageDice) return attack.damage;
  const bonus = calculatedDamageBonus(character, attack);
  if (!bonus) return attack.damageDice;
  return `${attack.damageDice} ${signed(bonus)}`;
}

function attackFormulaParts(character, attack) {
  if (!attack.ability) return [];
  return [
    `${attack.ability.slice(0, 3).toUpperCase()} ${signed(attackAbilityModifier(character, attack))}`,
    attack.proficient ? `Prof ${signed(character.proficiencyBonus)}` : "No proficiency",
    attack.magicBonus ? `Magic ${signed(attack.magicBonus)}` : null,
    attack.attackBonusOverride ? `Other ${signed(attack.attackBonusOverride)}` : null
  ].filter(Boolean);
}
