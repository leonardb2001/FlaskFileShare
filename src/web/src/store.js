
import createSagaMiddleware from 'redux-saga'
import { createStore, compose, applyMiddleware } from 'redux'
import testReducer from './actions/reducers'


const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  testReducer,
  applyMiddleware(sagaMiddleware)
)
