
import { actionTypes, getResources } from 'redux-resource'
import { put, call, select } from 'redux-saga/effects'
import axios from 'axios'

import { EXTEND_FILE_LIST, DELETE_FOLDER_RECURSIVELY } from '../../globals/actionTypes'

const DOMAIN = 'http://localhost:5000'

/**
 * getFiles:
 * - for every folder, create a list with its children
 * - create a list for the user with his/her fileids
 */
export function* getFiles(request) {
  const { userid, authToken } = request.args
  try {
    const response = yield call(
      axios.get,
      DOMAIN + '/test/files',
      {
        headers: {
          'Authorization': 'bearer ' + authToken
        },
        params: {
          userid
        }
      }
    )
    const resources = response.data
    let fileChildrenLists = {}
    for (const resource of resources) {
      if (resource.type === 'd') {
        fileChildrenLists[resource.id] = resource.children
        delete resource.children
      }
    }
    const userFileIds = resources.map(f => f.id)
    yield put({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: resources,
      list: request.list,
      requestProperties: {
        statusCode: response.status
      }
    })
    yield put({
      type: actionTypes.UPDATE_RESOURCES,
      lists: {
        files: {
          ...fileChildrenLists,
          [userid]: userFileIds
        }
      }
    })
  } catch (err) {
    yield put({
      type: actionTypes.READ_RESOURCES_FAILED,
      resourceType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}

/**
 * postFile:
 * - if inside a folder, add the fileid to the list of its children
 * - add the fileid to the list of the files of the user
 */
export function* postFile(request) {
  const { userid, filename, path, type, parentid, authToken } = request.args
  try {
    const res = yield call(
      axios.post,
      DOMAIN + '/test/files',
      {
        filename,
        path,
        type,
        parentid,
        userid
      },
      {
        headers: {
          'Authorization': 'bearer ' + authToken
        }
      }
    )
    console.log(res)
    const id = res.data.id
    const newResource = {
      id,
      name: filename,
      path,
      type
    }
    yield put({
      type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: [newResource],
      list: request.list,
      requestProperties: {
        statusCode: res.status
      }
    })
    yield put({
      type: EXTEND_FILE_LIST,
      payload: {
        listkey: parentid,
        files: [id]
      }
    })
    yield put({
      type: EXTEND_FILE_LIST,
      payload: {
        listkey: userid,
        files: [id]
      }
    })
  } catch (err) {
    yield put({
      type: actionTypes.CREATE_RESOURCES_FAILED,
      resourceType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}

/**
 * deleteFile:
 * - if it is a folder, delete its children recursively
 * (- delete the list with its children)
 */
export function* deleteFile(request) {
  const { fileid, authToken } = request.args
  try {
    const res = yield call(
      axios.delete,
      DOMAIN + '/test/files/' + fileid,
      {
        headers: {
          'Authorization': 'bearer ' + authToken
        }
      }
  )
    yield put({
      type: actionTypes.DELETE_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: [fileid],
      requestProperties: {
        statusCode: res.status
      }
    })
    yield put({
      type: DELETE_FOLDER_RECURSIVELY,
      payload: {
        id: fileid
      }
    })
  } catch (err) {
    yield put({
      type: actionTypes.DELETE_RESOURCES_FAILED,
      resourceType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}


export function* deleteFolderRecursively(request) {
  const { id } = request.payload
  // if id is folder:
  //    get the fileids
  //    for each file id dispatch DELETE_FOLDER_RECUSIVELY
  // dispatch DELETE_RESOURCES for the id
  const children = yield select(state => getResources(state.files, id))
  if (children) {
    for (const c of children) {
      yield put({
        type: DELETE_FOLDER_RECURSIVELY,
        payload: {
          id: c.id
        }
      })
    }
  }
  yield put({
    type: actionTypes.DELETE_RESOURCES,
    resources: {
      files: [id]
    }
  })

}
