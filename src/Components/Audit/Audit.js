import React from "react";
import "./Audit.css";
import development from "../../images/Development Illustration.png";
import neon2 from "../../images/Neon 2.png";

const Audit = () => {
  return (
    <div className="row p-4 blue-bg-color">
      <div className="col-md-5 mt-5">
        <img className="img-fluid" src={development} alt="" />
      </div>
      <div className="col-md-7 mt-5">
        <div>
          <p className="audit">AUDIT</p>
          <p className="header-text">Stay secure and safe</p>
          <p className="description justifyText">
            Above all that matters is a secure and safe smart contract that is
            free from any vulnerability and does not hamper the investment of
            the various people who have trusted you. We also provide auditing
            services , so that you can stay assured of the security as we are
            quick in auditing and exposing the bugs of your smart contract.
          </p>
        </div>
        <div>
          <img className="img-fluid neon2" src={neon2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Audit;
