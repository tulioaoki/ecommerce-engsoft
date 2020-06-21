import Axios from "axios";

export const BASE_URL = 'https://ecommerce-engsoft.herokuapp.com/';

// Exemplo de login
export function authenticateUserRequest(login, password) {
  const body = {
    username:login,
    password,
  };
  let headers = {
    'content-type': 'application/json',
    'Accept': 'application/json',
}    
return Axios.post('http://localhost:8000/'+'login' , body,{headers})
    .then( response => {
      localStorage.setItem("token", response.data.data.token);
      return response
    })
    .catch((error) => (error))
}

// Exemplo de login
export function registerUserRequest(login, password) {
  const body = {
    name: login.split('@')[0],
    username: login,
    password,
  };
  let headers = {
    'content-type': 'application/json',
    'Accept': 'application/json',
  }
  return Axios.post(BASE_URL+'register' , body,{headers})
    .then( response => {
      return response
    })
    .catch((error) => (error))
}
