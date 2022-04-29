import React from "react";
import "./OurTeam.css";
import team from "../../images/Team Illustration.png";

const OurTeam = () => {
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
          <div className="my-5">
            <button className="btn-bg text-white fw-bold">Explore More</button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={team} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
