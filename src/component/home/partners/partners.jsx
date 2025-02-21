import React, { Component } from "react";
import "./partner.css";
import LogoSlider from "./carousel/logo-carousel";

export class Partners extends Component {
  render() {
    return (
      <div class="text">
        <div class="some-text text-gray-900">
          <h1 class="p">Our Partners</h1>
          <p class="text-0">
            Over two decades, Onetech Technologies maintains a strategic IT
            presence in UAE, forging long-standing
            <br /> partnerships with key global players.
          </p>
        </div>
        <LogoSlider />
        <div class="text-a text-gray-900">
          <p>
            Onetech Technologies is UAE’s leading ICT Solutions Company offering
            Office Automation products ranging from Printers & MFPs, Currency
            Handling Solutions, ELV, AV, Telecom, IT, and Enterprise Software
            Applications like ERP, Document & Business Process Management
            Solutions, HR Management Solutions, School Management Solutions,
            Digital Signature Solutions and Location-aware Solutions.
          </p>
          <p>
            Onetech Technologies have exclusive partnerships with international
            brands to ensure the best IT Support Services in quality and
            technology with offices in Dubai and RAK to provide maximum reach
            for all our Customers. In our two decades of successful operations,
            we have established a strong position as an IT Solutions Company
            serving major clientele ranging from Corporates, Government and all
            other verticals.
          </p>
        </div>
        <div class="whatsapp">
          <a href="https://wa.me/971504153141">
            <img
              id="whatsapp"
              height="40px"
              src="image/WhatsApp-logo.png"
              alt=""
              width={100}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Partners;
