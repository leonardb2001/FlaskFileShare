
import createSagaMiddleware from 'redux-saga'
import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './actions/reducers'
import rootSaga from './actions/sagas'


const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
