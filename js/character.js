const detailRoot = document.querySelector("#character-detail");
const params = new URLSearchParams(window.location.search);
const character = window.characters?.[params.get("id")] || Object.values(window.characters || {})[0];

function renderList(items) {
  return items?.length ? items.map((item) => `<li>${item}</li>`).join("") : "<li>Zatím nedoplněno</li>";
}

function renderStat(name, value) {
  return `
    <div class="ability-box">
      <span>${name}</span>
      <strong>${value}</strong>
      <em>${signed(abilityModifier(value))}</em>
    </div>
  `;
}

function renderAttacks(character, attacks) {
  return attacks.map((attack) => `
    <article class="attack-card">
      <div>
        <h3>${attack.name}</h3>
        <p>${attack.range}</p>
      </div>
      <div class="attack-numbers">
        <span>${signed(calculatedAttackBonus(character, attack))} attack</span>
        <strong>${calculatedDamage(character, attack)} ${attack.damageType || ""}</strong>
      </div>
      <p class="attack-formula">${attackFormulaParts(character, attack).join(" + ")}</p>
      <p>${attack.notes || ""}</p>
    </article>
  `).join("");
}

function renderResources(resources) {
  return resources.map((resource) => `
    <article class="resource-card">
      <p class="eyebrow">${resource.recharge}</p>
      <h3>${resource.name}</h3>
      <strong>${resource.current} / ${resource.maximum}</strong>
      <p>${resource.note || ""}</p>
    </article>
  `).join("");
}

function renderSpellcasting(spellcasting) {
  if (!spellcasting) return "";
  return `
    <article class="info-panel spell-panel">
      <h2>Kouzlení</h2>
      <dl>
        <dt>Class</dt><dd>${spellcasting.className}</dd>
        <dt>Ability</dt><dd>${spellcasting.ability}</dd>
        <dt>Save DC</dt><dd>${spellcasting.saveDc}</dd>
        <dt>Attack bonus</dt><dd>${signed(spellcasting.attackBonus)}</dd>
      </dl>
      <h3>Spells</h3>
      <ul>${renderList(spellcasting.spells)}</ul>
    </article>
  `;
}

function renderFeatures(features) {
  return features.map((feature) => `
    <details class="feature-card">
      <summary>
        <span>
          <strong>${feature.name}</strong>
          <em>${feature.source} · ${feature.actionType || "Passive"}</em>
        </span>
        <span class="summary-arrow" aria-hidden="true">›</span>
      </summary>
      ${(feature.uses || feature.recharge) ? `<p class="feature-meta">${feature.uses ? `Uses: ${feature.uses}` : ""}${feature.uses && feature.recharge ? " · " : ""}${feature.recharge ? `Recharge: ${feature.recharge}` : ""}</p>` : ""}
      <p>${feature.shortDescription}</p>
      <ul>${renderList(feature.details)}</ul>
      <div class="tags">${(feature.tags || []).map((tag) => `<span>${tag}</span>`).join("")}</div>
    </details>
  `).join("");
}

function renderSkills(character) {
  return skillDefinitions.map((skill) => {
    const isProficient = character.skillProficiencies?.includes(skill.key);
    return `
      <div class="skill-row ${isProficient ? "proficient" : ""}">
        <span class="skill-dot" aria-label="${isProficient ? "Proficient" : "Not proficient"}"></span>
        <span>${skill.name}</span>
        <em>${skill.ability.slice(0, 3).toUpperCase()}</em>
        <strong>${signed(skillBonus(character, skill))}</strong>
      </div>
    `;
  }).join("");
}

function renderProgressionForClass(classItem) {
  const rows = [];
  for (let level = 1; level <= 20; level += 1) {
    const state = progressionState(level, classItem.level);
    const features = featuresForLevel(classItem, level);
    rows.push(`
      <article class="timeline-item ${state}">
        <div class="timeline-level">
          <strong>Level ${level}</strong>
          <span>${state === "unlocked" ? "Unlocked" : state === "next" ? "Next" : "Future"}</span>
        </div>
        <ul>${features.length ? features.map((feature) => `<li>${state === "unlocked" ? "✓ " : ""}${feature.name}</li>`).join("") : "<li>-</li>"}</ul>
      </article>
    `);
  }
  return rows.join("");
}

function renderNextLevels(character) {
  return character.classes.map((classItem) => {
    const next = nextLevelChanges(classItem);
    if (!next) {
      return `<article class="next-card"><h3>${classItem.className}</h3><p>Už jsi na levelu 20 v této class.</p></article>`;
    }
    return `
      <article class="next-card">
        <p class="eyebrow">Pokud vezmeš ${next.className}</p>
        <h3>${next.className} ${next.current} → ${next.className} ${next.next}</h3>
        <h4>Získáš</h4>
        <ul>${next.features.length ? next.features.map((feature) => `<li>${feature.name}</li>`).join("") : "<li>Žádná nová pojmenovaná feature v datech.</li>"}</ul>
        ${next.resources.length ? `<h4>Změny zdrojů</h4><ul>${next.resources.map((item) => `<li>${resourceName(item.key)}: ${item.before} → ${item.after}</li>`).join("")}</ul>` : ""}
      </article>
    `;
  }).join("");
}

function renderProgressionTabs(character) {
  return `
    <div class="class-tabs" role="tablist" aria-label="Class progression">
      ${character.classes.map((item, index) => `<button class="class-tab ${index === 0 ? "active" : ""}" data-class-index="${index}" type="button">${item.className} ${item.level}</button>`).join("")}
    </div>
    <div id="timeline" class="timeline">${renderProgressionForClass(character.classes[0])}</div>
  `;
}

function bindTabs(character) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`#${button.dataset.tab}`)?.classList.add("active");
    });
  });

  document.querySelectorAll(".class-tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".class-tab").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const classItem = character.classes[Number(button.dataset.classIndex)];
      document.querySelector("#timeline").innerHTML = renderProgressionForClass(classItem);
    });
  });
}

function renderCharacter(character) {
  if (!detailRoot || !character) return;
  document.title = `${character.name} | DnD Postavy`;
  detailRoot.innerHTML = `
    <section class="profile-hero">
      <img class="profile-portrait" src="${character.portrait}" alt="Portrét postavy ${character.name}">
      <div class="profile-copy">
        <p class="eyebrow">${character.race} · ${character.background}</p>
        <h1>${character.name}</h1>
        <p class="class-line">${classesLabel(character)}</p>
        <p class="subclass-line">${subclassesLabel(character)}${character.pact ? ` · ${character.pact}` : ""}</p>
        <blockquote>"${character.flavorQuote}"</blockquote>
        <div class="hero-stats">
          <span><strong>${totalCharacterLevel(character)}</strong> Total level</span>
          <span><strong>${character.hp}</strong> HP</span>
          <span><strong>${character.ac}</strong> AC</span>
          <span><strong>${signed(character.initiative)}</strong> Initiative</span>
          <span><strong>${character.speed}</strong> Speed</span>
          <span><strong>${signed(character.proficiencyBonus)}</strong> Proficiency</span>
        </div>
      </div>
    </section>

    <nav class="tabs" aria-label="Sekce postavy">
      ${["Přehled", "Boj", "Schopnosti", "Výbava", "Levelování", "Příběh"].map((label, index) => `<button class="tab-button ${index === 0 ? "active" : ""}" data-tab="tab-${index}" type="button">${label}</button>`).join("")}
    </nav>

    <section id="tab-0" class="tab-panel active">
      <div class="stat-grid">
        ${renderStat("STR", character.stats.strength)}
        ${renderStat("DEX", character.stats.dexterity)}
        ${renderStat("CON", character.stats.constitution)}
        ${renderStat("INT", character.stats.intelligence)}
        ${renderStat("WIS", character.stats.wisdom)}
        ${renderStat("CHA", character.stats.charisma)}
      </div>
      <div class="two-column">
        <article class="info-panel">
          <h2>Přehled</h2>
          <dl>
            <dt>Race</dt><dd>${character.race}</dd>
            <dt>Background</dt><dd>${character.background}</dd>
            <dt>Alignment</dt><dd>${character.alignment}</dd>
            <dt>Classes</dt><dd>${classesLabel(character)}</dd>
            <dt>Subclasses</dt><dd>${subclassesLabel(character)}</dd>
            <dt>Total level</dt><dd>${totalCharacterLevel(character)}</dd>
          </dl>
        </article>
        <article class="info-panel">
          <h2>Jazyky a proficiency</h2>
          <h3>Languages</h3>
          <ul>${renderList(character.languages)}</ul>
          <h3>Proficiencies</h3>
          <ul>${renderList(character.proficiencies)}</ul>
        </article>
      </div>
      <article class="info-panel skill-panel">
        <h2>Skill checks</h2>
        <div class="skill-grid">${renderSkills(character)}</div>
      </article>
    </section>

    <section id="tab-1" class="tab-panel">
      <h2>Boj</h2>
      <div class="attack-grid">${renderAttacks(character, character.attacks || [])}</div>
      <h2>Zdroje</h2>
      <div class="resource-grid">${renderResources(character.resources || [])}</div>
      ${renderSpellcasting(character.spellcasting)}
    </section>

    <section id="tab-2" class="tab-panel">
      <h2>Schopnosti</h2>
      <div class="feature-list">${renderFeatures(character.features || [])}</div>
    </section>

    <section id="tab-3" class="tab-panel">
      <h2>Výbava</h2>
      <div class="info-panel"><ul>${renderList(character.equipment)}</ul></div>
    </section>

    <section id="tab-4" class="tab-panel">
      <h2>Další level</h2>
      <div class="next-grid">${renderNextLevels(character)}</div>
      <h2>Postup class</h2>
      ${renderProgressionTabs(character)}
    </section>

    <section id="tab-5" class="tab-panel">
      <h2>Příběh</h2>
      <article class="info-panel story-panel">${character.story.split("\n").map((paragraph) => paragraph ? `<p>${paragraph}</p>` : "").join("")}</article>
    </section>
  `;
  bindTabs(character);
}

renderCharacter(character);
