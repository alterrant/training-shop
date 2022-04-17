import {useDispatch, useSelector} from "react-redux";
import ProductFilterStyle from "./ProductFilter.module.css";
import Checkbox from "../../../common/customCheckbox/Checkbox";

const ProductFilter = ({filterName, changeHandler}) => {
  const filterList = useSelector((state => state.filter[filterName]));
  const dispatch = useDispatch();

  const filter = filterList.map(item =>
      <li className={ProductFilterStyle.description} key={item.id}>
        <Checkbox value={item.selected} payload={item.name} changeHandler={changeHandler} filterName={filterName}/>
        <div className={ProductFilterStyle.label}
             onClick={() => dispatch(changeHandler(item.name))}>
          {item.name}
        </div>
      </li>
  )

  return (
      <>
        <li className={ProductFilterStyle.tittle}>
          {filterName[0].toUpperCase() + filterName.slice(1)}
        </li>
        <ul className={ProductFilterStyle.wrapper}
            data-test-id={`filters-${filterName}`}>
          {filter}
        </ul>
      </>
  )
}

export default ProductFilter;