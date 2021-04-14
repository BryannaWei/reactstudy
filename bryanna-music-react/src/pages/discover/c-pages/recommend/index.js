import React, { memo } from 'react';

import JRTopBanner from "./c-cpns/top-banner";
import JRHotRecommend from "./c-cpns/hot-recommend";
import JRNewAlbum from "./c-cpns/new-album";
import JRRecommendRank from "./c-cpns/recommend-rank";

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from "./style";

function JRRecommend(props) {
  
  return (
    <div>
      <RecommendWrapper>
        <JRTopBanner />
        <Content className="wrap-v2">
          <RecommendLeft>
            <JRHotRecommend></JRHotRecommend>
            <JRNewAlbum></JRNewAlbum>
            <JRRecommendRank></JRRecommendRank>
          </RecommendLeft>
          <RecommendRight></RecommendRight>
        </Content>
      </RecommendWrapper>
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
