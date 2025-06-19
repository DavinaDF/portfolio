// import { Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import illustrationHome from "../assets/images/Home-illustration-computer.webp";
import backMedia from "../assets/images/circle_green.png";
import ProjectPreview from "../components/ProjectPreview";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import About from "../sections/About";
import ImageSlider from "../components/ImageSlider";
import Service from "../components/Service";
import Type from "../components/Type";

const Home = () => {
  return (
    <div className="home">
      <div className="first-view">
        <div className="left-part">
          <div className="text">
            <h1>Hello World !</h1>
            <h2>
              <Type />
            </h2>
            <p>
              {" "}
              <br />
              <br />
              Je vous accompagne dans vos projets de refonte ou création de
              site, en me basant sur vos <strong>besoins</strong>, vos{" "}
              <strong>contraintes</strong> et également sur l’analyse des
              besoins, usages et habitudes de vos utilisateurs. Concevons
              ensemble des <strong>sites</strong> qui vous correspondent tout en
              étant adaptés à vos <strong>utilisateurs</strong>.
            </p>
            <div></div>
          </div>
          <img
            src="/code-illustration-3d.png"
            alt="Illustration ordinateur plante tasse"
          />
        </div>
        {/* <div className="right-part">
          <div className="navigation">
            <Header />
          </div>
          <div className="social-media">
            <div className="link-github">
              <a
                href="https://github.com/DavinaDF"
                target="_blank"
                className="link-github"
              >
                <img src={backMedia} alt="icon et lien vers github" />
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="link-linkedin">
              <a
                href="https://www.linkedin.com/in/davina-crahet-83888847/"
                target="_blank"
                className="link-linkedin"
              >
                <img src={backMedia} alt="icon et lien vers linkedin" />
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <div className="presta" id="services">
        <Service />
      </div>
      <div className="realisation" id="projects">
        <h2>Le site est actuellement en construction !</h2>
        {/* <ImageSlider /> */}
        {/* <ProjectPreview /> */}
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
