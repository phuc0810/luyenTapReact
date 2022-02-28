import React, { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import FooterComponent from "./FooterComponent";
import PageContentComponent from "./PageContentComponent";
import ReponsiveComponent from "./ReponsiveComponent";

export default class MainBsComponent extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <ReponsiveComponent />
        </section>
        <section className="carousel">
          <CarouselComponent />
        </section>
        <section className="PageContent">
          <PageContentComponent />
        </section>
        <section className="footer">
          <FooterComponent />
        </section>
      </div>
    );
  }
}
