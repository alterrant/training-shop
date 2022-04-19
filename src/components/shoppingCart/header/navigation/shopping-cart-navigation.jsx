import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { nanoid } from "@reduxjs/toolkit";

import ShoppingCartNavigationStyle from "./shopping-cart-navigation.module.css";

const ShoppingCartNavigation = ({ navigationStage }) => {
  const cx = classNames.bind(ShoppingCartNavigationStyle);

  const stagesList = ["Item in Cart", "/", "Delivery Info", "/", "Payment"].map(
    (item) => {
      if (item === "/")
        return (
          <p className={cx("navigationStage")} key={nanoid()}>
            {item}
          </p>
        );
      return (
        <p
          className={cx("navigationStage", {
            navigationStageActive: item === navigationStage,
          })}
          key={nanoid()}
        >
          {item}
        </p>
      );
    }
  );

  return (
    <div className={ShoppingCartNavigationStyle.wrapper}>{stagesList}</div>
  );
};

export default ShoppingCartNavigation;

ShoppingCartNavigation.propTypes = {
  navigationStage: PropTypes.string.isRequired,
};
