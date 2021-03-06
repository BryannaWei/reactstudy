import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Carousel } from "antd";

import { getTopBannerAction } from '../../store/actionCreator';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { PresetColorTypes } from 'antd/lib/_util/colors';
import { getNodeText } from '@testing-library/dom';

export default memo(function JRTopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0)

  //组件和redux关联：获取数据和进行操作；
  const { topBanners } = useSelector(state => ({
    // topBanners: state.recommend.topBanners
    // topBanners: state.recommend.get("topBanners")
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  const dispatch = useDispatch();

  //发送网络请求；
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);

  //其他hooks;
  const bannerRef = useRef();
  
  const bannerChange = useCallback((from, to) => {
      setTimeout(() => {
        setCurrentIndex(to)
      }, 0);
    },[])
  
    //?imageView&blur=40x20 高斯模糊
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item,index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
