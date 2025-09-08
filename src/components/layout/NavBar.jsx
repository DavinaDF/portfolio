import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      {menuOpen && (
        <div className="menu-open" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="content">
            <i className="fa-solid fa-xmark"></i>
            <div className="links">
              <HashLink to="/#services">
                <h2>Prestations</h2>
              </HashLink>
              <HashLink to="/#projects">
                <h2>Réalisations</h2>
              </HashLink>
              <HashLink to="/#about">
                <h2>à propos</h2>
              </HashLink>
              <HashLink to="/#contact">
                <h2>Contact</h2>
              </HashLink>
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
        </div>
      )}
    </nav>
  );
};
