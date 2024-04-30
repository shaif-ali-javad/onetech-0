import "./img.css";

// import Text from "./img-typewriter";
// import "animate.css";

import animation0 from "../../assets/lt62Jujd6s.json";
import Lottie from "lottie-react";

const Img_txt = () => (
  <div className="img-main-over">
    <div className="content-main-container">
      <div className="content-main">
        <div className="main-txt">
          <div className="animate__animated animate__bounce img-main-contain-txt">
            {/* <span className="img-main-txt"> */}
              Secure IT<br />with us
              {/* </span> */}
          </div>
          <div className="content-main-type">{/* <Text /> */}</div>
          <div className="img-main-1-container">
            {/* <Lottie animationData={animation0} className="img-main-1" /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Img_txt;
