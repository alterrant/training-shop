import React from "react";
import { useSelector } from "react-redux";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";

import AppStyle from "./app.module.css";

const App = () => {
  const initError = useSelector((state) => state.initialize.isInitError);

  return (
    <div className={AppStyle.app} data-test-id="app">
      <Header />
      {initError ? <div>INIT ERROR</div> : <Main />}
      <Footer />
    </div>
  );
};

export default App;
