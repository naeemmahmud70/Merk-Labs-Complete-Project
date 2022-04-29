import React from "react";
import MainHeader from "./MainHeader/MainHeader";
import Navbar from "./Navbar/Navbar";
import './Header.css'

const Header = () => {
  return (
    <div id="home" className="header-bg row">
      <Navbar></Navbar>
      <MainHeader></MainHeader>
    </div>
  );
};

export default Header;
