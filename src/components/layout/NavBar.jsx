import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars"></i>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <HashLink to="/#presentation">{"<DC/>"}</HashLink>
        </li>
        <li>
          <HashLink to="/#services">Prestations</HashLink>
        </li>
        <li>
          <HashLink to="/#projects">Réalisations</HashLink>
        </li>
        <li>
          <HashLink to="/#about">à propos</HashLink>
        </li>
        <li>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>
    </nav>
  );
};
