import React, { Component } from "react";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import NavComponent from "./NavComponent";

export default class MainComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <HomeComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <HeaderComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-0 m-0">
            <NavComponent />
          </div>
          <div className="col-8 p-0 m-0">
            <ContentComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0 m-0">
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}
