import {Route, Routes} from "react-router-dom";
import Main from "../pages/main/Main";
import ProductPage from "../pages/product/ProductPage";
import App from "../pages/app/App";
import ProductsPage from "../pages/categories/ProductsPage";

export const Router = () => {

  return (
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Main/>}/>
          <Route path="women" element={<ProductsPage productType={'women'} tittle={'WOMEN'}/>}/>
          <Route path="women/:id" element={<ProductPage productType={'women'}/>}/>
          <Route path="men" element={<ProductsPage productType={'men'} tittle={'MEN'}/>}/>
          <Route path="men/:id" element={<ProductPage productType={'men'}/>}/>
        </Route>
      </Routes>
  )
}

export default Router;