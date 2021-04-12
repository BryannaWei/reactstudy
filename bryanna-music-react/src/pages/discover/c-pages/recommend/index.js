import React, { memo, useEffect } from 'react';
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreator';

function JRRecommend(props) {
  
  //组件和redux关联：获取数据和进行操作；
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual);
  const dispatch = useDispatch();

  //发送网络请求；
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);

  return (
    <div>
      <h2>JRRecommend: {topBanners.length}</h2>
    </div>
  )
}

export default memo(JRRecommend);

// function JRRecommend(props) {
//   const { getBanners, topBanners } = props;
//   console.log(props)

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>JRRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })


// export default connect(mapStateToProps, mapDispatchToProps)(memo(JRRecommend))
