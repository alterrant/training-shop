import {CLOTHESNAVBAR} from "../../constants/menuConst";
import ClothesNavBarStyle from "./ClothesNavBar.module.css";

const ClothesNavBar = () => {

  const navBarList = CLOTHESNAVBAR.map(item =>
  <li className={ClothesNavBarStyle.list} key={item.id}>
    {item.name}
  </li>
  )

  return (
      <ul className={ClothesNavBarStyle.wrapper}>
        {navBarList}
      </ul>
  )
}

export default ClothesNavBar;