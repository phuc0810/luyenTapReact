import React, { Component } from "react";

export default class Databinding extends Component {
  product = {
    name: "iphone",
    price: 0,
    img: "http://picsum2001/200/1",
  };

  renderProduct = () => {
    return (
      <div className="card">
        <p>{this.product.name}</p>
        <p>{this.product.price}</p>
        <p>{this.product.img}</p>
      </div>
    );
  };
  render() {
    return <div className="container">{this.renderProduct()}</div>;
  }
}
