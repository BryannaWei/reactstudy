import React from 'react';
import { subAction } from '../store/actionCreators';
import { connect } from '../untils/connect'


function About(props) {
  return (
    <div>
      <h1>ABOUT</h1>
      <h2>当前计数: {props.sub_counter}</h2>
      <button onClick = { e => props.subNumber(1) }>-1</button>
      <button onClick = { e => props.subNumber(5) }>-5</button>
    </div>
  );
}

const mapStateToProps = state => ({
  sub_counter: state.sub_counter
})
const mapDispatchToProps = dispatch => {
  return{
    subNumber(num){
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);