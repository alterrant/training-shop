import { React, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  resetDeliveryFormToggle,
  resetDeliveryInfo,
  resetPaymentFormToggle,
  resetPaymentInfo,
  resetProducts,
  shoppingCartToggle,
} from "../../../redux/shopping-cart-reducer";
import changeBodyOverflow from "../../../encapsulated-common-logics/change-boody-overflow";
import ShoppingCartNavigation from "./navigation/shopping-cart-navigation";

import { ReactComponent as CloseSVG } from "../../../assets/SVG/close.svg";

import ShoppingCartStyle from "./shopping-cart-header.module.css";

const ShoppingCartHeader = ({
  isShoppingCartOpen,
  setNavigationStage,
  navigationStage,
  isFinalShoppingCartPage,
  finalShoppingCardPage,
}) => {
  const dispatch = useDispatch();

  const refCloseSVG = useRef(null);

  const handleShoppingCartKeyDown = (e) => {
    if (e.code === "Escape") dispatch(shoppingCartToggle());
  };

  const handleCloseShoppingCart = () => {
    if (finalShoppingCardPage === "submittingSuccess") {
      dispatch(resetProducts());
      dispatch(resetDeliveryInfo());
      dispatch(resetPaymentInfo());
      dispatch(resetDeliveryFormToggle());
      dispatch(resetPaymentFormToggle());
    } else {
      dispatch(resetDeliveryInfo());
      dispatch(resetPaymentInfo());
      dispatch(resetDeliveryFormToggle());
      dispatch(resetPaymentFormToggle());
    }

    dispatch(shoppingCartToggle());
  };

  useEffect(() => {
    changeBodyOverflow(!isShoppingCartOpen);
    refCloseSVG.current.focus();
  }, [isShoppingCartOpen]);

  return (
    <div className={ShoppingCartStyle.headerWrapper}>
      <div className={ShoppingCartStyle.header}>
        <div>Shopping Cart</div>
        <button
          ref={refCloseSVG}
          onKeyDown={(e) => handleShoppingCartKeyDown(e)}
          onClick={handleCloseShoppingCart}
          className={ShoppingCartStyle.closeSVG}
          type="button"
        >
          <CloseSVG />
        </button>
      </div>
      {isFinalShoppingCartPage && (
        <ShoppingCartNavigation
          setNavigationStage={setNavigationStage}
          navigationStage={navigationStage}
        />
      )}
    </div>
  );
};
export default ShoppingCartHeader;

ShoppingCartHeader.propTypes = {
  isShoppingCartOpen: PropTypes.bool,
  isFinalShoppingCartPage: PropTypes.bool,
  finalShoppingCardPage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  navigationStage: PropTypes.string.isRequired,
  setNavigationStage: PropTypes.func.isRequired,
};
