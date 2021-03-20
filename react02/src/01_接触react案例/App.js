// import React from "react";
// const {Component} = React;
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter:0
    }
  }
  render(){
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.changeCount(-1)}>-</button>
        <button onClick={e => this.changeCount(1)}>+</button>
      </div>
    )
  }
  changeCount(val){
    let counter = this.state.counter;
    counter += val;
    this.setState({
      counter
    })
  }
}