import React, { useEffect } from "react";
import box from "../../../images/Box.png";
import Stepper from "../../../images/Stepper Status.png";
import "./MainHeader.css";
import packag from "../../../images/package.png";
import Bitcoin from "../../../images/bitcoin-logo.png";
import HeroWaves from "../../../images/Hero Waves.png";
import twitter from "../../../images/Twiiter.png";
import instagram from "../../../images/insta.png";
import facebook from "../../../images/fb.png";
import line from "../../../images/Line 2.png";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import Wave from "react-wavify";

const MainHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const styles = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 15 },
    delay: 400,
  });

  return (
    <div id="home" className="header-bg">
      <Wave fill="#03205f" mask="url(#mask)" className="top-wave">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2560" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <div className="row">

        <div className="col-lg-7">
          <div className="d-flex justify-content-center">
            <div className="container-width">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="icon-transform-effect">
                    <img className="box" src={box} alt="" />
                  </div>
                  <div>
                    <img className="stepper" src={Stepper} alt="" />
                  </div>
                </div>
                <div className="p-4 banner-text">
                  <div data-aos="fade-right">
                    <h1 className="top-header-text">
                      MERKLABS BLOCKCHAIN DEVELOPMENT AND{" "}
                      <img src={packag} alt="" /> SECURITY SOLUTIONS
                    </h1>
                  </div>
                  <div className="btn-transform-effect">
                    <button className="btn-bg explore-btn text-white fw-bold btn-hover">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-10 col-sm-10 bitcoin-bg">
          <div className="p-4">
            <animated.div style={styles}>
              <img className="img-fluid bitcoin-Img" src={Bitcoin} alt="" />
            </animated.div>
          </div>
        </div>

        <div className="col-lg-1 col-md-1 col-sm-1">
          <div className="social-icons text-center">
            <div className="icon-transform-effect">
              <img className="img-fluid social-icon" src={twitter} alt="" />
            </div>
            <div className="icon-transform-effect">
              <img className="img-fluid social-icon" src={instagram} alt="" />
            </div>
            <div className="icon-transform-effect">
              <img className="img-fluid social-icon" src={facebook} alt="" />
            </div>
            <div className="line-div icon-transform-effect">
              <img className="img-fluid social-icon" src={line} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <Wave fill="#03205f" mask="url(#mask)" className="wave-height">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="2560"
                  height="200"
                  fill="url(#gradient)"
                />
              </mask>
            </defs>
          </Wave>
        </div>
        <img className="img-fluid" src={HeroWaves} alt="" />
      </div>
    </div>
  );
};

export default MainHeader;
