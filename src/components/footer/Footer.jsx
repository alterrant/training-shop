import React from "react";
import JoinUs from "./joinUs/JoinUs";
import AboutUs from "./aboutUs/AboutUs";
import Copyright from "./copyright/Copyright";
import footerStyle from "./Footer.module.css";

const Footer = () => (
  <footer className={footerStyle.footer} data-test-id="footer">
    <JoinUs />
    <AboutUs />
    <Copyright />
  </footer>
);

export default Footer;
