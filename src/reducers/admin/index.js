import { GET_ADMIN_PRODUCTS, ADD_PRODUCT } from '../../actions/admin';

export default function REDUCER_ADMIN_PRODUCTS(state = {admin_products:[]}, action) {
  const { payload } = action;
  const copy = state
  switch (action.type) {
    case GET_ADMIN_PRODUCTS:
      if(typeof action.payload === 'undefined' || typeof action.payload.payload === 'undefined'){
          return{...state}
      }
      return {
        ...state,
        admin_products: action.payload.payload.data,
      };
    case ADD_PRODUCT:
      copy.admin_products.push(payload)
      return {
        ...copy,
      };
    default:
      return state;
  }
}
