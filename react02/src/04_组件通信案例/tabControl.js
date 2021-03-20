import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TabControl extends Component {
  constructor(props){
    super(props);
    this.state  = {
      curIndex:0,
    }
  }
  render() {
    const {titles}  = this.props;
    const {curIndex} = this.state;
    return (
      <div className='tabs'>
        {
          titles.map((item,index) => {
            return (
              <div className={'tab-item ' + (index === curIndex ? 'active' : '')}
              onClick={e => this.tabClick(index)}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
  tabClick(index){
    this.setState({
      curIndex:index
    })
    const {tabClick} =this.props;
    tabClick(index)
  }
}
TabControl.propTypes = {
  titles:PropTypes.array.isRequired
}
