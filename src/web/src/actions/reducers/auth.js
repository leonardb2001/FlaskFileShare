

import {
  READ_AUTH_TOKEN_PENDING,
  READ_AUTH_TOKEN_SUCCESS,
  READ_AUTH_TOKEN_FAILURE
} from '../../globals/actionTypes'

const initialState = {
  isAuthenticated: false,
  username: null,
  auth_token: null,
  loading: false
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case READ_AUTH_TOKEN_PENDING:
      return {
        ...state,
        loading: true
      }
    case READ_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        auth_token: action.payload.auth_token,
        loading: false
      }
    case READ_AUTH_TOKEN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        auth_token: null,
        loading: false
      }
    default:
      return state
  }
}
