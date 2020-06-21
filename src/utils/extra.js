import Axios from "axios";
import { BASE_URL } from "./requests";

export default function generateUID() {
  return `not_created${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
}

export const isLogged = () => (
  (localStorage.getItem("token") !== 'undefined' && typeof localStorage.getItem("token") !== 'undefined')
)

export async function isAdmin(){
  let isAdmin = false;
  let headers = {
    'content-type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Token ${localStorage.getItem('token')}`,
  }    
  await Axios.get(BASE_URL+'check-auth' ,{headers})
    .then( response => {
      console.log(response.data.data.is_admin, "OXAONFOA")
      isAdmin = response.data.data.is_admin
    })
    .catch((error) => (error))
  return isAdmin
}