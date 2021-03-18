import React, { PureComponent, createContext } from 'react';

function withUser(WrappedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrappedComponent {...props} {...user} />;
          }
        }
      </UserContext.Consumer>
    )
  }
}

const UserContext = createContext({
  nick: 'default',
  level: 0,
  area:'中国'
})

class Home extends PureComponent {
  render() {
    return <h2>Home：{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.area}`}</h2>
    // return (
    //   <UserContext.Consumer>
    //     {
    //       user => {
    //         return <h2>Home：{`昵称：${user.nickname} 等级：${user.level} 区域：${user.area}`}</h2>
    //       }
    //     }
    //   </UserContext.Consumer>
    // )
  }
}
class About extends PureComponent {
  render() {
    return <h2>About：{`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.area}`}</h2>
    // return (
    //   <UserContext.Consumer>
    //     {
    //       user => {
    //         return <h2>About：{`昵称：${user.nickname} 等级：${user.level} 区域：${user.area}`}</h2>
    //       }
    //     }
    //   </UserContext.Consumer>
    // )
  }
}
class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.nickname}</li>
        <li>{this.props.level}</li>
        <li>{this.props.area}</li>
      </ul>
    )
  }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)
const UserDetail = withUser(Detail)

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{nickname:'bryanna',level:10,area:'中国'}}>
          <UserHome />
          <UserAbout />
          <UserDetail />
          {/* <Home />
          <About /> */}
        </UserContext.Provider>
      </div>
    );
  }
}


export default App;