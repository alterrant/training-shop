import React from "react";
import {
  CompanyAddress,
  CompanyPhone,
  CompanySchedule,
  Messengers,
} from "../../common/companyInfo/CompanyInfo";

import TopBarStyle from "./TopBar.module.css";

const TopBar = () => (
  <div className={TopBarStyle.background}>
    <div className={TopBarStyle.wrapper}>
      <div className={TopBarStyle.companyInfo}>
        <CompanyPhone />
        <CompanyAddress />
        <CompanySchedule />
      </div>
      <Messengers />
    </div>
  </div>
);

export default TopBar;
