import React from "react";
import "./Projects.css";
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
    <div id="Projects" className="p-4 mt-5">
      <div className="row">
        <div className="col-lg-6">
          <p className="projects">Projects</p>
          <h3 className="header-text">
            We have completed many amazing projects that you will not believe
          </h3>
        </div>

        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div class="dropdown btn-transform-effect mt-5">
            <button
              className="dropdown-toggle tech-drop "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Technology
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="animation-border mt-5"></span>
      <div className="row d-flex flex-wrap justify-content-center align-item-center">
        {projectDetails.map((details) => (
          <ProjectCard details={details} key={details.id}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
