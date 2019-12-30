
import { takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'redux-resource'

import getSaga from './get'
import postSaga from './post'
import deleteSaga from './delete'
import authTokenSaga from './auth'
import { READ_AUTH_TOKEN_PENDING } from '../../globals/actionTypes'

export default function* rootSaga() {
  yield takeEvery(actionTypes.READ_RESOURCES_PENDING, getSaga)
  yield takeEvery(actionTypes.CREATE_RESOURCE_PENDING, postSaga)
  yield takeEvery(actionTypes.DELETE_RESOURCE_PENDING, deleteSaga)
  yield takeEvery(READ_AUTH_TOKEN_PENDING, authTokenSaga)
}
