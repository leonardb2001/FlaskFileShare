
import { actionTypes } from 'redux-resource'
import { put, call } from 'redux-saga/effects'

export default function* deleteSaga (payload) {
  try {
    const { getter, resource, args } = payload
    const response = yield call(getter, resource, args)
    console.log('delete saga: ', response)
    yield put({
      type: actionTypes.DELETE_RESOURCES_SUCCEEDED,
      resourceType: payload.resourceType,
      requestKey: payload.requestKey,
      resources: [resource],
      requestProperties: {
        statusCode: response.status
      }
    })
  } catch (error) {
    yield put({
      type: actionTypes.DELETE_RESOURCES_FAILED,
      resourceType: payload.resourceType,
      requestKey: payload.requestKey,
      requestProperties: {
        statusCode: error.status
      }
    })
  }
}
