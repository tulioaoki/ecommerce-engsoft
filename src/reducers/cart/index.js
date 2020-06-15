import { GET_CART } from '../../actions/cart';

export default function REDUCER_CART(state = {cart_products:[]}, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart_products: action.payload.payload.data,
      };
    default:
      return state;
  }
}
 