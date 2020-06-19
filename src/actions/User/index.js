import {authenticateUserRequest, registerUserRequest} from '../../utils/requests';

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
      return data
    }).catch(undefined);
}


export function handleRegisterUser(payload) {
  return (dispatch) => registerUserRequest(payload.newLogin, payload.newPassword)
    .then(({ data }) => {
      dispatch(loginUser({ payload: data }));
      return data
    }).catch(undefined);
}
