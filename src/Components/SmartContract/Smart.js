import React from "react";
import "./Smart.css";
import HowWeWork from "../../images/How We Work Illustration.png";
import neon3 from "../../images/Neon 3.png";

const Smart = () => {
  return (
    <div className="smart-div">
      <div className="row p-4 blue-bg-color">
        <div className="col-md-6">
          <img className="img-fluid" src={HowWeWork} alt="" />
          {/* <img className="img-fluid neon3" src={neon3} alt="" /> */}
        </div>
        <div className="col-md-6">
          <p id="smart">SMART CONTRACT</p>
          <p className="header-text">Experience the Revolution</p>
          <p className="description justifyText">
            Merklabs has efficient developers with exceptional coding skills
            that can create any type of smart contract you desire and with
            scalable and secure code. You desire, we create it for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Smart;
