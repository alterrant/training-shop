import {Routes, Route} from "react-router-dom";
import Main from "./main/Main";
import WomenPage from "../pages/categories/women/WomenPage";
import WomenId from "../pages/product/WomenId";
import App from "../pages/app/App";
import MenPage from "../pages/categories/men/MenPage";

export const Router = () => {

  return (
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Main/>}/>
          <Route path="women" element={<WomenPage/>}/>
          <Route path="women/:id" element={<WomenId/>}/>
          <Route path="men" element={<MenPage/>}/>
          <Route path="men/:id" element={<WomenId/>}/>
        </Route>
      </Routes>
)
}

export default Router;