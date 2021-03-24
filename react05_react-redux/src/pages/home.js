import React, { PureComponent } from 'react';

// import { connect } from '../untils/connect'
import { connect } from 'react-redux'
import axios from 'axios'

import { addAction } from '../store/actionCreators';

class Home extends PureComponent {
  componentDidMount(){
    axios({
      url:"http://123.207.32.32:8000/home/multidata",
    }).then(res => {
      console.log (res.data.data)
    })
  }
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <h2>当前计数: {this.props.add_counter}</h2>
        <button onClick = { e => this.props.addNumber(1) }>+1</button>
        <button onClick = { e => this.props.addNumber(10) }>+10</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  add_counter: state.add_counter
})
const mapDispatchToProps = dispatch => ({
  addNumber(num){
    dispatch(addAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);