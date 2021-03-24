import React, { PureComponent } from 'react';

import store from '../store'
import { addAction } from '../store/actionCreators';

class Home extends PureComponent {
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
        <h1>HOME</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick = { e => this.addNumber(1) }>+1</button>
        <button onClick = { e => this.addNumber(10) }>+10</button>
      </div>
    );
  }
  addNumber(num){
    store.dispatch(addAction(num))
  }
}

export default Home;