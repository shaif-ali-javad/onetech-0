import React, { Component } from "react";
import About from "./about/about.jsx";
import Navbar from "./home/navbar/navbar";
import Footer from "./home/footer/footer";

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
