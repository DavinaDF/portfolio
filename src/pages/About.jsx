import { div } from "motion/react-client";
import infoData from "../../src/data/infos.json";

const About = () => {
  const aboutData = infoData.about;

  return (
    <div className="about-container">
      {infoData.map((aboutCard, index) => {
        return (
          <div className="about-card" key={index}>
            <h3 className="about-title">{aboutCard.title}</h3>
            <div className="about-content">{aboutCard.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
