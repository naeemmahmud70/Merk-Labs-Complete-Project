import React, { useEffect } from "react";
import "./ReadArticle.css";
import articleImg from "../../images/article-image.png";
import slideArticle from "../../images/Group 45.png";
import neon4 from "../../images/Neon 4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import left from '../../images/leftArrow.png'
import right from '../../images/rightArrow.png'

const ReadArticle = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="blog" className="row p-4">
      <div className="d-flex justify-content-end">
        <img className="img-fluid neon4" src={neon4} alt="" />
      </div>

      <div className="d-flex justify-content-end">
        <div className="row article-bg shadow margin-Left">
          <div data-aos="fade-down-right" className="col-lg-6 col-md-8 img-transform-effect">
            <img className="img-fluid articleImg" src={articleImg} alt="" />
          </div>

          <div className="col-lg-6 p-4">
            <div className="article-text">
              <p className="text-white article">Read Article</p>
              <h5 className="text-white my-4">
                The Best Way to Avoid Data Leaks and Privacy Scandals: Don't Own
                Consumer Data
              </h5>
              <p className="text-white">
                “These are companies, like intellicam, that are actually working
                to get our data onto personal servers so we own it, not the
                companies”
              </p>
            </div>
            <div className="btn-transform-effect">
              <button className="arrow-btn circle-btn "><img src={left} alt="" /></button>
              <button className="arrow-btn"><img src={right} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadArticle;
