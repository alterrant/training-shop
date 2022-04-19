import { React, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Tittle from "../../components/product/productHeader/ProductHeader";
import Preloader from "../../components/common/preloader/Preloader";

import FilterBar from "../../components/productsPageFilters/filterBar/FilterBar";
import ProductsFilters from "../../components/productsPageFilters/productsFilters/ProductsFilters";
import SelectedFilters from "../../components/productsPageFilters/selectedFilters/SelectedFilters";
import Clothes from "../../components/clothes/clothesList/Clothes";

import { useProducts } from "../../hooks/useProducts";

import ClothesStyle from "../../components/clothes/ClothesMain.module.css";

const ProductsPage = ({ productType, tittle }) => {
  const [isOpenedFilter, setOpenedStatusFilter] = useState(false);

  const isLoadingGenderProducts = useSelector(
    (state) => state.initialize.isLoadingGenderProducts
  );

  const selectedFiltersLists = useSelector(
    (state) => state.filter.selectedFilters
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
