import Advantages from "../../components/advantage/Advantages";
import Banners from "../../components/banners/Banners";
import Subscribe from "../../components/subscribe/Subscribe";
import LatestFromBlog from "../../components/latestFromBlog/LatestFromBlog";
import Benefits from "../../components/benefits/Benefits";
import ClothesMain from "../../components/clothes/ClothesMain";
import Partition from "../../components/common/Partition";
import React, {useEffect} from "react";
import {MEN, WOMEN} from "../../constants/productType";
import {useSelector} from "react-redux";
import {useStableDispatch} from "../../hooks/useRedux";
import {fetchGenderProducts, fetchProducts, resetErrors} from "../../redux/initializeReducer";

const MainPage = () => {
  const dispatch = useStableDispatch();

  const menProducts = useSelector(state => state.initialize.products.men);
  const womenProducts = useSelector(state => state.initialize.products.women);

  useEffect(() => {
    if (menProducts.length === 0 && womenProducts.length === 0) {
      dispatch(fetchProducts());
    } else if (menProducts.length === 0 || womenProducts.length === 0) {
      (menProducts.length === 0)
          ? dispatch(fetchGenderProducts(MEN))
          : dispatch(fetchGenderProducts(WOMEN));
    }
    return () => dispatch(resetErrors());
  }, [dispatch, menProducts.length, womenProducts.length, MEN, WOMEN]);

  return (
      <>
        <Banners/>
        <Advantages/>
        <Partition/>
        <ClothesMain tittle={'WOMEN’S'} productType={WOMEN} genderProducts={womenProducts}/>
        <ClothesMain tittle={'MEN’S'} productType={MEN} genderProducts={menProducts}/>
        <Benefits/>
        <Subscribe/>
        <LatestFromBlog/>
      </>
  )
}

export default MainPage;