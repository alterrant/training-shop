import React from "react";
import classNames from "classnames/bind";
import { ErrorMessage, Field } from "formik";

import { paymentFieldsValidators } from "../../../../../../encapsulated-common-logics/validators";
import CustomReviewErrorMessage from "../../../../review/custom-review-error-message/custom-review-error-message";

import PayPalMethodStyle from "./paypal-method.module.css";

const PayPalMethod = ({ formik }) => {
  const className = classNames.bind(PayPalMethodStyle);

  return (
    <div className={PayPalMethodStyle.formControl}>
      <label>
        E-MAIL
        <Field
          type="email"
          name="cashEmail"
          placeholder="e-mail"
          validate={paymentFieldsValidators.paypalValidator}
          className={className("formControlInputs", {
            errorField: formik.errors.cashEmail && formik.touched.cashEmail,
          })}
        />
      </label>
      <ErrorMessage name="cashEmail" component={CustomReviewErrorMessage} />
    </div>
  );
};

export default PayPalMethod;
