
const makeResPromise = (data) => () =>
  new Promise((res, rej) => {
    setTimeout(() => res(data), 1000)
  })

const makeRejPromise = (data) => () =>
  new Promise((res, rej) => {
    setTimeout(() => rej(data), 1000)
  })

export const getAuthToken200 = makeResPromise({
  status: 200,
  payload: {
    username: 'tommy',
    auth_token: 'sdfjoafj98wao3jofiweovbnv0923h023voisdaokfnad'
  }
})

export const getAuthToken401 = makeRejPromise({
  status: 401
})
