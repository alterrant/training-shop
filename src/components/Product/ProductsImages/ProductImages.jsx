import ProductStyle from "../Product.module.css";
import {ReactComponent as Pointer} from "../../../assets/SVG/pointer.svg";
import ProductImg1 from "../../../assets/product/product1.png";
import ProductImg2 from "../../../assets/product/product2.png";
import ProductImg3 from "../../../assets/product/product3.png";
import ProductImg4 from "../../../assets/product/product4.png";
import ProductBigImg from "../../../assets/product/productBig.png";

const ProductImages = (/*{product, selectedCategoriesProduct}*/) => {

  return (
      <div className={ProductStyle.wrapper}>
        <div className={ProductStyle.productAngles}>
          <div className={ProductStyle.pointers}>
            <Pointer/>
            <Pointer className={ProductStyle.down}/>
          </div>
          <ul className={ProductStyle.imagesWrapper}>
            <li>
              <div className={ProductStyle.imgWrapper}>
                <img src={ProductImg1} alt="img1"/>
              </div>
            </li>
            <li>
              <div className={ProductStyle.imgWrapper}>
                <img src={ProductImg2} alt="img2"/>
              </div>
            </li>
            <li>
              <div className={ProductStyle.imgWrapper}>
                <img src={ProductImg3} alt="img3"/>
              </div>
            </li>
            <li>
              <div className={ProductStyle.imgWrapper}>
                <img src={ProductImg4} alt="img4"/>
              </div>
            </li>
          </ul>
        </div>
        <div className={ProductStyle.bigImgWrapper}>
          <img className={ProductStyle.bigImg} src={ProductBigImg} alt="img1"/>
        </div>
      </div>
  )
}

export default ProductImages;