import DeliveryInfoFormStyle from "../DeliveryInfoForm.module.css";
import {ErrorMessage, Field} from "formik";
import {CustomReviewErrorMessage} from "../../../review/customReviewErrorMessage/CustomReviewErrorMessage";
import React from "react";
import {deliveryInfoFieldsValidators} from "../../../../../encapsulatedCommonLogics/validators";

const UserAddressFields = () => {
  return (
      <>
        <div className={DeliveryInfoFormStyle.formControl}>
          <label>
            <p>ADDRESS</p>
            <Field type='input' name='country' placeholder='Country' validate={deliveryInfoFieldsValidators.requiredValidator}/>
          </label>
          <ErrorMessage name='country' component={CustomReviewErrorMessage}/>
        </div>
        <div className={DeliveryInfoFormStyle.formControl}>
          <Field type='input' name='city' placeholder='City' validate={deliveryInfoFieldsValidators.requiredValidator}/>
          <ErrorMessage name='city' component={CustomReviewErrorMessage}/>
        </div>
        <div className={DeliveryInfoFormStyle.formControl}>
          <Field type='input' name='street' placeholder='Street' validate={deliveryInfoFieldsValidators.requiredValidator}/>
          <ErrorMessage name='street' component={CustomReviewErrorMessage}/>
        </div>
        <div className={DeliveryInfoFormStyle.formControl}>
          <div className={DeliveryInfoFormStyle.house}>
            <Field type='input' name='house' placeholder='House' validate={deliveryInfoFieldsValidators.requiredValidator}/>
            <Field type='input' name='apartment' placeholder='Apartment'/>
          </div>
          <ErrorMessage name='house' component={CustomReviewErrorMessage}/>
        </div>
      </>
  )
}

export default UserAddressFields;