import {BASE_URL} from '../../utils/requests';
import axios from 'axios';
// Exemplo de login
export function getCartRequest() {
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar, deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.get(BASE_URL+'cart' , {headers})
        .then( response => response)
        .catch((error) => (error))
}

export function addToCartRequest(id,qtd) {
    console.log('hi')
    const payload = {
        product:id,
        quantity:parseInt(qtd)
    }
    console.log('trying with')
    console.log(payload)
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar, deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }    
    return axios.post(BASE_URL+`cart` ,payload ,{headers})
        .then( response => response)
        .catch((error) => (error))
}
