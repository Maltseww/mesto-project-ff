import './styles/index.css';
import {initialCards} from './scripts/cards'

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template");
// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
// @todo: Функция создания карточки
function createCard(cardData, deleteCard) {
  const templateContent = cardTemplate.content.cloneNode(true);
  const cardImage = templateContent.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  const cardTitle = templateContent.querySelector(".card__title");
  cardTitle.textContent = cardData.name;
  const deleteButton = templateContent.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    const cardElement = deleteButton.closest(".places__item");
    deleteCard(cardElement);
  });
  return templateContent;
}
// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData, deleteCard);
  placesList.appendChild(cardElement);
});
