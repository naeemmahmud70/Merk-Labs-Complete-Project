import React, { useEffect } from "react";
import "./Dapps.css";
import Maintenance from "../../images/Maintenance Illustration.png";
import neon from "../../images/Neon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Dapps = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
      <div data-aos="zoom-in" className="col-md-5 mb-5 img-transform-effect">
        <img className="img-fluid" src={Maintenance} alt="" />
      </div>
    </div>
  );
};

export default Dapps;
