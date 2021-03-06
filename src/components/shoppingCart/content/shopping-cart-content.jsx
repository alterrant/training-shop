import React from "react";
import PropTypes from "prop-types";

import ShoppingCartProducts from "./products/shopping-cart-products";
import DeliveryInfoForm from "../../forms/shopping-cart/delivery-info/delivery-info-form";
import PaymentForm from "../../forms/shopping-cart/payment/payment-form";
import { ORDER_STAGES } from "../../../constants/shoppingCart";

import ShoppingCartContentStyle from "./shopping-cart-content.module.css";

const ShoppingCartContent = ({
  navigationStage,
  shoppingCartProducts,
  totalCartPrice,
  setNavigationStage,
}) => {
  return (
    <div className={ShoppingCartContentStyle.scrollbar}>
      <div className={ShoppingCartContentStyle.container}>
        {getShoppingCartContent({
          navigationStage,
          shoppingCartProducts,
          totalCartPrice,
          setNavigationStage,
        })}
      </div>
    </div>
  );
};

export default ShoppingCartContent;

ShoppingCartContent.propTypes = {
  shoppingCartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      productId: PropTypes.string.isRequired,
      productQuantity: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  totalCartPrice: PropTypes.number.isRequired,
  navigationStage: PropTypes.string.isRequired,
  setNavigationStage: PropTypes.func.isRequired,
};

const getShoppingCartContent = ({
  navigationStage,
  shoppingCartProducts,
  totalCartPrice,
  setNavigationStage,
}) => {
  switch (navigationStage) {
    case ORDER_STAGES.inCart: {
      return (
        <ShoppingCartProducts
          shoppingCartProducts={shoppingCartProducts}
          totalCartPrice={totalCartPrice}
          navigationStage={navigationStage}
          setNavigationStage={setNavigationStage}
        />
      );
    }
    case ORDER_STAGES.delivery: {
      return (
        <DeliveryInfoForm
          totalCartPrice={totalCartPrice}
          navigationStage={navigationStage}
          setNavigationStage={setNavigationStage}
        />
      );
    }
    case ORDER_STAGES.payment: {
      return (
        <PaymentForm
          totalCartPrice={totalCartPrice}
          navigationStage={navigationStage}
          setNavigationStage={setNavigationStage}
        />
      );
    }
    default:
      return null;
  }
};
