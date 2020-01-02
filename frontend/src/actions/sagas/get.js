
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

export default function* getSaga (payload) {
  try {
    let response = yield call(payload.getter, payload.args)
    yield put({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceType: payload.resourceType,
      requestKey: payload.requestKey,
      resources: response.resources,
      list: payload.list,
      requestProperties: {
        statusCode: response.status
      }
    })
  } catch (error) {
    yield put({
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceType: payload.resourceType,
      requestKey: payload.requestKey,
      list: payload.list,
      resources: payload.resources,
      requestProperties: {
        statusCode: error.status
      }
    }) 
  }
}



