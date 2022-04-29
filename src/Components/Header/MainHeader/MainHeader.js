import React from "react";
import box from "../../../images/Box.png";
import Stepper from "../../../images/Stepper Status.png";
import "./MainHeader.css";
import Button from "../../../images/Button Explore More.png";
import packag from "../../../images/package.png";
import Bitcoin from "../../../images/bitcoin-logo.png";
import SocialIcon from "../../../images/Social Media Icon.png";
import HeroWaves from '../../../images/Hero Waves.png'

const MainHeader = () => {
  return (
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
          <div className="p-5">
            <div>
              <h1 className="top-header-text">
                MERKLABS BLOCKCHAIN DEVELOPMENT AND <img src={packag} alt="" />{" "}
                SECURITY SOLUTIONS
              </h1>
            </div>
            <div >
              <img className="explore-btn img-fluid" src={Button} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 col-12 bitcoin-bg">
        <div className="d-flex">
          <div>
            <img className="img-fluid bitcoin-Img" src={Bitcoin} alt="" />
          </div>
          <div>
            <img className="img-fluid social-icon" src={SocialIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="row">
          <img className="img-fluid" src={HeroWaves } alt="" />
      </div>
    </div>
  );
};

export default MainHeader;