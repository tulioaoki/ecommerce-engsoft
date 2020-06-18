import {BASE_URL} from '../../utils/requests';
import axios from 'axios';
// Exemplo de login
export function getCartRequest() {
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.get(`${BASE_URL}cart`, {headers})
        .then( response => response)
        .catch((error) => (error))
}

export function addToCartRequest(id,qtd) {
    const payload = {
        product:id,
        quantity:parseInt(qtd)
    }
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.post(BASE_URL+`cart` ,payload ,{headers})
        .then(response => response)
        .catch((error) => (error))
}


export function deleteFromCartRequest(payload) {
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.delete(BASE_URL+`cart/${payload.id}` , {headers})
        .then( response => response)
        .catch((error) => (error))
}

export function updateCartRequest(payload) {
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.put(BASE_URL+`cart/${payload.id}` ,payload, {headers})
        .then( response => response)
        .catch((error) => (error))
}