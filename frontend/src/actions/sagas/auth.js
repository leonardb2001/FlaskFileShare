
import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import { READ_AUTH_TOKEN_SUCCESS, READ_AUTH_TOKEN_FAILURE } from '../../globals/actionTypes'

const DOMAIN = 'http://localhost:5000'

export default function* authToken(payload) {
  try {
    let response = yield call(axios.get, DOMAIN + '/test/auth_token', {
      auth: {
        username: 'tommy',
        password: 'password123'
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
