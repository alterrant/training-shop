export const subscribeValidator = (values) => {
  const errors = {};

  if (!values.email) errors.email = 'Field is empty';

  else if (values.email
      && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) errors.email = 'Invalid email address';

  return errors;
}

export const reviewValidator = (values) => {
  const errors = {};

  if (!values.name) errors.name = 'Field is empty';
  else if (values.name && values.name.length > 25)  errors.name = '\'Value more than 25 symbols\'';

  if (!values.rating) errors.rating = 'Field is empty';

  if (!values.text) errors.text = 'Field is empty';
  else if (values.text && values.text.length > 1000)  errors.text = '\'Value more than 1000 symbols\'';

  return errors;
}