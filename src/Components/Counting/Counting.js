import React from "react";
import "./Counting.css";
import dots from "../../images/dots.png";
import line from "../../images/Group 66.png";
import company from "../../images/Company Logo (1).png";

const Counting = () => {
  return (
    <div className="blue-bg-color row">
      <div className="company-bg text-center p-5 Zindex">
        <p className="fw-bold text-white">Trusted by Leading Dapp Teams and Enterprises</p>
        <img className="img-fluid" src={company} alt="" />
      </div>
      <div className="counting-header-bg">
        <div className="d-flex justify-content-end dots">
          <img className="img-fluid" src={dots} alt="" />
        </div>
        <div className="row  header-height p-4">
          <div className="col-lg-8 m-bottom">
            <h1 className="top-header-text">
              We provide The Best To Protect Your Users And Their Investments
            </h1>
            <p className="header-text-style just justifyText">
              Merklabs is a reputed name in the field of blockchain technology
              encompassing all the segments of this revolutionary field.
              Pioneering the essence of blockchain security and audits, we
              secure your present and future through the parameters of
              technology.
            </p>
          </div>

          <div className="col-lg-4 glass-bg">
            <div className="m-bottom">
              <div className="d-flex count-position">
                <div>
                  <img className="lineHeight" src={line} alt="" />
                </div>
                <div className="mx-3">
                  <div className="mt-3">
                    <p className="count">100+</p>
                    <p className="service">
                      Blockchain companies <br /> protected
                    </p>
                  </div>
                  <div className="countMarginTop">
                    <p className="count">200+</p>
                    <p className="service">Issues discovered</p>
                  </div>
                  <div className="countMarginTop">
                    <p className="count">10,000+</p>
                    <p className="service">Analyses available per month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
