import React from "react";
import TopBar from "./topBar/TopBar";
import Nav from "./nav/Nav";

import HeaderStyle from "./Header.module.css";

const Header = () => (
  <header className={HeaderStyle.header} data-test-id="header">
    <TopBar />
    <Nav />
  </header>
);

export default Header;
