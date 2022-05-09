import React, { useEffect } from "react";
import "./Contact.css";
import call from "../../images/Frame 9.png";
import message from "../../images/Frame 10.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <span className="animation-border"></span>
      <div className="row mt-5">
        <div className="col-lg-6">
          <div>
            <p className="contact">CONTACT</p>
            <h4 className="header-text">
              We love receiving messages from you, we are waiting for it.
            </h4>
          </div>
          <div className="mt-5">
            <div className="d-flex my-4">
              <div className="icon-transform-effect">
                <img src={call} alt="" />
              </div>
              <div className="px-4">
                <p className="text-gray">Phone</p>
                <h5 className="text-white">+62 1234 8921</h5>
              </div>
            </div>
            <div className="d-flex my-4">
              <div className="icon-transform-effect">
                <img src={message} alt="" />
              </div>
              <div className="px-4">
                <p className="text-gray">Email</p>
                <h6 className="text-white">support@MerkLabs.tld</h6>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-out-up"
          className="col-lg-6 d-flex justify-content-center align-items-center mt-5"
        >
          <div className="shadow rounded message-form p-5">
            <form action="">
              <div className="row">
                <div className="col-md-6 input-div">
                  <span className="text-gray">Name</span>
                  <input className="form-input input-hight" type="text" />
                </div>
                <div className="col-md-6 input-div">
                  <span className="text-gray">Email</span>
                  <input className="form-input input-hight" type="text" />
                </div>
              </div>

              <div className="input-div">
                <span className="text-gray">Subject</span>
                <input className="form-input input-hight" type="text" />
              </div>
              <div className="input-div">
                <span className="text-gray">Message</span>
                <textarea
                  className="form-input"
                  name=""
                  id=""
                  rows="6"
                ></textarea>
              </div>
              <div className="text-center btn-transform-effect">
                <button className="btn-bg text-white fw-bold mt-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="MarginTop">
        <div className="row join-Us joinUs my-5 m-1 rounded shadow ">
          <div className="col-md-8">
            <h3 className="header-text">
              We've prepared everything, it's time for you to tell the problem
            </h3>
          </div>
          <div className="col-md-4">
            <div className="mt-4 btn-transform-effect">
              <button className="btn-bg text-white fw-bold">Send Quote</button>
              <button className="btn-bg text-white fw-bold">Ask</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
