import ClothesNavBar from "./../clothes/ClothesNavBar";
import ClothesStyle from "./../clothes/ClothesMain.module.css";
import Clothes from "./../clothes/clothesList/Clothes";
import SeeAllButton from "./../clothes/SeeAllButton";
import ClothesTitle from "../clothes/ClothesTitle";
import {WOMEN_CLOTHES} from "../../constants/clothes";

const WomenS = () => {
  return (
      <article className={ClothesStyle.container}>
        <div className={ClothesStyle.wrapper}>
          <ClothesTitle>
            WOMEN’S
          </ClothesTitle>
          <ClothesNavBar/>
        </div>
        <div className={ClothesStyle.closesWrapper}>
          <Clothes product={WOMEN_CLOTHES}/>
        </div>
        <SeeAllButton/>
      </article>
  )
}

export default WomenS;