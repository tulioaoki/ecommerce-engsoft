import { GET_CATEGORIES } from '../../actions/admin';

export default function REDUCER_CATEGORIES(state = {categories:[]}, action) {
  const { payload } = action;
  const copy = state
  switch (action.type) {
    case GET_CATEGORIES:
      if(typeof action.payload === 'undefined' || typeof action.payload.payload === 'undefined'){
          return{...state}
      }
      return {
        ...state,
        categories: action.payload.payload.data,
      };
    default:
      return state;
  }
}
