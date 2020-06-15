import { GET_CATEGORIES, EDIT_CATEGORIES, ADD_CATEGORIES, DELETE_CATEGORIES } from '../../actions/admin';

export default function REDUCER_CATEGORIES(state = {categories:[]}, action) {
  const { payload } = action;
  const copy = state
  let categories_copy = copy.categories.slice(0);
  switch (action.type) {
    case GET_CATEGORIES:
      if(typeof action.payload === 'undefined' || typeof action.payload.payload === 'undefined'){
          return{...state}
      }
      return {
        ...state,
        categories: action.payload.payload.data,
      };
      case ADD_CATEGORIES:
      if( typeof payload.payload === 'undefined'){
        return {
          ...copy,
        }
      }
      categories_copy.unshift(payload.payload.data)
      copy.categories = categories_copy;
      return {
        ...copy,
      };
    case EDIT_CATEGORIES:
      if( typeof payload.payload === 'undefined'){
        return {
          ...copy,
        }
      }
      let index = categories_copy.findIndex(x => x.id ===payload.payload.data.id);
      categories_copy[index] = payload.payload.data;
      copy.categories = categories_copy;
      return {
        ...copy,
      };
    case DELETE_CATEGORIES:
      categories_copy = categories_copy.filter(function(item) { 
        return item.id !== action.payload.id; 
      });
      copy.categories = categories_copy;
      return {
        ...copy,
      };
    default:
      return state;
  }
}
