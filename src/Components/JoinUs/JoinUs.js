import React from "react";
import "./JoinUs.css";
import code from "../../images/codee.png";
import neon6 from "../../images/Neon 6.png";

const JoinUs = () => {
  return (
    <div className="row">
      <div className="d-flex justify-content-end">
        <img className="img-fluid neon6" src={neon6} alt="" />
      </div>

      <div className="row joinUs">
        <div className="col-lg-6 p-5 px-5">
          <div>
            <hr className="text-white top-border" />
            <h5 className="text-white">Join Us</h5>
            <p className="header-text py-5">BE A PART OF OUR HAPPY COMMUNITY</p>
            <p className="description justifyText">
              We take immense pride in our achievements and have a happy and
              satisfied community that trusts our work wholeheartedly. Then what
              are you waiting for ,come and be a part of the merklabs family,
              because we are here always for you.
            </p>
          </div>
          <div>
            <button className="btn-bg text-white fw-bold mt-4">Explore More</button>
          </div>
        </div>
        <div className="col-lg-6 p-4">
          <div className="d-flex justify-content-end MarginTop">
            <a className="tab" href="">
              Node
            </a>
            <a className="tab" href="">
              Java
            </a>
            <a className="tab" href="">
              Curl
            </a>
          </div>
          <div className="code-bg">
            <img className="img-fluid p-4" src={code} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
