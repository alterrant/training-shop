import React from "react";
import Advantage from "./advantage/advantage";

import { ReactComponent as TruckSVG } from "../../../assets/SVG/truck.svg";
import { ReactComponent as RefreshSVG } from "../../../assets/SVG/refresh.svg";
import { ReactComponent as SupportSVG } from "../../../assets/SVG/support.svg";

import AdvantagesStyle from "./advantages.module.css";

const Advantages = () => (
  <section className={AdvantagesStyle.container}>
    <div className={AdvantagesStyle.wrapper}>
      <Advantage
        svg={<TruckSVG />}
        tittle="FREE SHIPPING"
        description="On all UA order or order above $100"
      />
      <Advantage
        svg={<RefreshSVG />}
        tittle="30 DAYS RETURN"
        description="Simply return it within 30 days for an exchange"
      />
      <Advantage
        svg={<SupportSVG />}
        tittle="SUPPORT 24/7"
        description="Contact us 24 hours a day, 7 days a week"
      />
    </div>
  </section>
);

export default Advantages;
