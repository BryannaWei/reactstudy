import React, { PureComponent } from 'react';

export default class CounterClass extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.changeCounter(-1)}>-</button>
        <button onClick={e => this.changeCounter(1)}>+</button>
      </div>
    );
  }
  changeCounter(num){
    this.setState({
      counter: this.state.counter + num
    })
  }
}