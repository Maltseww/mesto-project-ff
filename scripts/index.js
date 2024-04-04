// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content
// @todo: DOM узлы



// @todo: Функция создания карточки

// function createCard(cardData) {
//     const templateContent = cardTemplate.content.cloneNode(true);
//     const cardList = document.querySelector('.places__item');
//     const image = cardList.querySelector('.card__image');
//     const title = cardList.querySelector('.card__title');
    
// }

// const cardContainer = document.querySelector('.card')

// initialCards1.forEach(function())

function createCard(cardData) {
    // Получаем доступ к шаблону
    const template = document.querySelector('#card-template');
  
    // Клонируем содержимое шаблона
    const templateContent = template.content.cloneNode(true);
  
    // Заполняем клонированный шаблон данными из объекта cardData
    const cardImage = templateContent.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
  
    const cardTitle = templateContent.querySelector('.card__title');
    cardTitle.textContent = cardData.name;
  
    // Возвращаем заполненный шаблон
    return templateContent;
  }
  
  // Пример использования функции для создания карточек из массива initialCards1
  const placesList = document.querySelector('.places__list');
  initialCards1.forEach(function(cardData) {
    const cardElement = createCard(cardData);
    placesList.appendChild(cardElement);
  });
  

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу




