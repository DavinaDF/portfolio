import itemBackground from "../assets/images/item-background.png"
import PropTypes from "prop-types";

const NavigationItem = ({title}) => {
    return (
        <div className="nav-item">
            <img src={itemBackground} alt="Bouton navigation" />
            <h2>{title}</h2>
        </div>
    );
};

NavigationItem.propTypes = {
    title: PropTypes.string.isRequired
  };

export default NavigationItem;