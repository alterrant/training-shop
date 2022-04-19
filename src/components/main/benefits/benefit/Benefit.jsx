import React from "react";
import PropTypes from "prop-types";

import BenefitStyle from "./Benefit.module.css";

const Benefit = ({ item }) => (
  <div
    className={BenefitStyle.wrapper}
    /* style={{backgroundImage: `url(${item.img})`}} */
  >
    <img src={item.img} alt={item.alt} />
    <div className={BenefitStyle.centerMask}>
      <div className={BenefitStyle.whiteRectangle}>
        <p className={BenefitStyle.tittle}>{item.tittle}</p>
        <p className={BenefitStyle.description}>
          {item.description}
          {item.discount && <span>{` ${item.discount}`}</span>}
        </p>
      </div>
    </div>
  </div>
);

export default Benefit;

Benefit.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
