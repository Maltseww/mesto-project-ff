// Функция для закрытия попапа
function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closePopupOnEsc);
  }
  
  // Функция для закрытия попапа при нажатии на Escape
  function closePopupOnEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-opened");
      if (openedPopup) {
        closePopup(openedPopup);
      }
    }
  }
  
  // Функция для открытия попапа
  function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", closePopupOnEsc);
  }
  
  // Функция для закрытия попапа при клике на оверлей
  function closePopupOnOverlayClick(popup) {
    popup.addEventListener('click', (evt) => {
      if (evt.target === popup) {
        closePopup(popup);
      }
    });
  }
  
  // Функция для закрытия попапа при клике на кнопку закрытия
  function closePopupOnCloseButton(popup) {
    const closeButton = popup.querySelector(".popup__close");
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closePopup(popup);
      });
    }
  }
  
  export { closePopup, closePopupOnOverlayClick, closePopupOnCloseButton, openPopup };
  





// function closePopup(popup) {
//   popup.classList.remove("popup_is-opened");
//   document.removeEventListener("keydown", closePopupOnEsc);
// }

// function closePopupOnEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_is-opened");
//     if (openedPopup) {
//       closePopup(openedPopup);
//     }
//   }
// }

// // Функция для открытия попапа
// function openPopup(popup) {
//   popup.classList.add("popup_is-opened");
//   document.addEventListener("keydown", closePopupOnEsc);
// }

// function closePopupOnOverlayClick(popup) {
//     popup.addEventListener('click', (evt) => {
//       if (evt.target === popup) {
//         closePopup(popup);
//       }
//     });
//   }
  

//   export { closePopup, closePopupOnOverlayClick, openPopup };
