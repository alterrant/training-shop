import React from "react";
import { Messengers } from "../../common/company-info/company-info";
import SubscribeForm from "../../forms/subscribe/subscribe-form";
import JoinUsStyle from "./join-us.module.css";

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
