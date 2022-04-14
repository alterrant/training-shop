import ShoppingCartStyle from "./ShoppingCartHeader.module.css";
import {
  resetDeliveryFormToggle,
  resetDeliveryInfo, resetPaymentFormToggle,
  resetPaymentInfo, resetProducts,
  shoppingCartToggle
} from "../../../redux/shoppingCartReducer";
import {ReactComponent as CloseSVG} from "../../../assets/SVG/close.svg";
import {useEffect, useRef} from "react";
import {changeBodyOverflow} from "../../../encapsulatedCommonLogics/changeBoodyOverflow";
import {useStableDispatch} from "../../../hooks/useRedux";
import ShoppingCartNavigation from "./navigation/ShoppingCartNavigation";

const ShoppingCartHeader = ({isShoppingCartOpen, setNavigationStage, navigationStage, isFinalShoppingCartPage, finalShoppingCardPage}) => {
  const dispatch = useStableDispatch();
  console.log(isFinalShoppingCartPage)
  const refCloseSVG = useRef(null);

  const handleShoppingCartKeyDown = (e) => {
    if (e.code === 'Escape') dispatch(shoppingCartToggle());
  }

  const handleCloseShoppingCart = () => {
    if (finalShoppingCardPage === 'submittingSuccess') {
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

    dispatch(shoppingCartToggle())
  }

  useEffect(() => {
    changeBodyOverflow(!isShoppingCartOpen);
    refCloseSVG.current.focus();
  }, [isShoppingCartOpen]);

  return (
      <div className={ShoppingCartStyle.headerWrapper}>
        <div className={ShoppingCartStyle.header}>
          <div>
            Shopping Cart
          </div>
          <button
              ref={refCloseSVG}
              onKeyDown={(e) => handleShoppingCartKeyDown(e)}
              onClick={handleCloseShoppingCart}
              className={ShoppingCartStyle.closeSVG}>
            <CloseSVG/>
          </button>
        </div>
        {isFinalShoppingCartPage && <ShoppingCartNavigation setNavigationStage={setNavigationStage}
                                 navigationStage={navigationStage}/>}
      </div>
  )
}
export default ShoppingCartHeader;