import { cardContainer } from "../../index.js";

export function CharacterCard(imgURL, title, status, type, occurence) {
  const card = document.createElement("li");
  card.innerHTML = `<div class="card__image-container">
                        <img
                        class="card__image"
                        src="${imgURL}"
                        alt="${title}"
                        />
                        <div class="card__image-gradient"></div>
                    </div>
                    <div class="card__content">
                        <h2 class="card__title">${title}</h2>
                        <dl class="card__info">
                        <dt class="card__info-title">Status</dt>
                        <dd class="card__info-description">${status}</dd>
                        <dt class="card__info-title">Type</dt>
                        <dd class="card__info-description">${type}</dd>
                        <dt class="card__info-title">Occurrences</dt>
                        <dd class="card__info-description">${occurence}</dd>
                        </dl>
                    </div>`;
  card.classList.add("card");
  cardContainer.append(card);
  return card;
}
