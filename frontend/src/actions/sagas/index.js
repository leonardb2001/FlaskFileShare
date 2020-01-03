
import { takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'redux-resource'

import getUsers from './getUsers'
import postUser from './postUser'
import deleteUser from './deleteUser'
import getFiles from './getFiles'
import postFile from './postFile'
import deleteFile from './deleteFile'

import authTokenSaga from './auth'
import { READ_AUTH_TOKEN_PENDING } from '../../globals/actionTypes'

export default function* rootSaga() {
  yield takeEvery(READ_AUTH_TOKEN_PENDING, authTokenSaga)
}


function* helpSaga(request) {
  
}

