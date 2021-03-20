import React, { Component } from 'react'
import  './navBar.css'

export default class navBar extends Component {
  render() {
    const {leftSlot,centerSlot,rightSlot} = this.props;
    return (
      <div className='nav-bar'>
        <div className='nav-item nav-left'>{leftSlot}</div>
        <div className='nav-item nav-center'>{centerSlot}</div>
        <div className='nav-item nav-right'>{rightSlot}</div>
      </div>
    )
  }
}
