import React from "react";

import Benefit from "./benefit/benefit";
import { BENEFITS } from "../../../constants/benefits";

import BenefitsStyle from "./benefits.module.css";

const Benefits = () => {
  const benefits = BENEFITS.map((item) => (
    <li className={BenefitsStyle.list} key={item.id}>
      <Benefit item={item} />
    </li>
  ));

  return (
    <section className={BenefitsStyle.container}>
      <ul className={BenefitsStyle.wrapper}>{benefits}</ul>
    </section>
  );
};

export default Benefits;
