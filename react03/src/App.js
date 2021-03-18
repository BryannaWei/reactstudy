import React, { PureComponent } from 'react'

import CpnInput from 'components/CpnInput'
import CpnItem from 'components/CpnItem'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      dataList:[]
    }
  }
  render() {
    const { dataList } = this.state;
    return (
      <div style={{width:"50%",padding:"20px"}}>
        {dataList.map((item,index) => <CpnItem key={item.id} dataObj={item} deleteData={e => this.deleteData(index)} />)}
        <CpnInput submitData={info => this.submitData(info)}/>
      </div>
    )
  }
  submitData(info){
    this.setState({
      dataList:[info,...this.state.dataList]
    })
  }
  deleteData(index){
    const newDataList = [...this.state.dataList]
    newDataList.splice(index,1)
    this.setState({
      dataList:newDataList
    })
  }
}
