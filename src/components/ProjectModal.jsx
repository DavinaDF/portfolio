import PropTypes from "prop-types";
import tagBlue from "../assets/images/tag_bleu.png";
import closeModal from "../assets/images/Close-modal.png";
import littleModal from "../assets/images/Little-modal.png";
import backLink from "../assets/images/circle_green.png";

const ProjectModal = ({project, isOpen, onClose}) => {

    if(!isOpen) return null;
    return (
        <div className="background" onClick={onClose}>
            <div className="modal-container">
                <div className="modal-header">
                    <h3>{project.client}</h3>
                    <div className="actions-modal">
                        <img className="little" src={littleModal} alt="Icon réduire modal" onClick={onClose}/>
                        <img className="close" src={closeModal} alt="Icon fermeture modal" onClick={onClose}/>
                    </div>    
                </div>
                <div className="modal-content">
                    <div className="left">
                        <img className="modal-image" src={project.image} alt="Visuel projet" />
                        <p>{project.description}</p>    
                    </div>
                    <div className="right">
                        <div className="modal-category">
                            <img src={tagBlue} alt="Tag catégorie projet" />
                            <h4>{project.category}</h4>
                        </div>
                        <div className="modal-skills">
                            <h5>Compétences principales</h5>
                            <ul>
                            {project.skills.map((skill, index)=>(
                                <p key={index}>{skill}</p>
                            ))}
                            </ul>
                        </div>
                        <div className="modal-notions">
                            <h5>Autres compétences</h5>
                            <ul>
                            {project.notions.map((notion, index)=>(
                                <p key={index}>{notion}</p>
                            ))}
                            </ul>
                        </div>
                        <div className="project-link">
                            <a href={project.link} target="_blank">
                                <img src={backLink} alt="Lien vers code Github ou site en ligne" />
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectModal.propTypes = {
    project: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default ProjectModal;