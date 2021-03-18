import React, { PureComponent } from 'react';
 
function enhanceProps(WrappedComponent) {
  return props => {
    const {isLogin} = props;
    if (isLogin) {
      return <WrappedComponent {...props} area='广东' />
    } else {
      return <Login />
    }
  }
}

class Login extends PureComponent {
  render() {
    return <h2>logining...</h2>
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home:{`昵称：${this.props.nickname}等级：${this.props.level}区域：${this.props.area}`}</h2>;
  }
}

const EnhanceHome = enhanceProps(Home)

class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome nickname='bryanna' level={10} isLogin={false} />
      </div>
    );
  }
}


export default App;