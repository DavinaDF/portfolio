import data from "../data/skills.json";
import tagYellow from "../assets/images/tag_yellow.png";
import tagGreen from "../assets/images/tag_green.png";
// import tagBlue from "../assets/images/tag_bleu.png";

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills">
                {data.domaines.map((domaine, index)=> (
                    <section className="domain-column" key={index}>
                        <div className="tag-name">
                            <img src={tagYellow} alt="" />
                            <h3>{domaine.name}</h3>
                        </div>
                        <ul className="list-skills">
                            {domaine.skills.map((skill, index)=>(
                                <div className="tag-skill"  key={index}>
                                    <img src={tagGreen} alt="" />
                                    <h4>{skill}</h4>
                                </div>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
            {/* <div className="services">
                <ul className="list-services">
                    {data.services.map((service)=>(
                        <div className="tag-service">
                            <img src={tagBlue} alt="" />
                            <h4>{service}</h4>
                        </div>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};

export default Skills;