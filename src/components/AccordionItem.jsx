import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={`accordion-item ${isVisible ? "visible" : ""}`}>
      <div className="accordion-title" onClick={handleToggle}>
        <h3>{title}</h3>
        <div className={`arrow ${isVisible ? "down" : ""}`}>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className={`accordion-content ${isVisible ? "animate" : ""}`}>
        {children}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default AccordionItem;
