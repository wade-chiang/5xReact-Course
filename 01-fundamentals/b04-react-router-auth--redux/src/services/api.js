/*
type ApiLoginResponse = {
  status: 'ok' | 'error',
  accessToken: string,
  user: User,
};
*/
export const apiLogin = (email, password) => {
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res.statusText));
  });
};
