
import * as T from '../../testData/users'

// /api/v1/users?search=<name>
export function getUsersSearch(payload) {
  console.log('getting user service: ', payload)
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
export function postUser(resource, args) {
  console.log('posting user service: ', resource, args)
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
export function deleteUser(resource, args) {
  console.log('delete user service : ', resource, args)
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
