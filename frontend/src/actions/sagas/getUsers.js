
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

import { getUser200, getUser401 } from '../../testData/users'


export default function* getUser(request) {
  const { username, authToken } = request.args
  try {
    const res = yield call(getUser200)
    yield put({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
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
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceType: 'users',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}
