import React, { PureComponent } from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { NavLink, Switch, Route } from 'react-router-dom'

export function AboutHistory(props) {
  return <p>历史悠久</p>
}
export function AboutCulture(props) {
  return <p>创新发展</p>
}
export function AboutContect(props) {
  return <p>联系电话: 020-8008320</p>
}
export function JoinUs(props) {
  return <p>请投入简历至1232@163.com</p>
}

class About extends PureComponent {
  render() {
    console.log(this.props.route)
    const branch = matchRoutes(this.props.route.routes, "/about");
    console.log(branch);
    return (
      <div>
        
        <NavLink exact to='/about' activeClassName="aboutActive">企业文化</NavLink>
        <NavLink to='/about/culture' activeClassName="aboutActive">企业发展</NavLink>
        <NavLink to='/about/contect' activeClassName="aboutActive">企业联系</NavLink>
        <button onClick={e => this.jumpJoinUs()}>加入我们</button>

        {/* <Switch>
          <Route exact path="/about" component={AboutHistory} />
          <Route path="/about/culture" component={AboutCulture} />
          <Route path="/about/contect" component={AboutContect} />
          <Route path="/about/join" component={JoinUs} />
        </Switch> */}
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
  jumpJoinUs(){
    // console.log(this.props)
    // console.log(this.props.history)
    // console.log(this.props.location)
    // console.log(this.props.match)
    this.props.history.push('/about/join')
  }
}


export default About;