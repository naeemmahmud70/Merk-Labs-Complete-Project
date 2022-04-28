import React from "react";
import "./Defi.css";
import UiIllustration from "../../images/UI Design Illustration.png";

const Defi = () => {
  return (
    <div className="row p-4 defi-height blue-bg-color">
      <div className="col-md-5">
        <img className="img-fluid" src={UiIllustration} alt="" />
      </div>
      <div className="col-md-7">
        <p className="defi">Defi</p>
        <p className="header-text">Scale the world of DeFi</p>
        <p className="description justifyText">
          Being the veterans in the blockchain industry, we understand the hype
          of decentralized finance and the contemporary optimizations in the
          financial sector and hence taking the grasp of the moment , we have
          developed exceptional projects in the world of DeFi.
        </p>
      </div>
    </div>
  );
};

export default Defi;
