import {useSelector} from "react-redux";
import FilterStyle from "./Filter.module.css";
import Checkbox from "../common/Checkbox";

const Filter = ({filterName, changeHandler}) => {
  const filterList = useSelector((state => state.filter[filterName]));

  const filter = filterList.map(item =>
      <li className={FilterStyle.description} key={item.id}
          data-test-id={`filter-${filterName}-${item.name}`}>
        <div>
          <Checkbox value={item.selected} payload={item.name} changeHandler={changeHandler} color={item.color}/>
        </div>
        <div>{item.name}</div>
      </li>
  )

  return (
      <>
        <li className={FilterStyle.tittle}>
          {filterName[0].toUpperCase() + filterName.slice(1)}
        </li>
        <ul className={FilterStyle.wrapper}
            data-test-id={`filters-${filterName}`}>
          {filter}
        </ul>
      </>
  )
}

export default Filter;