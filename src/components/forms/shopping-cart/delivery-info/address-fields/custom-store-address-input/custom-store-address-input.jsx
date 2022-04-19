import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";

import { fetchAvailableStoreAddresses } from "../../../../../../redux/shopping-cart-reducer";
import CustomStoreAddressSelect from "../custom-store-address-select/custom-store-address-select";

import CustomStoreAddressInputStyle from "./custom-store-address-input.module.css";

const CustomStoreAddressInput = ({
  field,
  form,
  initPlaceholder,
  availableStoreAddresses,
}) => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const className = classNames.bind(CustomStoreAddressInputStyle);

  const isCountryChosen = !form.values.storeCountry;

  const storeAddressChangeHandler = (e) => {
    field.onChange(e);

    if (e.target.value.length === 3)
      dispatch(
        fetchAvailableStoreAddresses({
          country: form.values.storeCountry,
          city: e.target.value,
        })
      );
  };

  const storeAddressBlurHandler = () => {
    form.setFieldTouched("storeAddress", true, false);
  };

  const addressesListClickHandler = (city) => {
    form.setFieldValue(field.name, city);
    setSelected(!selected);
  };
  const filteredStoreAddresses = availableStoreAddresses.filter(
    (storeAddress) =>
      storeAddress.city.toLowerCase().includes(field.value.toLowerCase()) &&
      storeAddress.city.toLowerCase() !== field.value.toLowerCase()
  );

  return (
    <div
      className={className(
        "select",
        { active: selected },
        { errorField: form.errors.storeCountry && form.touched.storeCountry }
      )}
    >
      <input
        className={className("selectTitle", {
          placeholder: field.value === "",
        })}
        type="text"
        name={field.name}
        placeholder={initPlaceholder}
        value={field.value}
        onClick={() => setSelected(!selected)}
        onChange={(event) => storeAddressChangeHandler(event)}
        onBlur={(event) => storeAddressBlurHandler(event)}
        disabled={isCountryChosen}
        autoComplete="off"
        ref={inputRef}
      />
      <div className={CustomStoreAddressInputStyle.selectContent}>
        <CustomStoreAddressSelect
          options={filteredStoreAddresses}
          optionValue="city"
          handleClick={addressesListClickHandler}
        />
      </div>
    </div>
  );
};

export default CustomStoreAddressInput;

CustomStoreAddressInput.propTypes = {
  field: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.bool])
  ),
  form: PropTypes.instanceOf(Object),
  initPlaceholder: PropTypes.string,
  availableStoreAddresses: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ),
};
