
import { put, call } from 'redux-saga/effects'

import { getAuthToken } from '../services/auth'
import { READ_AUTH_TOKEN_SUCCESS, READ_AUTH_TOKEN_FAILURE } from '../../globals/actionTypes'

export default function* authToken(payload) {
  try {
    let response = yield call(getAuthToken, payload.args)
    if (response.status === 401 || response.status === 404) {
      throw Object.assign(
        new Error(),
        { status: response.status }
      );
    } else if (response.status === 200) {
      yield put({
        type: READ_AUTH_TOKEN_SUCCESS,
        payload: {
          ...response.payload,
          status: response.status
        }
      })
    } else {
      alert("Unexpected API status code ")
    }
  } catch (error) {
    yield put({
      type: READ_AUTH_TOKEN_FAILURE,
      payload: {
        status: error.status
      }
    })
  }
}
