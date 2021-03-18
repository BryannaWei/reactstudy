import React, { PureComponent } from 'react'
import moment from 'moment';

import { Input, Button } from "antd"
const { TextArea } = Input

export default class index extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      content:""
    }
  }
  render() {
    return (
      <>
        <TextArea row={ 4 } value={this.state.content} onChange={e => this.handleChange(e)} />
        <br/>
        <Button type="primary" onClick={e => this.handleAdd(e)}>添加评论</Button>
      </>
    )
  }
  handleChange(e){
    this.setState({
      content:e.target.value
    })
  }
  handleAdd(e){
    const infoObj = {
      id: Date.now(),
      icon:'https://user-gold-cdn.xitu.io/2019/11/18/16e7da2df0dd68dd?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
      nickname:'bryanna',
      content:this.state.content,
      // datetime:moment().format("YYYY-MM-DD hh:mm:ss")
      datetime:moment()
    }
    this.props.submitData(infoObj)
    this.setState({
      content: ""
    })
  }
}
