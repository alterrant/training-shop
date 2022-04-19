import React from "react";
import PropTypes from "prop-types";

import AdvantagesStyle from "./advantages.module.css";

const Advantages = ({ svg, description }) => (
  <div className={AdvantagesStyle.wrapper}>
    {svg}
    <p>{description}</p>
  </div>
);

export default Advantages;

Advantages.propTypes = {
  description: PropTypes.string.isRequired,
  svg: PropTypes.instanceOf(Object),
};
