import { ADD_NUMBER, SUB_NUMBER, GET_BANNERS, GET_RECOMMENDS } from './constants'

const defaultState = {
  counter:0,
  add_counter:0,
  sub_counter:100,

  banners: [],
  recommends: []
}

 const reducer = ( state = defaultState, action ) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, add_counter: state.add_counter + action.num };
    case SUB_NUMBER:
      return { ...state, sub_counter: state.sub_counter - action.num };
    case GET_BANNERS:
      return { ...state, banners: action.banners };
    case GET_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default reducer;