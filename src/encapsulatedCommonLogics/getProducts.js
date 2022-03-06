export const getGenderProducts = (productType, products) => {
  return products?.[productType];
}

export const filterProductsByParticulars = ({memorizedGenderProducts, selectedParticular}) => {
  return memorizedGenderProducts.filter(item => item.particulars[selectedParticular]);
}