
import { actionTypes } from 'redux-resource'

import { READ_AUTH_TOKEN_PENDING, LOGOUT } from './actionTypes'

export const getAuthToken = (username, password) => ({
  type: READ_AUTH_TOKEN_PENDING,
  args: {
    username,
    password
  }
})

export const logout = () => ({
  type: LOGOUT
})

export function getUsers(requestKey, list, username, authToken) {
  return {
    type: actionTypes.READ_RESOURCES_PENDING,
    resourceType: 'users',
    requestKey,
    list,
    args: {
      username,
      authToken
    }
  }
}

export function postUser(requestKey, list, username, email, password) {
  return {
    type: actionTypes.CREATE_RESOURCES_PENDING,
    resourceType: 'users',
    requestKey,
    list,
    args: {
      username,
      email,
      password
    }
  }
}

export function deleteUser(requestKey, userid, username, password) {
  return {
    type: actionTypes.DELETE_RESOURCES_PENDING,
    resourceType: 'users',
    requestKey,
    args: {
      userid,
      username,
      password
    }
  } 
}

export function getFiles(requestKey, list, userid, authToken) {
  return {
    type: actionTypes.READ_RESOURCES_PENDING,
    resourceType: 'files',
    requestKey,
    list,
    args: {
      userid,
      authToken
    }
  }
}

export function postFile(requestKey, list, userid, filename, path, type, parentid, authToken) {
  return {
    type: actionTypes.CREATE_RESOURCES_PENDING,
    resourceType: 'files',
    requestKey,
    list,
    args: {
      userid,
      filename,
      path,
      type,
      parentid,
      authToken
    }
  }
}

export function deleteFile(requestKey, fileid, authToken) {
  return {
    type: actionTypes.DELETE_RESOURCES_PENDING,
    resourceType: 'files',
    requestKey,
    args: {
      fileid,
      authToken
    }
  }
}
