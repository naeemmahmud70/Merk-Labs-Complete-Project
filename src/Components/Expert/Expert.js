import React, { useEffect } from "react";
import "./Expert.css";
import discuss from "../../images/Discuss Illustration.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Expert = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="row p-4 blue-bg-color expert-div">
      <div className="col-md-7">
        <p className="expert">EXPERT</p>
        <p className="header-text">Expert Review</p>
        <p className="description justifyText">
          Experience the guidance of various trained professionals and
          developers who are with you at every phase of your projects. We not
          only develop your project but also give out the best recommendations
          for turning it into a huge success
        </p>
      </div>
      <div className="col-md-5 p-5">
        <div data-aos="zoom-in" className="marginDiscuss img-transform-effect">
          <img className="img-fluid" src={discuss} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Expert;
