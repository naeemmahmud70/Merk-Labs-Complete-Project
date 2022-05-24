import React from "react";
import "./App.css";
import Audit from "./Components/Audit/Audit";
import ClientReview from "./Components/ClientReview/ClientReview";
import Contact from "./Components/Contact/Contact";
import Counting from "./Components/Counting/Counting";
import Dapps from "./Components/Dapps/Dapps";
import Defi from "./Components/Defi/Defi";
import Expert from "./Components/Expert/Expert";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/Header/MainHeader/MainHeader";
import Navbar from "./Components/Header/Navbar/Navbar";
import JoinUs from "./Components/JoinUs/JoinUs";
import LaunchPad from "./Components/LauchPad/LaunchPad";
import OurTeam from "./Components/OurTeam/OurTeam";
import Projects from "./Components/Projects/Projects";
import ReadArticle from "./Components/ReadArticle/ReadArticle";
import Smart from "./Components/SmartContract/Smart";
import WhyBest from "./Components/WhyBest/WhyBest";

function App() {
  return (
    <div className="blue-bg-color">
      <Navbar></Navbar>
      <MainHeader></MainHeader>
      <div className="container-fluid">
        <Counting></Counting>
        <div className="d-flex justify-content-center">
          <div className="container-width">
            <Defi></Defi>
            <Dapps></Dapps>
            <Audit></Audit>
            <Expert></Expert>
            <Smart></Smart>
            <LaunchPad></LaunchPad>
          </div>
        </div>

        <ReadArticle></ReadArticle>
        
        <div className="d-flex justify-content-center">
          <div className="container-width-middle">
            <OurTeam></OurTeam>
            <Projects></Projects>
          </div>
        </div>

        <JoinUs></JoinUs>

        <div className="d-flex justify-content-center">
          <div className="container-width-middle">
            <WhyBest></WhyBest>
          </div>
        </div>

        <ClientReview></ClientReview>

        <div className="d-flex justify-content-center">
          <div className="container-width-middle">
            <Contact></Contact>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
