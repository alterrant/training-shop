import React from "react";
import PayPalMethodStyle from "./PayPalMethod.module.css";
import {ErrorMessage, Field} from "formik";
import {paymentFieldsValidators} from "../../../../../../encapsulatedCommonLogics/validators";
import {CustomReviewErrorMessage} from "../../../../review/customReviewErrorMessage/CustomReviewErrorMessage";
import classNames from "classnames/bind";

const PayPalMethod = ({formik}) => {
  const className = classNames.bind(PayPalMethodStyle);

  return (
      <div className={PayPalMethodStyle.formControl}>
        <label>
          <p>E-MAIL</p>
          <Field type='email' name='cashEmail' placeholder='e-mail'
                 validate={paymentFieldsValidators.paypalValidator}
                 className={className('formControlInputs', {errorField: formik.errors.cashEmail && formik.touched.cashEmail})}/>
        </label>
        <ErrorMessage name='cashEmail' component={CustomReviewErrorMessage}/>
      </div>
  )
}

export default PayPalMethod;