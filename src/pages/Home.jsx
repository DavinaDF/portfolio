// import { Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProjectPreview from "../components/ProjectPreview";
import Contact from "../sections/Contact";
import About from "../sections/About";
import ImageSlider from "../components/ImageSlider";
import Service from "../sections/Service";
import Type from "../components/Type";

const Home = () => {
  return (
    <div className="home ">
      <Header />
      <div className="y mandatory-scroll-snapping" dir="ltr">
        <section className="first-view part">
          <div className="left-part">
            <h2 className="titre">
              <Type />
            </h2>
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
              alt="Illustration navigateur développement 3D"
            />
          </div>
        </section>
        <section className="presta part" id="services">
          <h2>Prestations</h2>
          <Service />
        </section>
        <section className="realisation part" id="projects">
          <h2>Le site est actuellement en construction !</h2>
          {/* <ImageSlider /> */}
          {/* <ProjectPreview /> */}
        </section>
      </div>
      {/* <div className="skills-home" id="skills">
        <Skills />
      </div>
      <div className="about" id="about">
        <h2>A propos</h2>
        <About />
      </div> */}
      {/* <div className="contact" id="contact">
        <h2>Me contacter</h2>
        <Contact />
      </div> */}
      <Footer />
      <Analytics />
    </div>
  );
};

export default Home;
