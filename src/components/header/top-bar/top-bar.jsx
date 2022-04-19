import React from "react";
import {
  CompanyAddress,
  CompanyPhone,
  CompanySchedule,
  Messengers,
} from "../../common/company-info/company-info";

import TopBarStyle from "./top-bar.module.css";

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
