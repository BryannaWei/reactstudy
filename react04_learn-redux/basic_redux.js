// 不能用ES6的import导入, 用commonjs的一种 nodejs 导入;
//import/export 得node版本 13.2.0开始支持;
// 运行时用 node src/index.js;

const redux = require('redux')

const initialState = {
  counter: 0
}

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1};
    case "DECREMENT":
      return {...state, counter: state.counter - 1};
      case "ADD_NUMBER":
        return {...state, counter: state.counter + action.number};
        case "SUB_NUMBER":
          return {...state, counter: state.counter - action.number};
    default:
      return state;
  }
}

//store 创建时需要传入一个reducer;
const store = redux.createStore(reducer);

//订阅store的修改 正常情况不能在这里这么做,不合理;
store.subscribe(() => {
  console.log(store.getState())
})

//actions
const action1 = {type:"INCREMENT"};
const action2 = {type:"DECREMENT"};
const action3 = {type:"ADD_NUMBER",number:3};
const action4 = {type:"SUB_NUMBER",number:5};

//派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)