import { HashLink as Link } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import { Navbar } from "./NavBar";
import "./NavBar.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/#presentation" className="header-name">
        {"<DC/>"}
      </Link>
      <div className="link-container">
        <div className="navbar">
          <Link to="/#services">
            <h2>Prestations</h2>
          </Link>
          <Link to="/#projects">
            <h2>Réalisations</h2>
          </Link>
          <Link to="/#about">
            <h2>à propos</h2>
          </Link>
          <Link to="/#contact">
            <h2>contact</h2>
          </Link>
        </div>
        <div className="social">
          <div className="github social-item">
            <a
              href="https://github.com/DavinaDF"
              target="_blank"
              className="github-link"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="linkedin social-item">
            <a
              href="https://www.linkedin.com/in/davina-crahet-83888847/"
              target="_blank"
              className="linkedin-link"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mobile">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
