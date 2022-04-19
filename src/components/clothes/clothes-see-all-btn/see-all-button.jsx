import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import SeeAllButtonStyle from "./see-all-button.module.css";

const SeeAllButton = ({ productType }) => (
  <NavLink to={productType} className={SeeAllButtonStyle.link}>
    <button className={SeeAllButtonStyle.button} type="button">
      See All
    </button>
  </NavLink>
);

export default SeeAllButton;

SeeAllButton.propTypes = {
  productType: PropTypes.string.isRequired,
};
