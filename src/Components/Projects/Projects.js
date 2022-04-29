import React from "react";
import "./Projects.css";
import technology from "../../images/Field.png";
import ProjectCard from "./ProjectsCard/ProjectCard";

const Projects = () => {
  const projectDetails = [
    {
      id: 1,
      projectImage: "",
      projectTitle: "The Desktop App Landing Page",
      projectDescription: "A landing page for desktop app",
    },
    {
      id: 2,
      projectImage: "",
      projectTitle: "The Desktop App Landing Page",
      projectDescription: "A landing page for desktop app",
    },
    {
      id: 3,
      projectImage: "",
      projectTitle: "The Desktop App Landing Page",
      projectDescription: "A landing page for desktop app",
    },
    {
      id: 4,
      projectImage: "",
      projectTitle: "The Desktop App Landing Page",
      projectDescription: "A landing page for desktop app",
    },
  ];
  return (
    <div id="Projects" className="container p-5 mt-5">
      <div className="row">
        <div className="col-md-6">
          <p className="projects">Projects</p>
          <h3 className="header-text">
            We have completed many amazing projects that you will not believe
          </h3>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <img className="mt-5" src={technology} alt="" />
          </div>
        </div>
      </div>
      <hr className="text-white mt-5" />

      <div className="d-flex flex-wrap justify-content-center align-item-center">
        {projectDetails.map((details) => (
          <ProjectCard details={details} key={details.id}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
