import {BASE_URL} from '../../utils/requests';
import axios from 'axios';
// Exemplo de login
export default function getFavoritesRequest() {
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.get(BASE_URL+'favorites' , {headers})
        .then( response => response)
        .catch((error) => (error))
}

export function deleteFavoritesRequest(payload) {
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.delete(BASE_URL+`favorites/${payload.id}` , {headers})
        .then( response => response)
        .catch((error) => (error))
}

export function addFavoritesRequest(payload) {
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.post(BASE_URL+`favorites` ,payload ,{headers})
        .then( response => response)
        .catch((error) => (error))
}
