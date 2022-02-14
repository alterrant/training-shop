import RelatedProductsStyle from "./RelatedProducts.module.css";
import Clothes from "../clothes/clothesList/Clothes";
import {useSelector} from "react-redux";
import { ReactComponent as RightArrow} from "./../../assets/SVG/rightArrow.svg";


const RelatedProducts = () => {

  const relatedProductsLists = useSelector(state => state.product.relatedProducts);

  return (
      <section className={RelatedProductsStyle.container}>
        <div className={RelatedProductsStyle.wrapper}>
          <h4 className={RelatedProductsStyle.tittle}>RELATED PRODUCTS</h4>
          <div className={RelatedProductsStyle.arrows}>
            <div><RightArrow/></div>
            <div><RightArrow/></div>
          </div>
        </div>
        <Clothes product={relatedProductsLists}/>
      </section>
  )
}

export default RelatedProducts;