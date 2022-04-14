import CustomDeliveryTypeRadioStyle from "./CustomShoppingCartRadio.module.css";
import {useStableDispatch} from "../../../../hooks/useRedux";
import {useSelector} from "react-redux";
import {fetchDeliveryCountries} from "../../../../redux/shoppingCartReducer";

export const CustomShoppingCartRadio = (props) => {
  const {field, form, ...otherProps} = props;

  const dispatch = useStableDispatch();
  const isDeliveryCountries = useSelector(state => state.shoppingCart.deliveryInfo.deliveryCountries);

  const deliveryTypeChangeHandler = (e) => {
    field.onChange(e);

    form.setErrors({});
    form.setTouched({});

    if (otherProps.value === 'Store pickup'
        && isDeliveryCountries.length === 0) {
      dispatch(fetchDeliveryCountries());
    }
  }

  return (
      <input className={CustomDeliveryTypeRadioStyle.radioInput}
             {...field}
             {...otherProps}
             onChange={deliveryTypeChangeHandler}/>
  )
}