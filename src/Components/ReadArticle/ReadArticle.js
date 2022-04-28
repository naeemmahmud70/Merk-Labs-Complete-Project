import React from "react";
import "./ReadArticle.css";
import articleImg from "../../images/article-image.png";
import slideArticle from "../../images/Group 45.png";
import neon4 from "../../images/Neon 4.png";

const ReadArticle = () => {
  return (
    <div className="row blue-bg-color marginLeft p-4">
      <div className="d-flex justify-content-end">
        <img className="img-fluid neon4" src={neon4} alt="" />
      </div>
      <div className="row article-bg shadow margin-Left">
        <div className="col-md-6 p-5">
          <img className="img-fluid articleImg" src={articleImg} alt="" />
        </div>
        <div className="col-md-6 p-4">
          <div className="article-text">
            <p className="text-white article">Read Article</p>
            <h5 className="text-white my-4">
              The Best Way to Avoid Data Leaks and Privacy Scandals: Don't Own
              Consumer Data
            </h5>
            <p className="text-white text-secondary">
              “These are companies, like intellicam, that are actually working
              to get our data onto personal servers so we own it, not the
              companies”
            </p>
          </div>
          <div>
            <img src={slideArticle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadArticle;
