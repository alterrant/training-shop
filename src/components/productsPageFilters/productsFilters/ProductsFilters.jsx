import {useSelector} from "react-redux";
import productsFiltersStyle from "./ProductsFilters.module.css";
import ProductFilter from "./productFilter/ProductFilter";
import {chooseFilterAction} from "../../../encapsulatedCommonLogics/distributionFilters";

const ProductsFilters = ({productType}) => {
  const filters = useSelector((state => state.filter.categories));

  const filterLists = filters.map(filterName => (
      <ul className={productsFiltersStyle.column}
          key={filterName}>
        <ProductFilter filterName={filterName} changeHandler={chooseFilterAction(filterName)}/>
      </ul>
  ));

  return (
      <div className={productsFiltersStyle.container}
           data-test-id={`filters-${productType}`}>
        <ul className={productsFiltersStyle.wrapper}>
          {filterLists}
        </ul>
      </div>
  )
}

export default ProductsFilters;