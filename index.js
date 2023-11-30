import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const data = await response.json();
  cardContainer.innerHTML = "";
  return data.results;
}

const data = await fetchCharacters();

data.forEach((person) => {
  CharacterCard(person.image, person.name, person.status, person.occurence);
});

async function renderCards() {
  await fetchCharacters();
  const newPersons = await fetchCharacters();
  newPersons.forEach((person) => {
    CharacterCard(person.image, person.name, person.status, person.occurence);
  });
  console.log(newPersons);
}

renderCards();

nextButton.addEventListener("click", () => {
  page ++;
  renderCards();

})

prevButton.addEventListener("click", () => {
  
})