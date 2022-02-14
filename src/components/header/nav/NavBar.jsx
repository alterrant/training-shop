import {NavLink} from 'react-router-dom';
import NavBarStyle from "./NavBar.module.css";
import {MENU} from "../../../constants/menuConst";

const NavBar = () => {

  const menu = MENU.map(item =>
      <li key={item.id}>
        <NavLink
            className={NavBarStyle.menuItem}
            to={`/${item.path}`}
            data-test-id={`menu-link-${item.path}`}>
          {item.name}
        </NavLink>
      </li>)

  return (
      <ul className={NavBarStyle.menu} data-test-id={'menu'} >
        {menu}
      </ul>
  )
}

export default NavBar;