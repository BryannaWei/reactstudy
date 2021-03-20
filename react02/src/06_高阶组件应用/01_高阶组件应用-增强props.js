import React, { PureComponent } from 'react';
 
function enhanceAreaProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} area='广东' />
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home:{`昵称：${this.props.nickname}等级：${this.props.level}区域：${this.props.area}`}</h2>;
  }
}
class About extends PureComponent {
  render() {
    return <h2>About:{`昵称：${this.props.nickname}等级：${this.props.level}区域：${this.props.area}`}</h2>;
  }
}

const EnhanceHome = enhanceAreaProps(Home)
const EnhanceAbout = enhanceAreaProps(About)

class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome nickname='bryanna' level={10} />
        <EnhanceAbout nickname='bobbioy' level={60} />
      </div>
    );
  }
}


export default App;