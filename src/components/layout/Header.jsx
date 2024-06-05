import NavigationItem from "../../components/NavigationItem";

const Header = () => {
    return (
        <div className="nav-container">
          <a href="#projects"><NavigationItem title="Réalisations"/></a>     
          <a href="#skills"><NavigationItem title="Compétences"/>  </a>
          <a href="#about"><NavigationItem title="A propos"/></a>                       
          <NavigationItem title="Contact"/>              
        </div>
    );
};

export default Header;