import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-bg sticky-top t-0">
      <div class="container-fluid">
        <a class="brand-name text-white" href="#">
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
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
  );
};

export default Navbar;
