import React, { Component } from 'react'

import NavBar from './navBar'
export default class App extends Component {
  render() {
    const leftJsx = <span>《</span>
    return (
      <div>
        <NavBar leftSlot={leftJsx} centerSlot={<input />} rightSlot={<a href='/#' />} />
      </div>
    )
  }
}
