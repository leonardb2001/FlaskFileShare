
import { actionTypes } from 'redux-resource'
import { put, call, select } from 'redux-saga/effects'
import axios from 'axios'

import { DOMAIN } from '../../globals/constants'

export function* getUsers(request) {
  const { username, authToken } = request.args
  try {
    const res = yield call(
      axios.get,
      DOMAIN + '/test/users',
      {
        headers: {
          'Authorization': 'bearer ' + authToken
        },
        params: {
          username
        }
      }
    )
    yield put({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceType: 'users',
      requestKey: request.requestKey,
      resources: res.data,
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
  const { username, email, password } = request.args
  try {
    const res = yield call(
      axios.post,
      DOMAIN + '/test/users',
      {
        username,
        email,
        password
      }
    )
    yield put({
      type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
      resourceType: 'users',
      requestKey: request.requestKey,
      resources: [],
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
  const { userid, username, password } = request.args
  try {
    const res = yield call(
      axios.delete,
      DOMAIN + '/test/users/' + userid,
      {
        auth: {
          username,
          password
        }
      }
    )
    yield put({
      type: actionTypes.DELETE_RESOURCES_SUCCEEDED,
      resourceType: 'users',
      requestKey: request.requestKey,
      resources: [userid],
      requestProperties: {
        statusCode: res.status
      }
    })
    const userFiles = yield select(state => state.files.lists[userid])
    if (userFiles) {
      yield put({
        type: actionTypes.DELETE_RESOURCES,
        resources: {
          files: userFiles
        }
      })
    }
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
