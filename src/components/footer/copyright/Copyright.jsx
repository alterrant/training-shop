import React from "react";
import GreyCards from "../../common/cards/GreyCards";
import CopyrightStyle from "./Copyright.module.css";

const Copyright = () => (
  <div className={CopyrightStyle.background}>
    <ul className={CopyrightStyle.wrapper}>
      <li>
        <p>Copyright © 2032 all rights reserved</p>
      </li>
      <li className={CopyrightStyle.cards}>
        <GreyCards />
      </li>
      <li>
        <p>Clevertec.ru/training</p>
      </li>
    </ul>
  </div>
);

export default Copyright;
