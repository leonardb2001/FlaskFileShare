
import { actionTypes } from 'redux-resource'
import { put, call, select } from 'redux-saga/effects'

import {
  getFiles200,
//  getFiles401,
//  getFiles404,
  postFile201,
//  postFile401,
//  postFile404,
  deleteFile204,
//  deleteFile401,
//  deleteFile404
} from '../../testData/files'

function getFileId(userid, fileid) {
  return `${userid}.${fileid}`
}

/**
 * getFiles:
 * - create unique file ids with '<userid>.<fileid>'
 * - for every folder, create a list with its children
 * - create a list for the user with his/her fileids
 */
export function* getFiles(request) {
  // const { userid, authToken } = request.args
  const userid = request.args.userid
  try {
    const res = yield call(getFiles200)
    let fileChildrenLists = {}
    for (const resource of res.resources) {
      resource.id = getFileId(userid, resource.id)
      if (resource.type == 'd') {
        fileChildrenLists[resource.id] = resource.children
        delete resource.children
      }
    }
    const userFileIds = res.resources.map(f => f.id)
    yield put({
      type: actionTypes.READ_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: res.resources,
      list: request.list,
      requestProperties: {
        statusCode: res.status
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
 * - generate the new unique fileid
 * - if inside a folder, add the fileid to the list of its children
 * - add the fileid to the list of the files of the user
 */
export function* postFile(request) {
  // const { filename, path, type, userid, parentid, authToken } = request.args
  //                                       ========= new
  const { userid, parentid } = request.args
  try {
    const res = yield call(postFile201)
    res.resource.id = getFileId(userid, res.resource.id)
    yield put({
      type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: [res.resource],
      list: request.list,
      requestProperties: {
        statusCode: res.status
      }
    })
    const lists = {}
    if (parentid) {
      const parentChildren = yield select(state => 
        state.files.lists[parentid])
      lists[parentid] = parentChildren.concat([res.resource.id])
    }
    const userFiles = yield select(state =>
      state.files.lists[userid] || [])
    lists[userid] = userFiles.concat([res.resource.id])
    yield put({
      type: actionTypes.UPDATE_RESOURCES,
      lists: {
        files: lists
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
 * - if it is a folder, for all its children, dispatch a DELETE_RESOURCES action
 * (- delete the list with its children)
 */
export function* deleteFile(request) {
  // const { fileid, userid, authToken } = request.args
  const fileid = request.args.fileid
  try {
    const res = yield call(deleteFile204)
    yield put({
      type: actionTypes.DELETE_RESOURCES_SUCCEEDED,
      resourceType: 'files',
      requestKey: request.requestKey,
      resources: [fileid],
      requestProperties: {
        statusCode: res.status
      }
    })
  } catch (err) {
    yield put({
      type: actionTypes.DELETE_RESOURCES_FAILED,
      resourcesType: 'files',
      requestKey: request.requestKey,
      requestProperties: {
        statusCode: err.status
      }
    })
  }
}
