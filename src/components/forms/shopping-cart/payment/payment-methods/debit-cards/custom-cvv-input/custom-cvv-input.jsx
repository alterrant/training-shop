import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";

import CustomReviewErrorMessage from "../../../../../review/custom-review-error-message/custom-review-error-message";

const CustomCVVInput = ({ field, form, ...otherProps }) => {
  const getInputNumbersValue = (inputElement) => {
    return inputElement.value.replace(/\D/g, "");
  };

  const phoneChangeHandler = (e) => {
    const inputElement = e.target;

    let formatedInputValue = "";

    const inputNumbers = getInputNumbersValue(inputElement);

    form.setFieldTouched("cardCVV", true, false);

    formatedInputValue += inputNumbers.substring(0, 3);

    form.setFieldValue("cardCVV", formatedInputValue);
  };

  return (
    <div>
      <input
        type="password"
        /* eslint-disable react/jsx-props-no-spreading */
        {...field}
        {...otherProps}
        onChange={phoneChangeHandler}
        data-test-id="review-name-field"
      />
      <ErrorMessage name="cardCVV" component={CustomReviewErrorMessage} />
    </div>
  );
};

export default CustomCVVInput;

CustomCVVInput.propTypes = {
  field: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.bool])
  ),
  form: PropTypes.instanceOf(Object),
  otherProps: PropTypes.objectOf(PropTypes.string),
};
