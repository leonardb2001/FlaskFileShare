
import { combineReducers } from 'redux'
import { resourceReducer } from 'redux-resource'

import authReducer from './auth'
import filePluginReducer from './filePluginReducer'

const rootReducer = combineReducers({
  users: resourceReducer('users'),
  files: resourceReducer('files', {
    plugin: [filePluginReducer]
  }),
  auth: authReducer
})

export default rootReducer
