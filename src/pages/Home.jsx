// import { Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Type from "../components/Type";
import Projects from "../components/ProjectsGallery";
import ProjectAccordion from "../components/ProjectAccordion";
import ProjectsData from "../data/projects.json";

const Home = () => {
  const sectionTitle = "< DAVINA CRAHET />";

  return (
    <div className="y mandatory-scroll-snapping page-content" dir="ltr">
      <section className="presentation view-1 part" id="presentation">
        <h2>{sectionTitle}</h2>
        <div className="presentation-container">
          <div className="left-part">
            <h3 className="titre">
              <Type />
            </h3>
            <div className="texte">
              <p>
                Je vous accompagne dans vos projets de refonte ou création de
                site, en me basant sur vos <strong>besoins</strong>, vos
                <strong> contraintes</strong> et également sur l’analyse des
                besoins, usages et habitudes de vos{" "}
                <strong>utilisateurs</strong>.
              </p>
            </div>
          </div>
          <div className="right-part">
            <img
              src="/dev3d.webp"
              alt="Illustration 3D coloré d'un environnement de développement web"
            />
          </div>
        </div>
      </section>
      <section className="presta view-2 part" id="services">
        <h2>{"< Prestations />"}</h2>
        <Service />
      </section>
      <section className="realisation view-3 part" id="projects">
        <h2>Le site est en construction</h2>
        {/* <h2>{"< Réalisations />"}</h2>
        <ProjectAccordion projects={ProjectsData} /> */}
      </section>
      {/* <section className="about view-4 part" id="about">
        <h2>Quelques informations sur moi</h2>
        <About />
      </section>
      <section className="contact view-4 part" id="contact">
        <h2>Besoin d'un site internet ergonomique et efficace ?</h2>
        <Contact />
      </section> */}
    </div>
  );
};

export default Home;
