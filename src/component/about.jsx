import React, { Component } from "react";
import Navbar from "./home/navbar/header.jsx";
import About from "./about/about.jsx";
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
