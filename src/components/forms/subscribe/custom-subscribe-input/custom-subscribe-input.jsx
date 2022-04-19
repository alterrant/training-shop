import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const CustomSubscribeInput = ({
  field,
  form,
  subscribeFormStyle,
  formName,
}) => {
  const className = classNames.bind(subscribeFormStyle);

  return (
    <div className={subscribeFormStyle.inputEmailWrapper}>
      <input
        className={className("inputEmail", {
          inputEmailError: form.errors.email,
        })}
        type="email"
        id="subscribeEmail"
        placeholder="Enter your email"
        /* eslint-disable react/jsx-props-no-spreading */
        {...field}
        data-test-id={
          formName === "mainForm"
            ? "main-subscribe-mail-field"
            : "footer-mail-field"
        }
      />
    </div>
  );
};

export default CustomSubscribeInput;

CustomSubscribeInput.propTypes = {
  field: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.bool])
  ),
  form: PropTypes.instanceOf(Object),
  subscribeFormStyle: PropTypes.instanceOf(Object),
  formName: PropTypes.string,
};
