
// /api/v1/auth_token
function getAuthToken(payload) {
  return new Promise((res, rej) => {
    setTimeout(() => res({
      status: 200,
      paylaod: {
        username: 'tommy',
        auth_token: 'sdfjoafj98wao3jofiweovbnv0923h023voisdaokfnad'
      }
    }), 1000)
  })
}
