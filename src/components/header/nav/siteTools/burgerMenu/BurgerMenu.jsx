import BurgerMenuStyle from "./BurgerMenu.module.css";
import {useDispatch, useSelector} from "react-redux";
import {menuToggle} from "../../../../../redux/headerReducer";
import {useClassNames} from "../../../../../hooks/useClassName";
import {changeBodyOverflow} from "../../../../../encapsulatedCommonLogics/changeBoodyOverflow";

const BurgerMenu = () => {

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state => state.header.isMenuOpen));

  const className = useClassNames('isMenuOpen', BurgerMenuStyle, 'burgerMenuActive', 'burgerMenu', 'header');

  const handleBurgerMenuToggle = () => {
    dispatch(menuToggle());
    changeBodyOverflow(isMenuOpen);
  }
  const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      dispatch(menuToggle());
      changeBodyOverflow(isMenuOpen);
    }
  }

  return (
      <button onKeyDown={(event => handleKeyDown(event))} onClick={handleBurgerMenuToggle} className={className} data-test-id='burger-menu-btn'>
        <span>

        </span>
      </button>
  )
}

export default BurgerMenu;