import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AppStyle from "./App.module.css";
import {Outlet} from "react-router-dom";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import {useSelector} from "react-redux";
import classNames from "classnames/bind";

const App = () => {
  const cx = classNames.bind(AppStyle);
  const isShoppingCartOpen = useSelector((state => state.shoppingCart.isShoppingCartOpen));

  const className = cx('app', {overflowMargin: isShoppingCartOpen});

  return (
      <div className={className} data-test-id='app'>
        <Header/>
        <main>
          <ShoppingCart/>
          <Outlet/>
        </main>
        <Footer/>
      </div>
  )
}

export default App;