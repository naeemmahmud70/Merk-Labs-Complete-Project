import React from "react";
import "./ProjectCard.css";
import projectImage from "../../../images/projectImage.png";

const ProjectCard = ({ details }) => {
  const { projectTitle, projectDescription } = details;
  console.log(details);
  return (
    <div className="col-lg-5 col-md-6 col-sm-12 mt-5">
      <div className="text-center">
        <img className="img-fluid" src={projectImage} alt="" />
        <div className="card-details">
          <p className="text-white">{projectTitle}</p>
          <p className="text-secondary">{projectDescription}</p>
          <button className="btn-bg text-white fw-bold">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
