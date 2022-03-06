import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AppStyle from "./App.module.css";
import {Outlet} from "react-router-dom";

const App = () => {

    return (
        <div className={AppStyle.app} data-test-id='app'>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    )
}

export default App;