import DeliveryInfoFormStyle from "../DeliveryInfoForm.module.css";
import {ErrorMessage, Field} from "formik";
import {CustomReviewErrorMessage} from "../../../review/customReviewErrorMessage/CustomReviewErrorMessage";
import React from "react";
import {deliveryInfoFieldsValidators} from "../../../../../encapsulatedCommonLogics/validators";
import classNames from "classnames/bind";

const UserAddressFields = ({formik}) => {
  const className = classNames.bind(DeliveryInfoFormStyle);

  return (
      <>
        <div className={DeliveryInfoFormStyle.formControl}>
          <label>
            <p>ADDRESS</p>
            <Field type='input' name='country' placeholder='Country' validate={deliveryInfoFieldsValidators.requiredValidator}
                   className={className('formControlInputs', {errorField: formik.errors.country && formik.touched.country})}/>
          </label>
          <ErrorMessage name='country' component={CustomReviewErrorMessage}/>
        </div>
        <div className={DeliveryInfoFormStyle.formControl}>
          <Field type='input' name='city' placeholder='City' validate={deliveryInfoFieldsValidators.requiredValidator}
                 className={className('formControlInputs', {errorField: formik.errors.city && formik.touched.city})}/>
          <ErrorMessage name='city' component={CustomReviewErrorMessage}/>
        </div>
        <div className={DeliveryInfoFormStyle.formControl}>
          <Field type='input' name='street' placeholder='Street' validate={deliveryInfoFieldsValidators.requiredValidator}
                 className={className('formControlInputs', {errorField: formik.errors.street && formik.touched.street})}/>
          <ErrorMessage name='street' component={CustomReviewErrorMessage}/>
        </div>
        <div className={DeliveryInfoFormStyle.formControl}>
          <div className={DeliveryInfoFormStyle.house}>
            <Field type='input' name='house' placeholder='House' validate={deliveryInfoFieldsValidators.requiredValidator}
                   className={className('formControlInputs', {errorField: formik.errors.house && formik.touched.house})}/>
            <Field type='input' name='apartment' placeholder='Apartment'
                   className={className('formControlInputs', {errorField: formik.errors.apartment && formik.touched.apartment})}/>
          </div>
          <ErrorMessage name='house' component={CustomReviewErrorMessage}/>
        </div>
      </>
  )
}

export default UserAddressFields;