import React from "react";
import box from "../../../images/Box.png";
import Stepper from "../../../images/Stepper Status.png";
import "./MainHeader.css";
import packag from "../../../images/package.png";
import Bitcoin from "../../../images/bitcoin-logo.png";
import SocialIcon from "../../../images/Social Media Icon.png";
import HeroWaves from "../../../images/Hero Waves.png";
import twitter from "../../../images/Twiiter.png";
import instagram from "../../../images/insta.png";
import facebook from "../../../images/fb.png";
import line from "../../../images/Line 2.png";

const MainHeader = () => {
  return (
    <div id="home" className="header-bg">
      <div className="row">
        <div className="col-md-7 col-12">
          <div className="d-flex justify-content-between">
            <div>
              <div>
                <img className="box" src={box} alt="" />
              </div>
              <div>
                <img className="stepper" src={Stepper} alt="" />
              </div>
            </div>
            <div className="p-5 banner-text">
              <div>
                <h1 className="top-header-text">
                  MERKLABS BLOCKCHAIN DEVELOPMENT AND{" "}
                  <img src={packag} alt="" /> SECURITY SOLUTIONS
                </h1>
              </div>
              <div>
                <button className="btn-bg explore-btn text-white fw-bold">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-12 bitcoin-bg p-4">
          <div>
            <div>
              <img className="img-fluid bitcoin-Img" src={Bitcoin} alt="" />
            </div>
          </div>
        </div>

        <div className="col-md-1">
          <div className="social-icons text-center">
            <div>
              <img className="img-fluid social-icon" src={twitter} alt="" />
            </div>
            <div>
              <img className="img-fluid social-icon" src={instagram} alt="" />
            </div>
            <div>
              <img className="img-fluid social-icon" src={facebook} alt="" />
            </div>
            <div className="line-div">
              <img className="img-fluid social-icon" src={line} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <img className="img-fluid" src={HeroWaves} alt="" />
      </div>
    </div>
  );
};

export default MainHeader;
