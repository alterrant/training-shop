import Tittle from "../../components/Product/productHeader/ProductHeader";
import Preloader from "../../components/common/preloader/Preloader";
import {useState} from "react";
import FilterBar from "../../components/filter/FilterBar";
import FilterCategories from "../../components/filter/FilterCategories";
import SelectedFilters from "../../components/filter/SelectedFilters";
import Clothes from "../../components/clothes/clothesList/Clothes";
import ClothesStyle from "../../components/clothes/ClothesMain.module.css";
import {useProducts} from "../../hooks/useProducts";
import {useSelector} from "react-redux";

const ProductsPage = ({productType, tittle}) => {
  const [isOpenedFilter, setOpenedStatusFilter] = useState(false);

  const isLoadingGenderProducts = useSelector(state => state.initialize.isLoadingGenderProducts);

  const selectedFiltersLists = useSelector(state => state.filter.selectedFilters);
  const genderProducts = useSelector(state => state.initialize.products[productType]);

  const filteredProducts = useProducts(productType, genderProducts, selectedFiltersLists, setOpenedStatusFilter);

  return (
      <article data-test-id={`products-page-${productType}`}>
        <Tittle tittle={tittle}/>
        <FilterBar isOpenedFilter={isOpenedFilter}
                   setOpenedStatusFilter={setOpenedStatusFilter}/>
        {isOpenedFilter && <FilterCategories productType={productType}/>}
        {(selectedFiltersLists.length > 0) && <SelectedFilters selectedFiltersLists={selectedFiltersLists}/>}
        {isLoadingGenderProducts
            ? <Preloader/>
            : <div className={ClothesStyle.closesWrapper}>
              {(filteredProducts.length > 0)
                  ? <Clothes product={filteredProducts} productType={productType}/>
                  : <div>Sorry, we haven't available products</div>}
            </div>}
      </article>
  )
}

export default ProductsPage;