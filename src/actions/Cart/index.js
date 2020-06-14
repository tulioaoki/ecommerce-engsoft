import authenticateUserRequest from '../../utils/requests';

export const GET_CART = 'GET_CART';

function getCart(payload) {
  return {
    type: GET_CART,
    payload,
  };
}


export function handleGetCart(payload) {
  return (dispatch) => fetchCart(payload)
    .then(({ data }) => {
      dispatch(getCart({ payload: data }));
    });
}
