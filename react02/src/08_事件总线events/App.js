import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent {
  render() {
    return (
      <div>
        home
      </div>
    )
  }
  componentDidMount(){
    eventBus.addListener('setData',this.getData)
  }
  componentWillUnmount(){
    eventBus.removeListener('setData',this.getData)
  }
  getData(num,str){
    console.log(num,str)
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        profile
        <button onClick={e => this.transitionData()}>传data给home</button>
      </div>
    )
  }
  transitionData(){
    eventBus.emit('setData',12,'hello')
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}
