import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const storeEnhance = applyMiddleware(thunkMiddleware, sagaMiddleware)

const store = createStore(reducer, storeEnhance)

sagaMiddleware.run(saga)

export default store;