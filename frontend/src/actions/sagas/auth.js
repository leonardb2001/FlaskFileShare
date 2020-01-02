
import { put, call } from 'redux-saga/effects'

import { getAuthToken } from '../services/auth'
import { READ_AUTH_TOKEN_SUCCESS, READ_AUTH_TOKEN_FAILURE } from '../../globals/actionTypes'

export default function* authToken(payload) {
  try {
    let response = yield call(getAuthToken, payload.args)
    yield put({
      type: READ_AUTH_TOKEN_SUCCESS,
      payload: {
        ...response.payload,
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
