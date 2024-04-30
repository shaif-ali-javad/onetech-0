import React, { Component } from "react";
import About from "./about/about.jsx";
import Navbar from "./global-component/navbar";
import Footer from "./global-component/footer";
// import Slide from "./about/slider/slider";

export class about extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    );
  }
}

export default about;
