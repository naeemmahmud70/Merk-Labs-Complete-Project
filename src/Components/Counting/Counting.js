import React, { useEffect } from "react";
import "./Counting.css";
import dots from "../../images/dots.png";
import line from "../../images/Group 66.png";
import company from "../../images/Company Logo (1).png";
import AOS from "aos";
import "aos/dist/aos.css";
import Wave from "react-wavify";


const Counting = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="blue-bg-color row">
      <div
        data-aos="fade-up"
        className="company-bg text-center p-5 Zindex btn-transform-effect"
      >
        <p className="fw-bold text-white">
          Trusted by Leading Dapp Teams and Enterprises
        </p>
        <img className="img-fluid" src={company} alt="" />
      </div>
      <div className="counting-header-bg">
        <div className="d-flex justify-content-end dots">
          <img className="img-fluid" src={dots} alt="" />
        </div>
        <div className="row  header-height p-4">
          <div data-aos="fade-right" className="col-lg-8 m-bottom">
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

          <div data-aos="fade-up" className="col-lg-4 glass-bg">
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
        {/* <Wave fill="#24407aa2" mask="url(#mask)" className="bottom-wave">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2500" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave> */}
      </div>

    </div>
  );
};

export default Counting;
