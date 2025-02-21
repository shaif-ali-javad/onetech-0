import React, { Component } from "react";
import Navbar from "./home/navbar/navbar";
import Footer from "./home/footer/footer";
import Contact from "./contact/contact.jsx";

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
