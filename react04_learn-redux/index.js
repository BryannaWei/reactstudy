import store from './store/index.js'
import { addAction,decAction,incAction,subAction } from './store/actionsCreator.js'

store.subscribe(() => console.log(store.getState()))

store.dispatch(addAction(10))
store.dispatch(addAction(15))
store.dispatch(subAction(5))
store.dispatch(subAction(8))
store.dispatch(incAction())
store.dispatch(decAction())