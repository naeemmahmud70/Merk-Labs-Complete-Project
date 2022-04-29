import React from "react";
import "./Contact.css";
import call from "../../images/Frame 9.png";
import message from "../../images/Frame 10.png";
import contact from "../../images/Contact Form.png";

const Contact = () => {
  return (
    <div className="container">
      <hr className="text-white" />
      <div className="row mt-5">
        <div className="col-md-6">
          <div>
            <p className="contact">CONTACT</p>
            <h4 className="header-text">
              We love receiving messages from you, we are waiting for it.
            </h4>
          </div>
          <div className="mt-5">
            <div className="d-flex my-4">
              <div>
                <img src={call} alt="" />
              </div>
              <div className="px-4">
                <p className="text-secondary">Phone</p>
                <h5 className="text-white">+62 1234 8921</h5>
              </div>
            </div>
            <div className="d-flex my-4">
              <div>
                <img src={message} alt="" />
              </div>
              <div className="px-4">
                <p className="text-secondary">Email</p>
                <h5 className="text-white">support@MerkLabs.tld</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="text-center px-5 pt-4">
            <img className="img-fluid" src={contact} alt="" />
          </div>
        </div>
      </div>

      <div className="MarginTop">
        <div className="row p-5 joinUs my-5 m-1 rounded shadow ">
          <div className="col-md-8">
            <h3 className="header-text">
              We've prepared everything, it's time for you to tell the problem
            </h3>
          </div>
          <div className="col-md-4">
            <div className="mt-4">
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
