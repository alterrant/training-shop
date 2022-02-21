import ProductDescriptionStyle from "./ProductDescription.module.css";
import {ReactComponent as ClosesHangerSVG} from "./../../../assets/SVG/clothesHanger.svg";
import Partition from "../../common/Partition";
import AddToCard from "../../common/AddToCard";
import {ReactComponent as TruckSVG} from "./../../../assets/SVG/truck.svg";
import {ReactComponent as RefreshSVG} from "./../../../assets/SVG/refresh.svg";
import {ReactComponent as MailSVG} from "./../../../assets/SVG/mail.svg";
import Advantages from "./Advantages";
import Cards from "../../common/Cards";
import Reviews from "../../reviews/Reviews";

const ProductDescription = ({product, selectedCategoriesProduct}) => {

  const coloredProducts = product.images.map(item =>
      <li key={item.id}>
        <img src={item.url} alt={item.id}/>
      </li>)

  const productSizes = product.sizes.map(item =>
      <li key={item} className={ProductDescriptionStyle.productSizes}>
        <p>{item}</p>
      </li>)

  return (
      <div className={ProductDescriptionStyle.descriptionWrapper}>
        <div>
          <p>Color: <span>{selectedCategoriesProduct.color}</span></p>
          <ul className={ProductDescriptionStyle.coloredProducts}>
            {coloredProducts}
          </ul>
        </div>
        <div className={ProductDescriptionStyle.sizesWrapper}>
          <p>Size: <span>{selectedCategoriesProduct.size}</span></p>
          <ul className={ProductDescriptionStyle.coloredProducts}>
            {productSizes}
          </ul>
        </div>
        <div className={ProductDescriptionStyle.sizeGuide}>
          <ClosesHangerSVG/>
          <p>Size guide</p>
        </div>
        <Partition/>
        <div className={ProductDescriptionStyle.priceWrapper}>
          <pre><p className={ProductDescriptionStyle.price}>{product.price}</p></pre>
          <div className={ProductDescriptionStyle.addToCardWrapper}>
            <AddToCard/>
          </div>
        </div>
        <Partition/>
        <div className={ProductDescriptionStyle.advantagesWrapper}>
          <Advantages svg={<TruckSVG/>} description={'Sħipping & Delivery'}/>
          <Advantages svg={<RefreshSVG/>} description={'Returns & Exchanges'}/>
          <Advantages svg={<MailSVG/>} description={'Ask a question'}/>
        </div>
        <div className={ProductDescriptionStyle.guaranteed}>
          <p>GUARANTEED SAFE CHECKOUT</p>
          <Partition/>
        </div>
        <Cards/>
        <Partition/>
        <p className={ProductDescriptionStyle.description}>DESCRIPTION</p>
        <Partition/>
        <div className={ProductDescriptionStyle.additionalInformWrapper}>
          <p>ADDITIONAL INFORMATION</p>
          <ul className={ProductDescriptionStyle.additionalInform}>
            <li >Color: <span>{product.colors.join(', ')}</span></li>
            <li>Size: <span>{product.sizes.join(', ')}</span></li>
            <li>Material: <span>{product.materials.join(', ')}</span></li>
          </ul>
        </div>
        <Partition/>
        <div className={ProductDescriptionStyle.reviewsMargin}>
          <Reviews reviews={product.reviews}/>
        </div>
        <Partition/>
      </div>
  )
}

export default ProductDescription;