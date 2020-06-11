import getAdminProductsRequest, { addProductRequest } from './requests';
export const GET_ADMIN_PRODUCTS = 'GET_ADMIN_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';


function addProduct(payload) {
  return {
    type: ADD_PRODUCT,
    payload,
  };
}


export function handleAddProduct(payload){
  console.log(payload)
  return (dispatch) => addProductRequest(payload)
    .then(({ data }) => {
      dispatch(addProduct({ 'payload': data }));
    });
}

function getAdminProducts(payload) {
  return {
    type: GET_ADMIN_PRODUCTS,
    payload,
  };
}


export function handleAdminProducts(payload={}){
  console.log(payload)
  return (dispatch) => getAdminProductsRequest(payload.page, payload.page_size, payload.search)
    .then(({ data }) => {
      dispatch(getAdminProducts({ 'payload': data }));
    });
}
