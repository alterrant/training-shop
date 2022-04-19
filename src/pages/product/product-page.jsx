import { useSelector } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import Tittle from "../../components/product/product-header/product-header";
import Product from "../../components/product/product";
import RelatedProducts from "../../components/product/related-products/related-products";
import useProduct from "../../hooks/use-product";
import Preloader from "../../components/common/preloader/preloader";

const ProductPage = ({ productType }) => {
  // пока не вижу смысла запрашивать отдельно для id, тк related-products всё равно требуют genderProducts
  const genderProducts = useSelector(
    (state) => state.initialize.products[productType]
  );
  const isLoadingGenderProducts = useSelector(
    (state) => state.initialize.isLoadingGenderProducts
  );
  const productInStore = useSelector(
    (state) => state.product.availabilityInStore
  );
  const selectedCategoriesProduct = useSelector(
    (state) => state.product.selectedCategories
  );

  const productInfo = useProduct({ genderProducts, productType });

  if (isLoadingGenderProducts) return <Preloader />;
  else
    return (
      <div data-test-id={`product-page-${productType}`}>
        <div>
          <Tittle
            tittle={productInfo.name}
            rating={productInfo.rating}
            sku={productInStore.sku}
            availability={productInStore.availability}
            reviewsCounter={productInfo.reviews.length}
          />
        </div>
        {productInfo.id && (
          <Product
            product={productInfo}
            selectedCategoriesProduct={selectedCategoriesProduct}
          />
        )}
        <RelatedProducts genderProducts={genderProducts} />
      </div>
    );
};

export default ProductPage;

ProductPage.propTypes = {
  productType: PropTypes.string.isRequired,
};
