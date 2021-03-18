import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * 特点:
 * 1.props的穿透;
 * 2.attrs的使用;
 * 3.传入state作为props的属性
 */

const BInput = styled.input.attrs({//part2 attrs的使用
  placeholder: "bryanna",
  bColor: "gray"
})`
  color: ${props => props.color};
  background-color: ${props => props.bColor};
`

export default class Profile extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      color: "yellowgreen"
    }
  }
  render() {
    return (
      <div>
      <input type="password"/>
      <br />
      <BInput type="password" color={this.state.color}/>
      {/* 
      type="password" part1 props的穿透;
      color={this.state.color} part3 传入state作为props的属性;
      */}
      <h2>Profile-title</h2>
      <ul>
        <li>设置列表1</li>
        <li>设置列表2</li>
        <li>设置列表3</li>
      </ul>
      </div>
    );
  }
}