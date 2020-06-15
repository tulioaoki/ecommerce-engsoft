import getAdminProductsRequest, { addProductRequest, getCategoriesRequest, editProductRequest, editCategoriesRequest ,addCategoriesRequest } from './requests';
export const GET_ADMIN_PRODUCTS = 'GET_ADMIN_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_CATEGORIES = 'ADD_CATEGORIES';
export const EDIT_CATEGORIES = 'EDIT_CATEGORIES';



function getCategories(payload) {
  return {
    type: GET_CATEGORIES,
    payload,
  };
}


export function handleGetAllCategories(){
  return (dispatch) => getCategoriesRequest()
    .then(({ data }) => {
      dispatch(getCategories({ 'payload': data }));
    });
}

function addCategories(payload) {
  return {
    type: ADD_CATEGORIES,
    payload,
  };
}


export function handleAddCategories(payload){
  return (dispatch) => addCategoriesRequest(payload)
    .then(({ data }) => {
      dispatch(addCategories({ 'payload': data }));
    });
}

function editCategories(payload) {
  return {
    type: EDIT_CATEGORIES,
    payload,
  };
}


export function handleEditCategories(payload){
  return (dispatch) => editCategoriesRequest(payload)
    .then(({ data }) => {
      dispatch(editCategories({ 'payload': data }));
    });
}




function addProduct(payload) {
  return {
    type: ADD_PRODUCT,
    payload,
  };
}


export function handleAddProduct(payload){
  return (dispatch) => addProductRequest(payload)
    .then(({ data }) => {
      dispatch(addProduct({ 'payload': data }));
      if(typeof data !== 'undefined' && data.success){
        return data.data
      }
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

function editProduct(payload) {
  return {
    type: EDIT_PRODUCT,
    payload,
  };
}


export function handleEditProduct(payload){
  return (dispatch) => editProductRequest(payload)
    .then(({ data }) => {
      dispatch(editProduct({ 'payload': data }));
      if(typeof data !== 'undefined' && data.success){
        return data.data
      }
    });
}