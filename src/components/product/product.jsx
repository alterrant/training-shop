import React from "react";
import PropTypes from "prop-types";

import ProductDescription from "./product-description/product-description";
import ProductImages from "./products-images/product-images";

import ProductStyle from "./product.module.css";

const Product = ({ product, selectedCategoriesProduct }) => (
  <section className={ProductStyle.container}>
    <ProductImages
      product={product}
      selectedCategoriesProduct={selectedCategoriesProduct}
    />
    <ProductDescription
      product={product}
      selectedCategoriesProduct={selectedCategoriesProduct}
    />
  </section>
);

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discount: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    material: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    particulars: PropTypes.objectOf(PropTypes.bool).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  selectedCategoriesProduct: PropTypes.objectOf(PropTypes.string.isRequired),
};
