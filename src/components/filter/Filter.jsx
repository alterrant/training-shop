import {useDispatch, useSelector} from "react-redux";
import FilterStyle from "./Filter.module.css";
import Checkbox from "../common/Checkbox";

const Filter = ({filterName, changeHandler}) => {
  const filterList = useSelector((state => state.filter[filterName]));
  const dispatch = useDispatch();

  const filter = filterList.map(item =>
      <li className={FilterStyle.description} key={item.id}>
        <Checkbox value={item.selected} payload={item.name} changeHandler={changeHandler} filterName={filterName}/>
        <div className={FilterStyle.label}
             onClick={() => dispatch(changeHandler(item.name))}>
          {item.name}
        </div>
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