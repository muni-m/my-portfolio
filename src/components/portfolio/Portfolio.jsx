import React from "react";
import "./portfolio.css";

const soloProjects = [
  {
    id: 1,
    title: "To be added",
    img: "",
    description: "This is a placeholder project. More coming soon!",
    technologies: "HTML | CSS | JavaScript | React.js",
    link: "",
    github: "",
  },
  {
    id: 2,
    title: "To be added",
    img: "",
    description: "This is a placeholder project. More coming soon!",
    technologies: "HTML | CSS | JavaScript | React.js",
    link: "",
    github: "",
  },
  {
    id: 3,
    title: "To be added",
    img: "",
    description: "This is a placeholder project. More coming soon!",
    technologies: "HTML | CSS | JavaScript | React.js",
    link: "",
    github: "",
  },
];

const Portfolio = () => {
  const isSingle = soloProjects.length === 1;

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div
        className={`container portfolio__container ${
          isSingle ? "single-card-center" : ""
        }`}
      >
        {soloProjects.map(
          ({ id, img, title, description, technologies, link, github }) => (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                {img ? (
                  <img src={img} alt={title} />
                ) : (
                  <div className="img-placeholder">No Image</div>
                )}
              </div>
              <div className="portfolio__item-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="portfolio__tech">{technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
