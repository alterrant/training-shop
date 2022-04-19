import React from "react";
import FooterInfo from "./footerInfo/FooterInfo";
import { FOOTERNAVBAR } from "../../../constants/menuConst";
import getNavLinks from "../../../encapsulatedCommonLogics/getNavLinks";
import AboutUsStyle from "./AboutUs.module.css";

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
