import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      username:''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            {/* input 就是一个受控组件 */}
            用户：<input type="text" id="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleChange(e){
    // console.log(e.target.value)
    this.setState({
      username:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.username)
  }
}

