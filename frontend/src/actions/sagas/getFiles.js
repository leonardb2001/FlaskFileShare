
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

import { getFiles200, getFiles401, getFiles404 } from '../../testData/files'

export default function* getFiles(request) {
  try {
    const res = yield call(getFiles200)
    yield put({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceType: 'files',
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
      resourceType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}
