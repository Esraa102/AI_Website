import React from "react";
import "./header.css";
import People from "../../assets/people.png";
import AI from "../../assets/ai.png";
import Image from "next/image";
const Header = () => {
  return (
    <div
      id="home"
      className="section section-margin flex flex-col gap-5   items-center md:flex-row"
    >
      <div className="w-full">
        <h1 className="heading  gradient__text">
          Let&apos;s Build Something Amazing With GPT3 OpenAI
        </h1>
        <p className="text-[#81AFDD] text-[18px] font-normal mb-5">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form
          action=""
          className="flex-col mb-5 lg:flex-row flex w-full gap-y-3"
        >
          <input
            className="input"
            type="email"
            placeholder="Your Email Address"
            required
          />
          <button
            type="submit"
            className=" w-[30%] px-4 text-white bg-orange py-2"
          >
            Get Started
          </button>
        </form>
        <div className="flex gap-4 flex-wrap items-center">
          <Image src={People} alt="people"></Image>
          <p className="text-white text-sm font-medium">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="w-full">
        <Image src={AI} alt="ai"></Image>
      </div>
    </div>
  );
};

export default Header;
