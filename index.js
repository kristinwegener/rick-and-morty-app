import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();

  maxPage = data.info.pages;
  pagination.textContent = `${page}/${maxPage}`;

  return data.results;
}

async function renderCards() {
  cardContainer.innerHTML = "";
  const characters = await fetchCharacters();
  characters.forEach((character) => {
    CharacterCard(character);
  });
}

renderCards();

nextButton.addEventListener("click", () => {
  if (page == maxPage) return;
  page++;
  renderCards();
});

prevButton.addEventListener("click", () => {
  if (page == 1) return;
  page--;
  renderCards();
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  renderCards();
});
