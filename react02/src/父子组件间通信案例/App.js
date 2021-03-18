import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {
  constructor(props){
    super(props);
    this.titles = [
      {id:1,name:'新款'},
      {id:2,name:'精选'},
      {id:3,name:'流行'},
    ]
    this.state = {
      curName:'新款'
    }
  }
  render() {
    const {curName} = this.state;
    return (
      <div>
        <TabControl tabClickFn={index => this.tabClickFn(index)} titles={this.titles}/>
        <div>{curName}</div>
      </div>
    )
  }
  tabClickFn(index){
    this.setState({
      curName:this.titles[index].name
    })
  }
}
