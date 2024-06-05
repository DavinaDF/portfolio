import NavigationItem from "../../components/NavigationItem";

const Header = () => {
    return (
        <div className="nav-container">
          <NavigationItem title="Réalisations"/>              
          <NavigationItem title="Compétences"/>              
          <NavigationItem title="A propos"/>              
          <NavigationItem title="Contact"/>              
        </div>
    );
};

export default Header;