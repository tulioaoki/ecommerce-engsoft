const BASE_URL = 'http://localhost:8000/';
// Exemplo de login
export default function authenticateUserRequest(login, password) {
  const body = {
    login,
    password,
  };
  const hdrs = {
    method: 'POST',
    body,
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
    }),
  };
  return Promise.all(
    [
      fetch(`${BASE_URL}login/`, hdrs).then((res) => res.json()).catch(() => ([])),
    ],
  )
    .then(([data]) => ({
      data,
    }))
    .catch((err) => {
      console.error(err);
      return null;
    });
}
