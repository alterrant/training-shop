import React from "react";
import { Messengers } from "../../common/companyInfo/CompanyInfo";
import SubscribeForm from "../../forms/subscribe/SubscribeForm";
import JoinUsStyle from "./JoinUs.module.css";

const JoinUs = () => (
  <div className={JoinUsStyle.background}>
    <div className={JoinUsStyle.wrapper}>
      <p className={JoinUsStyle.text}>BE IN TOUCH WITH US:</p>
      <SubscribeForm formName="footerForm" />
      <div className={JoinUsStyle.messengers}>
        <Messengers />
      </div>
    </div>
  </div>
);

export default JoinUs;
