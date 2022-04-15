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

export const DeliveryInfoForm = (props) => {
  const {totalCartPrice, navigationStage, setNavigationStage} = props;

  const dispatch = useStableDispatch();
  const deliveryFormToggle = useSelector(state => state.shoppingCart.deliveryFormToggle);
  const deliveryFormRef = useRef();

  const radioOption = [
    {key: 'rOption1', value: 'Pickup from post offices'},
    {key: 'rOption2', value: 'Express delivery'},
    {key: 'rOption3', value: 'Store pickup'},
  ]

  const initialValues = useSelector(state => state.shoppingCart.deliveryInfo.deliveryInfoSummary);

  const onSubmit = (values) => {
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
    }

    dispatch(setDeliveryInfo(deliveryInfoSummary));

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
            console.log(formik)
            return (
                <Form className={DeliveryInfoFormStyle.form}>
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
                               placeholder='+375(__)_______'/>
                      </label>
                      <ErrorMessage name='phone' component={CustomReviewErrorMessage}/>
                    </div>
                    <div className={DeliveryInfoFormStyle.formControl}>
                      <label>
                        <p>EMAIL</p>
                        <Field type='email' name='email' placeholder='e-mail'/>
                      </label>
                      <ErrorMessage name='email'/>
                    </div>
                    {
                      formik.values.deliveryMethod === 'Store pickup'
                          ? <StoreAddressFields formik={formik}/>
                          : <UserAddressFields/>
                    }
                    {
                      formik.values.deliveryMethod === 'Pickup from post offices'
                      && <div className={DeliveryInfoFormStyle.formControl}>
                        <label className={DeliveryInfoFormStyle.formControlPhone}>
                          <p>POSTCODE</p>
                          <Field type='input' name='postcode' placeholder={'BY______'}
                                 validate={deliveryInfoFieldsValidators.requiredValidator}/>
                        </label>
                        <ErrorMessage name='postcode' component={CustomReviewErrorMessage}/>
                      </div>
                    }
                    <div className={DeliveryInfoFormStyle.checkboxFormControl}>
                      <label className={DeliveryInfoFormStyle.checkboxLabelFormControl}>
                        <Field type='checkbox' name='agreementToggle'/>
                        <span>I agree to the processing of my personal information</span>
                      </label>
                      <ErrorMessage name='agreementToggle' component={CustomReviewErrorMessage}/>
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