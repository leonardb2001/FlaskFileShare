
import { takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'redux-resource'

import { getUsers, postUser, deleteUser } from './users'
import { getFiles, postFile, deleteFile } from './files'
import authTokenSaga from './auth'
import { READ_AUTH_TOKEN_PENDING } from '../../globals/actionTypes'

export default function* rootSaga() {
  yield takeEvery(READ_AUTH_TOKEN_PENDING, authTokenSaga)

  yield takeEvery((request) => (
    request.type === actionTypes.READ_RESOURCES_PENDING
    && request.resourceType === 'users'
  ), getUsers)

  yield takeEvery((request) => (
    request.type === actionTypes.READ_RESOURCES_PENDING
    && request.resourceType === 'files'
  ), getFiles)

  yield takeEvery((request) => (
    request.type === actionTypes.CREATE_RESOURCES_PENDING
    && request.resourceType === 'users'
  ), postUser)

  yield takeEvery((request) => (
    request.type === actionTypes.CREATE_RESOURCES_PENDING
    && request.resourceType === 'files'
  ), postFile)

  yield takeEvery((request) => (
    request.type === actionTypes.DELETE_RESOURCES_PENDING
    && request.resourceType === 'users'
  ), deleteUser)

  yield takeEvery((request) => (
    request.type === actionTypes.DELETE_RESOURCES_PENDING
    && request.resourceType === 'files'
  ), deleteFile)
}
