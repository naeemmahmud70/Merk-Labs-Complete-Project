import React from "react";
import "./Footer.css";
import vector from "../../images/Vector.png";

const Footer = () => {
  return (
    <div className="container MarginTop">
      <div className="row mt-5 p-4">
        <div className="col-md-3">
          <div className="d-flex my-5">
            <img src={vector} alt="" />
            <h5 className="text-white fw-bold">Merk</h5>
          </div>
          <div className="my-4">
            <small className="footer-text">
              Copyright © 2021 <br /> Design By Merk Labs
            </small>
          </div>
        </div>
        <div className="col-md-3">
          <h6 className="text-white my-5">SERVICES</h6>
          <p className="footer-text ">Web Development</p>
          <p className="footer-text">App Development</p>
          <p className="footer-text">UI Design</p>
          <p className="footer-text">Consultation</p>
          <p className="footer-text">Maintenance</p>
        </div>
        <div className="col-md-3">
          <h6 className="text-white my-5">COMPANY</h6>
          <p className="footer-text">About</p>
          <p className="footer-text">Contact</p>
          <p className="footer-text">Send Quote</p>
          <p className="footer-text">Privacy Policy</p>
          <p className="footer-text">Term of Service</p>
          <p className="footer-text">Jobs</p>
        </div>
        <div className="col-md-3">
          <h6 className="text-white my-5">RESOURCES</h6>
          <p className="footer-text">Support</p>
          <p className="footer-text">Documentation</p>
          <p className="footer-text">License</p>
          <p className="footer-text">License</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
