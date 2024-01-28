export async function getTrackList() {
 const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');

  if (!response.ok){
    throw new Error('Ошибка сервера')
  }
 
  const data = await response.json();
  return data;
}

export function newUserRegistration({email, password, username, callbackForResponse}) {
 return fetch("https://skypro-music-api.skyeng.tech/user/signup/ ", {
    method: "POST",
    body: JSON.stringify({
      email: email.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
      password: password,
      username: username.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        response.json().then((responseData) => {
          callbackForResponse({
            data: responseData
          });
        });
      } else if (response.status === 400) {
          response.json().then((responseData) => {
            callbackForResponse({
              error: responseData
            });
          });

      } else if (response.status === 500) {
        callbackForResponse({
          errorMessage: 
          'Сервер сломался'
        });
      }
  }); 
}

export function loginUser({email, password, callbackForResponse}) {
 return fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email: email.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
      password: password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
  .then((response) => {
    if (response.status === 200) {
      response.json().then((responseData) => {
        callbackForResponse({
          data: responseData
        });
      });
    } else if (response.status === 400) {
        response.json().then((responseData) => {
          callbackForResponse({
            error: responseData
          });
        });

    } else if (response.status === 401) {
      response.json().then((responseData) => {
        callbackForResponse({
          errorMessage: responseData.detail
        });
      });

  } else if (response.status === 500) {
      callbackForResponse({
        errorMessage: 
        'Сервер сломался'
      });
    }
  })
  ;
}

export function getToken({email, password}) {
  return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
     method: "POST",
     body: JSON.stringify({
       email: email.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
       password: password,
     }),
     headers: {
       // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
       "content-type": "application/json",
     },
   })
   .then((response) => response.json())
   ;
 }

export function getFavoriteTrackList(updateToken = true) {

  let tokenObject =JSON.parse(window.localStorage.getItem("userTokens"));
  
  return fetch('https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/' , {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenObject.access}` ,
      },
    })  
    .then((response) => {
      if (response.status === 200) {
        return response.json().then((responseData) => {
          return responseData;
        });
      } else if (response.status === 401) {
        if (updateToken) { 
           refreshToken();
           return getFavoriteTrackList(false);
          }
      } else {
        throw new Error('Ошибка сервера')
      }
      }); 
 }

export function refreshToken() {

  let tokenObject =JSON.parse(window.localStorage.getItem("userTokens"));

  return fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
    method: "POST",
    body: JSON.stringify({
      refresh: tokenObject.refresh,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((json) => {
     const accessObject = JSON.parse(window.localStorage.getItem("userTokens"));
     accessObject.access = json.access;
     window.localStorage.setItem("userTokens", JSON.stringify(accessObject));
     console.log("токен обновился");
    
  });
}


