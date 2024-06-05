import projectsData from "../../src/data/projects.json";
import skillTag from "../assets/images/tag_bleu.png";

const ProjectPreview = () => {
    return (
        <div className="list-project">
            <ul className="gallery">
                {projectsData.map((project) => (
                    <div className="gallery-project" key={project.id} >
                        <h3>{project.client}</h3>
                        <div className="project-content">
                        <div className="visual-container">
                            <img src={project.image} alt="Visuel projet" />
                            <div className="tag-category">
                                <img src={skillTag} alt="Domaine de compétence du projet" />
                                <h5>{project.category}</h5>
                            </div>
                            <a href="https://github.com/DavinaDF/ArgentBank-website.git">Lien Github</a>
                            
                        </div>
                        <div className="text-container">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                        </div>
                        
                        
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ProjectPreview;