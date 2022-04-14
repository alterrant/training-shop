import DebitCardMethodStyle from "./DebitCardMethod.module.css";
import {ErrorMessage, Field} from "formik";
import React from "react";
import {CustomCardInput} from "./customCardInput/CustomCardInput";
import {CustomCardDateInput} from "./customCardDateInput/CustomCardDateInput";
import {paymentFieldsValidators} from "../../../../../../encapsulatedCommonLogics/validators";
import {CustomCVVInput} from "./customCVVInput/CustomCVVInput";
import {CustomReviewErrorMessage} from "../../../../review/customReviewErrorMessage/CustomReviewErrorMessage";

const DebitCardMethod = () => {
  return (
      <>
        <div className={DebitCardMethodStyle.formControl}>
          <label>
            <p>CARD</p>
            <Field type='tel'
                   name='card'
                   placeholder='____ ____ ____ ____'
                   component={CustomCardInput}
                   validate={paymentFieldsValidators.cardValidators}/>
          </label>
          <ErrorMessage name='card' component={CustomReviewErrorMessage}/>
        </div>
        <div className={DebitCardMethodStyle.formControl}>
          <div className={DebitCardMethodStyle.house}>
            <Field type='tel' name='cardDate' placeholder='MM/YY' component={CustomCardDateInput}
                   validate={paymentFieldsValidators.dateValidators}/>
            <Field type='password' name='cardCVV' placeholder='CVV' component={CustomCVVInput}
                   validate={paymentFieldsValidators.cvvValidators}/>
          </div>
          <div className={DebitCardMethodStyle.house}>

          </div>
        </div>
      </>
  )
}

export default DebitCardMethod;