import React, { PureComponent } from 'react';

class Detail extends PureComponent {
  render() {
    console.log(this.props.location)
    return (
      <div>
        Detail {this.props.location.search}
      </div>
    );
  }
}


export default Detail;