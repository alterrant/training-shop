import {useSelector} from "react-redux";
import FilterCategoriesStyle from "./FilterCategories.module.css";
import Filter from "./Filter";
import {chooseFilterAction} from "../../encapsulatedCommonLogics/distributionFilters";

const FilterCategories = () => {

  const filters = useSelector((state => state.filter.Categories));

  const filterLists = filters.map(filterName => <ul className={FilterCategoriesStyle.column}
                                                    key={filterName}>
    <Filter filterName={filterName} changeHandler={chooseFilterAction(filterName)}/>
  </ul>)

  return (
      <div className={FilterCategoriesStyle.container}>
        <ul className={FilterCategoriesStyle.wrapper}>
          {filterLists}
        </ul>
      </div>
  )
}

export default FilterCategories;