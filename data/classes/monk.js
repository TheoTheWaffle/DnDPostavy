window.classProgressions = window.classProgressions || {};

window.classProgressions.monk = {
  name: "Monk",
  hitDie: "d8",
  resourceProgression: {
    ki: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20 },
    martialArts: { 1: "1d4", 2: "1d4", 3: "1d4", 4: "1d4", 5: "1d6", 6: "1d6", 7: "1d6", 8: "1d6", 9: "1d6", 10: "1d6", 11: "1d8", 12: "1d8", 13: "1d8", 14: "1d8", 15: "1d8", 16: "1d8", 17: "1d10", 18: "1d10", 19: "1d10", 20: "1d10" }
  },
  levels: {
    1: [{ name: "Unarmored Defense" }, { name: "Martial Arts" }],
    2: [{ name: "Ki" }, { name: "Unarmored Movement" }],
    3: [{ name: "Monastic Tradition" }, { name: "Deflect Missiles" }],
    4: [{ name: "Ability Score Improvement" }, { name: "Slow Fall" }],
    5: [{ name: "Extra Attack" }, { name: "Stunning Strike" }],
    6: [{ name: "Ki-Empowered Strikes" }, { name: "Tradition Feature" }],
    7: [{ name: "Evasion" }, { name: "Stillness of Mind" }],
    8: [{ name: "Ability Score Improvement" }],
    9: [{ name: "Unarmored Movement Improvement" }],
    10: [{ name: "Purity of Body" }],
    11: [{ name: "Tradition Feature" }],
    12: [{ name: "Ability Score Improvement" }],
    13: [{ name: "Tongue of the Sun and Moon" }],
    14: [{ name: "Diamond Soul" }],
    15: [{ name: "Timeless Body" }],
    16: [{ name: "Ability Score Improvement" }],
    17: [{ name: "Tradition Feature" }],
    18: [{ name: "Empty Body" }],
    19: [{ name: "Ability Score Improvement" }],
    20: [{ name: "Perfect Self" }]
  }
};
