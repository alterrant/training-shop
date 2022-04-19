import React from "react";
import PropTypes from "prop-types";

import {
  decrementProductQuantity,
  deleteShoppingCartProduct,
  incrementProductQuantity,
} from "../../../../../redux/shopping-cart-reducer";

import { ReactComponent as TrashSVG } from "../../../../../assets/SVG/trash.svg";

import ShoppingCartProductStyle from "./shopping-cart-product.module.css";
import { useDispatch } from "react-redux";

const getProductTotalPrice = ({ shoppingCartProduct }) =>
  shoppingCartProduct.productQuantity * shoppingCartProduct.price;

const ShoppingCartProduct = ({ shoppingCartProduct }) => {
  const dispatch = useDispatch();
  const productTotalPrice = getProductTotalPrice({ shoppingCartProduct });

  return (
    <div className={ShoppingCartProductStyle.wrapper} data-test-id="cart-card">
      <div className={ShoppingCartProductStyle.image}>
        <img
          src={`https://training.cleverland.by/shop${shoppingCartProduct.url}`}
          alt="productImage"
        />
      </div>
      <div className={ShoppingCartProductStyle.productCartInfo}>
        <div className={ShoppingCartProductStyle.description}>
          <p className={ShoppingCartProductStyle.productName}>
            {shoppingCartProduct.name}
          </p>
          <p className={ShoppingCartProductStyle.productParams}>
            {`${shoppingCartProduct.color}, ${shoppingCartProduct.size}`}
          </p>
        </div>
        <div className={ShoppingCartProductStyle.productCartControl}>
          <div className={ShoppingCartProductStyle.priceCounter}>
            <div className={ShoppingCartProductStyle.counter}>
              <button
                onClick={() =>
                  dispatch(
                    decrementProductQuantity({
                      productId: shoppingCartProduct.productId,
                      color: shoppingCartProduct.color,
                      size: shoppingCartProduct.size,
                    })
                  )
                }
                disabled={shoppingCartProduct.productQuantity === 1}
                data-test-id="minus-product"
                type="button"
              >
                -
              </button>
              <p className={ShoppingCartProductStyle.productQuantity}>
                {shoppingCartProduct.productQuantity}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    incrementProductQuantity({
                      productId: shoppingCartProduct.productId,
                      color: shoppingCartProduct.color,
                      size: shoppingCartProduct.size,
                    })
                  )
                }
                data-test-id="plus-product"
                type="button"
              >
                +
              </button>
            </div>
            <div className={ShoppingCartProductStyle.price}>
              {`$${productTotalPrice.toFixed(2)}`}
            </div>
          </div>
          <div
            onClick={() =>
              dispatch(deleteShoppingCartProduct(shoppingCartProduct))
            }
            className={ShoppingCartProductStyle.trash}
            data-test-id="remove-product"
          >
            <TrashSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartProduct;

ShoppingCartProduct.propTypes = {
  shoppingCartProduct: PropTypes.shape({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productId: PropTypes.string.isRequired,
    productQuantity: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
