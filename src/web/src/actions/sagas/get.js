
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

export default function* getSaga (payload) {
  try {
    let response = yield call(payload.getter, payload.args)
    if (response.status === 401 || response.status === 404) {
      throw Object.assign(
        new Error(),
        { status: response.status }
      );
    } else if (response.status === 200) {
      yield put({
        type: actionTypes.READ_RESOURCES_SUCCEEDED,
        resourceType: payload.resourceType,
        requestKey: payload.requestKey,
        resources: response.resources,
        list: payload.list
      })
    } else {
      alert("Unexpected API status code ")
    }
  } catch (error) {
    // for additional processing of error statuses
    // use the reducers
    yield put({
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceType: payload.resourceType,
      requestKey: payload.requestKey,
      list: payload.list,
      resources: payload.resources,
      requestProperties: {
        status: error.status
      }
    }) 
  }
}



