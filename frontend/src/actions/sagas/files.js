
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

import {
  getFiles200,
//  getFiles401,
//  getFiles404,
  postFile201,
//  postFile401,
//  postFile404,
  deleteFile204,
//  deleteFile401,
//  deleteFile404
} from '../../testData/files'

export function* getFiles(request) {
  // const { userid, authToken } = request.args
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

export function* postFile(request) {
  // const { filename, path, type, userid, authToken } = request.args
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

export function* deleteFile(request) {
  // const { fileid, authToken } = request.args
  const fileid = request.args.fileid
  try {
    const res = yield call(deleteFile204)
    yield put({
      type: actionTypes.DELETE_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: [fileid],
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
