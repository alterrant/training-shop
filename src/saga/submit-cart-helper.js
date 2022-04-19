import { DELIVERY_TYPES } from "../constants/shoppingCart";

export const getSummaryOrderInfo = (
  values,
  paymentSummary,
  productsSummary
) => {
  const shoppingCartSummary = {};

  const deliveryInfoSummary = {
    deliveryMethod: values.deliveryMethod,
    phone: `+${values.phone.replace(/\D/g, "")}`,
    email: values.email,
  };

  if (
    values.deliveryMethod === DELIVERY_TYPES.office ||
    values.deliveryMethod === DELIVERY_TYPES.express
  ) {
    deliveryInfoSummary.country = values.country;
    deliveryInfoSummary.city = values.city;
    deliveryInfoSummary.street = values.street;
    deliveryInfoSummary.house = values.house;
    if (values.apartment) deliveryInfoSummary.apartment = values.apartment;
  }

  if (values.deliveryMethod === DELIVERY_TYPES.office)
    deliveryInfoSummary.postcode = values.postcode;

  if (values.deliveryMethod === DELIVERY_TYPES.store) {
    deliveryInfoSummary.country = values.storeCountry;
    deliveryInfoSummary.storeAddress = values.storeAddress;
  }

  const products = productsSummary.map((item) => {
    return {
      name: item.name,
      size: item.size,
      color: item.color,
      quantity: item.productQuantity,
    };
  });

  Object.assign(
    shoppingCartSummary,
    { products },
    deliveryInfoSummary,
    paymentSummary
  );

  return shoppingCartSummary;
};
