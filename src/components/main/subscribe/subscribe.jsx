import React from "react";

import SubscribeOffer from "./subscribe-offer/subscribe-offer";
import { SPECIAL_BENEFIT } from "../../../constants/benefits";

import SubscribeStyle from "./subscribe.module.css";

const Subscribe = () => (
  <section className={SubscribeStyle.wrapper}>
    <SubscribeOffer specialOffer={SPECIAL_BENEFIT} />
  </section>
);

export default Subscribe;
