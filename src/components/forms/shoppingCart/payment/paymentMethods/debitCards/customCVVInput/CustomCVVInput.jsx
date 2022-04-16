import {ErrorMessage} from "formik";
import React from "react";
import {CustomReviewErrorMessage} from "../../../../../review/customReviewErrorMessage/CustomReviewErrorMessage";

export const CustomCVVInput = (props) => {
  const {field, form, ...otherProps} = props;

  const getInputNumbersValue = (inputElement) => {
    return inputElement.value.replace(/\D/g, '');
  }

  const phoneChangeHandler = (e) => {
    const inputElement = e.target;

    let formatedInputValue = '';

    const inputNumbers = getInputNumbersValue(inputElement);

    form.setFieldTouched('cardCVV', true, false);

    formatedInputValue += inputNumbers.substring(0, 3);

    form.setFieldValue('cardCVV', formatedInputValue);
  }

  return (
      <div>
        <input type='password'
               {...field}
               {...otherProps}
               onChange={phoneChangeHandler}
               data-test-id={'review-name-field'}/>
        <ErrorMessage name='cardCVV' component={CustomReviewErrorMessage}/>
      </div>
  )
}