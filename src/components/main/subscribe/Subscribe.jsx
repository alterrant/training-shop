import React from "react";

import SubscribeOffer from "./subscribeOffer/SubscribeOffer";
import { SPECIAL_BENEFIT } from "../../../constants/benefits";

import SubscribeStyle from "./Subscribe.module.css";

const Subscribe = () => (
  <section className={SubscribeStyle.wrapper}>
    <SubscribeOffer specialOffer={SPECIAL_BENEFIT} />
  </section>
);

export default Subscribe;
