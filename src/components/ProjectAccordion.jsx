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
            <div className="legend">
              <span className="category">{project.category}</span>
              <h3>{project.client}</h3>
              <p>{project.title}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectAccordion;
