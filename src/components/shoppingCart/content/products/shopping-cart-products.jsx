import React from "react";
import PropTypes from "prop-types";

import ShoppingCartProduct from "./product/shopping-cart-product";
import Partition from "../../../common/partition/partition";
import ShoppingCartFooter from "../footer/shopping-cart-footer";

import ShoppingCartProductsStyle from "./shopping-cart-products.module.css";

const ShoppingCartProducts = ({
  shoppingCartProducts,
  totalCartPrice,
  navigationStage,
  setNavigationStage,
}) => {
  const shoppingCartProductList = shoppingCartProducts.map((item) => (
    <li key={`${item.color}+${item.size}`}>
      <ShoppingCartProduct shoppingCartProduct={item} />
      <Partition />
    </li>
  ));

  return (
    <>
      <ul className={ShoppingCartProductsStyle.products}>
        {shoppingCartProductList}
      </ul>
      <ShoppingCartFooter
        totalCartPrice={totalCartPrice}
        navigationStage={navigationStage}
        setNavigationStage={setNavigationStage}
      />
    </>
  );
};

export default ShoppingCartProducts;

ShoppingCartProducts.propTypes = {
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
