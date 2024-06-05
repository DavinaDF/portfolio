import projectBackground from "../assets/images/Card-project.png";
import projectsData from "../../src/data/projects.json";
import skillTag from "../assets/images/tag_green.png";

const ProjectPreview = () => {

    return (
        <div className="list-project">
            <ul className="gallery">
                {projectsData.map((project) => (
                    <div className="gallery__project" key={project.id}>
                        <img className="background-card-project" src={projectBackground} alt="Background card project" />
                        <img src={skillTag} alt="Domaine de compétence du projet" />
                        <h3>{project.category}</h3>
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ProjectPreview;