import React from "react";
import Image from "next/image";
import BrandOne from "../../assets/google.png";
import BrandTwo from "../../assets/dropbox.png";
import BrandThree from "../../assets/shopify.png";
import BrandFour from "../../assets/slack.png";
const Brand = () => {
  return (
    <div className="section section-margin flex flex-wrap items-center justify-evenly gap-y-5">
      <div>
        <Image
          src={BrandOne}
          alt="brand-one"
          className="cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"
        ></Image>
      </div>
      <div>
        <Image
          src={BrandTwo}
          alt="brand-two"
          className="cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"
        ></Image>
      </div>
      <div>
        <Image
          src={BrandThree}
          alt="brand-three"
          className="cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"
        ></Image>
      </div>
      <div>
        <Image
          src={BrandFour}
          alt="brand-four"
          className="cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"
        ></Image>
      </div>
    </div>
  );
};

export default Brand;
