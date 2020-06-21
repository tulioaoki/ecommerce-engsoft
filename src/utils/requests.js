import Axios from "axios";

export const BASE_URL = 'https://ecommerce-engsoft.herokuapp.com/';

// Exemplo de login
export default function authenticateUserRequest(login, password) {
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
