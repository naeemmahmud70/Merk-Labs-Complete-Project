import React, { useEffect } from "react";
import "./Smart.css";
import HowWeWork from "../../images/How We Work Illustration.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Smart = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="smart-div">
      <div className="row p-4 blue-bg-color">
        <div data-aos="zoom-in" className="col-md-6 img-transform-effect">
          <img className="img-fluid" src={HowWeWork} alt="" />
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
