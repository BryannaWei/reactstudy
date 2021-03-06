import * as actionTypes from "./constants"

import { getTopBanners, getHotRecommends, getNewAlbums } from "@/services/recommend";
import { getTopList } from "../../../../../services/recommend";

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

const changeNewAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

export const getNewAlbumsAction = limit => {
  return dispatch => {
    getNewAlbums(limit).then( res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 3:
          return dispatch(changeUpRankingAction(res));
          break;
        case 0:
          return dispatch(changeNewRankingAction(res));
          break;
        case 2:
          return dispatch(changeOriginAction(res));
          break;
      
        default:
          break;
      }
    })
  }
}