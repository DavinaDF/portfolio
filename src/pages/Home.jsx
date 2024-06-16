// import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import illustrationHome from "../assets/images/Home-illustration-computer.webp"
import backMedia from "../assets/images/circle_green.png";
import ProjectPreview from "../components/ProjectPreview";
import Skills from "../sections/Skills";
import About from "../sections/About";

const Home = () => {
    return (
        <div className="home">
            <div className="first-view">
            <div className="left-part">
                <div className="text">
                    <h1>Bienvenu dans mon univers !</h1> 
                    <p>Je suis <strong>Davina Crahet</strong>, <strong>UX designer</strong> et <strong>développeuse web front-end</strong>. <br /><br />Concevons ensemble des <strong>sites</strong> qui vous correspondent tout en étant adaptés à vos <strong>utilisateurs</strong>.
                    </p> 
                </div>
                <img src={illustrationHome} alt="Illustration ordinateur plante tasse" />
            </div>
            <div className="right-part">
                <div className="navigation">
                <Header/>
                </div>
                <div className="social-media">
                    <div className="link-github">
                        <a href="https://github.com/DavinaDF" target="_blank" className="link-github">
                            <img src={backMedia} alt="icon et lien vers github" />
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div className="link-linkedin">
                        <a href="https://www.linkedin.com/in/davina-crahet-83888847/" target="_blank" className="link-linkedin">
                            <img src={backMedia} alt="icon et lien vers linkedin" />
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="realisation" id="projects">
                <h2>Mes réalisations</h2>
                <ProjectPreview/>
            </div>
            <div className="skills-home" id="skills">
                <Skills/>
            </div>
            <div className="about" id="about">
                <h2>A propos</h2>
                <About/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;