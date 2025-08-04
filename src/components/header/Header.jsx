import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => (
  <header id="home">
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>MUNIRAJA - M</h1>
      <h5 className="text-light">Front-End Developer</h5>
      <CTA />
      <HeaderSocials />
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  </header>
);

export default Header;
