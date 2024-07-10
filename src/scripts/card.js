const cardTemplate = document.querySelector("#card-template");


function createCard(cardData, deleteCard, openImagePopup,) {
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
    handleLikeClick(likeButton);
  });

  cardImage.addEventListener("click", function () { 
    openImagePopup(cardData); 
  }); 

  return templateContent;
}

function deleteCard(card) {
  card.remove();
}

function handleLikeClick(likeButton) {
    likeButton.classList.toggle("card__like-button_is-active");
  }

export {  createCard, deleteCard, handleLikeClick};
