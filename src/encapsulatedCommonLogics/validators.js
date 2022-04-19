// 'Field is empty' => 'Поле должно быть заполнено'
// 'Need agreement' => 'Вы должны согласиться на обработку личной информации'
export const subscribeValidator = (values) => {
  const errors = {};

  const emptyFieldError = validators.requiredValidator(values.subscribeEmail);
  const availableEmailError = validators.emailValidator(values.subscribeEmail);

  if (emptyFieldError) errors.subscribeEmail = emptyFieldError;
  else if (availableEmailError) errors.subscribeEmail = availableEmailError;

  return errors;
};

export const reviewValidator = (values) => {
  const errors = {};

  if (!values.name) errors.name = "Поле должно быть заполнено";
  else if (values.name && values.name.length > 25)
    errors.name = '\'Value more than 25 symbols\'';

  if (!values.rating) errors.rating = "Поле должно быть заполнено";

  if (!values.text) errors.text = "Поле должно быть заполнено";
  else if (values.text && values.text.length > 1000)
    errors.text = '\'Value more than 1000 symbols\'';

  return errors;
};

export const shoppingCartValidator = (values) => {
  const errors = {};

  if (!values.phone) errors.phone = "Поле должно быть заполнено";
  else if (values.phone && values.phone.length >= 7) {
    const phoneNumbers = values.phone.replace(/\D/g, "");

    if (
      !(
        phoneNumbers[3] === "2" ||
        phoneNumbers[3] === "3" ||
        phoneNumbers[3] === "4"
      )
    )
      errors.phone = "wrong code";

    if (
      phoneNumbers.length >= 5 &&
      !(
        (phoneNumbers[3] === "3" && phoneNumbers[4] === "3") ||
        (phoneNumbers[3] === "4" && phoneNumbers[4] === "4") ||
        (phoneNumbers[3] === "2" && phoneNumbers[4] === "5") ||
        (phoneNumbers[3] === "2" && phoneNumbers[4] === "9")
      )
    )
      errors.phone = "wrong code";
  }

  if (!values.email) errors.email = "Поле должно быть заполнено";
  else if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)
  )
    errors.email = "Invalid email address";

  if (!values.agreementToggle)
    errors.agreementToggle =
      "Вы должны согласиться на обработку личной информации";

  return errors;
};

export const deliveryInfoFieldsValidators = {
  requiredValidator(value) {
    let errors;

    if (!value) errors = "Поле должно быть заполнено";

    return errors;
  },
  storeAddressValidator(value, availableStoreAddresses, storeCountry) {
    let errors;

    errors = validators.requiredValidator(value);
    if (!errors)
      errors = validators.availableCityValidator(
        value,
        availableStoreAddresses,
        storeCountry
      );

    return errors;
  },
};

export const paymentFieldsValidators = {
  requiredValidator(value) {
    let errors;

    if (value === "") errors = "Поле должно быть заполнено";

    return errors;
  },

  paypalValidator(value) {
    let errors;

    errors = validators.requiredValidator(value);
    if (!errors) errors = validators.emailValidator(value);

    return errors;
  },
  cardValidators(value) {
    let errors;

    errors = validators.requiredValidator(value);
    if (!errors) errors = validators.sizeValidator(value, 16, "card");

    return errors;
  },
  cvvValidators(value) {
    let errors;

    errors = validators.requiredValidator(value);
    if (!errors) errors = validators.sizeValidator(value, 3, "cvv")

    return errors;
  },
  dateValidators(value) {
    let errors;

    errors = validators.requiredValidator(value);
    if (!errors) errors = validators.dateValidator(value)

    return errors;
  }
}

const validators = {
  requiredValidator(value) {
    if (value === "") return "Поле должно быть заполнено";
  },
  sizeValidator(value, size, type) {
    const inputNumbers = getNumbersValue(value);

    if (inputNumbers.length < size) {
      return type === "card" ? `Incomplete card number` : `Incomplete cvv`;
    }
  },
  dateValidator(value) {
    const inputNumbers = getNumbersValue(value);
    const date = new Date();

    const month = date.getMonth() + 1;
    const years = date.getFullYear();
    const decades = ('' + years)[2];
    const year = ('' + years)[3];

    if (inputNumbers.length >= 3) {
      if (inputNumbers[2] < decades) return "Incorrect date";
      else if (inputNumbers[2] === decades) {
        if (inputNumbers[3] < year) return "Incorrect date"
        else if (inputNumbers[3] === year) {
          if (+(inputNumbers[0] + inputNumbers[1]) < month) return "Incorrect date";
        }
      }
    }
  },
  emailValidator(value) {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(value))
      return "Invalid email address";
  },
  availableCityValidator(value, availableStoreAddresses, storeCountry) {
    let isCityCorrect;

    if (availableStoreAddresses.length === 0) return 'Unavailable city'
    else
      availableStoreAddresses.forEach(availableAddress => {
        if (
          value.toLowerCase() === availableAddress?.city.toLowerCase() && (
          storeCountry.toLowerCase() === availableAddress?.country.toLowerCase()
        )) 
          isCityCorrect = true
    });
    if (!isCityCorrect) return "Unavailable city";
  },
};

const getNumbersValue = (value) => {
  return value.replace(/\D/g, "");
};
