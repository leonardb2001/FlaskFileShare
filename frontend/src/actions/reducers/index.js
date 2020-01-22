
import { combineReducers } from 'redux'
import { resourceReducer } from 'redux-resource'

import authReducer from './auth'

const rootReducer = combineReducers({
  users: resourceReducer('users'),
  files: resourceReducer('files'),
  auth: authReducer
})

export default rootReducer
