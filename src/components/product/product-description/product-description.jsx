import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";

import Partition from "../../common/partition/partition";
import AddToCard from "../../common/add-to-card/add-to-card";
import Advantages from "./advantages/advantages";
import Cards from "../../common/cards/cards";
import Reviews from "./reviews/reviews";

import { setColor, setImage, setSize } from "../../../redux/product-reducer";
import { getProductAvailableColors } from "../../../encapsulated-common-logics/filters";

import { ReactComponent as ClosesHangerSVG } from "../../../assets/SVG/clothes-hanger.svg";
import { ReactComponent as TruckSVG } from "../../../assets/SVG/truck.svg";
import { ReactComponent as RefreshSVG } from "../../../assets/SVG/refresh.svg";
import { ReactComponent as MailSVG } from "../../../assets/SVG/mail.svg";

import ProductDescriptionStyle from "./product-description.module.css";

const ProductDescription = ({ product, selectedCategoriesProduct }) => {
  const { color: selectedColor } = useSelector(
    (state) => state.product.selectedCategories
  );
  const { size: selectedSize } = useSelector(
    (state) => state.product.selectedCategories
  );
  const dispatch = useDispatch();

  const cx = classNames.bind(ProductDescriptionStyle);
  const unicColoredProducts = getProductAvailableColors(product);
  const unicProductColors = unicColoredProducts.map((item) => item.color);

  const coloredProducts = unicColoredProducts.map((item) => (
    <li
      className={cx(
        { selected: selectedColor === item.color },
        "coloredProductsImg"
      )}
      key={item.id}
      onClick={() => {
        dispatch(setColor(item.color));
        dispatch(setImage(item.url));
      }}
    >
      <img
        src={`https://training.cleverland.by/shop${item.url}`}
        alt={`product ${item.color}`}
      />
    </li>
  ));

  const productSizes = product.sizes.map((size) => (
    <li
      className={cx({ selected: selectedSize === size }, "productSizes")}
      key={size}
      onClick={() => dispatch(setSize(size))}
    >
      <p>{size}</p>
    </li>
  ));

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
          <span>{selectedCategoriesProduct.size}</span>
        </p>
        <ul className={ProductDescriptionStyle.kindProductsWrapper}>
          {productSizes}
        </ul>
      </div>
      <div className={ProductDescriptionStyle.sizeGuide}>
        <ClosesHangerSVG />
        <p>Size guide</p>
      </div>
      <Partition />
      <div className={ProductDescriptionStyle.priceWrapper}>
        <pre>
          <p
            className={ProductDescriptionStyle.price}
          >{`$ ${product.price}`}</p>
        </pre>
        <div className={ProductDescriptionStyle.addToCardWrapper}>
          <AddToCard
            product={product}
            selectedCategoriesProduct={selectedCategoriesProduct}
          />
        </div>
      </div>
      <Partition />
      <div className={ProductDescriptionStyle.advantagesWrapper}>
        <Advantages svg={<TruckSVG />} description={"Sħipping & Delivery"} />
        <Advantages svg={<RefreshSVG />} description={"Returns & Exchanges"} />
        <Advantages svg={<MailSVG />} description="Ask a question" />
      </div>
      <div className={ProductDescriptionStyle.guaranteed}>
        <p>GUARANTEED SAFE CHECKOUT</p>
        <Partition />
      </div>
      <Cards />
      <Partition />
      <p className={ProductDescriptionStyle.description}>DESCRIPTION</p>
      <Partition />
      <div className={ProductDescriptionStyle.additionalInformWrapper}>
        <p>ADDITIONAL INFORMATION</p>
        <ul className={ProductDescriptionStyle.additionalInform}>
          <li>
            Color: <span>{unicProductColors.join(", ")}</span>
          </li>
          <li>
            Size: <span>{product.sizes.join(", ")}</span>
          </li>
          <li>
            Material: <span>{product.material}</span>
          </li>
        </ul>
      </div>
      <Partition />
      <div className={ProductDescriptionStyle.reviewsMargin}>
        <Reviews
          reviews={product.reviews}
          rating={product.rating}
          productId={product.id}
        />
      </div>
      <Partition />
    </div>
  );
};

export default ProductDescription;

ProductDescription.propTypes = {
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
