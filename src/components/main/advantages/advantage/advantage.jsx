import React from "react";
import PropTypes from "prop-types";

import AdvantageStyle from "./advantage.module.css";

const Advantage = ({ svg, tittle, description }) => (
  <div className={AdvantageStyle.wrapper}>
    {svg}
    <div className={AdvantageStyle.description}>
      <p className={AdvantageStyle.tittle}>{tittle}</p>
      <p className={AdvantageStyle.description}>{description}</p>
    </div>
  </div>
);

Advantage.propTypes = {
  svg: PropTypes.element.isRequired,
  tittle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Advantage;
