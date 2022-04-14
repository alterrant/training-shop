import React from "react";
import PayPalMethodStyle from "./PayPalMethod.module.css";
import {ErrorMessage, Field} from "formik";
import {paymentFieldsValidators} from "../../../../../../encapsulatedCommonLogics/validators";
import {CustomReviewErrorMessage} from "../../../../review/customReviewErrorMessage/CustomReviewErrorMessage";

const PayPalMethod = () => {
  return (
      <div className={PayPalMethodStyle.formControl}>
        <label>
          <p>E-MAIL</p>
          <Field type='email' name='cashEmail' placeholder='e-mail'
                 validate={paymentFieldsValidators.paypalValidator}/>
        </label>
        <ErrorMessage name='cashEmail' component={CustomReviewErrorMessage}/>
      </div>
  )
}

export default PayPalMethod;