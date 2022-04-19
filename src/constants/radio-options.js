import { ReactComponent as PayPalSVG } from "../assets/SVG/paypal.svg";
import { ReactComponent as VisaSVG } from "../assets/SVG/visa.svg";
import { ReactComponent as MasterCardSVG } from "../assets/SVG/mastercard.svg";
import { PAYMENT } from "./shoppingCart";

export const DELIVERY_RADIO_OPTIONS = [
  { key: "rOption1", value: "Pickup from post offices" },
  { key: "rOption2", value: "Express delivery" },
  { key: "rOption3", value: "Store pickup" },
];

export const PAYMENT_RADIO_OPTIONS = [
  { key: "rOption1", value: PAYMENT.paypal, svg: PayPalSVG },
  { key: "rOption2", value: PAYMENT.visa, svg: VisaSVG },
  { key: "rOption3", value: PAYMENT.mastercard, svg: MasterCardSVG },
  { key: "rOption4", value: PAYMENT.cash },
];
