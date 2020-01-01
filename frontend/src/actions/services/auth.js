
// /api/v1/auth_token
export function getAuthToken(payload) {
  return new Promise((res, rej) => {
    setTimeout(() => res({
//      status: 401,
      status: 200,
      payload: {
        username: 'tommy',
        auth_token: 'sdfjoafj98wao3jofiweovbnv0923h023voisdaokfnad'
      }
    }), 1000)
  })
}
