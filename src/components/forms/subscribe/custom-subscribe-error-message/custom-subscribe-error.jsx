import React from "react";
import PropTypes from "prop-types";

const CustomSubscribeError = ({ children, subscribeFormStyle }) => (
  <div className={subscribeFormStyle.formError}>{children}</div>
);

export default CustomSubscribeError;

CustomSubscribeError.propTypes = {
  children: PropTypes.string,
  subscribeFormStyle: PropTypes.instanceOf(Object),
};
