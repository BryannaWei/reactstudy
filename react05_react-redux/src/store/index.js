import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'

const storeEnhance = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, storeEnhance)

export default store;