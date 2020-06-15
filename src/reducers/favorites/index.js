import { GET_FAVORITES, ADD_FAVORITES, DELETE_FAVORITES } from '../../actions/favorites';

export default function REDUCER_FAVORITES(state = {favorites:[]}, action) {
  const { payload } = action;
  let copy = Object.assign({}, state);
  let favorites_copy = state.favorites.slice(0);
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload.payload.data,
      };
    case ADD_FAVORITES:
      if( typeof payload.payload === 'undefined'){
        return {
          ...copy,
        }
      }
      //favorites_copy.push(payload.payload.data)
      return {
        ...copy,
        favorites: action.payload.payload.data,
      };
    case DELETE_FAVORITES:
      if( typeof payload.payload === 'undefined'){
        return {
          ...copy,
        }
      }
      return {
        ...copy,
        favorites: action.payload.payload.data,
      };
    default:
      return state;
  }
}
 