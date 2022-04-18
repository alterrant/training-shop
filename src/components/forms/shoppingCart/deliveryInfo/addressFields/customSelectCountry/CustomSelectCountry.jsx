import React, {useState} from "react";
import CustomSelectStyle from './CustomSelectCountry.module.css';
import classNames from "classnames/bind";
import {CustomStoreAddressSelect} from "../customStoreAddressSelect/CustomStoreAddressSelect";

export const CustomSelectCountry = ({field, form, initPlaceholder, deliveryCountries}) => {
  const [selected, setSelected] = useState(null);

  const className = classNames.bind(CustomSelectStyle);

  const selectionCountryHandler = (country) => {
    form.setFieldValue(field.name, country);
    setSelected(!selected);
  }

  return (
      <>
        <div className={className('select', {active: selected}, {errorField: form.errors.storeCountry && form.touched.storeCountry})}>
          <input className={className('selectTitle', {placeholder: field.value === ''})} type="text" name={field.name} placeholder={initPlaceholder}
                 value={field.value === '' ? initPlaceholder : field.value}
                 onClick={() => setSelected(!selected)}
                 onChange={() => 'changeDisabled'}
          />
          <div className={CustomSelectStyle.selectContent}>
            {
              <CustomStoreAddressSelect options={deliveryCountries} optionValue={'name'} handleClick={selectionCountryHandler}/>
            }
          </div>
        </div>
      </>
  )
}