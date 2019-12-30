
import { READ_AUTH_TOKEN_PENDING } from './actionTypes'

export function getAuthToken(username, password) {
  return {
    type: READ_AUTH_TOKEN_PENDING,
    args: {
      username,
      password
    }
  }
}

