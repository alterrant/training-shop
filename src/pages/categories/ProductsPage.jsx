import Tittle from "../../components/productHeader/ProductHeader";
import Preloader from "../../components/common/Preloader";
import {useState} from "react";
import FilterBar from "../../components/filter/FilterBar";
import FilterCategories from "../../components/filter/FilterCategories";
import SelectedFilters from "../../components/filter/SelectedFilters";
import Clothes from "../../components/clothes/clothesList/Clothes";
import ClothesStyle from "../../components/clothes/ClothesMain.module.css";
import {useProducts} from "../../hooks/useProducts";
import {getGenderProducts} from "../../encapsulatedCommonLogics/getProducts";
import {PRODUCTS} from "../../products";
import {useSelector} from "react-redux";

const ProductsPage = ({productType, tittle}) => {
  const [isLoading] = useState(true);
  const [isOpenedFilter, setOpenedStatusFilter] = useState(false);

  const selectedFiltersLists = useSelector(state => state.filter.selectedFilters);
  const genderProducts = getGenderProducts(productType, PRODUCTS);
  const products = useProducts(productType, genderProducts, selectedFiltersLists, setOpenedStatusFilter);

  return (
      <article data-test-id={`products-page-${productType}`}>
        <Tittle tittle={tittle}/>
        <FilterBar isOpenedFilter={isOpenedFilter}
                   setOpenedStatusFilter={setOpenedStatusFilter}/>
        {(selectedFiltersLists.length > 0) && <SelectedFilters selectedFiltersLists={selectedFiltersLists}/>}
        {isOpenedFilter && <FilterCategories productType={productType}/>}
        <div className={ClothesStyle.closesWrapper}>
          {(products.length > 0) ? <Clothes product={products} productType={productType}/> : <div>Sorry, we haven't available products</div>}
        </div>
        {isLoading && <Preloader/>}
      </article>
  )
}

export default ProductsPage;