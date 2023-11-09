"use client";
import "./components/index";

import {
  Header,
  Footer,
  WhatGPT3,
  Features,
  Blog,
  Possiblity,
} from "./containers/index";
import { Brand, Cta, NavBar } from "./components";
export default function Home() {
  return (
    <div>
      <div className="gradient__bg">
        <NavBar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possiblity />
        <Cta />
        <Blog />
      </div>
        <Footer />
    </div>
  );
}
