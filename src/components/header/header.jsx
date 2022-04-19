import React from "react";
import TopBar from "./top-bar/top-bar";
import Nav from "./nav/nav";

import HeaderStyle from "./header.module.css";

const Header = () => (
  <header className={HeaderStyle.header} data-test-id="header">
    <TopBar />
    <Nav />
  </header>
);

export default Header;
