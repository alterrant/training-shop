import React from "react";
import JoinUs from "./join-us/join-us";
import AboutUs from "./about-us/about-us";
import Copyright from "./copyright/copyright";
import footerStyle from "./footer.module.css";

const Footer = () => (
  <footer className={footerStyle.footer} data-test-id="footer">
    <JoinUs />
    <AboutUs />
    <Copyright />
  </footer>
);

export default Footer;
