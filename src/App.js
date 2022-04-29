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
import Header from "./Components/Header/Header";
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
      <Header></Header>
      <Counting></Counting>
      <Defi></Defi>
      <Dapps></Dapps>
      <Audit></Audit>
      <Expert></Expert>
      <Smart></Smart>
      <LaunchPad></LaunchPad>
      <ReadArticle></ReadArticle>
      <OurTeam></OurTeam>
      <Projects></Projects>
      <JoinUs></JoinUs>
      <WhyBest></WhyBest>
      <ClientReview></ClientReview>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
