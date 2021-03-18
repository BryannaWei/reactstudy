import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      fruit:'orange'
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <select name="fruit" value={this.state.fruit} onChange={e => this.handleChange(e)}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橙子</option>
          </select>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleChange(e){
    // console.log(e.target.value)
    this.setState({
      fruit:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.fruit)
  }
}

