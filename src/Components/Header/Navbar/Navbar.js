import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-bg nav-top fixed-top top-0">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <div className="d-flex justify-content-between">
            <a class=" text-white brand-name" href="#">
              Merka
            </a>
            <button
              class="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto ">
              <a className="nav-link tabStyle text-white" href="#home">
                Home
              </a>
              <a className="nav-link tabStyle text-white" href="#Projects">
                Projects
              </a>
              <a className="nav-link tabStyle text-white" href="#service">
                Service
              </a>
              <a className="nav-link tabStyle text-white" href="#blog">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
