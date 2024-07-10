import "./styles/index.css";
import { initialCards } from "./scripts/cards.js";
import { createCard, deleteCard, handleLikeClick } from "./scripts/card.js";
import {
  closePopupOnCloseButton,
  closePopupOnOverlayClick,
  openPopup,
  closePopup,
} from "./scripts/modal.js";

// Находим форму в DOM
const formElementEditProfile = document.querySelector(
  'form[name="edit-profile"]'
);
const nameInput = formElementEditProfile.querySelector('input[name="name"]');
const jobInput = formElementEditProfile.querySelector(
  'input[name="description"]'
);
const profileName = document.querySelector(".profile__title");
const profileDes = document.querySelector(".profile__description");
const popupFormSave = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_type_edit");
const popupCloseButtons = document.querySelectorAll(".popup__close");
const createNewCard = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector(".popup_type_new-card");
const profileAvatarButton = document.querySelector(".profile__image");
const profileAvatarPopup = document.querySelector(".popup_type_edit-avatar");
const newCardForm = document.querySelector('form[name="new-place"]');
const placeNameInput = newCardForm.querySelector('input[name="place-name"]');
const linkInput = newCardForm.querySelector('input[name="link"]');
const popupImage = document.querySelector(".popup_type_image");
const popupImageDes = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");
const placesList = document.querySelector(".places__list");

// функция для редактирования профиля
function handleEditingSubmit(evt) {
  evt.preventDefault();
  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileName.textContent = valueName;
  profileDes.textContent = valueJob;
  closePopup(profileEditPopup);
}
formElementEditProfile.addEventListener("submit", handleEditingSubmit);

// функция для редактирования карточек
function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: placeNameInput.value,
    link: linkInput.value,
  };
  const cardElement = createCard(
    cardData,
    deleteCard,
    openImagePopup,
    handleLikeClick
  );
  placesList.prepend(cardElement);
  closePopup(newCardPopup);
  newCardForm.reset();
}

newCardForm.addEventListener("submit", handleNewCardFormSubmit);

initialCards.forEach(function (cardData) {
  const cardElement = createCard(
    cardData,
    deleteCard,
    openImagePopup,
    handleLikeClick
  );
  placesList.appendChild(cardElement);
});

// функция открытия изображения

function openImagePopup(cardData) {
  popupImageDes.src = cardData.link;
  popupImageDes.alt = cardData.alt;
  popupCaption.textContent = cardData.name;
  openPopup(popupImage);
}

// функция для лайка

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDes.textContent;

  openPopup(profileEditPopup);
});

createNewCard.addEventListener("click", () => {
  openPopup(newCardPopup);
});

profileAvatarButton.addEventListener("click", () => {
  openPopup(profileAvatarPopup);
});

// Обработчики для кнопок закрытия попапов

popupCloseButtons.forEach((button) => {
  const popup = button.closest(".popup");

  closePopupOnCloseButton(popup);
  closePopupOnOverlayClick(popup);
});
