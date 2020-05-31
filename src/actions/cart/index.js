import getCartRequest from './requests';

export const GET_CART = 'GET_CART';

function getCart(payload) {
  return {
    type: GET_CART,
    payload,
  };
}


export function handleGetCart(payload){
  return (dispatch) => getCartRequest(payload)
    .then(({ data }) => {
      dispatch(getCart({ payload: data }));
    });
}
