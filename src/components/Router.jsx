import {Route, Routes} from "react-router-dom";
import Main from "../pages/main/Main";
import ProductPage from "../pages/product/ProductPage";
import App from "../pages/app/App";
import ProductsPage from "../pages/categories/ProductsPage";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {setInitSuccess} from "../redux/initializeReducer";
import {useStableDispatch} from "../hooks/useRedux";

export const Router = () => {

  const isInit = useSelector((state) => state.initialize.isInit);
  const stableDispatch = useStableDispatch();

  useEffect(() => {
    //потом будет логика инициализации
    stableDispatch(setInitSuccess());
  }, [stableDispatch]);

  if (isInit) {
    return (
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Main/>}/>
            <Route path="women" element={<ProductsPage productType={'women'} tittle={'WOMEN'}/>}/>
            <Route path="women/:id" element={<ProductPage productType={'women'}/>}/>
            <Route path="men" element={<ProductsPage productType={'men'} tittle={'MEN'}/>}/>
            <Route path="men/:id" element={<ProductPage productType={'men'}/>}/>
            <Route path="*" element={<Main/>}/>
          </Route>
        </Routes>
    )
  }
  return (<div>
    ...Preloader
  </div>)
}


export default Router;