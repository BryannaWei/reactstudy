import React, { PureComponent } from 'react';

class Product extends PureComponent {
  render() {
    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          <li>商品1</li>
          <li>商品2</li>
          <li>商品3</li>
        </ul>
      </div>
    );
  }
}


export default Product;