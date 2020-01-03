
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

import { deleteUser204, deleteUser401, deleteUser404 } from '../../testData/users'

export default function* deleteUser(request) {
  const { userid, authToken } = request.args
  try {
    const res = yield call(deleteUser204)
    yield put({
      type: actionTypes.DELETE_RESOURCES_SUCCEEDED,
      resourceType: 'users',
      requestKey: request.requestKey,
      resources: [id],
      requestProperties: {
        statusCode: res.status
      }
    })
  } catch (err) {
    yield put({
      type: actionTypes.DELETE_RESOURCES_FAILED,
      resourceType: 'users',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}
