import React, {useState} from "react";
import CustomSelectStyle from './CustomSelectCountry.module.css';
import classNames from "classnames/bind";

export const CustomSelectCountry = ({field, form, initPlaceholder, deliveryCountries}) => {
  const [selected, setSelected] = useState(null);

  const className = classNames.bind(CustomSelectStyle);

  const onLabelClick = (option) => {
    form.setFieldValue(field.name, option.name)
    setSelected(!selected);
  }

  return (
      <>
        <div className={className('select', {active: selected}, {errorField: form.errors.storeCountry && form.touched.storeCountry})}>
          <input id="selectTitle" className={CustomSelectStyle.selectInput} type="radio" name={field.name} placeholder={initPlaceholder}/>
          <label htmlFor="selectTitle" className={className('selectTitle', {placeholder: field.value === ''})}
                 onClick={() => setSelected(!selected)}>{field.value === '' ? initPlaceholder : field.value}</label>
          <div className={CustomSelectStyle.selectContent}>
            {
              deliveryCountries.map(option => (
                  <React.Fragment key={option._id}>
                    <input id={option.name} className={CustomSelectStyle.selectInput} type="radio" name="singleSelect"/>
                    <label htmlFor={option.name} className={CustomSelectStyle.selectLabel}
                           onClick={() => onLabelClick(option)}>{option.name}</label>
                  </React.Fragment>
              ))
            }
          </div>
        </div>
      </>
  )
}


