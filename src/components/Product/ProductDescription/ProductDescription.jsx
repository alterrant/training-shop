import ProductDescriptionStyle from "./ProductDescription.module.css";
import {ReactComponent as ClosesHangerSVG} from "./../../../assets/SVG/clothesHanger.svg";
import Partition from "../../common/partition/Partition";
import AddToCard from "../../common/addToCard/AddToCard";
import {ReactComponent as TruckSVG} from "./../../../assets/SVG/truck.svg";
import {ReactComponent as RefreshSVG} from "./../../../assets/SVG/refresh.svg";
import {ReactComponent as MailSVG} from "./../../../assets/SVG/mail.svg";
import Advantages from "./Advantages";
import Cards from "../../common/cards/Cards";
import Reviews from "../reviews/Reviews";
import {useDispatch, useSelector} from "react-redux";
import classNames from 'classnames/bind';
import {setColor, setImage, setSize} from "../../../redux/productReducer";
import {getProductAvailableColors} from "../../../encapsulatedCommonLogics/filters";

const ProductDescription = ({product, selectedCategoriesProduct}) => {

  const selectedColor = useSelector((state => state.product.selectedCategories.color));
  const selectedSize = useSelector((state => state.product.selectedCategories.size));
  const dispatch = useDispatch();

  const cx = classNames.bind(ProductDescriptionStyle);
  const unicColoredProducts = getProductAvailableColors(product);
  const unicProductColors = unicColoredProducts.map(item => item.color);

  const coloredProducts = unicColoredProducts.map((item) =>
      <li className={cx({selected: selectedColor === item.color}, 'coloredProductsImg')}
          key={item.id}
          onClick={() => {
            dispatch(setColor(item.color));
            dispatch(setImage(item.url));
          }}>
        <img src={`https://training.cleverland.by/shop${item.url}`} alt={`product ${item.color}`}/>
      </li>)

  const productSizes = product.sizes.map(size =>
      <li className={cx({selected: selectedSize === size}, 'productSizes')}
          key={size}
          onClick={() => dispatch(setSize(size))}>
        <p>{size}</p>
      </li>)

  return (
      <div className={ProductDescriptionStyle.descriptionWrapper}>
        <div className={ProductDescriptionStyle.colorWrapper}>
          <p>
            <span>Color:</span>
            <span>{selectedCategoriesProduct.color}</span>
          </p>
          <ul className={ProductDescriptionStyle.kindProductsWrapper}>
            {coloredProducts}
          </ul>
        </div>
        <div className={ProductDescriptionStyle.sizesWrapper}>
          <p>
            <span>Size:</span>
            <span>{selectedCategoriesProduct.size}</span></p>
          <ul className={ProductDescriptionStyle.kindProductsWrapper}>
            {productSizes}
          </ul>
        </div>
        <div className={ProductDescriptionStyle.sizeGuide}>
          <ClosesHangerSVG/>
          <p>Size guide</p>
        </div>
        <Partition/>
        <div className={ProductDescriptionStyle.priceWrapper}>
          <pre><p className={ProductDescriptionStyle.price}>{`$ ${product.price}`}</p></pre>
          <div className={ProductDescriptionStyle.addToCardWrapper}>
            <AddToCard product={product} selectedCategoriesProduct={selectedCategoriesProduct}/>
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
            <li >Color: <span>{unicProductColors.join(', ')}</span></li>
            <li>Size: <span>{product.sizes.join(', ')}</span></li>
            <li>Material: <span>{product.material}</span></li>
          </ul>
        </div>
        <Partition/>
        <div className={ProductDescriptionStyle.reviewsMargin}>
          <Reviews reviews={product.reviews} rating={product.rating}/>
        </div>
        <Partition/>
      </div>
  )
}

export default ProductDescription;