import Tittle from "../../../components/tittle/Tittle";
import Preloader from "../../../components/common/Preloader";
import {useState} from "react";
import FilterBar from "../../../components/filter/FilterBar";
import FilterCategories from "../../../components/filter/FilterCategories";
import SelectedFilters from "../../../components/filter/SelectedFilters";
import {MEN_CLOTHES} from "../../../constants/clothes";
import Clothes from "../../../components/clothes/clothesList/Clothes";
import ClothesStyle from "../../../components/clothes/ClothesMain.module.css";
import {useFilter} from "../../../hooks/useFilter";

const MenPage = () => {

  const [isLoading] = useState(true);
  const [isOpenedFilter, setOpenedStatusFilter] = useState(false);
  const selectedFiltersLists = useFilter();

  return (
      <article>
        <Tittle tittle={"MEN"}/>
        <FilterBar isOpenedFilter={isOpenedFilter}
                   setOpenedStatusFilter={setOpenedStatusFilter}/>
        {(selectedFiltersLists.length > 0) && <SelectedFilters selectedFiltersLists={selectedFiltersLists}/>}
        {isOpenedFilter && <FilterCategories/>}
        <div className={ClothesStyle.closesWrapper}>
          <Clothes product={MEN_CLOTHES}/>
        </div>
        {isLoading && <Preloader/>}
      </article>
  )
}

export default MenPage;