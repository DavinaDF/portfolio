import NavigationItem from "../../components/NavigationItem";

const Header = () => {
    return (
        <div className="nav-container">
          <a href="#projects"><NavigationItem title="Réalisations"/></a>     
          <a href="#skills"><NavigationItem title="Compétences"/>  </a>
          <a href="#about"><NavigationItem title="A propos"/></a>                       
          <a href="mailto:davina.devfront@gmail.com"><NavigationItem title="Contact"/> </a>             
        </div>
    );
};

export default Header;