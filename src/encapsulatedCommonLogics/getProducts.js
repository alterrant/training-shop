export const getGenderProducts = (productType, products) => {
  return products?.[productType];
}

export const filterProductsByParticulars = ({genderProducts, selectedParticular}) => {
  return genderProducts.filter(item => item.particulars[selectedParticular]);
}