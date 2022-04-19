import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Navigation from "./navigation/Navigation";

import RatingReviews from "../../common/rating/RatingReviews";

import ProductHeaderStyle from "./ProductHeader.module.css";

const ProductHeader = ({
  tittle,
  rating,
  sku,
  availability,
  reviewsCounter,
}) => {
  const params = useParams();

  return (
    <section className={ProductHeaderStyle.wrapper}>
      <Navigation productName={tittle} />
      <div className={ProductHeaderStyle.container}>
        <h2 className={ProductHeaderStyle.tittle}>{tittle}</h2>
        {params.id && (
          <ProductTittle
            rating={rating}
            reviewsCounter={reviewsCounter}
            productInfo={{ sku, availability }}
          />
        )}
      </div>
    </section>
  );
};

export default ProductHeader;

const ProductInfo = ({ tittle, description }) => (
  <div className={ProductHeaderStyle.productInfo}>
    <p>{tittle}</p>
    <p>{description}</p>
  </div>
);

const ProductTittle = ({ rating, reviewsCounter, productInfo }) => (
  <div className={ProductHeaderStyle.description}>
    <RatingReviews rating={rating} reviewsCounter={reviewsCounter} />
    <div className={ProductHeaderStyle.productInfoWrapper}>
      <ProductInfo tittle="SKU:" description={productInfo.sku} />
      <ProductInfo
        tittle="Availability:"
        description={productInfo.availability}
      />
    </div>
  </div>
);

ProductInfo.propTypes = {
  tittle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
ProductTittle.propTypes = {
  rating: PropTypes.number,
  reviewsCounter: PropTypes.number.isRequired,
  productInfo: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
ProductHeader.propTypes = {
  tittle: PropTypes.string,
  rating: PropTypes.number,
  sku: PropTypes.string,
  availability: PropTypes.string,
  reviewsCounter: PropTypes.number,
};
