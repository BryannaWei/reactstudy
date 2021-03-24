import React from 'react';
import { subAction } from '../store/actionCreators';
// import { connect } from '../untils/connect'

import { connect } from 'react-redux'

function About(props) {
  return (
    <div>
      <h1>ABOUT</h1>
      <h2>当前计数: {props.sub_counter}</h2>
      <button onClick = { e => props.subNumber(1) }>-1</button>
      <button onClick = { e => props.subNumber(5) }>-5</button>
      <h2>banner</h2>
      <ul>{ props.banners.map(item => <li key={item.acm}>{item.title}</li>) }</ul>
      <h2>recommend</h2>
      <ul>{ props.recommends.map(item => <li key={item.acm}>{item.title}</li>) }</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  sub_counter: state.sub_counter,
  banners:state.banners,
  recommends:state.recommends,
})
const mapDispatchToProps = dispatch => {
  return{
    subNumber(num){
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About);