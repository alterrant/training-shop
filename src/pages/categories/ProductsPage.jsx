import Tittle from "../../components/productHeader/ProductHeader";
import Preloader from "../../components/common/Preloader";
import {useState} from "react";
import FilterBar from "../../components/filter/FilterBar";
import FilterCategories from "../../components/filter/FilterCategories";
import SelectedFilters from "../../components/filter/SelectedFilters";
import Clothes from "../../components/clothes/clothesList/Clothes";
import ClothesStyle from "../../components/clothes/ClothesMain.module.css";
import {useFilter} from "../../hooks/useFilter";
import {getClothes} from "../../encapsulatedCommonLogics/distributions";

const ProductsPage = ({productType, tittle}) => {

  const product = getClothes(productType);

  const [isLoading] = useState(true);
  const [isOpenedFilter, setOpenedStatusFilter] = useState(false);
  const selectedFiltersLists = useFilter();

  return (
      <article data-test-id={`products-page-${productType}`}>
        <Tittle tittle={tittle}/>
        <FilterBar isOpenedFilter={isOpenedFilter}
                   setOpenedStatusFilter={setOpenedStatusFilter}/>
        {(selectedFiltersLists.length > 0) && <SelectedFilters selectedFiltersLists={selectedFiltersLists}/>}
        {isOpenedFilter && <FilterCategories/>}
        <div className={ClothesStyle.closesWrapper}>
          <Clothes product={product}/>
        </div>
        {isLoading && <Preloader/>}
      </article>
  )
}

export default ProductsPage;