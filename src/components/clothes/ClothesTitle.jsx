import React from "react";
import PropTypes from "prop-types";
import ClothesStyle from "./ClothesMain.module.css";

const ClothesTitle = ({ children }) => {
  return <h2 className={ClothesStyle.tittle}>{children}</h2>;
};

export default ClothesTitle;

ClothesTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
