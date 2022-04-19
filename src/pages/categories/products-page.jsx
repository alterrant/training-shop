import { React, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Tittle from "../../components/product/product-header/product-header";
import Preloader from "../../components/common/preloader/preloader";

import FilterBar from "../../components/products-page-filters/filter-bar/filter-bar";
import ProductsFilters from "../../components/products-page-filters/products-filters/products-filters";
import SelectedFilters from "../../components/products-page-filters/selected-filters/selected-filters";
import Clothes from "../../components/clothes/clothes-list/clothes";

import { useProducts } from "../../hooks/use-products";

import ClothesStyle from "../../components/clothes/clothes-main.module.css";

const ProductsPage = ({ productType, tittle }) => {
  const [isOpenedFilter, setOpenedStatusFilter] = useState(false);

  const { isLoadingGenderProducts } = useSelector(
    (state) => state.initialize);

  const { selectedFilters: selectedFiltersLists } = useSelector(
    (state) => state.filter
  );
  const genderProducts = useSelector(
    (state) => state.initialize.products[productType]
  );

  const filteredProducts = useProducts(
    productType,
    genderProducts,
    selectedFiltersLists,
    setOpenedStatusFilter
  );

  return (
    <article data-test-id={`products-page-${productType}`}>
      <Tittle tittle={tittle} />
      <FilterBar
        isOpenedFilter={isOpenedFilter}
        setOpenedStatusFilter={setOpenedStatusFilter}
      />
      {isOpenedFilter && <ProductsFilters productType={productType} />}
      {selectedFiltersLists.length > 0 && (
        <SelectedFilters selectedFiltersLists={selectedFiltersLists} />
      )}
      {isLoadingGenderProducts ? (
        <Preloader />
      ) : (
        <div className={ClothesStyle.closesWrapper}>
          {filteredProducts.length > 0 ? (
            <Clothes product={filteredProducts} productType={productType} />
          ) : (
            <div>Sorry, we haven't available products</div>
          )}
        </div>
      )}
    </article>
  );
};

export default ProductsPage;

ProductsPage.propTypes = {
  productType: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
};
