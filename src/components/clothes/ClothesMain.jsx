import ClothesNavBar from "./../clothes/ClothesNavBar";
import ClothesStyle from "./../clothes/ClothesMain.module.css";
import Clothes from "./../clothes/clothesList/Clothes";
import SeeAllButton from "./../clothes/SeeAllButton";
import ClothesTitle from "../clothes/ClothesTitle";
import {getClothes} from "../../encapsulatedCommonLogics/distributions";


const ClothesMain = ({tittle, productType}) => {

  const product = getClothes(productType);

  return (
      <article className={ClothesStyle.clothes} data-test-id={`clothes-${productType}`}>
        <div className={ClothesStyle.wrapper}>
          <ClothesTitle>
            {tittle}
          </ClothesTitle>
          <ClothesNavBar/>
        </div>
        <div className={ClothesStyle.closesWrapper}>
          <Clothes product={product}/>
        </div>
        <SeeAllButton/>
      </article>
  )
}

export default ClothesMain;