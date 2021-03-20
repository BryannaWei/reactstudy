import React, { PureComponent } from 'react'
import { ListWrapper } from '../style/style'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.listArr = [
      {id:1,name:'Lily'},
      {id:2,name:'Lilei'},
      {id:3,name:'Limei'},
    ]
  }
  render() {
    return (
      <ListWrapper>
        {this.listArr.map(item => <li key={item.id}>{item.name}</li>)}
      </ListWrapper>
    )
  }
}
