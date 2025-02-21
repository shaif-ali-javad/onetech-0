import React, { Component } from "react";

import Itservice from "./services/it-service/it-amc.jsx";
import Navbar from "./home/navbar/navbar";
import Footer from "./home/footer/footer";

export class services extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Itservice />
        <Footer />
      </div>
    );
  }
}

export default services;
