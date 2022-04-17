import DeliveryInfoFormStyle from "../DeliveryInfoForm.module.css";
import {ErrorMessage, Field} from "formik";
import {CustomReviewErrorMessage} from "../../../review/customReviewErrorMessage/CustomReviewErrorMessage";
import React from "react";
import {useSelector} from "react-redux";
import classNames from "classnames/bind";
import {useStableDispatch} from "../../../../../hooks/useRedux";
import {fetchAvailableStoreAddresses} from "../../../../../redux/shoppingCartReducer";
import {deliveryInfoFieldsValidators} from "../../../../../encapsulatedCommonLogics/validators";

const StoreAddressFields = ({formik}) => {
  const dispatch = useStableDispatch();

  const isCountryChosen = !formik.values.storeCountry;

  const deliveryCountries = useSelector(state => state.shoppingCart.deliveryInfo.deliveryCountries);
  const availableStoreAddresses = useSelector(state => state.shoppingCart.deliveryInfo.availableStoreAddresses);

  const className = classNames.bind(DeliveryInfoFormStyle);

  const storeAddressChangeHandler = (formikField, e) => {
    formikField.field.onChange(e);

    if (e.target.value.length === 3) dispatch(fetchAvailableStoreAddresses({
      country: formik.values.storeCountry,
      city: e.target.value
    }))
  }

  const storeAddressBlurHandler = (formikField) => {
    formikField.form.setFieldTouched('storeAddress', true, false);
  }

  return (
      <>
        <div className={DeliveryInfoFormStyle.formControl}>
          <label>
            <p>ADDRESS OF STORE</p>
            <Field as='select'
                   name='storeCountry'
                   placeholder='Country'
                   className={className(
                       'formControlInputs',
                       'selectField',
                       isCountryChosen && 'selectFieldEmpty',
                       {errorField: formik.errors.storeCountry && formik.touched.storeCountry}
                       )}
                   validate={deliveryInfoFieldsValidators.requiredValidator}>
              {
                <option value='' disabled hidden>
                  Country
                </option>
              }
              {
                deliveryCountries.map(option => {
                  return (
                      <option key={option._id} value={option.name} className={DeliveryInfoFormStyle.storeCountryOption}>
                        {option.name}
                      </option>
                  )
                })
              }
            </Field>
          </label>
          <ErrorMessage name='storeCountry' component={CustomReviewErrorMessage}/>
        </div>
        <div className={DeliveryInfoFormStyle.formControl}>
          <label>
            <Field type='text' name='storeAddress' validate={(e) => deliveryInfoFieldsValidators.storeAddressValidator(e, availableStoreAddresses, formik.values.storeCountry)}>
              {
                formikField => {
                  return (
                      <input type='text'
                             name='storeAddress'
                             list='storeAddress'
                             value={formikField.field.value}
                             onChange={event => storeAddressChangeHandler(formikField, event)}
                             onBlur={event => storeAddressBlurHandler(formikField, event)}
                             placeholder={'Store address'}
                             disabled={isCountryChosen}
                             className={className('formControlInputs', {errorField: formik.errors.storeAddress && formik.touched.storeAddress})}/>
                  )
                }
              }
            </Field>
            <datalist id='storeAddress'>
              {
                availableStoreAddresses.map(availableAddress => {
                  return <option key={availableAddress._id} value={availableAddress.city}/>
                })
              }
            </datalist>
          </label>
          <ErrorMessage name='storeAddress' component={CustomReviewErrorMessage}/>
        </div>
      </>
  )
}

export default StoreAddressFields;