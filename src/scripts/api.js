
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-18',
    headers: {
      authorization: 'bee7bfd3-b54d-46b1-8712-477837912d43',
      'Content-Type': 'application/json'
    }
  }
  
  export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      });
  }

//   по аналогии с геткард только сходить за профилем

//   export const getProfileRender  = () => {
//     return fetch(`${config.baseUrl}/users/me`,{
//         headers: config.headers
        
//     })
//     .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//       });

//   }
//   console.log(getProfileRender)





// отправляем новую карточку на сервер
 export function createCardApi(link, name){
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
        method: "POST",
        body: JSON.stringify({
            link: link,
            name: name,
        }),
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        });
} 

