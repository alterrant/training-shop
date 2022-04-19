import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { menuToggle } from "../../../../../redux/header-reducer";
import useClassNames from "../../../../../hooks/use-class-name";
import changeBodyOverflow from "../../../../../encapsulated-common-logics/change-boody-overflow";

import BurgerMenuStyle from "./burger-menu.module.css";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.header.isMenuOpen);

  const className = useClassNames(
    "isMenuOpen",
    BurgerMenuStyle,
    "burgerMenuActive",
    "burgerMenu",
    "header"
  );

  const handleBurgerMenuToggle = () => {
    dispatch(menuToggle());
    changeBodyOverflow(isMenuOpen);
  };
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      dispatch(menuToggle());
      changeBodyOverflow(isMenuOpen);
    }
  };

  return (
    <button
      onKeyDown={(event) => handleKeyDown(event)}
      onClick={handleBurgerMenuToggle}
      className={className}
      data-test-id="burger-menu-btn"
      type="button"
    >
      <span />
    </button>
  );
};

export default BurgerMenu;
