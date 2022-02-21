import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import SiteTools from "./SiteTools";
import NavStyle from "./Nav.module.css";
import {useClassNames} from "../../../hooks/useClassName";

const Nav = () => {

  const className = useClassNames('isMenuOpen', NavStyle, 'burgerMenuActive', 'wrapper', 'header');

  return (
      <nav>
        <div className={className}>
          <Link to='/'
                className={NavStyle.headerNavLogo}
                data-test-id='header-logo-link'>
            <h1>
              CleverShop
            </h1>
          </Link>
          <NavBar />
          <SiteTools />
        </div>
      </nav>
  )
}

export default Nav;