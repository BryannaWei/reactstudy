import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      psw:'',
      valid:''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            {/* input 就是一个受控组件 */}
            用户：<input type="text" id="username" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <label htmlFor="psw">
            {/* input 就是一个受控组件 */}
            密码：<input type="text" id="psw" name="psw" value={this.state.psw} onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <label htmlFor="valid">
            {/* input 就是一个受控组件 */}
            验证：<input type="text" id="valid" name="valid" value={this.state.valid} onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleChange(e){
    // console.log(e.target.value)
    this.setState({
      //[***]ES6中的计算属性名
      [e.target.name]:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const {username,psw,valid} = this.state;
    console.log(username,psw,valid)
  }
}

