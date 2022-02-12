import {useSelector} from "react-redux";
import FilterStyle from "./Filter.module.css";
import Checkbox from "../common/Checkbox";

const Filter = ({filterName, changeHandler}) => {
  const filterList = useSelector((state => state.filter[filterName]));

  const filter = filterList.map(item =>
      <li className={FilterStyle.description} key={item.id}>
        <div>
          <Checkbox type={item.type} value={item.selected} payload={item.name} changeHandler={changeHandler} color={item.color}/>
        </div>
        <div>{item.name}</div>
      </li>
  )

  return (
      <>
        <li className={FilterStyle.tittle}>
          {filterName}
        </li>
        <ul className={FilterStyle.wrapper}>
          {filter}
        </ul>
      </>
  )
}

export default Filter;