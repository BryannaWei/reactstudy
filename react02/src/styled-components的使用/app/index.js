import React, { PureComponent } from 'react';

import Home from '../home'
import Profile from '../profile'

import styled, {ThemeProvider} from 'styled-components';

const NormalButton = styled.button`
padding: 10px 20px;
border-color: red;
color: red;
`
// styled(NormalButton) 继承样式
const NewButton = styled(NormalButton)`
background-color: yellowgreen;
color: whitesmoke;
`

export default class App extends PureComponent {
  render() {
    return (
      // ThemeProvider theme={{themeColor: "orange", fontSize: "30px"}} 统一主题样式;
      <ThemeProvider theme={{themeColor: "orange", fontSize: "30px"}}>
        <Home />
        <hr />
        <Profile />
        <NormalButton>普通BUTTON</NormalButton>
        <br />
        <NewButton>新奇BUTTON</NewButton>
      </ThemeProvider>
    );
  }
}