// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content
// @todo: DOM узлы



// @todo: Функция создания карточки

function createCard(cardData) {
    const template = document.querySelector('#card-template');
    const templateContent = template.content.cloneNode(true);
    const cardImage = templateContent.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.alt;
  
    const cardTitle = templateContent.querySelector('.card__title');
    cardTitle.textContent = cardData.name;
    return templateContent;
  }

// @todo: Функция удаления карточки

document.querySelector('.places__list').addEventListener('click', function(event) {
    if (event.target.classList.contains('card__delete-button')) {
      const card = event.target.closest('.places__item');
      card.remove();
    }
  });

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list');
  initialCards1.forEach(function(cardData) {
    const cardElement = createCard(cardData);
    placesList.appendChild(cardElement);
  });


