import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import Vector from "./vector/vector";

import CheckboxStyle from "./checkbox.module.css";

const CustomShoppingCartCheckbox = (props) => {
  const { field, form } = props;

  const className = classNames.bind(CheckboxStyle);

  const customCheckboxStyle = className(
    "customCheckbox",
    field.value && "customCheckboxActive",
    { customCheckboxError: form.errors[field.name] && form.touched[field.name] }
  );

  return (
    <label className={customCheckboxStyle} htmlFor={field.name}>
      <Vector isActive={field.value} />
      <input
        type="checkbox"
        id={field.name}
        name={field.name}
        checked={field.value}
        onChange={(e) => field.onChange(e)}
        className={CheckboxStyle.checkbox}
      />
    </label>
  );
};

export default CustomShoppingCartCheckbox;

CustomShoppingCartCheckbox.propTypes = {
  field: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.bool])
  ),
  form: PropTypes.instanceOf(Object),
};

Vector.propTypes = {
  isActive: PropTypes.bool,
};
