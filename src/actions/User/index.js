import authenticateUserRequest from '../../utils/requests';

export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER_DATA = 'GET_USER_DATA';

function loginUser(payload) {
  return {
    type: LOGIN_USER,
    payload,
  };
}


export function handleLoginUser(payload) {
  return (dispatch) => authenticateUserRequest(payload.login, payload.password)
    .then(({ data }) => {
      dispatch(loginUser({ payload: data }));
    });
}
