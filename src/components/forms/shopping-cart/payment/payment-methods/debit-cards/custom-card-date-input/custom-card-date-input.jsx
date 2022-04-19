import React, { useEffect, useRef, useState } from "react";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

import CustomReviewErrorMessage from "../../../../../review/custom-review-error-message/custom-review-error-message";

const CustomCardDateInput = ({ field, form, ...otherProps }) => {
  const [selectionStart, setSelectionStart] = useState(null);

  const cardInputRef = useRef();

  const getInputNumbersValue = (inputElement) => {
    return inputElement.value.replace(/\D/g, "");
  };

  const phoneChangeHandler = (e) => {
    const inputElement = e.target;

    let formatedInputValue = "";

    const inputNumbers = getInputNumbersValue(inputElement);

    form.setFieldTouched("cardDate", true, false);

    if (
      inputNumbers.length >= 1 &&
      (inputNumbers[0] === "0" || inputNumbers[0] === "1")
    ) {
      formatedInputValue += inputNumbers.substring(0, 1);
    }
    if (inputNumbers.length >= 2) {
      if (inputNumbers[0] + inputNumbers[1] <= 12)
        formatedInputValue += inputNumbers.substring(1, 2);
    }
    if (inputNumbers.length > 2)
      formatedInputValue += "/" + inputNumbers.substring(2, 4);

    form.setFieldValue("cardDate", formatedInputValue);

    if (e.target.selectionStart <= 2) {
      setSelectionStart(e.target.selectionStart);
    }
  };

  useEffect(() => {
    if (cardInputRef)
      cardInputRef.current.selectionStart = cardInputRef.current.selectionEnd =
        selectionStart;
  }, [selectionStart]);

  return (
    <div>
      <input
        type="tel"
        /* eslint-disable react/jsx-props-no-spreading */
        value={field.value}
        name={field.name}
        {...otherProps}
        onChange={phoneChangeHandler}
        ref={cardInputRef}
        data-test-id="review-name-field"
      />
      <ErrorMessage name="cardDate" component={CustomReviewErrorMessage} />
    </div>
  );
};

export default CustomCardDateInput;

CustomCardDateInput.propTypes = {
  field: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.bool])
  ),
  form: PropTypes.instanceOf(Object),
  otherProps: PropTypes.objectOf(PropTypes.string),
};
