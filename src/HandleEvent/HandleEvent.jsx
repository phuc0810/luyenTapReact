import React, { Component } from "react";

export default class HandleEvent extends Component {
  hello = () => {
    alert("hello world");
  };
  helloName = (name) => {
    alert("hello world " + name);
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.hello}>hello thế giới</button>
        <button
          onClick={() => {
            this.helloName("phúc");
          }}
        >
          hello tên
        </button>
      </div>
    );
  }
}
