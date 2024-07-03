import './styles/index.css';
import {initialCards} from './scripts/cards.js';
import { placesList, createCard, deleteCard } from './scripts/card.js';


// Находим форму в DOM
const formElement = document.querySelector('form[name="edit-profile"]')
const nameInput = formElement.querySelector('input[name="name"]')
const jobInput = formElement.querySelector('input[name="description"]')
const profileName = document.querySelector('.profile__title');
const profileDes = document.querySelector('.profile__description');
const popupFormSave = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const newCard = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const profileAvatarButton = document.querySelector('.profile__image');
const profileAvatarPopup = document.querySelector('.popup_type_edit-avatar')
const newCardForm = document.querySelector('form[name="new-place"]');
const placeNameInput = newCardForm.querySelector('input[name="place-name"]');
const linkInput = newCardForm.querySelector('input[name="link"]');

const popupImage = document.querySelector('.popup_type_image');
//const popupContentImage = popupImage.querySelector('.popup__content_content_image');
const popupImageDes = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');




// функция для редактирования профиля
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    const valueName = nameInput.value
    const valueJob = jobInput.value
     
    profileName.textContent =  valueName
    profileDes.textContent = valueJob
    closePopup(popupFormSave)
}
formElement.addEventListener('submit', handleFormSubmit);

// функция для редактирования карточек
function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
      name: placeNameInput.value,
      link: linkInput.value,
  };
  const cardElement = createCard(cardData, deleteCard);
  placesList.prepend(cardElement); // Добавляем карточку в начало списка
  closePopup(newCardPopup);
  newCardForm.reset(); // Сбрасываем поля формы
}

newCardForm.addEventListener('submit', handleNewCardFormSubmit);

initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData, deleteCard);
  placesList.appendChild(cardElement);
});

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}


  // Функция для открытия попапа
  function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupOnEsc);
  }

    // функция открытия изображения
    
     export function openImagePopup(link, name, cardTitle) {
      popupImage.src = link;
      popupImage.alt = name;
      popupImageDes.src = link;
      popupImageDes.alt = name;

      popupCaption = cardTitle.value;
       
    

      openPopup(popupImage);
    }
    
    



  profileEditButton.addEventListener('click', () => {
    openPopup(profileEditPopup);
  });


  newCard.addEventListener('click', () => {
    openPopup(newCardPopup);
  });


  

  profileAvatarButton.addEventListener('click', () => {
    openPopup(profileAvatarPopup);
  });

  


  // Обработчики для кнопок закрытия попапов
  popupCloseButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => {
      closePopup(popup);
    });
  });

  // Обработчик для закрытия попапов по клику на затемнённую область
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    }
  });

