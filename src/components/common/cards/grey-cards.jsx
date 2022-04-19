import React from "react";
import CardsStyle from "./grey-cards.module.css";
import { ReactComponent as StripGrey } from "../../../assets/SVG/stripe-grey.svg";
import { ReactComponent as AESGrey } from "../../../assets/SVG/aes-256-grey.svg";
import { ReactComponent as PayPalGrey } from "../../../assets/SVG/paypal-grey.svg";
import { ReactComponent as VisaGrey } from "../../../assets/SVG/visa-grey.svg";
import { ReactComponent as MasterCardGrey } from "../../../assets/SVG/mastercard-grey.svg";
import { ReactComponent as DiscoverGrey } from "../../../assets/SVG/discover-grey.svg";
import { ReactComponent as AmericanExpressGrey } from "../../../assets/SVG/american-express-grey.svg";

const GreyCards = () => (
  <ul className={CardsStyle.wrapper}>
    <li>
      <StripGrey />
    </li>
    <li>
      <AESGrey />
    </li>
    <li>
      <PayPalGrey />
    </li>
    <li>
      <VisaGrey />
    </li>
    <li>
      <MasterCardGrey />
    </li>
    <li>
      <DiscoverGrey />
    </li>
    <li>
      <AmericanExpressGrey />
    </li>
  </ul>
);

export default GreyCards;
