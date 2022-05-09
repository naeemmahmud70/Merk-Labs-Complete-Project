import React, { useEffect } from "react";
import './LaunchPad.css';
import onBoard from "../../images/2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const LaunchPad = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="row p-4 blue-bg-color launchPad-div">
      <div className="col-md-7">
        <div>
          <p id="launchPad">LAUNCHPAD</p>
          <p className="header-text">Stabilize and Promote</p>
          <p className="description justifyText">
            Amidst the competition in the Defi space, good marketing strategy
            and implementation plays the key role to stabilize and promote your
            growth in the blockchain industry. Retaining this awareness, we can
            develop launchpad and IDO for your presale and ICO.
          </p>
        </div>
      </div>
      <div data-aos="zoom-in" className="col-md-5 p-5 img-transform-effect">
        <img className="img-fluid" src={onBoard} alt="" />
      </div>
    </div>
  );
};

export default LaunchPad;
