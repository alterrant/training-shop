import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import SiteTools from "./SiteTools";
import NavStyle from "./Nav.module.css";
import Partition from "../../common/Partition";

const Nav = () => {
  return (
      <nav>
        <div className={NavStyle.wrapper}>
          <Link to='/' className={NavStyle.headerNavLogo}  data-test-id='header-logo-link'>
            <h1>
              CleverShop
            </h1>
          </Link>
          <NavBar/>
          <SiteTools/>
        </div>
        <Partition/>
      </nav>
  )
}

export default Nav;