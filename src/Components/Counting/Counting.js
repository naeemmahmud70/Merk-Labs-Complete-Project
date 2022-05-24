import React, { useEffect, useState } from "react";
import "./Counting.css";
import dots from "../../images/dots.png";
import line from "../../images/Group 66.png";
import company from "../../images/Company Logo (1).png";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counting = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="blue-bg-color row blur-bg">
      <div
        data-aos="fade-up"
        className="company-bg text-center p-5 Zindex btn-transform-effect"
      >
        <p className="fw-bold text-white">
          Trusted by Leading Dapp Teams and Enterprises
        </p>
        <img className="img-fluid px-5" src={company} alt="" />
      </div>
      <div className="counting-header-bg">
        <div className="d-flex justify-content-end dots">
          <img className="img-fluid" src={dots} alt="" />
        </div>
        <div className="d-flex justify-content-center">
        <div id="counting-width" className="row header-height p-4">
          <div data-aos="fade-right" className="col-lg-8 m-bottom">
            <h1 className="top-header-text">
              We provide The Best To Protect Your Users And Their Investments
            </h1>
            <p className="header-text-style justifyText">
              Merklabs is a reputed name in the field of blockchain technology
              encompassing all the segments of this revolutionary field.
              Pioneering the essence of blockchain security and audits, we
              secure your present and future through the parameters of
              technology.
            </p>
          </div>

          <div data-aos="fade-up" id="counting-container" className="col-lg-4 glass-bg">
            <div className="m-bottom">
              <div className="d-flex count-position">
                <div>
                  <img className="lineHeight" src={line} alt="" />
                </div>
                <div className="mx-3">
                  <div className="mt-3">
                  <CountUp
                      {...rest}
                      start={viewPortEntered ? null : 0}
                      end={100}
                      duration={1}
                    >
                      {({ countUpRef }) => {
                        return (
                          <div className="d-flex">
                            <VisibilitySensor
                              active={!viewPortEntered}
                              onChange={(isVisible) => {
                                if (isVisible) {
                                  setViewPortEntered(true);
                                }
                              }}
                              delayedCall
                            >
                              <h4 className="count" ref={countUpRef}></h4>
                            </VisibilitySensor>
                            <span className="count">+</span>
                          </div>
                        );
                      }}
                    </CountUp>
                    <p className="service">
                      Blockchain companies <br /> protected
                    </p>
                  </div>
                  <div className="countMarginTop">
                    <CountUp
                      {...rest}
                      start={viewPortEntered ? null : 0}
                      end={200}
                      duration={1}
                    >
                      {({ countUpRef }) => {
                        return (
                          <div className="d-flex">
                            <VisibilitySensor
                              active={!viewPortEntered}
                              onChange={(isVisible) => {
                                if (isVisible) {
                                  setViewPortEntered(true);
                                }
                              }}
                              delayedCall
                            >
                              <h4 className="count" ref={countUpRef}></h4>
                            </VisibilitySensor>
                            <span className="count">+</span>
                          </div>
                        );
                      }}
                    </CountUp>

                    <p className="service">Issues discovered</p>
                  </div>
                  <div className="countMarginTop">
                  <CountUp
                      {...rest}
                      start={viewPortEntered ? null : 0}
                      end={10000}
                      duration={2}
                    >
                      {({ countUpRef }) => {
                        return (
                          <div className="d-flex">
                            <VisibilitySensor
                              active={!viewPortEntered}
                              onChange={(isVisible) => {
                                if (isVisible) {
                                  setViewPortEntered(true);
                                }
                              }}
                              delayedCall
                            >
                              <h4 className="count" ref={countUpRef}></h4>
                            </VisibilitySensor>
                            <span className="count">+</span>
                          </div>
                        );
                      }}
                    </CountUp>
                    <p className="service">Analyses available per month</p>
                  </div>
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
