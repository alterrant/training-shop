import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AppStyle from "./App.module.css";
import {useSelector} from "react-redux";
import Main from "../../components/main/Main";
/*import {useSelector} from "react-redux";
import classNames from "classnames/bind";*/

const App = () => {
  const initError = useSelector(state => state.initialize.isInitError);
  /*const cx = classNames.bind(AppStyle);
  const isShoppingCartOpen = useSelector((state => state.shoppingCart.isShoppingCartOpen));*/

  return (
      //<div className={cx({overflowPosition: isShoppingCartOpen})}>
      <div className={AppStyle.app} data-test-id='app'>
        <Header/>
        {initError
            ? <div>INIT ERROR</div>
            : <Main/>
        }
        <Footer/>
      </div>
      //</div>
  )
}

export default App;