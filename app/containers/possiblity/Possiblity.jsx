import React from "react";
import PossiblityImg from "../../assets/possibility.png";
import Image from "next/image";
const Possiblity = () => {
  return (
    <div
      id="possiblity"
      className="section section-margin mb-40  flex flex-col lg:flex-row gap-x-12 items-center"
    >
      <div>
        <Image src={PossiblityImg} alt="possiblity"></Image>
      </div>
      <div className="mt-20">
        <p className="text-xl font-normal text-[#71E5FF] mb-8">
          Request Early Access to Get Started
        </p>
        <h2 className="gradient__text mb-8 text-3xl lg:text-4xl font-extrabold">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-xl font-normal text-textColor mb-8">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="text-xl font-normal text-colorSubText">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possiblity;
