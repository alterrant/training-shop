import React from "react";
import PropTypes from "prop-types";

import SubscribeForm from "../../../forms/subscribe/subscribe-form";

import subscribeWomen from "../../../../assets/banner/subscribe-women.png";
import subscribeMen from "../../../../assets/banner/subscribe-men.png";

import SubscribeStyle from "./subscribe-offer.module.css";

const SubscribeOffer = ({ specialOffer }) => {
  const [descriptionTop, descriptionBot] = specialOffer.description.split("\n");

  return (
    <div className={SubscribeStyle.mask}>
      <img
        className={SubscribeStyle.women}
        src={subscribeWomen}
        alt="subsWomen"
      />
      <img className={SubscribeStyle.men} src={subscribeMen} alt="subsMen" />
      <div className={SubscribeStyle.rectangle}>
        <div className={SubscribeStyle.wrapper}>
          <div className={SubscribeStyle.tittle}>{specialOffer.tittle}</div>
          <div className={SubscribeStyle.description}>
            {descriptionTop}
            <br />
            {descriptionBot}
            {specialOffer.discount && <span>{specialOffer.discount}</span>}
          </div>
          <SubscribeForm formName="mainForm" />
        </div>
      </div>
    </div>
  );
};

export default SubscribeOffer;

SubscribeOffer.propTypes = {
  specialOffer: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
