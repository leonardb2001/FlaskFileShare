
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

import { postFile201, postFile401, postFile404 } from '../../testData/files'

export default function* postFile(request) {
  const { filename, path, type, userid, authToken } = request.args
  try {
    const res = yield call(postFile201)
    yield put({
      type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
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
      type: actionTypes.CREATE_RESOURCES_FAILED,
      resourceType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}
