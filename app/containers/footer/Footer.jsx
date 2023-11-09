import React from "react";
import "./footer.css";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="bg-colorFooter">
      <div className="section mb-0">
        <h2 className="footer-heading gradient__text">
          Do you want to step in to the future before others
        </h2>
        <button className="footer-btn">Request Early Access</button>
        <div className="footer-links-content">
          <div>
            <Image
              src={Logo}
              alt="logo"
              className="mb-5"
              width={118}
              height={30}
            ></Image>
            <p className="text-xs text-white">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="text-white">
            <h5 className="footer-sub-link  ">Links</h5>
            <p className="footer-link link-hover-effect">Overons</p>
            <p className="footer-link link-hover-effect">Social Media</p>
            <p className="footer-link link-hover-effect">Customers</p>
            <p className="footer-link link-hover-effect">Contact</p>
          </div>
          <div className="text-white">
            <h5 className="footer-sub-link ">Company</h5>
            <p className="footer-link link-hover-effect">Terms & Conditions</p>
            <p className="footer-link link-hover-effect">Privacy Policy</p>
            <p className="footer-link link-hover-effect">Contact</p>
          </div>
          <div className="text-white">
            <h5 className="footer-sub-link ">Get In Touch</h5>
            <p className="footer-link link-hover-effect">
              Crechterwoord K12 182 DK Alknjkcb
            </p>
            <p className="footer-link link-hover-effect">085-132567</p>
            <p className="footer-link link-hover-effect">info@payme.net</p>
          </div>
        </div>
        <p className="text-center pt-5 pb-1 text-[#ddd]">
          © 2023 GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
