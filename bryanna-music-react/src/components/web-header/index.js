import React, { memo } from 'react'

import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function JRHeader() {

  const showHeaderLink = (item, index) => {
    if (index < 3) {
      return (
          <NavLink to={item.link} exact>
            {item.title}
            <i className="sprite_01 icon"></i>
          </NavLink>
      )
    } else {
      return <a href={item.link} target="parent">{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a className="sprite_01 logo" href="#/">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showHeaderLink(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
