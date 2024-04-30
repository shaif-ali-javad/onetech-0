import React, { Component } from "react";
import Navbar from "./global-component/navbar";
import Footer from "./global-component/footer.jsx";
import Contact from "./contact/contact";

export class contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default contact;
