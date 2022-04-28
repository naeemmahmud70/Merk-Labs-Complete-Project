import React from "react";
import './ProjectCard.css'
import projectImage from "../../../images/projectImage.png";
import button from "../../../images/Button Explore More.png";

const ProjectCard = ({ details }) => {
  const { projectTitle, projectDescription } = details;
  console.log(details);
  return (
    <div className="col-md-5 mt-5">
      <div className="text-center">
        <img className="img-fluid" src={projectImage} alt="" />
        <div className="card-details">
          <p className="text-white">{projectTitle}</p>
          <p className="text-secondary">{projectDescription}</p>
          <img src={button} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
