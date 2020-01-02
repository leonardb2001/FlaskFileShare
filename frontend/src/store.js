
import createSagaMiddleware from 'redux-saga'
import { compose, createStore, applyMiddleware } from 'redux'

import rootReducer from './actions/reducers'
import rootSaga from './actions/sagas'


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(rootSaga)
