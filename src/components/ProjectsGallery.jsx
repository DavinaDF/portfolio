import { useState } from "react";
import projectsData from "../../src/data/projects.json";

const ProjectsGallery = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <section className="projects-gallery">
      <div className="cards">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`card ${index === hoverIndex ? "active" : ""}`}
            // onMouseEnter={() => handleMouseEnter(index)}
            // onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className="card-content">
              <div className="category">{project.category}</div>
              <div className="legend">
                <div className="description">
                  <strong>{project.client}</strong>
                  <p>{project.title}</p>
                </div>
              </div>
            </div>
          </div>
          // {/* <div className="projectCard">
          //   <div className="front"></div>
          //   <div className="imgContainer">

          //     <div className="category">{project.category}</div>
          //   </div>
          //   <div className="descriptionContainer">
          //     <h2 className="client">{project.client}</h2>
          //     <p className="shortDescription">{project.title}</p>
          //   </div> */}

          // {/* <div className="back">
          //     <span className="material-symbols-outlined close"> close </span>
          //     <div className="backContainer">
          //       <h2 className="client">{project.client}</h2>
          //       <h3 className="skills">{project.skills}</h3>
          //       <p>{project.description}</p>
          //     </div>
          //   </div> */}
          // {/* </div> */}
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;
