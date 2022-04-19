import React from "react";
import AboutUsStyle from "./CompanyInfo.module.css";
import { ReactComponent as SVGAddress } from "../../../assets/SVG/location-marker.svg";
import { ReactComponent as SVGPhone } from "../../../assets/SVG/phone.svg";
import { ReactComponent as SVGClock } from "../../../assets/SVG/clock.svg";
import { ReactComponent as SVGMail } from "../../../assets/SVG/mail.svg";
import { ReactComponent as FaceBook } from "../../../assets/SVG/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/SVG/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/SVG/instagram.svg";
import { ReactComponent as Pinterest } from "../../../assets/SVG/pinterest.svg";

export const CompanyAddress = () => (
  <div className={AboutUsStyle.SVGWrapper}>
    <SVGAddress stroke="#121212" fill="#FFFFFF" />
    <p>Belarus, Gomel, Lange 17</p>
  </div>
);

export const CompanyPhone = () => (
  <div className={AboutUsStyle.SVGWrapper}>
    <SVGPhone stroke="#121212" fill="#FFFFFF" />
    <p>+375 29 100 20 30</p>
  </div>
);

export const CompanySchedule = () => (
  <div className={AboutUsStyle.SVGWrapper}>
    <SVGClock stroke="#121212" fill="#FFFFFF" />
    <p>All week 24/7</p>
  </div>
);

export const CompanyMail = () => (
  <div className={AboutUsStyle.SVGWrapper}>
    <SVGMail stroke="#121212" fill="#FFFFFF" />
    <p>info@clevertec.ru</p>
  </div>
);

export const Messengers = () => (
  <ul className={AboutUsStyle.messengers}>
    <li>
      <FaceBook />
    </li>
    <li>
      <Twitter />
    </li>
    <li>
      <Instagram />
    </li>
    <li>
      <Pinterest />
    </li>
  </ul>
);
