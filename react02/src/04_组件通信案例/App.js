import React, { Component } from 'react'
import TabControl from './tabControl'
import './tabControl.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.titles = ['流行','精选','新款']
    this.state = {
      currentTitle: "新款",
      currentIndex: 0
    }
  }
  render() {
    const {currentTitle} = this.state;
    return (
      <div>
        <TabControl titles={this.titles} tabClick={index=>this.tabClickFn(index)}/>
        <div>{currentTitle}</div>
      </div>
    )
  }
  tabClickFn(index){
    this.setState({
      currentTitle:this.titles[index]
    })
  }
}
