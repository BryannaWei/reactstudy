import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAlbumsAction } from '../../store/actionCreator';

import { Carousel } from 'antd';
import JRThemeHeaderRCM from "@/components/theme-header-rcm";
import JRAlbumCover from '@/components/album-cover'
import { AlbumWrapper } from './style';

export default memo(function JRNewAlbum() {

  //redux hook
  const { newAlbums } = useSelector(state =>({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch()
  //other hook
  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <JRThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={ e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0,1].map(item => {
                return (
                  <div className="page" key={item}>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(it => {
                        return <JRAlbumCover info={it} size={100} width={118} bgp="-570px" key={it.id} />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={ e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
