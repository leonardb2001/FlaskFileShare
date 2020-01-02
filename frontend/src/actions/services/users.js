
import * as T from '../../testData/users'

// /api/v1/users?search=<name>
export function getUsersSearch(payload) {
  console.log('getting user service: ', payload)
  return T.getUser200()
  // return T.getUser401()
}

// /api/v1/users
export function postUser(resource, args) {
  console.log('posting user service: ', resource, args)
  return T.postUser201()
  // return T.postUser403()
}

// /api/v1/users/<username>
export function deleteUser(resource, args) {
  console.log('delete user service : ', resource, args)
  return T.deleteUser204()
  // return T.deleteUser401()
  // return T.deleteUser404()
}
