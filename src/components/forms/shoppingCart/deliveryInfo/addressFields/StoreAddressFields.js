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

  const selectClassName = classNames.bind(DeliveryInfoFormStyle);

  const storeAddressChangeHandler = (formikField, e) => {
    formikField.field.onChange(e);

    if (e.target.value.length === 3) dispatch(fetchAvailableStoreAddresses({
      country: formik.values.storeCountry,
      city: e.target.value
    }))
  }

  const storeAddressBlurHandler = (formikField, e) => {
    formikField.form.setFieldTouched('storeAddress', true, false);

    let isCityCorrect = false;

    availableStoreAddresses.forEach(availableAddress => {
      if (e.target.value === availableAddress?.city
          && formik.values.storeCountry === availableAddress?.country) {
        isCityCorrect = true;
      }
    })
    if (e.target.value.length > 0) {
      if (!isCityCorrect) formikField.form.setFieldError('storeAddress', 'Unavailable city');
    }
  }

  return (
      <>
        <div className={DeliveryInfoFormStyle.formControl}>
          <label>
            <p>ADDRESS OF STORE</p>
            <Field as='select'
                   name='storeCountry'
                   className={selectClassName('selectField', isCountryChosen && 'selectFieldEmpty')}
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
            <Field type='text' name='storeAddress' validate={deliveryInfoFieldsValidators.requiredValidator}>
              {
                formikField => {
                  return (
                      <input type='text'
                             name='storeAddress'
                             list='storeAddress'
                             onChange={event => storeAddressChangeHandler(formikField, event)}
                             onBlur={event => storeAddressBlurHandler(formikField, event)}
                             placeholder={'Store address'}
                             disabled={isCountryChosen}/>
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