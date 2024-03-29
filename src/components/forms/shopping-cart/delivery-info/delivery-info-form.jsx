import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { ErrorMessage, Field, Form, Formik } from "formik";

import Partition from "../../../common/partition/partition";
import {
  deliveryInfoFieldsValidators,
  shoppingCartValidator,
} from "../../../../encapsulated-common-logics/validators";
import CustomReviewErrorMessage from "../../review/custom-review-error-message/custom-review-error-message";
import CustomDeliveryPhoneInput from "./custom-delivery-phone-input/custom-delivery-phone-input";
import CustomShoppingCartRadio from "../custom-shopping-cart-radio/custom-shopping-cart-radio";
import StoreAddressFields from "./address-fields/store-address-fields";
import UserAddressFields from "./address-fields/user-address-fields";
import ShoppingCartFooter from "../../../shoppingCart/content/footer/shopping-cart-footer";
import { setDeliveryInfo } from "../../../../redux/shopping-cart-reducer";
import CustomShoppingCartCheckbox from "./custom-shopping-cart-checkbox/checkbox";
import { DELIVERY_TYPES } from "../../../../constants/shoppingCart";
import { DELIVERY_RADIO_OPTIONS } from "../../../../constants/radio-options";

import DeliveryInfoFormStyle from "./delivery-info-form.module.css";

const DeliveryInfoForm = ({
  totalCartPrice,
  navigationStage,
  setNavigationStage,
}) => {
  const dispatch = useDispatch();
  const { deliveryFormToggle } = useSelector((state) => state.shoppingCart);

  const className = classNames.bind(DeliveryInfoFormStyle);

  const deliveryFormRef = useRef();

  const { deliveryInfoSummary } = useSelector(
    (state) => state.shoppingCart.deliveryInfo
  );
  const initialValues = Object.assign(
    { agreementToggle: false },
    deliveryInfoSummary
  );

  const onSubmit = (values) => {
    dispatch(setDeliveryInfo(values));

    if (navigationStage === "Delivery Info") setNavigationStage("Payment");
  };

  useEffect(() => {
    deliveryFormRef.current.resetForm();
  }, [deliveryFormToggle]);

  const radioButtons = DELIVERY_RADIO_OPTIONS.map((radioButton) => {
    return (
      <React.Fragment key={radioButton.key}>
        <label className={DeliveryInfoFormStyle.radioLabelFormControl}>
          <Field
            type="radio"
            name="deliveryMethod"
            value={radioButton.value}
            component={CustomShoppingCartRadio}
          />
          <span>{radioButton.value}</span>
        </label>
        <Partition />
      </React.Fragment>
    );
  });

  return (
    <Formik
      initialValues={initialValues}
      validate={shoppingCartValidator}
      onSubmit={onSubmit}
      enableReinitialize
      innerRef={deliveryFormRef}
    >
      {(formik) => {
        return (
          <Form className={DeliveryInfoFormStyle.form}>
            <div>
              <div className={DeliveryInfoFormStyle.radioFormControl}>
                Choose the method of delivery of the items
                <Partition />
                {radioButtons}
                <ErrorMessage name="deliveryMethod" />
              </div>
              <div className={DeliveryInfoFormStyle.formContent}>
                <div className={DeliveryInfoFormStyle.formControl}>
                  <label className={DeliveryInfoFormStyle.formControlPhone}>
                    PHONE
                    <Field
                      type="tel"
                      name="phone"
                      component={CustomDeliveryPhoneInput}
                      placeholder="+375(__)_______"
                      className={className("formControlInputs", {
                        errorField: formik.errors.phone && formik.touched.phone,
                      })}
                    />
                  </label>
                  <ErrorMessage
                    name="phone"
                    component={CustomReviewErrorMessage}
                  />
                </div>
                <div className={DeliveryInfoFormStyle.formControl}>
                  <label>
                    EMAIL
                    <Field
                      type="email"
                      name="email"
                      placeholder="e-mail"
                      className={className("formControlInputs", {
                        errorField: formik.errors.email && formik.touched.email,
                      })}
                    />
                  </label>
                  <ErrorMessage
                    name="email"
                    component={CustomReviewErrorMessage}
                  />
                </div>
                {formik.values.deliveryMethod === DELIVERY_TYPES.store ? (
                  <StoreAddressFields formik={formik} />
                ) : (
                  <UserAddressFields formik={formik} />
                )}
                {formik.values.deliveryMethod === DELIVERY_TYPES.office && (
                  <div className={DeliveryInfoFormStyle.formControl}>
                    <label className={DeliveryInfoFormStyle.formControlPhone}>
                      POSTCODE
                      <Field
                        type="input"
                        name="postcode"
                        placeholder="BY______"
                        validate={
                          deliveryInfoFieldsValidators.requiredValidator
                        }
                        className={className("formControlInputs", {
                          errorField:
                            formik.errors.postcode && formik.touched.postcode,
                        })}
                      />
                    </label>
                    <ErrorMessage
                      name="postcode"
                      component={CustomReviewErrorMessage}
                    />
                  </div>
                )}
                <div className={DeliveryInfoFormStyle.checkboxFormControl}>
                  <label
                    className={DeliveryInfoFormStyle.checkboxLabelFormControl}
                    htmlFor="agreementToggle"
                  >
                    <Field
                      type="checkbox"
                      name="agreementToggle"
                      component={CustomShoppingCartCheckbox}
                    />
                    <span>
                      I agree to the processing of my personal information
                    </span>
                  </label>
                  <ErrorMessage
                    name="agreementToggle"
                    component={CustomReviewErrorMessage}
                  />
                </div>
              </div>
            </div>
            <ShoppingCartFooter
              totalCartPrice={totalCartPrice}
              navigationStage={navigationStage}
              setNavigationStage={setNavigationStage}
              summaryInfo={formik.values}
              formik={formik}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default DeliveryInfoForm;

DeliveryInfoForm.propTypes = {
  totalCartPrice: PropTypes.number,
  navigationStage: PropTypes.string,
  setNavigationStage: PropTypes.func,
};

/* ругались тесты, что восстанавливал не всю введённую на прошлом этапе инфу (из других типов доставки),
а только один выбранный метод доставки
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


    dispatch(setDeliveryInfo(deliveryInfoSummary)); */
// formikBag.setFieldTouched('agreementToggle', true)
