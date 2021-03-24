import React, { PureComponent } from 'react';

// import { connect } from '../untils/connect'
import { connect } from 'react-redux'

import { addAction, getHomeDataAction} from '../store/actionCreators';

class Home extends PureComponent {
  componentDidMount(){
    this.props.getHomeData()
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
const mapDispatchToProps = (dispatch, getState) => ({
  addNumber(num){
    dispatch(addAction(num))
  },
  getHomeData(){
    dispatch(getHomeDataAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);