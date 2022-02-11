import {FILTERS} from "../../constants/productFilteres";

const FilterCategories = () => {
  const FilterList = FILTERS.map(item => <ul>{item}</ul>);
  console.log(FILTERS)
  return (
      <>
        {FilterList}
      </>
  )
}

export default FilterCategories;