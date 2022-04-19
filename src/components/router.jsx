import { useDispatch, useSelector } from "react-redux";
import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/main/main-page";
import ProductPage from "../pages/product/product-page";
import App from "../pages/app/app";
import ProductsPage from "../pages/categories/products-page";
import { setInitError, setInitSuccess } from "../redux/initialize-reducer";

export const Router = () => {
  const isInit = useSelector((state) => state.initialize.isInit);

  const stableDispatch = useDispatch();
  // думал будет логика инициализации приложения
  useEffect(() => {
    try {
      stableDispatch(setInitSuccess());
    } catch {
      stableDispatch(setInitError(new Error("initFail")));
    }
  }, [stableDispatch]);

  if (isInit) {
    return (
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route
            path="women"
            element={<ProductsPage productType="women" tittle="WOMEN" />}
          />
          <Route
            path="women/:id"
            element={<ProductPage productType="women" />}
          />
          <Route
            path="men"
            element={<ProductsPage productType="men" tittle="MEN" />}
          />
          <Route path="men/:id" element={<ProductPage productType="men" />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    );
  }
  return <div>...Preloader</div>;
};

export default Router;
