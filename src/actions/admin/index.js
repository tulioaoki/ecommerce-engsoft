import getAdminProductsRequest from './requests';
export const GET_ADMIN_PRODUCTS = 'GET_ADMIN_PRODUCTS';

function getAdminProducts(payload) {
  return {
    type: GET_ADMIN_PRODUCTS,
    payload,
  };
}


export function handleAdminProducts(payload={}){
  return (dispatch) => getAdminProductsRequest(payload.page, payload.itemCount, payload.search)
    .then(({ data }) => {
      dispatch(getAdminProducts({ 'payload': data }));
    });
}
