
import * as T from '../../testData/users'

// /api/v1/users?search=<name>
export function getUsersSearch(payload) {
  console.log('getting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() => 
      res(
        T.getUser200
      // rej (
      //   T.getUser401
      ), 1000)
  })
}

// /api/v1/users
export function postUser(payload) {
  console.log('posting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() =>
      res(
        T.postUser201
      // rej(
      //   T.postUser403
    ), 1000)
  })
}

// /api/v1/users/<username>
export function deleteUser(payload) {
  console.log('deleting user: ', payload)
  return new Promise((res, rej) => {
    setTimeout(() =>
      res(
        T.deleteUser204
      // rej(
      //   T.deleteUser401
      //   T.deleteUser404
    ), 1000)
  })
}
