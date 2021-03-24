import React, { PureComponent } from 'react';

import store from '../store'
import { subAction } from '../store/actionCreators';

class About extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount(){
    this.unSubscribe = store.subscribe(()=>{
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount(){
    this.unSubscribe()
  }
  render() {
    return (
      <div>
        <h1>ABOUT</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick = { e => this.subNumber(1) }>-1</button>
        <button onClick = { e => this.subNumber(5) }>-5</button>
      </div>
    );
  }
  subNumber(num){
    store.dispatch(subAction(num))
  }
}

export default About;