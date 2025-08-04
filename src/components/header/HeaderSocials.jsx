import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => (
  <div className="header__socials">
    <a
      href="https://www.linkedin.com/in/muniraja-molakalapudi/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <BsLinkedin />
    </a>
    <a
      href="https://github.com/Muniraja-M"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>
  </div>
);

export default HeaderSocials;
