import React from "react";
import PropTypes from "prop-types";

import ShoppingCartProducts from "./products/ShoppingCartProducts";
import DeliveryInfoForm from "../../forms/shoppingCart/deliveryInfo/DeliveryInfoForm";
import PaymentForm from "../../forms/shoppingCart/payment/PaymentForm";

import ShoppingCartContentStyle from "./ShoppingCartContent.module.css";

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
    case "Item in Cart": {
      return (
        <ShoppingCartProducts
          shoppingCartProducts={shoppingCartProducts}
          totalCartPrice={totalCartPrice}
          navigationStage={navigationStage}
          setNavigationStage={setNavigationStage}
        />
      );
    }
    case "Delivery Info": {
      return (
        <DeliveryInfoForm
          totalCartPrice={totalCartPrice}
          navigationStage={navigationStage}
          setNavigationStage={setNavigationStage}
        />
      );
    }
    case "Payment": {
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
