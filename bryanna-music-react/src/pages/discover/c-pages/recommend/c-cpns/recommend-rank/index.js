import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import JRThemeHeaderRCM from "@/components/theme-header-rcm";
import JRTopRanking from "@/components/top-ranking";
import { getTopListAction } from '../../store/actionCreator';
import { RankingWrapper } from './style';

export default memo(function JRRecomendRank() {

  // redux hook
  const {upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }))
  const dispatch = useDispatch()
  //other hook
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch])
  return (
    <RankingWrapper>
      <JRThemeHeaderRCM title="榜单" />
      <div className="tops">
        <JRTopRanking info={upRanking}/>
        <JRTopRanking info={newRanking}/>
        <JRTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
