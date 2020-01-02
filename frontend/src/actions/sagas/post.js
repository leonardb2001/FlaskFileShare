
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

export default function* postSaga (payload) {
  try {
    const { getter, resource, args } = payload
    const response = yield call(getter, resource, args)
    const newResource = {
      id: response.id,
      ...resource
    }
    yield put({
      type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
      resourceType: payload.resourceType,
      requestKey: payload.requestKey,
      resources: [newResource],
      list: payload.list,
      requestProperties: {
        statusCode: response.status
      }
    })
  } catch (error) {
    yield put({
      type: actionTypes.CREATE_RESOURCES_FAILED,
      resourceType: payload.resourceType,
      requestKey: payload.requestKey,
      requestProperties: {
        statusCode: error.status
      }
    })
  }
}
