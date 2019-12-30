
import { combineReducers } from 'redux'
import { resourceReducer } from 'redux-resource'

const rootReducer = combineReducers({
  users: resourceReducer('user'),
  files: resourceReducer('files')
})

export default rootReducer
