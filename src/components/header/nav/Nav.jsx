import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./navBar/NavBar";
import SiteTools from "./siteTools/SiteTools";
import useClassNames from "../../../hooks/useClassName";

import NavStyle from "./Nav.module.css";

const Nav = () => {
  const className = useClassNames(
    "isMenuOpen",
    NavStyle,
    "burgerMenuActive",
    "wrapper",
    "header"
  );

  return (
    <nav>
      <div className={className}>
        <Link
          to="/"
          className={NavStyle.headerNavLogo}
          data-test-id="header-logo-link"
        >
          <h1>CleverShop</h1>
        </Link>
        <NavBar />
        <SiteTools />
      </div>
    </nav>
  );
};

export default Nav;
