
import * as T from '../../testData/files'

// /api/v1/users/<userid>/files
export function getFiles(payload) {
  console.log('getting files: ', payload)
  return T.getFiles200()
  // return T.getFiles401()
  // return T.getFiles404()
}

// /api/v1/users/<userid>/files
export function postFile(resource) {
  console.log('posting file: ', resource)
  return T.postFile201()
  // return T.postFile401()
  // return T.postFile404()
}

// /api/v1/users/<userid>/files/<file-id>
export function deleteFile(resource) {
  console.log('deleting file: ', resource)
  return T.deleteFile204()
  // return T.deleteFile401()
  // return T.deleteFile404()
}
