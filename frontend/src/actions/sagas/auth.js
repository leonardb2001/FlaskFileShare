
import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import { READ_AUTH_TOKEN_SUCCESS, READ_AUTH_TOKEN_FAILURE } from '../../globals/actionTypes'

import { DOMAIN } from '../../globals/constants'

export default function* authToken(request) {
  const { username, password } = request.args
  try {
    let response = yield call(axios.get,
      DOMAIN + '/test/auth_token',
      {
        auth: {
          username: unescape(encodeURIComponent(username)), // btoa(unescape(encodeURIComponent(username))), // https://github.com/axios/axios/issues/1446
          password: unescape(encodeURIComponent(password)) //btoa(unescape(encodeURIComponent(password))) // https://github.com/axios/axios/issues/1446
        }
      }
    )
    yield put({
      type: READ_AUTH_TOKEN_SUCCESS,
      payload: {
        username: response.data.username,
        auth_token: response.data.auth_token,
        userid: response.data.userid,
        statusCode: response.status
      }
    })
  } catch (error) {
    const status = (error.response || {}).status
    yield put({
      type: READ_AUTH_TOKEN_FAILURE,
      payload: {
        statusCode: status || null
      }
    })
  }
}
