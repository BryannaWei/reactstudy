import { combineReducers } from 'redux';

import { reducer as counterReducer } from './counter'
import { reducer as homeReducer } from './home'

//个人编写的reducer合并方法
function reducer ( state = {}, action ) {
  return {
    counterData: counterReducer(state.counterData, action),
    homeData: homeReducer(state.homeData, action)
  }
}

// const reducer = combineReducers({
//   counterData: counterReducer,
//   homeData: homeReducer
// })

export default reducer;