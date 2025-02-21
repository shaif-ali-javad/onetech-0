import React, { Component } from "react";
import "./logo-carousel.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import logo1 from "../img/Dell-C.png";
import logo2 from "../img/Bosch-C.png";
import logo3 from "../img/Fujitsu-C.png";
import logo4 from "../img/HP-C.png";
import logo5 from "../img/KodakAlaris-C.png";
import logo6 from "../img/Laurel-C.png";
import logo7 from "../img/MA-C.png";
import logo8 from "../img/Microsoft-C.png";
import logo9 from "../img/Newgen-C.png";
import logo10 from "../img/SAP-C.png";
import logo11 from "../img/Utax-C.png";

export default class LogoCarousel extends Component {
  
  render() {
    return (
      <>
    <div class="w-full inline-flex flex-nowrap" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
        <img src={logo1} alt="imag"/>
        </li>
        <li>
        <img src={logo2} alt="imag"/>
        </li>
        <li>
        <img src={logo3} alt="imag"/>
        </li>
        <li>
        <img src={logo4} alt="imag"/>
        </li>
        <li>
        <img src={logo5} alt="imag"/>
        </li>
        <li>
        <img src={logo6} alt="imag"/>
        </li>
        <li>
        <img src={logo7} alt="imag"/>
        </li>
        <li>
        <img src={logo8} alt="imag"/>
        </li>
        <li>
        <img src={logo9} alt="imag"/>
        </li>
        <li>
        <img src={logo10} alt="imag"/>
        </li>
        <li>
        <img src={logo11} alt="imag"/>
        </li>
      </ul>                
    </div>
      </>
    );
  }
}
