import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ClothesNavBar from "./clothes-nav-bar/clothes-nav-bar";
import ClothesStyle from "./clothes-main.module.css";
import Clothes from "./clothes-list/clothes";
import SeeAllButton from "./clothes-see-all-btn/see-all-button";
import ClothesTitle from "./clothes-title";
import { useParticularProducts } from "../../hooks/use-products";
import Preloader from "../common/preloader/preloader";

const ClothesMain = ({ tittle, productType, genderProducts }) => {
  const { isLoadingProducts } = useSelector((state) => state.initialize);
  const { isLoadingGenderProducts } = useSelector((state) => state.initialize);

  const isLoading = !!(isLoadingProducts || isLoadingGenderProducts);

  const { selectedParticularProducts, clothesNavBar } = useParticularProducts(
    productType,
    genderProducts
  );

  return (
    <article
      className={ClothesStyle.clothes}
      data-test-id={`clothes-${productType}`}
    >
      <div className={ClothesStyle.wrapper}>
        <ClothesTitle>{tittle}</ClothesTitle>
        <ClothesNavBar
          clothesNavBar={clothesNavBar}
          productType={productType}
        />
      </div>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={ClothesStyle.closesWrapper}>
          <Clothes
            product={selectedParticularProducts}
            productType={productType}
          />
        </div>
      )}
      <SeeAllButton productType={productType} />
    </article>
  );
};

export default ClothesMain;

ClothesMain.propTypes = {
  tittle: PropTypes.string.isRequired,
  productType: PropTypes.string.isRequired,
  genderProducts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
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
      }).isRequired
    ),
    PropTypes.oneOf([]).isRequired,
  ]),
};
