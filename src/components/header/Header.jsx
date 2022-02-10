import TopBar from "./topBar/TopBar";
import HeaderStyle from "./Header.module.css";
import Nav from "./nav/Nav";

const Header = () => {
  return (
      <header className={HeaderStyle.header}
              data-test-id='header'>
        <TopBar/>
        <Nav/>
      </header>
  )
}

export default Header;