import React from "react";
import CardsStyle from "./cards.module.css";
import { ReactComponent as Strip } from "../../../assets/SVG/stripe.svg";
import { ReactComponent as AES } from "../../../assets/SVG/aes-256.svg";
import { ReactComponent as PayPal } from "../../../assets/SVG/paypal.svg";
import { ReactComponent as Visa } from "../../../assets/SVG/visa.svg";
import { ReactComponent as MasterCard } from "../../../assets/SVG/mastercard.svg";
import { ReactComponent as Discover } from "../../../assets/SVG/discover.svg";
import { ReactComponent as AmericanExpress } from "../../../assets/SVG/american-express.svg";

const Cards = () => (
  <ul className={CardsStyle.wrapper}>
    <li>
      <Strip />
    </li>
    <li>
      <AES />
    </li>
    <li>
      <PayPal />
    </li>
    <li>
      <Visa />
    </li>
    <li>
      <MasterCard />
    </li>
    <li>
      <Discover />
    </li>
    <li>
      <AmericanExpress />
    </li>
  </ul>
);

export default Cards;
