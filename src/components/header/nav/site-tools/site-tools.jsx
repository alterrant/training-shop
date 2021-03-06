import React from "react";
import { useDispatch, useSelector } from "react-redux";

import BurgerMenu from "./burger-menu/burger-menu";
import { shoppingCartToggle } from "../../../../redux/shopping-cart-reducer";

import { ReactComponent as SearchSVG } from "../../../../assets/SVG/search.svg";
import { ReactComponent as GlobeSVG } from "../../../../assets/SVG/globe.svg";
import { ReactComponent as ProfileSVG } from "../../../../assets/SVG/user.svg";
import { ReactComponent as ShoppingBagSVG } from "../../../../assets/SVG/shopping-bag.svg";

import SiteToolsStyle from "./site-tools.module.css";

const SiteTools = () => {
  const bagQuantity = useSelector(
    (state) => state.shoppingCart.products.length
  );
  const dispatch = useDispatch();

  return (
    <ul className={SiteToolsStyle.wrapper}>
      <li>
        <SearchSVG />
      </li>
      <li>
        <GlobeSVG />
      </li>
      <li>
        <ProfileSVG />
      </li>
      <li
        className={SiteToolsStyle.shoppingBag}
        onClick={() => dispatch(shoppingCartToggle())}
        data-test-id="cart-button"
      >
        <ShoppingBagSVG />
        {bagQuantity > 0 && (
          <div className={SiteToolsStyle.bagQuantity}>{bagQuantity}</div>
        )}
      </li>
      <li className={SiteToolsStyle.burgerWrapper}>
        <BurgerMenu />
      </li>
    </ul>
  );
};

export default SiteTools;
