import React, { Component } from "react";
import Services from "./services/services/services.jsx";
// import Slider from "./services/slider/slider";
import Navbar from "./global-component/navbar";
import Footer from "./global-component/footer";

export class services extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Slider /> */}
        <Services />
        <Footer />
      </div>
    );
  }
}

export default services;
