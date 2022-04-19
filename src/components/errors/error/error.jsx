import React from "react";
import PropTypes from "prop-types";
import ErrorStyle from "./error.module.css";

const Error = ({ errorMessage }) => (
  <li className={ErrorStyle.wrapper} data-test-id="error">
    <div className={ErrorStyle.text}>{errorMessage}</div>
  </li>
);

export default Error;

Error.propTypes = {
  errorMessage: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
