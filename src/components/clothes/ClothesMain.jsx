import ClothesNavBar from "./../clothes/ClothesNavBar";
import ClothesStyle from "./../clothes/ClothesMain.module.css";
import Clothes from "./../clothes/clothesList/Clothes";
import SeeAllButton from "./../clothes/SeeAllButton";
import ClothesTitle from "../clothes/ClothesTitle";
import {useParticularProducts} from "../../hooks/useProducts";
import {getGenderProducts} from "../../encapsulatedCommonLogics/getProducts";
import {PRODUCTS} from "../../products";

const ClothesMain = ({tittle, productType}) => {

  //genderProducts будут передаваться пропсами
  const genderProducts = getGenderProducts(productType, PRODUCTS);

  const {selectedParticularProducts, clothesNavBar} = useParticularProducts(productType, genderProducts);

  return (
      <article className={ClothesStyle.clothes} data-test-id={`clothes-${productType}`}>
        <div className={ClothesStyle.wrapper}>
          <ClothesTitle>
            {tittle}
          </ClothesTitle>
          <ClothesNavBar clothesNavBar={clothesNavBar} productType={productType}/>
        </div>
        <div className={ClothesStyle.closesWrapper}>
          {clothesNavBar[0].id && <Clothes product={selectedParticularProducts} productType={productType}/>}
        </div>
        <SeeAllButton/>
      </article>
  )
}

export default ClothesMain;