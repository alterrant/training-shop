import React from "react";
import classNames from "classnames/bind";
import { ErrorMessage, Field } from "formik";

import CustomCardInput from "./custom-card-input/custom-card-input";
import CustomCardDateInput from "./custom-card-date-input/custom-card-date-input";
import { paymentFieldsValidators } from "../../../../../../encapsulated-common-logics/validators";
import CustomCVVInput from "./custom-cvv-input/custom-cvv-input";
import CustomReviewErrorMessage from "../../../../review/custom-review-error-message/custom-review-error-message";

import DebitCardMethodStyle from "./debit-card-method.module.css";

const DebitCardMethod = ({ formik }) => {
  const className = classNames.bind(DebitCardMethodStyle);

  return (
    <>
      <div className={DebitCardMethodStyle.formControl}>
        <label>
          <p>CARD</p>
          <Field
            type="tel"
            name="card"
            placeholder="____ ____ ____ ____"
            component={CustomCardInput}
            validate={paymentFieldsValidators.cardValidators}
            className={className("formControlInputs", {
              errorField: formik.errors.card && formik.touched.card,
            })}
          />
        </label>
        <ErrorMessage name="card" component={CustomReviewErrorMessage} />
      </div>
      <div className={DebitCardMethodStyle.formControl}>
        <div className={DebitCardMethodStyle.house}>
          <Field
            type="tel"
            name="cardDate"
            placeholder="MM/YY"
            component={CustomCardDateInput}
            validate={paymentFieldsValidators.dateValidators}
            className={className("formControlInputs", {
              errorField: formik.errors.cardDate && formik.touched.cardDate,
            })}
          />
          <Field
            type="password"
            name="cardCVV"
            placeholder="CVV"
            component={CustomCVVInput}
            validate={paymentFieldsValidators.cvvValidators}
            className={className("formControlInputs", {
              errorField: formik.errors.cardCVV && formik.touched.cardCVV,
            })}
          />
        </div>
        <div className={DebitCardMethodStyle.house} />
      </div>
    </>
  );
};

export default DebitCardMethod;
