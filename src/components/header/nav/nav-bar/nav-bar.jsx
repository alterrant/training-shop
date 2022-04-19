import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MENU } from "../../../../constants/menu-const";
import useClassNames from "../../../../hooks/use-class-name";
import { menuToggle } from "../../../../redux/header-reducer";

import changeBodyOverflow from "../../../../encapsulated-common-logics/change-boody-overflow";

import NavBarStyle from "./nav-bar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.header);

  const className = useClassNames(
    "isMenuOpen",
    NavBarStyle,
    "fixedLeftMenu",
    "menu",
    "header"
  );

  const menu = MENU.map((item) => (
    <li className={NavBarStyle.menuItem} key={item.id}>
      <NavLink
        className={NavBarStyle.menuItem}
        to={`/${item.path}`}
        data-test-id={`menu-link-${item.path}`}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  const handleClick = (event) => {
    if (isMenuOpen && event.target.className !== "NavBar_menuItem__iAC4P") {
      dispatch(menuToggle());
      changeBodyOverflow(isMenuOpen);
    }
  };

  return (
    <ul
      onClick={(event) => handleClick(event)}
      className={className}
      data-test-id="burger-menu"
    >
      {menu}
    </ul>
  );
};

export default NavBar;
