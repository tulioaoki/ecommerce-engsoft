import { GET_CART, ADD_TO_CART, DELETE_FROM_CART,EDIT_CART } from '../../actions/cart';

export default function REDUCER_CART(state = { cart_products: [] }, action) {
  let copy = Object.assign({}, state);
  let cartproducts_copy = state.cart_products.slice(0);
  switch (action.type) {
    case GET_CART:
      if (typeof action.payload.payload === 'undefined') {
        return {
          ...copy
        }
      }
      return {
        ...state,
        cart_products: action.payload.payload.data,
      };
    case ADD_TO_CART:
      if (typeof action.payload.payload === 'undefined') {
        return {
          ...copy
        }
      }

      cartproducts_copy.push(action.payload.payload)
      copy.cart_products = action.payload.payload.data;
      return {
        ...copy,
        // cart_products: action.payload.payload.data,
      };
    case DELETE_FROM_CART:
      if (typeof action.payload === 'undefined') {
        return {
          ...copy,
        }
      }
      copy.cart_products = copy.cart_products.filter(value => value.id !== action.payload.id)
      return {
        ...copy
      };
    case EDIT_CART:
      if (typeof action.payload === 'undefined') {
        return {
          ...copy,
        }
      }
      copy.cart_products = cartproducts_copy.map(value=>{
        if(value.id === action.payload.id){
          return action.payload
        }else{
          return value
        }
      });
      return {
        ...copy
      };
    default:
      return state;
  }
}

