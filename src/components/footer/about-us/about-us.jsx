import React from "react";
import FooterInfo from "./footer-info/footer-info";
import { FOOTERNAVBAR } from "../../../constants/menu-const";
import getNavLinks from "../../../encapsulated-common-logics/get-nav-links";
import AboutUsStyle from "./about-us.module.css";

const AboutUs = () => {
  const footerLinksLists = FOOTERNAVBAR.map((item) => {
    const { tittle, description } = getNavLinks(item);

    return <FooterInfo key={tittle} links={description} tittle={tittle} />;
  });

  return (
    <div className={AboutUsStyle.container}>
      <ul className={AboutUsStyle.wrapper}>{footerLinksLists}</ul>
    </div>
  );
};
export default AboutUs;
