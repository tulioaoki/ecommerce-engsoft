import { GET_ADMIN_PRODUCTS, ADD_PRODUCT } from '../../actions/admin';

export default function REDUCER_ADMIN_PRODUCTS(state = {admin_products:[]}, action) {
  const { payload } = action;
  let products = state.admin_products.slice(0);
  let copy = Object.assign({}, state);
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
      if( typeof payload.payload === 'undefined'){
        return {
          ...copy,
        }
      }
      products.unshift(payload.payload.data)
      products = products.slice(0,10)
      copy.admin_products = products;
      return {
        ...copy,
      };
    default:
      return state;
  }
}
