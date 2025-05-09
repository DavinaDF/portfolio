import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../../src/data/projects.json";
import { h3 } from "motion/react-client";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  // const images = projectsData.map((project) => {
  //   project.image;
  //   console.log(project.image);
  // });

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="project-section">
      <div className="slider">
        {projectsData.map((project) => (
          <motion.div
            className={`slide ${positions[positionIndexes[project.id]]}`}
            key={project.id}
            src={project.image}
            alt={project.client}
            initial="center"
            animate={positions[positionIndexes[project.id]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              width: "40%",
              position: "absolute",
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className="info">
              <h3>{project.client}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="slide-button flex flex-row gap-3">
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
