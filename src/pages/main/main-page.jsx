import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Advantages from "../../components/main/advantages/advantages";
import Banners from "../../components/main/banners/banners";
import Subscribe from "../../components/main/subscribe/subscribe";
import LatestBlogs from "../../components/main/latest-blogs/latest-blogs";
import Benefits from "../../components/main/benefits/benefits";
import ClothesMain from "../../components/clothes/clothes-main";
import Partition from "../../components/common/partition/partition";

import { MEN, WOMEN } from "../../constants/product-type";

import {
  fetchGenderProducts,
  fetchProducts,
  resetErrors,
} from "../../redux/initialize-reducer";

const MainPage = () => {
  const dispatch = useDispatch();

  const menProducts = useSelector((state) => state.initialize.products.men);
  const womenProducts = useSelector((state) => state.initialize.products.women);

  useEffect(() => {
    if (menProducts.length === 0 && womenProducts.length === 0) {
      dispatch(fetchProducts());
    } else if (menProducts.length === 0 || womenProducts.length === 0) {
      menProducts.length === 0
        ? dispatch(fetchGenderProducts(MEN))
        : dispatch(fetchGenderProducts(WOMEN));
    }
    return () => dispatch(resetErrors());
  }, [dispatch, menProducts.length, womenProducts.length, MEN, WOMEN]);

  return (
    <>
      <Banners />
      <Advantages />
      <Partition />
      <ClothesMain
        tittle="WOMEN’S"
        productType={WOMEN}
        genderProducts={womenProducts}
      />
      <ClothesMain
        tittle="MEN’S"
        productType={MEN}
        genderProducts={menProducts}
      />
      <Benefits />
      <Subscribe />
      <LatestBlogs />
    </>
  );
};

export default MainPage;
