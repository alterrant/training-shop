import { React, useState } from "react";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import { shoppingCartToggle } from "../../redux/shopping-cart-reducer";
import FinalShoppingCartPages from "./final-shopping-cart-pages/final-shopping-cart-pages";
import ShoppingCartHeader from "./header/shopping-cart-header";
import getTotalCartPrice from "../../encapsulated-common-logics/total-price";
import ShoppingCartContent from "./content/shopping-cart-content";

import ShoppingCartStyle from "./shopping-cart.module.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const isShoppingCartOpen = useSelector(
    (state) => state.shoppingCart.isShoppingCartOpen
  );
  const shoppingCartProducts = useSelector(
    (state) => state.shoppingCart.products
  );
  const productsQuantity = useSelector(
    (state) => state.shoppingCart.products.length
  );

  const isSubmittingShoppingCartSuccess = useSelector(
    (state) => state.shoppingCart.submittingInfo.isSubmittingSuccess
  );
  const isSubmittingShoppingCartError = useSelector(
    (state) =>
      state.shoppingCart.submittingInfo.submittingError.isSubmittingError
  );

  const [navigationStage, setNavigationStage] = useState("Item in Cart");

  const totalCartPrice = getTotalCartPrice({ shoppingCartProducts });

  const isFinalShoppingCartPage = !(
    isSubmittingShoppingCartSuccess ||
    isSubmittingShoppingCartError ||
    productsQuantity === 0
  );
  const finalShoppingCardPage =
    !isFinalShoppingCartPage &&
    getFinalShoppingCartPage(
      isSubmittingShoppingCartSuccess,
      isSubmittingShoppingCartError
    );

  const cx = classNames.bind(ShoppingCartStyle);
  const className = cx(
    "background",
    isShoppingCartOpen ? "visibilityVisible" : "visibilityHidden"
  );

  const closeShoppingCartHandler = (e) => {
    if (isShoppingCartOpen && e.target.className === className) {
      dispatch(shoppingCartToggle());
    }
  };

  return (
    <div
      className={className}
      onClick={(e) => closeShoppingCartHandler(e)}
      tabIndex={"0"}
    >
      <section className={ShoppingCartStyle.wrapper} data-test-id={"cart"}>
        <ShoppingCartHeader
          isShoppingCartOpen={isShoppingCartOpen}
          setNavigationStage={setNavigationStage}
          navigationStage={navigationStage}
          isFinalShoppingCartPage={isFinalShoppingCartPage}
          finalShoppingCardPage={finalShoppingCardPage}
        />
        {isFinalShoppingCartPage ? (
          <ShoppingCartContent
            shoppingCartProducts={shoppingCartProducts}
            totalCartPrice={totalCartPrice}
            navigationStage={navigationStage}
            setNavigationStage={setNavigationStage}
          />
        ) : (
          <FinalShoppingCartPages
            navigationStage={navigationStage}
            setNavigationStage={setNavigationStage}
            finalShoppingCardPage={finalShoppingCardPage}
          />
        )}
      </section>
    </div>
  );
};

export default ShoppingCart;

const getFinalShoppingCartPage = (
  isSubmittingShoppingCartSuccess,
  isSubmittingShoppingCartError
) => {
  let finalShoppingCardPage;

  if (isSubmittingShoppingCartSuccess || isSubmittingShoppingCartError) {
    finalShoppingCardPage = isSubmittingShoppingCartSuccess
      ? "submittingSuccess"
      : "submittingRejected";
  } else finalShoppingCardPage = "emptyOrder";

  return finalShoppingCardPage;
};
