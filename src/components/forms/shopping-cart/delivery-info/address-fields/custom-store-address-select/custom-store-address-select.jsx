import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import CustomStoreAddressInputStyle from "../custom-store-address-input/custom-store-address-input.module.css";

const CustomStoreAddressSelect = ({
  options,
  optionValue,
  handleClick,
  isSelected,
}) => {
  const className = classNames.bind(CustomStoreAddressInputStyle);

  return options.map((option) => (
    <React.Fragment key={option._id}>
      <input
        id={option[optionValue]}
        className={CustomStoreAddressInputStyle.selectInput}
        type="radio"
        name="singleSelect"
      />
      <label
        htmlFor={option[optionValue]}
        className={className("selectLabel", !isSelected && "activeLabel")}
        onClick={() => handleClick(option[optionValue])}
      >
        {option[optionValue]}
      </label>
    </React.Fragment>
  ));
};

export default CustomStoreAddressSelect;

CustomStoreAddressSelect.propTypes = {
  optionValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func,
};
