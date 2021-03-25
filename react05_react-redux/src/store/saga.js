import axios from 'axios';
import { takeEvery, put, all, takeLatest } from 'redux-saga/effects'

import { FETCH_HOMEDATA } from './constants'
import { getBannersAction, getRecommendsAction } from './actionCreators'


function* fetchHomeData(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;

  // yield put(getBannersAction(banners))
  // yield put(getRecommendsAction(recommends))
  yield all ([
    yield put(getBannersAction(banners)),
    yield put(getRecommendsAction(recommends))
  ]
  )
}
function* mySaga() {
  
  // takeEvery takeLatest 区别:
  //takeEvery: 每一个都会被执行;
  //takeLatest: 依次只能监听一个对应的action;

  // yield takeEvery(FETCH_HOMEDATA, fetchHomeData)
  yield takeLatest(FETCH_HOMEDATA, fetchHomeData)
}

export default mySaga;