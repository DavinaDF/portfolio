import NavigationItem from "../../components/NavigationItem";

const Header = () => {
  return (
    <div className="header">
      <h1 className="name">{"<DC/>"}</h1>
      <div className="link-container">
        <div className="menu">
          <a href="#services">
            <NavigationItem title="Prestations" />
          </a>
          <a href="#projects">
            <NavigationItem title="Réalisations" />
          </a>
          <a href="#about">
            <NavigationItem title="à propos" />
          </a>
          <a href="mailto:davina.devfront@gmail.com">
            <NavigationItem title="Contact" />{" "}
          </a>
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
  );
};

export default Header;
