import { useState } from "react";
import projectsData from "../../src/data/projects.json";
import ProjectModal from "./ProjectModal";
import close from "../assets/images/Close-modal.png";
import biggerModal from "../assets/images/Bigger-modal.png";
import littleModal from "../assets/images/Little-modal.png";

const ProjectPreview = () => {
  const [isVisible, setVisibleModal] = useState(false);
  const [project, setId] = useState([]);

  const closeModal = () => {
    setVisibleModal(false);
  };

  const handleDisplayModal = (project) => {
    setVisibleModal(true);
    setId(project);
  };

  return (
    <div className="gallery-project">
      {projectsData.map((project) => (
        // <div className="card-project" key={project.id} onClick={
        //     (e) => {
        //         e.preventDefault();
        //     handleDisplayModal(project)}} >
        //     {/* <img className="background" src={backModal} alt="" /> */}
        //     <div className="actions-modal">
        //         <img className="little" src={littleModal} alt="" />
        //         <img className="bigger" src={biggerModal} alt="" />
        //         <img className="close" src={close} alt="" />
        //     </div>
        //     <h3>{project.client}</h3>
        //     <img className="preview" src={project.image} alt="Visuel projet" />
        // </div>
        <div className="card" key={project.id}>
          <input type="radio" name="slide" id={project.id} checked />
          <label htmlFor={project.id} className="content">
            <img src={project.image} alt="Visuel projet" />
            <div className="description">
              <h3>{project.client}</h3>
              <p>{project.title}</p>
            </div>
          </label>
        </div>
      ))}
      {isVisible && (
        <ProjectModal
          project={project}
          isOpen={isVisible}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectPreview;
