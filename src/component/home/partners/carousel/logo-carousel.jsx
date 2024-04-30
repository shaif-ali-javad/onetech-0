import React, { Component } from "react";
// import "./logo-carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    const settings = {
      dots: true,
      infinite: true,
      centerPadding: "100px",
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings} className="logo-carousel carousel">
        <div className="carousel-logo">
          <img src={logo1} />
        </div>
        <div className="carousel-logo">
          <img src={logo2} />
        </div>
        <div className="carousel-logo">
          <img src={logo3} />
        </div>
        <div className="carousel-logo">
          <img src={logo4} />
        </div>
        <div className="carousel-logo">
          <img src={logo5} />
        </div>
        <div className="carousel-logo">
          <img src={logo6} />
        </div>
        <div className="carousel-logo">
          <img src={logo7} />
        </div>
        <div className="carousel-logo">
          <img src={logo8} />
        </div>
        <div className="carousel-logo">
          <img src={logo9} />
        </div>
        <div className="carousel-logo">
          <img src={logo10} />
        </div>
        <div className="carousel-logo">
          <img src={logo11} />
        </div>
      </Slider>
    );
  }
}
