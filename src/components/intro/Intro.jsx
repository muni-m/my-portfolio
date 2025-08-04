import React from "react";
import "./intro.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.webp";

const Intro = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={img} alt="Molakalapudi Muniraja" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>6+ Years</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>

        <p>
          Front-End Developer with over 6 years of experience building
          responsive, high-performance web applications using JavaScript, HTML5,
          and CSS3. Skilled in modern frameworks and libraries such as React.js,
          Redux, TypeScript, Tailwind CSS, Bootstrap, Jest, and Playwright for
          UI testing. Proven ability to develop scalable, component-driven
          architectures across Finance, Healthcare, and E-commerce domains.
          Strong understanding of Functional Components, OOP principles, and
          clean, reusable code. Experienced in Agile/Scrum workflows, with
          effective collaboration across cross-functional teams using tools like
          VS Code, Git, GitHub, GitLab, JIRA, and Confluence.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  </section>
);

export default Intro;
