window.classProgressions = window.classProgressions || {};

window.classProgressions.warlock = {
  name: "Warlock",
  hitDie: "d8",
  resourceProgression: {
    pactSlots: { 1: 1, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 3, 12: 3, 13: 3, 14: 3, 15: 3, 16: 3, 17: 4, 18: 4, 19: 4, 20: 4 },
    slotLevel: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5, 11: 5, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 20: 5 }
  },
  levels: {
    1: [{ name: "Otherworldly Patron" }, { name: "Pact Magic" }],
    2: [{ name: "Eldritch Invocations" }],
    3: [{ name: "Pact Boon" }],
    4: [{ name: "Ability Score Improvement" }],
    5: [{ name: "More Invocations" }, { name: "3rd-level Pact Slots" }],
    6: [{ name: "Patron Feature" }],
    7: [{ name: "More Invocations" }, { name: "4th-level Pact Slots" }],
    8: [{ name: "Ability Score Improvement" }],
    9: [{ name: "More Invocations" }, { name: "5th-level Pact Slots" }],
    10: [{ name: "Patron Feature" }],
    11: [{ name: "Mystic Arcanum (6th)" }],
    12: [{ name: "Ability Score Improvement" }, { name: "More Invocations" }],
    13: [{ name: "Mystic Arcanum (7th)" }],
    14: [{ name: "Patron Feature" }],
    15: [{ name: "Mystic Arcanum (8th)" }, { name: "More Invocations" }],
    16: [{ name: "Ability Score Improvement" }],
    17: [{ name: "Mystic Arcanum (9th)" }],
    18: [{ name: "More Invocations" }],
    19: [{ name: "Ability Score Improvement" }],
    20: [{ name: "Eldritch Master" }]
  }
};
