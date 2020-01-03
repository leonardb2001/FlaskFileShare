
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

import { deleteFile204, deleteFile401, deleteFile404 } from '../../testData/files'

export default function* deleteFile(request) {
  const { fileid, authToken } = request.args
  try {
    const res = yield call(deleteFile204)
    yield put({
      type: actionTypes.DELETE_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: [id],
      requestProperties: {
        statusCode: res.status
      }
    })
  } catch (err) {
    yield put({
      type: actionTypes.DELETE_RESOURCES_FAILED,
      resourcesType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}
