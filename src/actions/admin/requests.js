import {BASE_URL} from '../../utils/requests';
import axios from 'axios';
// Exemplo de login
export default function getAdminProductsRequest(page=1, page_size=10, search=null) {
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar ! Isto deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }
    let url = BASE_URL+`products?page_size=${page_size}&page=${page}`;
    if(search){
        url = url+`&search=${search}`;
    }
    return axios.get(url ,{headers})
        .then(response => response)
        .catch((error) =>  (error))
}

export function getCategoriesRequest() {
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar ! Isto deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }
    let url = BASE_URL+`categories`;
    return axios.get(url ,{headers})
        .then(response => response)
        .catch((error) =>  (error))
}


export function addProductRequest(payload) {
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar ! Isto deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }
    let url = BASE_URL+`products`;
    return axios.post(url,payload ,{headers})
        .then(response => response)
        .catch((error) =>  error)
}


export function addCategoriesRequest(payload) {
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar ! Isto deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }
    let url = BASE_URL+`categories`;
    return axios.post(url,payload ,{headers})
        .then(response => response)
        .catch((error) =>  error)
}

export function editCategoriesRequest(payload) {
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar ! Isto deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }
    let url = BASE_URL+`categories/${payload.id}`;
    return axios.put(url,payload ,{headers})
        .then(response => response)
        .catch((error) =>  error)
}

export function deleteCategoriesRequest(payload) {
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar ! Isto deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }
    let url = BASE_URL+`categories/${payload.id}`;
    return axios.delete(url,payload ,{headers})
        .then(response => response)
        .catch((error) =>  error)
}


export function editProductRequest(payload) {
    localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar ! Isto deve ser setado no login
    let headers = {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`, //deve ser passa
    }
    let url = BASE_URL+`products/${payload.id}`;
    return axios.put(url,payload ,{headers})
        .then(response => response)
        .catch((error) =>  error)
}

