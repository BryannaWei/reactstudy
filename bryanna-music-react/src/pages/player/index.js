import React, { memo } from 'react'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function JRPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>JRPlayerInfo</h2>
          <h2>JRSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>JRSimiPlaylist</h2>
          <h2>JRSimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
