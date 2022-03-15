import AddToCardStyle from './AddToCard.module.css';
import {ReactComponent as ScaleSVG} from "./../../assets/SVG/scale.svg";
import {ReactComponent as ScaleActiveSVG} from "./../../assets/SVG/scaleActive.svg";
import {ReactComponent as HeartSVG} from "./../../assets/SVG/heart.svg";
import {ReactComponent as HeartActiveSVG} from "./../../assets/SVG/heartActive.svg";
import {useState} from "react";
import {deleteShoppingCartProduct, setShoppingCartProduct, shoppingCartToggle} from "../../redux/shoppingCartReducer";
import {useDispatch, useSelector} from "react-redux";

const AddToCard = ({product, selectedCategoriesProduct}) => {
  const [isScaleActive, setScaleActive] = useState(false);
  const [isHeartActive, setHeartActive] = useState(false);
  const dispatch = useDispatch();
  const productsInCart = useSelector((state => state.shoppingCart.products));

  const shoppingCartProduct = createProductToCart({product, selectedCategoriesProduct});
  const isProductInCart = findProductInCart({productsInCart, shoppingCartProduct});

  const cartToggle = ({isProductInCart, shoppingCartProduct}) => {
    if (isProductInCart) {
      dispatch(deleteShoppingCartProduct(shoppingCartProduct));
    } else {
      dispatch(shoppingCartToggle());
      dispatch(setShoppingCartProduct(shoppingCartProduct));
    }

    /* dispatch(shoppingCartToggle());
     isProductInCart ?
         dispatch(deleteShoppingCartProduct(shoppingCartProduct))
         :
         dispatch(setShoppingCartProduct(shoppingCartProduct));*/
  }

  return (
      <div className={AddToCardStyle.wrapper}
           data-test-id={'add-cart-button'}>
        <p onClick={() => cartToggle({isProductInCart, shoppingCartProduct})}>
          {isProductInCart ? 'REMOVE FROM CART' : 'ADD TO CART'}
        </p>
        <div onClick={() => setScaleActive(!isScaleActive)}>
          {isScaleActive ? <ScaleActiveSVG/> : <ScaleSVG/>}
        </div>
        <div onClick={() => setHeartActive(!isHeartActive)}>
          {isHeartActive ? <HeartActiveSVG/> : <HeartSVG/>}
        </div>
      </div>
  )
}

export default AddToCard;

const findProductInCart = ({productsInCart, shoppingCartProduct}) => productsInCart.find(item =>
    item.productId === shoppingCartProduct.productId &&
    item.color === shoppingCartProduct.color &&
    item.size === shoppingCartProduct.size);

const createProductToCart = ({product, selectedCategoriesProduct}) => {
  return {
    productId: product?.id,
    url: selectedCategoriesProduct?.image,
    name: product?.name,
    color: selectedCategoriesProduct?.color,
    size: selectedCategoriesProduct?.size,
    price: product?.price,
    productQuantity: 1
  }
}