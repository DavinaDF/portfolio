import itemBackground from "../assets/images/item-background.png";
import PropTypes from "prop-types";

const NavigationItem = ({ title }) => {
  return <h2>{title}</h2>;
};

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavigationItem;
