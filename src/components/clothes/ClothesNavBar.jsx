import ClothesNavBarStyle from "./ClothesNavBar.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedParticulars} from "../../redux/clothesReducer";
import classNames from "classnames/bind";

const ClothesNavBar = ({clothesNavBar, productType}) => {
  const selectedParticular = useSelector(state => state.clothes[productType].selectedParticulars)
  const dispatch = useDispatch();

  const cs = classNames.bind(ClothesNavBarStyle);

  const navBarList = clothesNavBar.map(item =>
      <li key={item.id}>
        <button className={cs('button', {activeButton: selectedParticular === item.filterName})}
                onClick={() =>
                    dispatch(setSelectedParticulars({gender: productType, particular: item.filterName}))
                }
                data-test-id={`clothes-${productType}-${item.filterName}`}>
          {item.name}
        </button>
      </li>
  )

  return (
      <ul className={ClothesNavBarStyle.wrapper}>
        {navBarList}
      </ul>
  )
}

export default ClothesNavBar;