import WomenS from "../../../components/women's/Women's";
import Tittle from "../../../components/tittle/Tittle";
import Preloader from "../../../components/common/Preloader";
import {useState} from "react";
import ProductFilter from "../../../components/filter/ProductFilter";
import FilterCategories from "../../../components/filter/FilterCategories";

const WomenPage = () => {

  const [isLoading] = useState(true);
  const [isOpenedFilter, setOpenedStatusFilter] = useState(false);

  return (
      <article>
        <Tittle tittle={"WOMEN"}/>
        <ProductFilter isOpenedFilter={isOpenedFilter}
                       setOpenedStatusFilter={setOpenedStatusFilter}/>
        {isOpenedFilter && <FilterCategories/>}
        <WomenS/>
        {isLoading && <Preloader/>}
      </article>
  )
}

export default WomenPage;