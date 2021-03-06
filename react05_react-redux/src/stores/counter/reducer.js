import { ADD_NUMBER, SUB_NUMBER } from './constants'

const defaulCountertState = {
  counter:0,
  add_counter:0,
  sub_counter:100,
}

 const counterReducer = ( state = defaulCountertState, action ) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, add_counter: state.add_counter + action.num };
    case SUB_NUMBER:
      return { ...state, sub_counter: state.sub_counter - action.num };
    default:
      return state;
  }
}

export default counterReducer;