
import * from '../../testData/users'

// /api/v1/users?search=<name>
function getUsersSearch(payload) {
  console.log('getting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() => res(
      getUser200
      // getUser401
    ), 1000)
  }
}

// /api/v1/users
function postUser(payload) {
  console.log('posting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() => res(
      postUser201
      // postUser403
    ), 1000)
  }
}

// /api/v1/users/<username>
function deleteUser(payload) {
  console.log('deleting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() => res(
      deleteUser204
      // deleteUser401
      // deleteUser404
    ), 1000)
  }
}
