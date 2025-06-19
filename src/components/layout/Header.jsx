import NavigationItem from "../../components/NavigationItem";

const Header = () => {
  return (
    <div className="header-nav">
      <h1 className="header-name">Davina Crahet</h1>
      <a href="#services">
        <NavigationItem title="Prestations" />
      </a>
      <a href="#projects">
        <NavigationItem title="Réalisations" />
      </a>
      <a href="#about">
        <NavigationItem title="A propos" />
      </a>
      <a href="#">
        <NavigationItem title="Contact" />{" "}
      </a>
      <a href="mailto:davina.devfront@gmail.com">
        <NavigationItem title="Contact" />{" "}
      </a>
    </div>
  );
};

export default Header;
