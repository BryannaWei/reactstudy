import { GET_BANNERS, GET_RECOMMENDS } from './constants'

const defaultHomeState = {
  banners: [],
  recommends: []
}

 const homeReducer = ( state = defaultHomeState, action ) => {
  switch (action.type) {
    case GET_BANNERS:
      return { ...state, banners: action.banners };
    case GET_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default homeReducer;