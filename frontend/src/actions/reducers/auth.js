
import {
  READ_AUTH_TOKEN_PENDING,
  READ_AUTH_TOKEN_SUCCESS,
  READ_AUTH_TOKEN_FAILURE,
  LOGOUT
} from '../../globals/actionTypes'

function makeStatus(status) {
  return {
    idle: status === 'idle',
    pending: status === 'pending',
    failed: status === 'failed',
    succeeded: status === 'succeeded'
  }
}

const initialState = {
  isAuthenticated: false,
  username: null,
  auth_token: null,
  userid: null,
  statusCode: null,
  status: makeStatus('idle')
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case READ_AUTH_TOKEN_PENDING:
      return {
        ...state,
        statusCode: null,
        status: makeStatus('pending')
      }
    case READ_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        auth_token: action.payload.auth_token,
        userid: action.payload.userid,
        statusCode: action.payload.status,
        status: makeStatus('succeeded')
      }
    case READ_AUTH_TOKEN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        auth_token: null,
        userid: null,
        statusCode: action.payload.status,
        status: makeStatus('failed')
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
