import React from "react";
import "./whatGPT3.css";
const WhatGPT3 = () => {
  return (
    <div
      id="whatIsGPT3"
      className="wgpt3-section wgpt3-gradient__bg section section-margin"
    >
      {/*First Child */}
      <div className="first-child">
        <div className="w-full lg:w-[40%]">
          <span className="line"></span>
          <h2 className="text-2xl font-extrabold text-white">What Is GPT3?</h2>
        </div>
        <p className="paragraph">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      {/* Second Child */}
      <div className="second-child">
        <h2 className="gradient__text text-2xl lg:text-3xl font-extrabold">
          The possibilities are beyond
          <br /> your imagination
        </h2>
        <a href="/" className="text-[16px] font-normal text-colorSubText">
          Explore The Library
        </a>
      </div>
      {/* Last Child */}
      <div className="last-child">
        <div>
          <span className="line"></span>
          <h4 className="subheading">Chatbots</h4>
          <p className="subParagraph">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>
        <div>
          <span className="line"></span>
          <h4 className="subheading">Knowledgebase</h4>
          <p className="subParagraph">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
        <div>
          <span className="line"></span>
          <h4 className="subheading">Education</h4>
          <p className="subParagraph">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments .
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
