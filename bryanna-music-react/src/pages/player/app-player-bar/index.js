import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImg } from '@/utils/format-utils';

import { 
  getSongDetailAction
} from '../store/actionCreators';

import { Slider } from 'antd';
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';

export default memo(function JRAppPlayerBar() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
              <img src={getSizeImg("https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg", 35)} alt="" />
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">有何不可</span>
              <a href="#/" className="singer-name">许嵩</a>
            </div>
            <div className="progress">
              <Slider tooltipVisible={false} />
              <div className="time">
                <span className="now-time">00:00</span>
                <span className="divider">/</span>
                <span className="duration">04:31</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  )
})
