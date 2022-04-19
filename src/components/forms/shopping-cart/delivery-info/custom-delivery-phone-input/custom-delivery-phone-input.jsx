import React from "react";
import PropTypes from "prop-types";

const CustomDeliveryPhoneInput = ({ field, form, ...otherProps }) => {
  const getInputNumbersValue = (inputElement) => {
    return inputElement.value.replace(/\D/g, "");
  };

  const phoneChangeHandler = (e) => {
    const inputElement = e.target;

    let formatedInputValue = "+375";
    const inputNumbers = getInputNumbersValue(inputElement);

    form.setFieldTouched("phone", true, false);

    if (inputNumbers.length === 1) formatedInputValue += ` (${inputNumbers}`;

    /* валидация, если нужно запретить возможность ввода неправильного кода оператора
        if (inputNumbers.length === 4 || inputNumbers.length === 1) {
          let inputIndex;

          (inputNumbers.length === 4) ? inputIndex = 3 : inputIndex = 0;

          if (!(inputNumbers[inputIndex] === '2'
              || inputNumbers[inputIndex] === '3'
              || inputNumbers[inputIndex] === '4')) {
            form.setFieldError('phone', 'wrong code');
            form.setFieldTouched('phone', true, false);
            return
          }
        }

        if (inputNumbers.length === 5 && !(
            (inputNumbers[3] === '3' && inputNumbers[4] === '3')
            || (inputNumbers[3] === '4' && inputNumbers[4] === '4')
            || (inputNumbers[3] === '2' && inputNumbers[4] === '5')
            || (inputNumbers[3] === '2' && inputNumbers[4] === '9')
        )) return form.setFieldError('phone', 'wrong code'); */

    if (inputNumbers.length >= 4)
      formatedInputValue += ` (${inputNumbers.substring(3, 5)}`;

    if (inputNumbers.length >= 6)
      formatedInputValue += `) ${inputNumbers.substring(5, 12)}`;

    form.setFieldValue("phone", formatedInputValue);
  };
  const onPhoneKeyDown = (e) => {
    if (e.keyCode === 8 && e.target.value === "+375")
      form.setFieldValue("phone", "");
  };

  return (
    <input
      type="tel"
      /* eslint-disable react/jsx-props-no-spreading */
      {...field}
      {...otherProps}
      onChange={phoneChangeHandler}
      onKeyDown={onPhoneKeyDown}
      data-test-id="review-name-field"
    />
  );
};

export default CustomDeliveryPhoneInput;

CustomDeliveryPhoneInput.propTypes = {
  field: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.bool])
  ),
  form: PropTypes.instanceOf(Object),
  otherProps: PropTypes.objectOf(PropTypes.string),
};
