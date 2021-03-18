import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TabControl.css'

export default class TabControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      curIndex: 1
    }
  }
  render() {
  const {titles} = this.props;
  const {curIndex} = this.state;
  return (
      <div className="tabs">
        {
          titles.map(item => {
            return (
              <div 
                className={`tab-item ${item.id === curIndex && 'active'}`} 
                onClick={e => this.tabClick(item.id)}
                key={item.id}>
                {item.name}
              </div>
            )
          })
        }
      </div>
    )
  }
  tabClick(id){
    this.setState({
      curIndex:id
    })
    const {tabClickFn} = this.props;
    tabClickFn(id - 1)
  }
}
TabControl.propTypes = {
  titles:PropTypes.array.isRequired
}
