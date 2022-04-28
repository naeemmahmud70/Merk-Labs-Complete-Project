import React from "react";
import './LaunchPad.css';
import onBoard from "../../images/2.png";
import neon3 from "../../images/Neon 3.png";

const LaunchPad = () => {
  return (
    <div className="row p-4 blue-bg-color launchPad-div">
      <div className="col-md-7">
        {/* <div className="lineMargin">
          <img className="img-fluid" src={neon3} alt="" />
        </div> */}
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
      <div className="col-md-5">
        <img className="img-fluid" src={onBoard} alt="" />
      </div>
    </div>
  );
};

export default LaunchPad;
