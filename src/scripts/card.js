
const cardTemplate = document.querySelector("#card-template");
const placesList = document.querySelector(".places__list");
import {openImagePopup} from '/src/index.js'




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

  const likeButton = templateContent.querySelector(".card__like-button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle('card__like-button_is-active');
  });

    
  cardImage.addEventListener("click", function () {
    openImagePopup(cardData.link, cardData.name, cardTitle.value);
  });



  return templateContent;
}

  function deleteCard(card) {
    card.remove();
}

export {placesList, createCard, deleteCard}