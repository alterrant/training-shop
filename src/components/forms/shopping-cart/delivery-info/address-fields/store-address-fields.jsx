import React from "react";
import { ErrorMessage, Field } from "formik";
import { useSelector } from "react-redux";

import CustomReviewErrorMessage from "../../../review/custom-review-error-message/custom-review-error-message";
import { deliveryInfoFieldsValidators } from "../../../../../encapsulated-common-logics/validators";
import CustomSelectCountry from "./custom-select-country/custom-select-country";
import CustomStoreAddressInput from "./custom-store-address-input/custom-store-address-input";

import DeliveryInfoFormStyle from "../delivery-info-form.module.css";

const StoreAddressFields = ({ formik }) => {
  const deliveryCountries = useSelector(
    (state) => state.shoppingCart.deliveryInfo.deliveryCountries
  );
  const availableStoreAddresses = useSelector(
    (state) => state.shoppingCart.deliveryInfo.availableStoreAddresses
  );

  return (
    <>
      <div className={DeliveryInfoFormStyle.formControl}>
        <label>
          <p>ADDRESS OF STORE</p>
          <Field
            name="storeCountry"
            component={CustomSelectCountry}
            initPlaceholder="Country"
            deliveryCountries={deliveryCountries}
            validate={deliveryInfoFieldsValidators.requiredValidator}
          />
        </label>
        <ErrorMessage
          name="storeCountry"
          component={CustomReviewErrorMessage}
        />
      </div>
      <div className={DeliveryInfoFormStyle.formControl}>
        <label>
          <Field
            name="storeAddress"
            component={CustomStoreAddressInput}
            type="text"
            initPlaceholder="Store address"
            availableStoreAddresses={availableStoreAddresses}
            validate={(e) =>
              deliveryInfoFieldsValidators.storeAddressValidator(
                e,
                availableStoreAddresses,
                formik.values.storeCountry
              )
            }
          />
        </label>
        <ErrorMessage
          name="storeAddress"
          component={CustomReviewErrorMessage}
        />
      </div>
    </>
  );
};

export default StoreAddressFields;
