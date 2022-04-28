import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-bg sticky-top t-0">
      <nav class="navbar navbar-expand-lg navbar-light">
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
              <a className="nav-link tabStyle text-white" href="#">
                Home
              </a>
              <a className="nav-link tabStyle text-white" href="#">
                Projects
              </a>
              <a className="nav-link tabStyle text-white" href="#">
                Service
              </a>
              <a className="nav-link tabStyle text-white" href="#">
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
