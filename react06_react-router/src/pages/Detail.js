import React, { PureComponent } from 'react';

class Detail extends PureComponent {
  render() {
    console.log(this.props.match.params)
    return (
      <div>
        Detail: {this.props.match.params.id}
      </div>
    );
  }
}


export default Detail;