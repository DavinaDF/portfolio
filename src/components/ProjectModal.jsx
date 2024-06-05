import modal from "../assets/images/Modal.png";
import projects from "../data/projects.json";

const ProjectModal = ({projectID}) => {

    const actualProject = projects[{projectID}];
    console.log(actualProject);

    return (
        <div className="project-modal">
            <img className="background-modal" src={modal} alt="Background modal détail projet" />
            <h2>{actualProject.title}</h2>
            <p>{actualProject.description}</p>
        </div>
    );
};

export default ProjectModal;