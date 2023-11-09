import React from "react";
import "./cta.css";
const Cta = () => {
  return (
    <div className="section section-margin ">
      <div className="get-started-gradient__bg cta-container">
        <div>
          <p className="text-sm font-normal mb-5">
            Request Early Access to Get Started
          </p>
          <p className="text-2xl font-extrabold ">
            Register today & start exploring the endless possiblities.
          </p>
        </div>
        <button className="cta-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
