import ClothesNavBar from "./../clothes/ClothesNavBar";
import ClothesStyle from "./../clothes/ClothesMain.module.css";
import Clothes from "./../clothes/clothesList/Clothes";
import SeeAllButton from "./../clothes/SeeAllButton";
import ClothesTitle from "../clothes/ClothesTitle";
import {MEN_CLOTHES} from "../../constants/clothes";

const MenS = () => {
  return (
      <article className={ClothesStyle.container}>
        <div className={ClothesStyle.wrapper}>
          <ClothesTitle>
            MEN’S
          </ClothesTitle>
          <ClothesNavBar/>
        </div>
        <div className={ClothesStyle.closesWrapper}>
          <Clothes product={MEN_CLOTHES}/>
        </div>
        <SeeAllButton/>
      </article>
  )
}

export default MenS;