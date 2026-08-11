window.classProgressions = window.classProgressions || {};

window.classProgressions.barbarian = {
  name: "Barbarian",
  hitDie: "d12",
  resourceProgression: {
    rages: { 1: 2, 2: 2, 3: 3, 4: 3, 5: 3, 6: 4, 7: 4, 8: 4, 9: 4, 10: 4, 11: 4, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 6, 18: 6, 19: 6, 20: "Unlimited" },
    rageDamage: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 3, 10: 3, 11: 3, 12: 3, 13: 3, 14: 3, 15: 3, 16: 4, 17: 4, 18: 4, 19: 4, 20: 4 }
  },
  levels: {
    1: [{ name: "Rage" }, { name: "Unarmored Defense" }],
    2: [{ name: "Reckless Attack" }, { name: "Danger Sense" }],
    3: [{ name: "Primal Path" }],
    4: [{ name: "Ability Score Improvement" }],
    5: [{ name: "Extra Attack" }, { name: "Fast Movement" }],
    6: [{ name: "Path Feature" }],
    7: [{ name: "Feral Instinct" }],
    8: [{ name: "Ability Score Improvement" }],
    9: [{ name: "Brutal Critical (1 die)" }],
    10: [{ name: "Path Feature" }],
    11: [{ name: "Relentless Rage" }],
    12: [{ name: "Ability Score Improvement" }],
    13: [{ name: "Brutal Critical (2 dice)" }],
    14: [{ name: "Path Feature" }],
    15: [{ name: "Persistent Rage" }],
    16: [{ name: "Ability Score Improvement" }],
    17: [{ name: "Brutal Critical (3 dice)" }],
    18: [{ name: "Indomitable Might" }],
    19: [{ name: "Ability Score Improvement" }],
    20: [{ name: "Primal Champion" }]
  }
};
