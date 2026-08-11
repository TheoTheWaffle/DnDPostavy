function detailHref(characterId) {
  const isCharacterIndex = window.location.pathname.endsWith("/characters/") || window.location.pathname.endsWith("/characters/index.html");
  return isCharacterIndex ? `./character.html?id=${characterId}` : `./characters/character.html?id=${characterId}`;
}

function cardPortrait(character) {
  const isCharacterIndex = window.location.pathname.includes("/characters/");
  if (isCharacterIndex && character.portrait) return character.portrait;
  return character.cardPortrait || character.portrait || "./assets/characters/placeholder.svg";
}

function renderCharacterCards() {
  const grid = document.querySelector("#character-grid");
  if (!grid || !window.characters) return;

  grid.innerHTML = Object.values(window.characters).map((character) => `
    <article class="character-card">
      <a class="portrait-link" href="${detailHref(character.id)}" aria-label="Zobrazit ${character.name}">
        <img src="${cardPortrait(character)}" alt="Portrét postavy ${character.name}">
      </a>
      <div class="card-body">
        <p class="eyebrow">${character.race}</p>
        <h3>${character.name}</h3>
        <p class="class-line">${classesLabel(character)}</p>
        <p class="subclass-line">${subclassesLabel(character)}</p>
        <div class="mini-stats">
          <span><strong>${totalCharacterLevel(character)}</strong> Level</span>
          <span><strong>${character.hp}</strong> HP</span>
          <span><strong>${character.ac}</strong> AC</span>
        </div>
        <p>${character.description}</p>
        <a class="button" href="${detailHref(character.id)}">Zobrazit postavu</a>
      </div>
    </article>
  `).join("");
}

renderCharacterCards();
