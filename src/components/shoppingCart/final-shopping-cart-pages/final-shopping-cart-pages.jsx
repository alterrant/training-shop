import { React, useSelector } from "react-redux";
import PropTypes from "prop-types";

import ShoppingCartFooter from "../content/footer/shopping-cart-footer";

import EmptyShoppingCartStyle from "./final-shopping-cart-pages.module.css";

const FinalShoppingCartPages = ({
  navigationStage,
  setNavigationStage,
  finalShoppingCardPage,
}) => {
  const { message: submittingErrorMessage } = useSelector(
    (state) =>
      state.shoppingCart.submittingInfo.submittingError.submittingError
  );

  const getFinalShoppingCardDescription = (finalShoppingCardPageName) => {
    switch (finalShoppingCardPageName) {
      case "submittingSuccess": {
        return {
          tittle: "Thank you\n for your order",
          text1: "Information about your order will appear in your e-mail.",
          text2: "Our manager will call you back.",
        };
      }
      case "submittingRejected": {
        return {
          tittle: "Sorry,\n your payment\n has not been\n processed.",
          text1: submittingErrorMessage,
        };
      }
      default: {
        return {
          tittle: "Sorry,\n your cart\n is empty",
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
