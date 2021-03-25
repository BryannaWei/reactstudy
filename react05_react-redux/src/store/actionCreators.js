import { ADD_NUMBER, SUB_NUMBER, GET_BANNERS, GET_RECOMMENDS, FETCH_HOMEDATA } from './constants'

import axios from 'axios'

export const addAction = num => ({ type: ADD_NUMBER, num })
export const subAction = num => ({ type:SUB_NUMBER, num })

export const getBannersAction = banners => ({ type:GET_BANNERS, banners })
export const getRecommendsAction = recommends => ({ type:GET_RECOMMENDS, recommends })

//redux-thunk
export const getHomeDataAction = dispatch => (
  axios({
    url:"http://123.207.32.32:8000/home/multidata",
  }).then(res => {
    const data = res.data.data;
    dispatch(getBannersAction(data.banner.list))
    dispatch(getRecommendsAction(data.recommend.list))
  })
)

//redux-saga
export const fetchHomeDataAction = {
  type: FETCH_HOMEDATA
}