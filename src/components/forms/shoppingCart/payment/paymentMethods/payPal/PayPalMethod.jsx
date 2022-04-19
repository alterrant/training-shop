import React from "react";
import classNames from "classnames/bind";
import { ErrorMessage, Field } from "formik";

import { paymentFieldsValidators } from "../../../../../../encapsulatedCommonLogics/validators";
import CustomReviewErrorMessage from "../../../../review/customReviewErrorMessage/CustomReviewErrorMessage";

import PayPalMethodStyle from "./PayPalMethod.module.css";

const PayPalMethod = ({ formik }) => {
  const className = classNames.bind(PayPalMethodStyle);

  return (
    <div className={PayPalMethodStyle.formControl}>
      <label>
        <p>E-MAIL</p>
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
