import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import CheckboxStyle from "./checkbox.module.css";

const Checkbox = ({ filterName, value, payload, changeHandler }) => {
  const dispatch = useDispatch();
  const color = filterName === "color" ? payload : null;

  const customCheckboxStyle = `${CheckboxStyle.customCheckbox} ${
    value ? CheckboxStyle.customCheckboxActive : ""
  }`;
  const customRadioButtonStyle = `${CheckboxStyle.customRadioButton} ${
    value ? CheckboxStyle.customRadioButtonActive : ""
  }`;

  const buttonStyle = color ? customRadioButtonStyle : customCheckboxStyle;

  return (
    <label className={buttonStyle} style={{ backgroundColor: `${color}` }}>
      {!color && <Vector isActive={value} />}
      <input
        data-test-id={`filter-${filterName}-${payload}`}
        type="checkbox"
        checked={value}
        onChange={() => dispatch(changeHandler(payload))}
        className={CheckboxStyle.checkbox}
      />
    </label>
  );
};

export default Checkbox;

const Vector = ({ isActive }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3659 0.234412C11.5159 0.384435 11.6002
         0.587881 11.6002 0.800012C11.6002 1.01214 11.5159 1.21559 11.3659 1.36561L4.96593
          7.76561C4.8159 7.91559 4.61246 7.99984 4.40033 7.99984C4.18819 7.99984 3.98475 7.91559
           3.83473 7.76561L0.634726 4.56561C0.488999 4.41473 0.408364 4.21265 0.410186 4.00289C0.412009
            3.79313 0.496144 3.59248 0.644471 3.44416C0.792797 3.29583 0.993447 3.2117 1.2032
             3.20987C1.41296 3.20805 1.61504 3.28869 1.76593 3.43441L4.40033 6.06881L10.2347 0.234412C10.3847
              0.0844356 10.5882 0.000183105 10.8003 0.000183105C11.0125 0.000183105 11.2159 0.0844356 11.3659
               0.234412Z"
        fill={isActive ? "#121212" : "none"}
      />
    </svg>
  );
};

Checkbox.propTypes = {
  filterName: PropTypes.string,
  value: PropTypes.bool,
  payload: PropTypes.string,
  changeHandler: PropTypes.func,
};

Vector.propTypes = {
  isActive: PropTypes.bool,
};
