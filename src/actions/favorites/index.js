import getFavoritesRequest, { addFavoritesRequest, deleteFavoritesRequest } from './requests';

export const GET_FAVORITES = 'GET_FAVORITES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITES = 'DELETE_FAVORITES';

function getFavorites(payload) {
  return {
    type: GET_FAVORITES,
    payload,
  };
}


export function handleGetFavorites(){
  return (dispatch) => getFavoritesRequest()
    .then(({ data }) => {
      dispatch(getFavorites({ 'payload': data }));
    });
}

function addFavorites(payload) {
  return {
    type: ADD_FAVORITES,
    payload,
  };
}


export function handleAddFavorites(payload){
  return (dispatch) => addFavoritesRequest(payload)
    .then(({ data }) => {
      dispatch(addFavorites({ 'payload': data }));
  });
}

function deleteFavorites(payload) {
    return {
      type: DELETE_FAVORITES,
      payload,
  };
}

export function handleDeleteFavorites(payload){
  return (dispatch) => deleteFavoritesRequest(payload)
    .then(({ data }) => {
      dispatch(deleteFavorites({ 'payload': data }));
  });
}