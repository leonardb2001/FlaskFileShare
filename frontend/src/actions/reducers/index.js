
import { combineReducers } from 'redux'
import { resourceReducer } from 'redux-resource'

import authReducer from './auth'
import filePlugin from './filePluginReducer'

const rootReducer = combineReducers({
  users: resourceReducer('users'),
  files: resourceReducer('files', {
    plugins: [filePlugin]
  }),
  auth: authReducer
})

export default rootReducer
