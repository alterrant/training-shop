import ClothesNavBar from "./../clothes/ClothesNavBar";
import ClothesStyle from "./../clothes/ClothesMain.module.css";
import Clothes from "./../clothes/clothesList/Clothes";
import SeeAllButton from "./../clothes/SeeAllButton";
import ClothesTitle from "../clothes/ClothesTitle";
import {useParticularProducts} from "../../hooks/useProducts";
import {useSelector} from "react-redux";
import Preloader from "../common/Preloader/Preloader";

const ClothesMain = ({tittle, productType, genderProducts}) => {
  const isLoadingProducts = useSelector(state => state.initialize.isLoadingProducts);
  const isLoadingGenderProducts = useSelector(state => state.initialize.isLoadingGenderProducts);
  const isLoading = !!(isLoadingProducts || isLoadingGenderProducts);

  const {selectedParticularProducts, clothesNavBar} = useParticularProducts(productType, genderProducts);

  return (
      <article className={ClothesStyle.clothes} data-test-id={`clothes-${productType}`}>
        <div className={ClothesStyle.wrapper}>
          <ClothesTitle>
            {tittle}
          </ClothesTitle>
          <ClothesNavBar clothesNavBar={clothesNavBar} productType={productType}/>
        </div>
        {isLoading
            ? <Preloader/>
            : <div className={ClothesStyle.closesWrapper}>
              {<Clothes product={selectedParticularProducts} productType={productType}/>}
            </div>
        }
        <SeeAllButton productType={productType}/>
      </article>
  )
}

export default ClothesMain;