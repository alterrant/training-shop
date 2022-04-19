import React from "react";
import PropTypes from "prop-types";
import Error from "./error/Error";
import ErrorsStyle from "./Errors.module.css";

const Errors = ({ currentErrors }) => {
  const errors = currentErrors.map((error) => (
    <Error errorMessage={error} key={error} />
  ));

  return <ul className={ErrorsStyle.wrapper}>{errors}</ul>;
};

export default Errors;

Errors.propTypes = {
  currentErrors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
