import React, { useEffect } from "react";
import "./WhyBest.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyBest = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const details = [
    {
      id: 1,
      title: "WE UNDERSTAND YOUR NEEDS",
      description:
        "Merklabs totally relates to your concern and the significance , the security of smart contract carries , we comprehend the vulnerabilities and give out the promise of security through auditing it and removing all the errors of the smart contracts",
    },
    {
      id: 2,
      title: "WE VERIFY AND RECTIFY",
      description:
        "Verifying the vulnerabilities of the contract , we also provide the best suggestion for rectifications. Omitting out any bugs and making your smart contract error free .",
    },
    {
      id: 3,
      title: "WE HAVE ALL",
      description:
        "We not only provide you with security but also develop efficient smart contracts to suit your needs and requirements. Ranging from various categories we are here to assist the clients from creation of smart contracts to dApps and Defis.",
    },
    {
      id: 4,
      title: "WE ADD VALUE TO YOUR IDEAS",
      description:
        "Team Marklabs put in the best of its efforts to give out incredible results. We ensure and prioritize client satisfaction and exhibit results that match your expectations.Adding value to your projects is our ultimate goal.",
    },
  ];
  return (
    <div id="service" className="container my-5">
      <div className="text-center">
        <p className="why">Why</p>
        <h3 className="header-text">WE ARE THE BEST?</h3>
      </div>
      <div className="row d-flex flex-wrap justify-content-center align-item-center">
        {details.map((details) => (
          <div data-aos="fade-up" className="col-md-5 mt-5 px-4">
            <h4 className="text-white">{details.title}</h4>
            <p className="textWhite justifyText">{details.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBest;
