import React from "react";
import ShoppingCartFooterStyle from "./shopping-cart-footer.module.css";
import {
  resetDeliveryFormToggle,
  resetDeliveryInfo,
  resetPaymentFormToggle,
  resetPaymentInfo,
  resetProducts,
  resetSubmission,
  setDeliveryInfo,
  setPaymentInfo,
  shoppingCartToggle,
} from "../../../../redux/shopping-cart-reducer";
import { useDispatch } from "react-redux";

const ShoppingCartFooter = (props) => {
  const {
    totalCartPrice = null,
    navigationStage = null,
    setNavigationStage = false,
    isCashMethod = false,
    finalShoppingCardPageName = null,
    summaryInfo,
    formik = null,
  } = props;

  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (finalShoppingCardPageName === "submittingRejected") {
      dispatch(resetSubmission());

      //setNavigationStage('Payment');
    }
    if (finalShoppingCardPageName === "emptyOrder")
      dispatch(shoppingCartToggle());

    if (finalShoppingCardPageName === "submittingSuccess") {
      dispatch(resetProducts());
      dispatch(resetDeliveryInfo());
      dispatch(resetPaymentInfo());
      dispatch(resetDeliveryFormToggle());
      dispatch(resetPaymentFormToggle());

      dispatch(shoppingCartToggle());
      setNavigationStage("Item in Cart");
    }

    if (navigationStage === "Item in Cart") {
      setNavigationStage("Delivery Info");
    }
  };
  const onViewCartClickHandler = () => {
    if (finalShoppingCardPageName === "submittingRejected") {
      setNavigationStage("Item in Cart");

      dispatch(resetDeliveryInfo());
      dispatch(resetPaymentInfo());
      dispatch(resetDeliveryFormToggle());
      dispatch(resetPaymentFormToggle());
    } else if (navigationStage === "Payment") {
      dispatch(setPaymentInfo(summaryInfo));
      setNavigationStage("Delivery Info");
    }
    if (navigationStage === "Delivery Info") {
      dispatch(setDeliveryInfo(summaryInfo));
      setNavigationStage("Item in Cart");
    }
  };

  const getButton = (navigationStage, finalShoppingCardPageName) => {
    const button = (
      <button
        className={ShoppingCartFooterStyle.buttonViewCart}
        onClick={onViewCartClickHandler}
        type="button"
      >
        View Cart
      </button>
    );

    if (finalShoppingCardPageName) {
      return finalShoppingCardPageName === "submittingRejected" ? button : null;
    } else {
      return navigationStage === "Item in Cart" ? null : button;
    }
  };
  const onMouseDown = () => {
    if (formik) {
      const isFieldsError =
        Object.keys(formik.errors).length !== 0 &&
        !formik.errors["agreementToggle"];
      if (isFieldsError) formik.setFieldValue("agreementToggle", false);
    }
  };

  return (
    <div className={ShoppingCartFooterStyle.footer}>
      {!finalShoppingCardPageName && (
        <div className={ShoppingCartFooterStyle.totalPriceWrapper}>
          <p>Total</p>
          <p className={ShoppingCartFooterStyle.totalPrice}>{totalCartPrice}</p>
        </div>
      )}
      <div className={ShoppingCartFooterStyle.buttons}>
        <button
          className={ShoppingCartFooterStyle.buttonFurter}
          onClick={(e) => onClickHandler(e)}
          onMouseDown={() => onMouseDown()}
          type="submit"
        >
          {getShoppingCartSubmitBtn(
            navigationStage,
            isCashMethod,
            finalShoppingCardPageName
          )}
        </button>
        {getButton(
          navigationStage,
          finalShoppingCardPageName,
          finalShoppingCardPageName
        )}
      </div>
    </div>
  );
};

export default ShoppingCartFooter;

const getShoppingCartSubmitBtn = (
  navigationStage,
  isCashMethod,
  finalShoppingCardPageName
) => {
  if (finalShoppingCardPageName) {
    return finalShoppingCardPageName === "submittingSuccess" ||
      finalShoppingCardPageName === "emptyOrder"
      ? "BACK TO SHOPPING"
      : "BACK TO PAYMENT";
  }
  switch (navigationStage) {
    case "Payment": {
      return isCashMethod ? "READY" : "CHECK OUT";
    }
    default:
      return "FURTHER";
  }
};
