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

import DeliveryInfoFormStyle from "./delivery-info-form.module.css";

const DeliveryInfoForm = ({
  totalCartPrice,
  navigationStage,
  setNavigationStage,
}) => {
  const dispatch = useDispatch();
  const deliveryFormToggle = useSelector(
    (state) => state.shoppingCart.deliveryFormToggle
  );

  const className = classNames.bind(DeliveryInfoFormStyle);

  const deliveryFormRef = useRef();

  const radioOption = [
    { key: "rOption1", value: "Pickup from post offices" },
    { key: "rOption2", value: "Express delivery" },
    { key: "rOption3", value: "Store pickup" },
  ];

  const deliveryInfoSummary = useSelector(
    (state) => state.shoppingCart.deliveryInfo.deliveryInfoSummary
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

  const radioButtons = radioOption.map((radioButton) => {
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
                <p>Choose the method of delivery of the items</p>
                <Partition />
                {radioButtons}
                <ErrorMessage name="deliveryMethod" />
              </div>
              <div className={DeliveryInfoFormStyle.formContent}>
                <div className={DeliveryInfoFormStyle.formControl}>
                  <label className={DeliveryInfoFormStyle.formControlPhone}>
                    <p>PHONE</p>
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
                    <p>EMAIL</p>
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
                {formik.values.deliveryMethod === "Store pickup" ? (
                  <StoreAddressFields formik={formik} />
                ) : (
                  <UserAddressFields formik={formik} />
                )}
                {formik.values.deliveryMethod ===
                  "Pickup from post offices" && (
                  <div className={DeliveryInfoFormStyle.formControl}>
                    <label className={DeliveryInfoFormStyle.formControlPhone}>
                      <p>POSTCODE</p>
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
