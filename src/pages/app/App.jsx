import React from "react";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";

import AppStyle from "./App.module.css";

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
