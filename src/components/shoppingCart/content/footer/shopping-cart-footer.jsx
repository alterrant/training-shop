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
import {
  FINAL_SHOPPINGCART_PAGE,
  FOOTER_SUBMIT_BTN,
  ORDER_STAGES,
} from "../../../../constants/shoppingCart";

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
    if (finalShoppingCardPageName === FINAL_SHOPPINGCART_PAGE.rejected) {
      dispatch(resetSubmission());

      //setNavigationStage('Payment');
    }
    if (finalShoppingCardPageName === FINAL_SHOPPINGCART_PAGE.emptyOrder)
      dispatch(shoppingCartToggle());

    if (finalShoppingCardPageName === FINAL_SHOPPINGCART_PAGE.success) {
      dispatch(resetProducts());
      dispatch(resetDeliveryInfo());
      dispatch(resetPaymentInfo());
      dispatch(resetDeliveryFormToggle());
      dispatch(resetPaymentFormToggle());

      dispatch(shoppingCartToggle());
      setNavigationStage(ORDER_STAGES.inCart);
    }

    if (navigationStage === ORDER_STAGES.inCart) {
      setNavigationStage(ORDER_STAGES.delivery);
    }
  };
  const onViewCartClickHandler = () => {
    if (finalShoppingCardPageName === FINAL_SHOPPINGCART_PAGE.rejected) {
      setNavigationStage(ORDER_STAGES.inCart);

      dispatch(resetDeliveryInfo());
      dispatch(resetPaymentInfo());
      dispatch(resetDeliveryFormToggle());
      dispatch(resetPaymentFormToggle());
    } else if (navigationStage === ORDER_STAGES.payment) {
      dispatch(setPaymentInfo(summaryInfo));
      setNavigationStage(ORDER_STAGES.delivery);
    }
    if (navigationStage === ORDER_STAGES.delivery) {
      dispatch(setDeliveryInfo(summaryInfo));
      setNavigationStage(ORDER_STAGES.inCart);
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
      return finalShoppingCardPageName === FINAL_SHOPPINGCART_PAGE.rejected
        ? button
        : null;
    } else {
      return navigationStage === ORDER_STAGES.inCart ? null : button;
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
          Total
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
    return finalShoppingCardPageName === FINAL_SHOPPINGCART_PAGE.success ||
      finalShoppingCardPageName === FINAL_SHOPPINGCART_PAGE.emptyOrder
      ? FOOTER_SUBMIT_BTN.emptyOrder
      : FOOTER_SUBMIT_BTN.rejected;
  }
  switch (navigationStage) {
    case ORDER_STAGES.payment: {
      return isCashMethod ? FOOTER_SUBMIT_BTN.cash : FOOTER_SUBMIT_BTN.paypal;
    }
    default:
      return FOOTER_SUBMIT_BTN.card;
  }
};
