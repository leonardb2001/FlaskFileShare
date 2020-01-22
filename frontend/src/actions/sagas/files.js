
import { actionTypes, getResources } from 'redux-resource'
import { put, call, select } from 'redux-saga/effects'
import axios from 'axios'

import { EXTEND_FILE_LIST, DELETE_FOLDER_RECURSIVELY } from '../../globals/actionTypes'

import { DOMAIN } from '../../globals/constants'

/**
 * getFiles:
 * - for every folder, create a list with its children
 * - create a list for the user with his/her fileids
 */
export function* getFiles(request) {
  const { userid, authToken } = request.args
  try {
    const response = yield call(
      axios.get,
      DOMAIN + '/test/files',
      {
        headers: {
          'Authorization': 'bearer ' + authToken
        },
        params: {
          userid
        }
      }
    )
    yield put({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: response.data,
      list: request.list,
      requestProperties: {
        statusCode: response.status
      }
    })
  } catch (err) {
    const status = (err.response || {}).status
    yield put({
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: status || null
      }
    })
  }
}

/**
 * postFile:
 * - if inside a folder, add the fileid to the list of its children
 * - add the fileid to the list of the files of the user
 */
export function* postFile(request) {
  const { userid, filename, path, type, parentid, authToken } = request.args
  try {
    const res = yield call(
      axios.post,
      DOMAIN + '/test/files',
      {
        filename,
        path,
        type,
        parentid,
        userid
      },
      {
        headers: {
          'Authorization': 'bearer ' + authToken
        }
      }
    )
    yield put({
      type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: [],
      list: request.list,
      requestProperties: {
        statusCode: res.status
      }
    })
    // TODO: fetch new files from server
  } catch (err) {
    const status = (err.response || {}).status
    yield put({
      type: actionTypes.CREATE_RESOURCES_FAILED,
      resourceType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: status || null
      }
    })
  }
}

/**
 * deleteFile:
 * - if it is a folder, delete its children recursively
 * (- delete the list with its children)
 */
export function* deleteFile(request) {
  const { fileid, authToken } = request.args
  try {
    const res = yield call(
      axios.delete,
      DOMAIN + '/test/files/' + fileid,
      {
        headers: {
          'Authorization': 'bearer ' + authToken
        }
      }
    )
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
    const status = (err.response || {}).status
    yield put({
      type: actionTypes.DELETE_RESOURCES_FAILED,
      resourceType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: status || null
      }
    })
  }
}
