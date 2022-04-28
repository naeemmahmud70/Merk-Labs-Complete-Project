import React from "react";
import "./Dapps.css";
import Maintenance from "../../images/Maintenance Illustration.png";
import neon from "../../images/Neon.png";

const Dapps = () => {
  return (
    <div className="row p-4 blue-bg-color">
      <div className="col-md-7 mb-5">
        <div>
          <img className="neon-img img-fluid" src={neon} alt="" />
        </div>
        <div>
          <p className="dapps">DAPPS</p>
          <p className="header-text">Technology made easier</p>
          <p className="description justifyText">
            Decentralized applications have found a huge user base right in the
            initial stage , and therefore we as a team have gained extensive
            expertise into the creation of dapps.
          </p>
        </div>
      </div>
      <div className="col-md-5 mb-5">
        <img className="img-fluid" src={Maintenance} alt="" />
      </div>
    </div>
  );
};

export default Dapps;
