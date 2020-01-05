
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

import {
  getUser200,
//  getUser401,
  postUser201,
//  postUser403,
  deleteUser204,
//  deleteUser401,
//  deleteUser404
} from '../../testData/users'


export function* getUsers(request) {
  // const { username, authToken } = request.args
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

export function* postUser(request) {
  // const { username, email, password } = request.args
  try {
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


/**
 * deleteUser:
 * - for all files of the user DELETE_RESOURCES synchronously
 * (- delete the file list of that user)
 */
export function* deleteUser(request) {
  // const { userid, authToken } = request.args
  const userid = request.args.userid
  try {
    const res = yield call(deleteUser204)
    yield put({
      type: actionTypes.DELETE_RESOURCES_SUCCEEDED,
      resourceType: 'users',
      requestKey: request.requestKey,
      resources: [userid],
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
