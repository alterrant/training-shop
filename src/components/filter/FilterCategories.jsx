import {useSelector} from "react-redux";
import FilterCategoriesStyle from "./FilterCategories.module.css";
import Filter from "./Filter";
import {chooseFilterAction} from "../../encapsulatedCommonLogics/distributionFilters";

const FilterCategories = (productType) => {

  const filters = useSelector((state => state.filter.categories));

  const filterLists = filters.map(filterName => <ul className={FilterCategoriesStyle.column}
                                                    key={filterName}>
    <Filter filterName={filterName} changeHandler={chooseFilterAction(filterName)}/>
  </ul>)

  return (
      <div className={FilterCategoriesStyle.container}>
        <ul className={FilterCategoriesStyle.wrapper}
            data-test-id={`filters-${productType}`}>
          {filterLists}
        </ul>
      </div>
  )
}

export default FilterCategories;