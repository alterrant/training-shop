import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { nanoid } from "@reduxjs/toolkit";
import { ORDER_STAGES } from "../../../../constants/shoppingCart";

import ShoppingCartNavigationStyle from "./shopping-cart-navigation.module.css";

const ShoppingCartNavigation = ({ navigationStage }) => {
  const cx = classNames.bind(ShoppingCartNavigationStyle);

  const stagesList = [
    ORDER_STAGES.inCart,
    "/",
    ORDER_STAGES.delivery,
    "/",
    ORDER_STAGES.payment,
  ].map((item) => {
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
  });

  return (
    <div className={ShoppingCartNavigationStyle.wrapper}>{stagesList}</div>
  );
};

export default ShoppingCartNavigation;

ShoppingCartNavigation.propTypes = {
  navigationStage: PropTypes.string.isRequired,
};
