import React, { PureComponent } from 'react'
import Home from '../Home/index'
import List from '../List/index'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <List />
      </div>
    )
  }
}
