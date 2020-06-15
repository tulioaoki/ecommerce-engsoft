import {getCartRequest,addToCartRequest} from './requests';

export const GET_CART = 'GET_CART';
export const ADD_TO_CART = 'GET_CART';

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


export function handleGetCart(){
  return (dispatch) => getCartRequest()
    .then(({ data }) => {
      dispatch(getCart({ 'payload': data }));
    });
}

export function handleAddToCart(id,qtd){
  console.log('adding to cart')
  return (dispatch) => addToCartRequest(id,qtd)
    .then(({ data }) => {
      dispatch(addToCart({ 'payload': data }));
  });
}
