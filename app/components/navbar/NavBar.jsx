import React, { useState } from "react";
import "./nav.css";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="mr-8">
        <Image src={Logo} alt="logo" width={62.56} height={16.0}></Image>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home" className="link link-hover-effect">
            Home
          </a>
        </li>
        <li>
          {" "}
          <a href="#whatIsGPT3" className="link link-hover-effect">
            What is GPT3
          </a>
        </li>
        <li>
          {" "}
          <a href="#features" className="link link-hover-effect">
            Open AI
          </a>
        </li>
        <li>
          <a href="#possiblity" className="link link-hover-effect">
            Case Studies
          </a>
        </li>
        <li>
          {" "}
          <a href="#blog" className="link link-hover-effect">
            Library
          </a>
        </li>
      </ul>
      <div className="signIN-signup-container">
        <a href="/" className="link link-hover-effect">
          Sign in
        </a>
        <a href="/" className="link signUp-btn">
          Sign up
        </a>
      </div>
      {/* Mobile Menue*/}
      <div>
        {toggle ? (
          <span className="toggle-btn" onClick={() => setToggle(false)}>
            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
          </span>
        ) : (
          <span className="toggle-btn" onClick={() => setToggle(true)}>
            {" "}
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </span>
        )}
        {toggle && (
          <ul className="mobile-menue scale-up-center  get-started-gradient__bg">
            <li>
              <a
                href="#home"
                className="link  text-black link-hover-effect font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#whatIsGPT3"
                className="link text-black link-hover-effect font-semibold"
              >
                What is GPT3?
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#features"
                className="link text-black link-hover-effect font-semibold"
              >
                Open AI
              </a>
            </li>
            <li>
              <a
                href="#possiblity"
                className="link text-black link-hover-effect font-semibold"
              >
                Case Studies
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#blog"
                className="link text-black link-hover-effect font-semibold"
              >
                Library
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
