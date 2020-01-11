
import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import { READ_AUTH_TOKEN_SUCCESS, READ_AUTH_TOKEN_FAILURE } from '../../globals/actionTypes'

import { DOMAIN } from '../../globals/constants'

export default function* authToken(request) {
  const { username, password } = request.args
  try {
    let response = yield call(axios.get, DOMAIN + '/test/auth_token', {
      auth: {
        username,
        password
      }
    })
    yield put({
      type: READ_AUTH_TOKEN_SUCCESS,
      payload: {
        username: response.data.username,
        auth_token: response.data.auth_token,
        userid: response.data.userid,
        status: response.status
      }
    })
  } catch (error) {
    yield put({
      type: READ_AUTH_TOKEN_FAILURE,
      payload: {
        status: error.status
      }
    })
  }
}
