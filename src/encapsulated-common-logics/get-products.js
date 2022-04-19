const filterProductsByParticulars = ({
  genderProducts,
  selectedParticular,
}) => {
  return genderProducts.filter((item) => item.particulars[selectedParticular]);
};

export default filterProductsByParticulars;
