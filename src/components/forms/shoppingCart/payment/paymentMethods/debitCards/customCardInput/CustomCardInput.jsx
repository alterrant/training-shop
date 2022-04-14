import classNames from "classnames/bind";
import CustomDeliveryPhoneInputStyle from "./CustomCardInput.module.css";
import {useEffect, useRef, useState} from "react";

export const CustomCardInput = (props) => {
  const className = classNames.bind(CustomDeliveryPhoneInputStyle);
  const [selectionStart, setSelectionStart] = useState(null);

  const cardInputRef = useRef();

  useEffect(() => {
    if (cardInputRef) cardInputRef.current.selectionStart = cardInputRef.current.selectionEnd = selectionStart;
  }, )

  const {field, form, ...otherProps} = props;

  const getInputNumbersValue = (inputElement) => {
    return inputElement.value.replace(/\D/g, '');
  }

  const phoneChangeHandler = (e) => {
    const inputElement = e.target;
    const selectionStartPos = e.target.selectionStart;

    const inputNumbers = getInputNumbersValue(inputElement);

    form.setFieldTouched('card', false, false);

    let formatedInputValue = '____ ____ ____ ____';

    for (let i = 0; i <= inputNumbers.length - 1; i++) {
      formatedInputValue = formatedInputValue.replace('_', inputNumbers[i])
    }

    if (selectionStartPos === getInputNumbersPos(inputNumbers)) {
      if(inputNumbers.length >= 0) setSelectionStart(inputNumbers.length);

      if (inputNumbers.length >= 4) setSelectionStart(inputNumbers.length + 1);

      if (inputNumbers.length >= 8) setSelectionStart(inputNumbers.length + 2);

      if (inputNumbers.length >= 12) setSelectionStart(inputNumbers.length + 3);
    }
    else if (selectionStartPos > getInputNumbersPos(inputNumbers)) {
      if (getInputNumbersPos(inputNumbers) === 4
          || getInputNumbersPos(inputNumbers) === 9
          || getInputNumbersPos(inputNumbers) === 14) setSelectionStart(getInputNumbersPos(inputNumbers) + 1);
      else setSelectionStart(getInputNumbersPos(inputNumbers))
    }
    else {
      setSelectionStart(selectionStartPos)
    }
    if (formatedInputValue === '____ ____ ____ ____') form.setFieldValue('card', '');
    else form.setFieldValue('card', formatedInputValue);
  }

  const onPhoneKeyDown = (e) => {
    const numberValue = getInputNumbersValue(e.target);
    if (e.keyCode === 8 && e.target.value === `${numberValue}___ ____ ____ ____`) form.setFieldValue('card', '');
    if (e.keyCode === 8 && e.target.value === `____ ____ ____ ____`) form.setFieldValue('card', '');
  }

  return (
      <input type='tel'
             className={className('inputReview', {deliveryFormError: form.errors.card && form.touched.card})}
             {...field}
             {...otherProps}
             onChange={phoneChangeHandler}
             onKeyDown={onPhoneKeyDown}
             ref={cardInputRef}
             data-test-id={'review-name-field'}/>
  )
}

const getInputNumbersPos = (inputNumber) => {
  if (inputNumber.length >= 0 && inputNumber.length <= 4) {
    return inputNumber.length
  }
  if (inputNumber.length > 4 && inputNumber.length <= 8) {
    return inputNumber.length + 1
  }
  if (inputNumber.length > 8 && inputNumber.length <= 12) {
    return inputNumber.length + 2
  }
  if (inputNumber.length > 12 && inputNumber.length <= 17) {
    return inputNumber.length + 3
  }
}