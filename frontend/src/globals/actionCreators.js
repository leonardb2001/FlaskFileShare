
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

