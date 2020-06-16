import { getCartRequest, addToCartRequest, deleteFromCartRequest,updateCartRequest } from './requests';

export const GET_CART = 'GET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const EDIT_CART = 'EDIT_CART';

function getCart(payload) {
  return {
    type: GET_CART,
    payload,
  };
}

function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}

function deleteFromCart(payload) {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
}

function editCart(payload) {
  return {
    type: EDIT_CART,
    payload,
  };
}

export function handleGetCart() {
  return (dispatch) => getCartRequest()
    .then(({ data }) => {
      dispatch(getCart({ 'payload': data }));
    });
}

export function handleAddToCart(id, qtd) {
  console.log('adding to cart')
  return (dispatch) => addToCartRequest(id, qtd)
    .then(({ data }) => {
      dispatch(addToCart({ 'payload': data }));
    });
}


export function handleDeleteFromCart(payload) {
  return (dispatch) => deleteFromCartRequest(payload)
    .then(({ data }) => {
      dispatch(deleteFromCart(payload));
    });
}

export function handleEditCart(payload) {
  return (dispatch) => updateCartRequest(payload)
    .then(({ data }) => {
      dispatch(editCart({'payload':data}));
    });
}