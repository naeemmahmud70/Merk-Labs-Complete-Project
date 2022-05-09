import React, { useEffect } from "react";
import "./OurTeam.css";
import team from "../../images/Team Illustration.png";
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container team MarginTop">
      <div className="row p-4">
        <div className="col-md-6">
          <p className="our-team">Our Team</p>
          <p className="header-text">MEET THE TEAM OF BEST DEVELOPERS:</p>
          <p className="description justifyText">
            We have a team of skilled veteran developers who exhibit amazing
            efficiency in their performance. With MerkLabs, you are in safe
            hands. We understand your needs and give out a performance that
            matches your expectations.
          </p>
          <div className="my-5 btn-transform-effect">
            <button className="btn-bg text-white fw-bold">Explore More</button>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="col-md-6 img-transform-effect">
          <img className="img-fluid" src={team} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
