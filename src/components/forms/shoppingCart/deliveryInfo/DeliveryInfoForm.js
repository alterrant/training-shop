import React, {useEffect, useRef} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import DeliveryInfoFormStyle from "./DeliveryInfoForm.module.css";
import Partition from "../../../common/partition/Partition";
import {deliveryInfoFieldsValidators, shoppingCartValidator} from "../../../../encapsulatedCommonLogics/validators";
import {CustomReviewErrorMessage} from "../../review/customReviewErrorMessage/CustomReviewErrorMessage";
import {CustomDeliveryPhoneInput} from "./customDeliveryPhoneInput/CustomDeliveryPhoneInput";
import {CustomShoppingCartRadio} from "../customShoppingCartRadio/CustomShoppingCartRadio";
import StoreAddressFields from "./addressFields/StoreAddressFields";
import UserAddressFields from "./addressFields/UserAddressFields";
import ShoppingCartFooter from "../../../shoppingCart/content/footer/ShoppingCartFooter";
import {setDeliveryInfo} from "../../../../redux/shoppingCartReducer";
import {useStableDispatch} from "../../../../hooks/useRedux";
import {useSelector} from "react-redux";
import classNames from "classnames/bind";
import CustomShoppingCartCheckbox from "./customShoppingCartCheckbox/Checkbox";

export const DeliveryInfoForm = (props) => {
  const {totalCartPrice, navigationStage, setNavigationStage} = props;

  const dispatch = useStableDispatch();
  const deliveryFormToggle = useSelector(state => state.shoppingCart.deliveryFormToggle);

  const className = classNames.bind(DeliveryInfoFormStyle);

  const deliveryFormRef = useRef();

  const radioOption = [
    {key: 'rOption1', value: 'Pickup from post offices'},
    {key: 'rOption2', value: 'Express delivery'},
    {key: 'rOption3', value: 'Store pickup'},
  ]

  const deliveryInfoSummary = useSelector(state => state.shoppingCart.deliveryInfo.deliveryInfoSummary);
  const initialValues = Object.assign({agreementToggle: false}, deliveryInfoSummary, {storeCountry: deliveryInfoSummary.country});

  const onSubmit = (values) => {
    /*ругаются тесты, нужно восстанавливать всю введённую на прошлом этапе инфу (из других типов доставки тоже)
    const deliveryInfoSummary = {
      deliveryMethod: values.deliveryMethod,
      phone: `+${values.phone.replace(/\D/g, '')}`,
      email: values.email
    };

    if (values.deliveryMethod === 'Pickup from post offices'
        || values.deliveryMethod === 'Express delivery') {
      deliveryInfoSummary.country = values.country;
      deliveryInfoSummary.city = values.city;
      deliveryInfoSummary.street = values.street;
      deliveryInfoSummary.house = values.house;
      if (values.apartment) deliveryInfoSummary.apartment = values.apartment;
    }

    if (values.deliveryMethod === 'Pickup from post offices') deliveryInfoSummary.postcode = values.postcode;

    if (values.deliveryMethod === 'Store pickup') {
      deliveryInfoSummary.country = values.storeCountry;
      deliveryInfoSummary.storeAddress = values.storeAddress;
    }*/
    //formikBag.setFieldTouched('agreementToggle', true)

    //dispatch(setDeliveryInfo(deliveryInfoSummary));
    dispatch(setDeliveryInfo(values));

    if (navigationStage === 'Delivery Info')
      setNavigationStage('Payment')
  }

  useEffect(() => {
    deliveryFormRef.current.resetForm();
  }, [deliveryFormToggle])

  const radioButtons = radioOption.map(radioButton => {
    return (
        <React.Fragment key={radioButton.key}>
          <label className={DeliveryInfoFormStyle.radioLabelFormControl}>
            <Field type='radio' name='deliveryMethod' value={radioButton.value} component={CustomShoppingCartRadio}/>
            <span>{radioButton.value}</span>
          </label>
          <Partition/>
        </React.Fragment>
    )
  });

  return (
      <Formik initialValues={initialValues}
              validate={shoppingCartValidator}
              onSubmit={onSubmit}
              enableReinitialize={true}
              innerRef={deliveryFormRef}
      >
        {
          formik => {
            return (
                <Form className={DeliveryInfoFormStyle.form}>
                  <div>
                    <div className={DeliveryInfoFormStyle.radioFormControl}>
                      <p>Choose the method of delivery of the items</p>
                      <Partition/>
                      {radioButtons}
                      <ErrorMessage name='deliveryMethod'/>
                    </div>
                    <div className={DeliveryInfoFormStyle.formContent}>
                      <div className={DeliveryInfoFormStyle.formControl}>
                        <label className={DeliveryInfoFormStyle.formControlPhone}>
                          <p>PHONE</p>
                          <Field type='tel' name='phone' component={CustomDeliveryPhoneInput}
                                 placeholder='+375(__)_______'
                                 className={className('formControlInputs', {errorField: formik.errors.phone && formik.touched.phone})}/>
                        </label>
                        <ErrorMessage name='phone' component={CustomReviewErrorMessage}/>
                      </div>
                      <div className={DeliveryInfoFormStyle.formControl}>
                        <label>
                          <p>EMAIL</p>
                          <Field
                              type='email'
                              name='email'
                              placeholder='e-mail'
                              className={className('formControlInputs', {errorField: formik.errors.email && formik.touched.email})}/>
                        </label>
                        <ErrorMessage name='email' component={CustomReviewErrorMessage}/>
                      </div>
                      {
                        formik.values.deliveryMethod === 'Store pickup'
                            ? <StoreAddressFields formik={formik}/>
                            : <UserAddressFields formik={formik}/>
                      }
                      {
                        formik.values.deliveryMethod === 'Pickup from post offices'
                        && <div className={DeliveryInfoFormStyle.formControl}>
                          <label className={DeliveryInfoFormStyle.formControlPhone}>
                            <p>POSTCODE</p>
                            <Field
                                type='input'
                                name='postcode'
                                placeholder={'BY______'}
                                validate={deliveryInfoFieldsValidators.requiredValidator}
                                className={className('formControlInputs', {errorField: formik.errors.postcode && formik.touched.postcode})}/>
                          </label>
                          <ErrorMessage name='postcode' component={CustomReviewErrorMessage}/>
                        </div>
                      }
                      <div className={DeliveryInfoFormStyle.checkboxFormControl}>
                        <label className={DeliveryInfoFormStyle.checkboxLabelFormControl} htmlFor={'agreementToggle'}>
                          <Field
                              type='checkbox'
                              name='agreementToggle'
                              component={CustomShoppingCartCheckbox}
                          />
                          <span>I agree to the processing of my personal information</span>
                        </label>
                        <ErrorMessage name='agreementToggle' component={CustomReviewErrorMessage}/>
                      </div>
                    </div>
                  </div>
                  <ShoppingCartFooter totalCartPrice={totalCartPrice}
                                      navigationStage={navigationStage}
                                      setNavigationStage={setNavigationStage}
                                      summaryInfo={formik.values}/>
                </Form>
            )
          }
        }
      </Formik>
  )
}