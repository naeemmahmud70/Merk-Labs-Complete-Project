import React, { useEffect } from "react";
import "./Footer.css";
import vector from "../../images/fotter-vector.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container MarginTop">
      <div className="row mt-5 p-4">
        <div data-aos="fade-up" className="col-md-3 merka-flex">
          <div>
            <div className="d-flex my-5 footer-div ">
              <div className="icon-transform-effect">
                <img src={vector} alt="" />
              </div>
              <h5 className="text-white fw-bold px-3">Merk</h5>
            </div>
            <div className="my-4 footer-div">
              <small className="footer-text minus-margin">
                Copyright © 2021 <br /> Design By Merk Labs
              </small>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="col-md-3">
          <h6 className="text-white my-5 footer-div">SERVICES</h6>
          <p className="footer-text minus-margin">Web Development</p>
          <p className="footer-text">App Development</p>
          <p className="footer-text">UI Design</p>
          <p className="footer-text">Consultation</p>
          <p className="footer-text">Maintenance</p>
        </div>
        <div data-aos="fade-up" className="col-md-3 footer-div">
          <h6 className="text-white my-5">COMPANY</h6>
          <p className="footer-text minus-margin">About</p>
          <p className="footer-text">Contact</p>
          <p className="footer-text">Send Quote</p>
          <p className="footer-text">Privacy Policy</p>
          <p className="footer-text">Term of Service</p>
          <p className="footer-text">Jobs</p>
        </div>
        <div data-aos="fade-up" className="col-md-3 footer-div">
          <h6 className="text-white my-5">RESOURCES</h6>
          <p className="footer-text minus-margin">Support</p>
          <p className="footer-text">Documentation</p>
          <p className="footer-text">License</p>
          <p className="footer-text">License</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
