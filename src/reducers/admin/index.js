import { GET_ADMIN_PRODUCTS } from '../../actions/admin';

export default function REDUCER_ADMIN_PRODUCTS(state = {admin_products:[]}, action) {
  switch (action.type) {
    case GET_ADMIN_PRODUCTS:
      if(typeof action.payload === 'undefined'){
          return{...state}
      }
      return {
        ...state,
        admin_products: action.payload.payload.data,
      };
    default:
      return state;
  }
}
