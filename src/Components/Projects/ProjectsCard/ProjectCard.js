import React, { useEffect } from "react";
import "./ProjectCard.css";
import projectImage from "../../../images/projectImage.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ details }) => {
  const { projectTitle, projectDescription } = details;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="col-lg-5 col-md-6 col-sm-12 mt-5">
      <div className="text-center">
        <div className="img-transform-effect">
          <img className="img-fluid" src={projectImage} alt="" />
        </div>
        <div className="card-details">
          <p className="text-white">{projectTitle}</p>
          <p className="text-gray">{projectDescription}</p>
          <div className="btn-transform-effect">
            <button className="btn-bg text-white fw-bold ">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
