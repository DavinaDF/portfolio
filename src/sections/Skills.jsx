import data from "../data/skills.json";
import tagYellow from "../assets/images/tag_yellow.png";
import tagGreen from "../assets/images/tag_green.png";
import tagBlue from "../assets/images/tag_bleu.png";

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="part">
                <h2>Mes compétences</h2>
                <div className="bloc">
                {data.domaines.map((domaine, index)=> (
                    <div className="domain-column" key={index}>
                        <div className="name">
                            <img src={tagYellow} alt="" />
                            <h3>{domaine.name}</h3>
                        </div>
                        <ul className="list">
                            {domaine.skills.map((skill, index)=>(
                                <div className="tag"  key={index}>
                                    <img src={tagGreen} alt="" />
                                    <h4>{skill}</h4>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
            </div>
            <div className="part">
                <h2>Services</h2>
                <div className="bloc-services">
                {data.services.map((service,index)=>(
                    <div className="name-service" key={index}>
                        <img src={tagBlue} alt="" />
                        <h3>{service}</h3>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;