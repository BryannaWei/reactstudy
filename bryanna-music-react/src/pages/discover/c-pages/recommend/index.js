import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux';

import { getTopBannerAction } from './store/actionCreator';

function JRRecommend(props) {
  const { getBanners, topBanners } = props;
  console.log(props)

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>
      <h2>JRRecommend: {topBanners.length}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(memo(JRRecommend))
