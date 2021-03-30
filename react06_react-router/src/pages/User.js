import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'

class User extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      isLogin:true
    }
  }
  render() {
    return this.state.isLogin ? (
      <div>
        <h2>User</h2>
        <h2>用户名: Bryanna</h2>
      </div>
    ) : <Redirect to="/login" />;
  }
}


export default User;