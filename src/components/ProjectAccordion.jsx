import { div } from "motion/react-client";
import { useState } from "react";
import projectsData from "../../src/data/projects.json";

const ProjectAccordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section className="projects-accordion">
      {projectsData.map((project, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <div
            key={index}
            className={`projects-accordion-item ${isActive}`}
            onClick={() => handleToggle(index)}
          >
            <img src={project.image} alt={project.title} />
            <span className="category">{project.category}</span>
            <div className="legend">
              <div className="infos">
                <h3>{project.client}</h3>
                <p>{project.description}</p>
              </div>
              <div className="links">
                <a href={project.link} target="_blank" className="web-link">
                  <i className="fa-solid fa-link"></i>
                </a>
                <a
                  href={project.gitlink}
                  target="_blank"
                  className="github-link"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectAccordion;
