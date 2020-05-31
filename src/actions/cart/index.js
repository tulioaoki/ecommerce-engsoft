import getCartRequest from './requests';

export const GET_CART = 'GET_CART';

function getCart(payload) {
  return {
    type: GET_CART,
    payload,
  };
}


export function handleGetCart(){
  return (dispatch) => getCartRequest()
    .then(({ data }) => {
      dispatch(getCart({ 'payload': data }));
    });
}
