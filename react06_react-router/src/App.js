import React, { PureComponent } from 'react';
import { HashRouter, BrowserRouter, Link, Route, NavLink, Switch, withRouter } from 'react-router-dom'

import { renderRoutes } from 'react-router-config'

import routes from './router'

import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import User from './pages/User'
import NoMatch from './pages/NoMatch'
import Login from './pages/Login'
import Product from './pages/Product'
import Detail from './pages/Detail'
import Detail2 from './pages/Detail2'
import Detail3 from './pages/Detail3'

import './css/app.css'

class App extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    const id = 'abc123';
    const info = {
      name:'we',
      age:13
    }
    return (
      <>
          <NavLink exact to="/" activeClassName="navlink-active">首页</NavLink>
          <NavLink to="/about" activeClassName="navlink-active">关于</NavLink>
          <NavLink to="/profile" activeClassName="navlink-active">我的</NavLink>
          {/* <NavLink to="/abc" activeClassName="navlink-active">abc</NavLink> */}
          <NavLink to="/user" activeClassName="navlink-active">用户</NavLink>
          <NavLink to={`/detail/${id}`} activeClassName="navlink-active">详情</NavLink>
          <NavLink to={`/detail2?name=we&age=12`} activeClassName="navlink-active">详情2</NavLink>
          <NavLink to={{
            pathname:'/detail3',
            search:'name=ac3',
            state:info
          }} activeClassName="navlink-active">详情3</NavLink>
          <button onClick={e => this.getProduct()}>商品</button>
          
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path='/product' component={Product} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/detail2" component={Detail2} />
            <Route path="/detail3" component={Detail3} />
            <Route component={NoMatch} />
          </Switch> */}
          {renderRoutes(routes)}
      </>
    );
  }
  getProduct(){
    this.props.history.push('/product')
  }
}


export default withRouter(App);