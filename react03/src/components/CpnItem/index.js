import React, { PureComponent } from 'react'

import { Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default class index extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      contentObj:{}
    }
  }
  render() {
    const {icon,nickname,content,datetime} = this.props.dataObj;
    return (
      <Comment
      author={nickname}
      avatar={<Avatar src={icon} alt={nickname} />}
      content={
        <p>{content}</p>
      }
      datetime={
        <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
          <span>{datetime.fromNow()}</span>
        </Tooltip>
      }
      actions={[<span onClick={e=>this.deleteData()}><DeleteOutlined />删除</span>]}
    />
    )
  }
  deleteData(){
    this.props.deleteData()
  }
}
