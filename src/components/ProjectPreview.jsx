import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../../src/data/projects.json";
import ProjectModal from "./ProjectModal";
import close from "../assets/images/Close-modal.png";
import biggerModal from "../assets/images/Bigger-modal.png";
import littleModal from "../assets/images/Little-modal.png";

const ProjectPreview = () => {
  const [isVisible, setVisibleModal] = useState(false);
  const [project, setId] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState();

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  const handleDisplayModal = (project) => {
    setVisibleModal(true);
    setId(project);
  };

  return (
    <section className="py-16 pb-[300px] bg-gradient-to-r from-purple-800 to-indigo-800">
      <div className="gallery-project mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {projectsData.map((project) => (
          // <motion.div
          //   key={project.id}
          //   className={`card cursor-pointer h-[500px] bg-center rounded-[20px] ${project.id === expandedIndex ? "expanded" : ""}`}
          //   variants={cardVariants}
          //   initial="collapsed"
          //   animate={project.id === expandedIndex ? "expanded" : "collapsed"}
          //   transition={{ duration: 0.5 }}
          //   onClick={() => handleCardClick(project.id)}
          //   style={{
          //     backgroundImage: `url(${project.image})`,
          //   }}
          // >
          //   <div className="card-content h-full flex flex-col justify-end">
          //     <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
          //       <h3 className="text-xl font-semibold text-white text-center">
          //         {project.client}
          //       </h3>
          //       {project.id === expandedIndex && (
          //         <p className="mt-2 text-gray-300 text-center">
          //           {project.description}{" "}
          //         </p>
          //       )}
          //     </div>
          //   </div>
          // </motion.div>
          <div>
            <div
              className="card-project"
              key={project.id}
              onClick={(e) => {
                e.preventDefault();
                handleCardClick(project.id);
              }}
            >
              <img className="background" src={backModal} alt="" />
              <div className="actions-modal">
                <img className="little" src={littleModal} alt="" />
                <img className="bigger" src={biggerModal} alt="" />
                <img className="close" src={close} alt="" />
              </div>
              <h3>{project.client}</h3>
              <img
                className="preview"
                src={project.image}
                alt="Visuel projet"
              />
            </div>
            <div
              className="card"
              key={project.id}
              onClick={(e) => {
                e.preventDefault();
                handleDisplayModal(project);
              }}
            >
              <input type="radio" name="slide" id={project.id} checked />
              <label
                htmlFor={project.id}
                className="content"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <img src={project.image} alt="Visuel projet" />
                <div className="description">
                  <h3>{project.client}</h3>
                  <p>{project.title}</p>
                </div>
              </label>
            </div>
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
    </section>
  );
};

export default ProjectPreview;
