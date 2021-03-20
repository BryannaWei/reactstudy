import React, { Component } from 'react'

export default class app extends Component {
  constructor(){
    console.log('---constructor')
    super()
    this.state = {
      counter:0
    }
  }
  render() {
    console.log('---render')
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={()=>this.increment()}>+1</button>
      </div>
    )
  }
  increment(){
    this.setState({
      counter:this.state.counter + 1
    })
    console.log('---increment')
  }
  componentDidMount(){
    console.log('---componentDidMount')
  }
  componentDidUpdate(){
    console.log('---componentDidUpdate')
  }
}
