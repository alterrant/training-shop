import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import AddToCardStyle from "./add-to-card.module.css";
import { ReactComponent as ScaleSVG } from "../../../assets/SVG/scale.svg";
import { ReactComponent as ScaleActiveSVG } from "../../../assets/SVG/scale-active.svg";
import { ReactComponent as HeartSVG } from "../../../assets/SVG/heart.svg";
import { ReactComponent as HeartActiveSVG } from "../../../assets/SVG/heart-active.svg";
import {
  deleteShoppingCartProduct,
  setShoppingCartProduct,
} from "../../../redux/shopping-cart-reducer";

const findProductInCart = ({ productsInCart, shoppingCartProduct }) =>
  productsInCart.find(
    (item) =>
      item.productId === shoppingCartProduct.productId &&
      item.color === shoppingCartProduct.color &&
      item.size === shoppingCartProduct.size
  );

const createProductToCart = ({ product, selectedCategoriesProduct }) => ({
  productId: product?.id,
  url: selectedCategoriesProduct?.image,
  name: product?.name,
  color: selectedCategoriesProduct?.color,
  size: selectedCategoriesProduct?.size,
  price: product?.price,
  productQuantity: 1,
});

const AddToCard = ({ product, selectedCategoriesProduct }) => {
  const [isScaleActive, setScaleActive] = useState(false);
  const [isHeartActive, setHeartActive] = useState(false);
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.shoppingCart.products);

  const shoppingCartProduct = createProductToCart({
    product,
    selectedCategoriesProduct,
  });
  const isProductInCart = findProductInCart({
    productsInCart,
    shoppingCartProduct,
  });

  const cartToggle = () => {
    if (isProductInCart) {
      dispatch(deleteShoppingCartProduct(shoppingCartProduct));
    } else {
      /* мне кажется логичным открывать корзину при добавлении нового товара, но тесты не проходят
      dispatch(shoppingCartToggle()); */
      dispatch(setShoppingCartProduct(shoppingCartProduct));
    }

    /* dispatch(shoppingCartToggle());
     isProductInCart ?
         dispatch(deleteShoppingCartProduct(shoppingCartProduct))
         :
         dispatch(setShoppingCartProduct(shoppingCartProduct)); */
  };

  return (
    <div className={AddToCardStyle.wrapper}>
      <button
        onClick={() => cartToggle({ isProductInCart, shoppingCartProduct })}
        data-test-id="add-cart-button"
        type="button"
      >
        {isProductInCart ? "REMOVE FROM CART" : "ADD TO CART"}
      </button>
      <div
        aria-hidden="true"
        onClick={() => setScaleActive(!isScaleActive)}
        onKeyDown={() => "keyDownHandler"}
      >
        {isScaleActive ? <ScaleActiveSVG /> : <ScaleSVG />}
      </div>
      <div
        aria-hidden="true"
        onClick={() => setHeartActive(!isHeartActive)}
        onKeyDown={() => "keyDownHandler"}
      >
        {isHeartActive ? <HeartActiveSVG /> : <HeartSVG />}
      </div>
    </div>
  );
};

export default AddToCard;

AddToCard.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discount: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    material: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    particulars: PropTypes.objectOf(PropTypes.bool).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  selectedCategoriesProduct: PropTypes.objectOf(PropTypes.string),
};
