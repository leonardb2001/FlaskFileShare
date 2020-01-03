
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

import { postUser201, postUser403 } from '../../testData/users'

export default function* postUser(request) {
  try {
    const { username, email, password } = request.args
    const res = yield call(postUser201)
    yield put({
      type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
      resourceType: 'users',
      requestKey: request.requestKey,
      resources: res.resources,
      list: request.list,
      requestProperties: {
        statusCode: res.status
      }
    })
  } catch (err) {
    yield put({
      type: actionTypes.CREATE_RESOURCES_FAILED,
      resourceType: 'users',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}
