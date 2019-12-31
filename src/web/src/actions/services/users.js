
// /api/v1/users?search=<name>
function getUsersSearch(payload) {
  console.log('getting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() => res({
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
    }), 1000)
  }
}

// /api/v1/users
function postUser(payload) {
  console.log('posting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() => res({
      status: 201,
      resources: [
        {
          id: 'e09a7424486e46a0922705e6ea4404fa',
          username: 'new_registered_user',
          email: 'new@email.com'
        }
      ]
    }), 1000)
  }
}

// /api/v1/users/<username>
function deleteUser(payload) {
  console.log('deleting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() => res({
      status: 204,
      resources: ['9e32f25dab6c4d7f8bd54a4bfba9ccd9']
    }), 1000)
  }
}
