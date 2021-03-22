import { ADD_NUMBER, SUB_NUMBER, INCNUMBER, DECNUMBER } from './constants.js'

const defaultState = {
  counter: 0
}

function reducer(state = defaultState , action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
      case SUB_NUMBER:
        return { ...state, counter: state.counter - action.num };
        case INCNUMBER:
          return { ...state, counter: state.counter + 1 };
          case DECNUMBER:
            return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default reducer;