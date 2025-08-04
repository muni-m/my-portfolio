import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Next.js",
  "SASS / SCSS",
  "Tailwind CSS",
  "TypeScript",
  "Redux",
  "Playwright",
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>

          <div className="experience__content">
            {frontendSkills.map((skill, index) => (
              <article key={index} className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
