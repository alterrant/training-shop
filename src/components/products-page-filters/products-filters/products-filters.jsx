import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import ProductFilter from "./product-filter/product-filter";
import chooseFilterAction from "../../../encapsulated-common-logics/distribution-filters";

import productsFiltersStyle from "./products-filters.module.css";

const ProductsFilters = ({ productType }) => {
  const { categories: filters } = useSelector((state) => state.filter);

  const filterLists = filters.map((filterName) => (
    <ul className={productsFiltersStyle.column} key={filterName}>
      <ProductFilter
        filterName={filterName}
        changeHandler={chooseFilterAction(filterName)}
      />
    </ul>
  ));

  return (
    <div
      className={productsFiltersStyle.container}
      data-test-id={`filters-${productType}`}
    >
      <ul className={productsFiltersStyle.wrapper}>{filterLists}</ul>
    </div>
  );
};

export default ProductsFilters;

ProductsFilters.propTypes = {
  productType: PropTypes.string.isRequired,
};
