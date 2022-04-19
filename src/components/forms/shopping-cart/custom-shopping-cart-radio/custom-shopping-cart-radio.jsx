import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeliveryCountries } from "../../../../redux/shopping-cart-reducer";
import CustomDeliveryTypeRadioStyle from "./custom-shopping-cart-radio.module.css";

const CustomShoppingCartRadio = ({ field, form, ...otherProps }) => {
  const dispatch = useDispatch();
  const isDeliveryCountries = useSelector(
    (state) => state.shoppingCart.deliveryInfo.deliveryCountries
  );

  const deliveryTypeChangeHandler = (e) => {
    field.onChange(e);

    form.setErrors({});
    form.setTouched({});

    if (otherProps.value === "Store pickup" && isDeliveryCountries.length === 0)
      dispatch(fetchDeliveryCountries());
  };

  return (
    <input
      className={CustomDeliveryTypeRadioStyle.radioInput}
      /* eslint-disable react/jsx-props-no-spreading */
      {...field}
      {...otherProps}
      onChange={deliveryTypeChangeHandler}
    />
  );
};

export default CustomShoppingCartRadio;

CustomShoppingCartRadio.propTypes = {
  field: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.bool])
  ),
  form: PropTypes.instanceOf(Object),
  otherProps: PropTypes.objectOf(PropTypes.string),
};
