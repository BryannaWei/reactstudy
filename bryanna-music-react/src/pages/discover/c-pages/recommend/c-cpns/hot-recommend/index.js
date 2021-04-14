import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getHotRecommendAction } from "../../store/actionCreator";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";

import JRThemeHeaderRCM from '@/components/theme-header-rcm';
import { HotRecommendWrapper } from "./style";

export default memo(function JRHotRecommend() {

  
  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <JRThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
    </HotRecommendWrapper>
  )
})
