// import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import illustrationHome from "../assets/images/Home-illustration-computer.png"
import backMedia from "../assets/images/circle_green.png";
import ProjectPreview from "../components/ProjectPreview";
import Skills from "./Skills";
import About from "./About";

const Home = () => {
    return (
        <div className="home">
            <div className="first-view">
            <section className="left-part">
                <div className="text">
                <h1>Bienvenu dans mon univers !</h1> 
                <p>Je suis <strong>Davina Crahet</strong>, <strong>UX designer</strong> et <strong>développeuse web front-end</strong>. <br /><br />Concevons ensemble des <strong>sites</strong> qui vous correspondent tout en étant adaptés à vos <strong>utilisateurs</strong>.
                </p> 
                </div>
                <img src={illustrationHome} alt="Illustration ordinateur plante tasse" />
            </section>
            <section className="right-part">
                <div className="navigation">
                <Header/>
                </div>
                <div className="social-media">
                    <div className="link-github">
                        <img src={backMedia} alt="icon et lien vers github" />
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="link-linkedin">
                        <img src={backMedia} alt="icon et lien vers linkedin" />
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    
                </div>
            </section>
            </div>
            <div className="realisation">
                <h2>Mes réalisations</h2>
                <ProjectPreview/>
            </div>
            <div className="skills">
                <h2>Mes compétences</h2>
                <Skills/>
            </div>
            <div className="about">
                <h2>A propos</h2>
                <About/>
            </div>
            <div className="contat">
                <h2>Contact</h2>
            </div>
        </div>
    );
};

export default Home;