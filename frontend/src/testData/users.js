
const makeResPromise = (data) => () =>
  new Promise((res, rej) => {
    setTimeout(() => res(data), 1000)
  })

const makeRejPromise = (data) => () =>
  new Promise((res, rej) => {
    setTimeout(() => rej(data), 1000)
  })


export const getUser200 = makeResPromise({
  status: 200,
  resources: [
    {
      id: '9e32f25dab6c4d7f8bd54a4bfba9ccd9',
      username: 'tommy',
      email: 'tommy@gmail.com'
    },
    {
      id: 'a562b2f7d5584499bd87b724ba534940',
      username: 'anna',
      email: 'ana-jason@web.de'
    },
    {
      id: '25c429337a2f4b8ca7476f9cd2724f88',
      username: 'golden_dragon',
      email: 'kevin.steinke.1996@gmx.de'
    },
    {
      id: '06034d5db6f14ed98758e477d34487a6',
      username: 'frankchicken',
      email: 'frankfrankfrank@t-online.de'
    }
  ]
})

export const getUser401 = makeRejPromise({
  status: 401
})

export const postUser201 = makeResPromise({
  status: 201,
  id: 'e09a7424486e46a0922705e6ea4404fa'
})

export const postUser403 = makeRejPromise({
  status: 403
})

export const deleteUser204 = makeResPromise({
  status: 204
})

export const deleteUser401 = makeRejPromise({
  status: 401
})

export const deleteUser404 = makeRejPromise({
  status: 404
})
