export const filterProductsByParticulars = ({genderProducts, selectedParticular}) => {
  return genderProducts.filter(item => item.particulars[selectedParticular]);
}