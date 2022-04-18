import React from "react";
import CustomStoreAddressInputStyle from "../customStoreAddressInput/CustomStoreAddressInput.module.css";
import classNames from "classnames/bind";

export const CustomStoreAddressSelect = ({options, optionValue, handleClick, isSelected}) => {
  const className = classNames.bind(CustomStoreAddressInputStyle);

  return options.map(option => (
      <React.Fragment key={option._id}>
        <input id={option[optionValue]}
               className={CustomStoreAddressInputStyle.selectInput}
               type="radio"
               name="singleSelect"/>
        <label htmlFor={option[optionValue]}
               className={className('selectLabel', !isSelected && 'activeLabel' )}
               onClick={() => handleClick(option[optionValue])}>{option[optionValue]}</label>
      </React.Fragment>
  ))
}