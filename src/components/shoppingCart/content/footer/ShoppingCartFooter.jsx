import React from 'react';
import ShoppingCartFooterStyle from "./ShoppingCartFooter.module.css";
import {
  resetDeliveryFormToggle,
  resetDeliveryInfo,
  resetPaymentFormToggle,
  resetPaymentInfo,
  resetSubmission,
  setDeliveryInfo,
  setPaymentInfo
} from "../../../../redux/shoppingCartReducer";
import {useStableDispatch} from "../../../../hooks/useRedux";

const ShoppingCartFooter = (props) => {
  const {
    totalCartPrice = null,
    navigationStage = null,
    setNavigationStage = false,
    isCashMethod = false,
    finalShoppingCardPageName = null,
    summaryInfo
  } = props;

  const dispatch = useStableDispatch();

  const onClickHandler = () => {
    if (finalShoppingCardPageName === 'submittingRejected') {
      dispatch(resetSubmission());

      //setNavigationStage('Payment');
    }

    if (navigationStage === 'Item in Cart') {
      setNavigationStage('Delivery Info');
    }
  }
  const onViewCartClickHandler = () => {
    if (finalShoppingCardPageName === 'submittingRejected') {
      setNavigationStage('Item in Cart');

      dispatch(resetDeliveryInfo());
      dispatch(resetPaymentInfo());
      dispatch(resetDeliveryFormToggle());
      dispatch(resetPaymentFormToggle());
    }
    if (navigationStage === 'Payment') {
      dispatch(setPaymentInfo(summaryInfo));
      setNavigationStage('Delivery Info');
    }
    if (navigationStage === 'Delivery Info') {
      dispatch(setDeliveryInfo(summaryInfo));
      setNavigationStage('Item in Cart')
    }
  }

  const getButton = (navigationStage, finalShoppingCardPageName) => {
    const button = (
        <button
            className={ShoppingCartFooterStyle.buttonViewCart}
            onClick={onViewCartClickHandler}
            type='button'
        >
          View Cart
        </button>
    );

    if (finalShoppingCardPageName) {
      return finalShoppingCardPageName === 'submittingRejected'
          ? button
          : null
    } else {
      return navigationStage === 'Item in Cart'
          ? null
          : button
    }
  }

  return (
      <div className={ShoppingCartFooterStyle.footer}>
        {
          !finalShoppingCardPageName && (
              <div className={ShoppingCartFooterStyle.totalPriceWrapper}>
                <p>Total</p>
                <p className={ShoppingCartFooterStyle.totalPrice}>{totalCartPrice}</p>
              </div>
          )
        }
        <div className={ShoppingCartFooterStyle.buttons}>
          <button className={ShoppingCartFooterStyle.buttonFurter}
                  onClick={(e) => onClickHandler(e)}
                  type='submit'>
            {
              getShoppingCartSubmitBtn(navigationStage, isCashMethod, finalShoppingCardPageName)
            }
          </button>
          {
            getButton(navigationStage, finalShoppingCardPageName, finalShoppingCardPageName)
          }
        </div>
      </div>
  )
}

export default ShoppingCartFooter;

const getShoppingCartSubmitBtn = (navigationStage, isCashMethod, finalShoppingCardPageName) => {
  if (finalShoppingCardPageName) {
    return (
        (finalShoppingCardPageName === 'submittingSuccess' || finalShoppingCardPageName === 'emptyOrder')
            ? 'BACK TO SHOPPING'
            : 'BACK TO PAYMENT'
    )
  }
  switch (navigationStage) {
    case 'Payment': {
      return isCashMethod ? 'READY' : 'CHECK OUT'
    }
    default:
      return 'FURTHER'
  }
}