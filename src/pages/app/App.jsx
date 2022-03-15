import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AppStyle from "./App.module.css";
import {Outlet} from "react-router-dom";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {changeBodyOverflow} from "../../encapsulatedCommonLogics/changeBoodyOverflow";
import classNames from "classnames/bind";

const App = () => {
    const isShoppingCartOpen = useSelector((state => state.shoppingCart.isShoppingCartOpen))
    const cx = classNames.bind(AppStyle);

    const className = cx('app', {overflowMargin: isShoppingCartOpen});

  useEffect(() => {
    changeBodyOverflow(!isShoppingCartOpen);
  }, [isShoppingCartOpen]);

    return (
        <div className={className} data-test-id='app'>
          {isShoppingCartOpen && <ShoppingCart/>}
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    )
}

export default App;