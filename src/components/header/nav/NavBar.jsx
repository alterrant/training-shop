import {NavLink} from 'react-router-dom';
import NavBarStyle from "./NavBar.module.css";
import {MENU} from "../../../constants/menuConst";
import {useClassNames} from "../../../hooks/useClassName";
import {menuToggle} from "../../../redux/headerReducer";
import {useDispatch, useSelector} from "react-redux";
import {changeBodyOverflow} from "../../../encapsulatedCommonLogics/changeBoodyOverflow";

const NavBar = () => {

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state => state.header.isMenuOpen));

  const className = useClassNames('isMenuOpen', NavBarStyle, 'fixedLeftMenu', 'menu', 'header');

  const menu = MENU.map(item =>
      <li className={NavBarStyle.menuItem} key={item.id}>
        <NavLink
            className={NavBarStyle.menuItem}
            to={`/${item.path}`}
            data-test-id={`menu-link-${item.path}`}>
          {item.name}
        </NavLink>
      </li>)

  const handleClick = (event) => {
    if (isMenuOpen && event.target.className !== 'NavBar_menuItem__iAC4P') {

      dispatch(menuToggle());
      changeBodyOverflow(isMenuOpen);
    }
  }

  return (
      <ul onClick={(event => handleClick(event))}
          className={className}
          data-test-id={'burger-menu'}>
        {menu}
      </ul>
  )
}

export default NavBar;