import { React, useSelector } from "react-redux";
import PropTypes from "prop-types";

import ShoppingCartFooter from "../content/footer/shopping-cart-footer";
import { FINAL_SHOPPINGCART_PAGE } from "../../../constants/shoppingCart";

import EmptyShoppingCartStyle from "./final-shopping-cart-pages.module.css";

const FinalShoppingCartPages = ({
  navigationStage,
  setNavigationStage,
  finalShoppingCardPage,
}) => {
  const submittingErrorMessage = useSelector(
    (state) =>
      state.shoppingCart.submittingInfo.submittingError.submittingError?.message
  );

  const getFinalShoppingCardDescription = (finalShoppingCardPageName) => {
    switch (finalShoppingCardPageName) {
      case FINAL_SHOPPINGCART_PAGE.success: {
        return {
          tittle: FINAL_SHOPPINGCART_PAGE.tittleSuccess,
          text1: FINAL_SHOPPINGCART_PAGE.text1Success,
          text2: FINAL_SHOPPINGCART_PAGE.text2Success,
        };
      }
      case FINAL_SHOPPINGCART_PAGE.rejected: {
        return {
          tittle: FINAL_SHOPPINGCART_PAGE.tittleRejected,
          text1: submittingErrorMessage,
        };
      }
      default: {
        return {
          tittle: FINAL_SHOPPINGCART_PAGE.tittleEmptyOrder,
        };
      }
    }
  };

  const finalShoppingCardDescription = getFinalShoppingCardDescription(
    finalShoppingCardPage
  );

  return (
    <div className={EmptyShoppingCartStyle.scrollbar}>
      <div className={EmptyShoppingCartStyle.container}>
        <div>
          <pre>
            <h3 className={EmptyShoppingCartStyle.tittle}>
              {finalShoppingCardDescription.tittle}
            </h3>
          </pre>
          {finalShoppingCardDescription.text1 && (
            <p className={EmptyShoppingCartStyle.text}>
              {finalShoppingCardDescription.text1}
            </p>
          )}
          {finalShoppingCardDescription.text2 && (
            <p className={EmptyShoppingCartStyle.text}>
              {finalShoppingCardDescription.text2}
            </p>
          )}
        </div>
        <ShoppingCartFooter
          finalShoppingCardPageName={finalShoppingCardPage}
          navigationStage={navigationStage}
          setNavigationStage={setNavigationStage}
        />
      </div>
    </div>
  );
};

export default FinalShoppingCartPages;

FinalShoppingCartPages.propTypes = {
  navigationStage: PropTypes.string.isRequired,
  setNavigationStage: PropTypes.func.isRequired,
  finalShoppingCardPage: PropTypes.string,
};
