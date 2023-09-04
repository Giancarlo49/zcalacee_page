import React, { Component } from "react";
import belalim from "../assets/belalim2023.jpg";
import galerie from "../assets/galerie.jpg";
import poladior from "../assets/poladior.jpg";

import "./CarouselStyles.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
    };
  }

  galleryspin(sign) {
    let { angle } = this.state;
    const spinner = document.querySelector("#spinner");
    if (!sign) {
      angle += 45;
    } else {
      angle -= 45;
    }
    spinner.setAttribute(
      "style",
      `-webkit-transform: rotateY(${angle}deg); -moz-transform: rotateY(${angle}deg); transform: rotateY(${angle}deg);`
    );
    this.setState({ angle });
  }

  render() {
    return (
      <div>
        <div id="carousel">
          <figure id="spinner">
            <img src={belalim} alt="" />
            <img src={galerie} alt="" />
            <img src={poladior} alt="" />
            <img src={belalim} alt="" />
            <img src={galerie} alt="" />
            <img src={poladior} alt="" />
            <img src={belalim} alt="" />
            <img src={galerie} alt="" />
          </figure>
        </div>
        <span
          style={{ float: "left" }}
          className="ss-icon"
          onClick={() => this.galleryspin("-")}
        >
          &lt;
        </span>
        <span
          style={{ float: "right" }}
          className="ss-icon"
          onClick={() => this.galleryspin("")}
        >
          &gt;
        </span>
      </div>
    );
  }
}

export default Carousel;
