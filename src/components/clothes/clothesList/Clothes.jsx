import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ClothesStyle from "./Clothes.module.css";
import RatingStars from "../../common/rating/RatingStars";

function fullPrice(discount, price) {
  return ((parseInt(price, 10) / (100 + parseInt(discount, 10))) * 100).toFixed(
    2
  );
}

const Clothes = ({ product, productType }) => {
  const listClothes = product.map((item) => (
    <li key={item.id} data-test-id={`clothes-card-${productType}`}>
      <ClothesItem item={item} />
    </li>
  ));

  return <ul className={ClothesStyle.wrapper}>{listClothes}</ul>;
};

export default Clothes;

export const ClothesItem = ({ item }) => (
  <NavLink
    className={ClothesStyle.cardsItem}
    to={`/${item.category}/${item.id}`}
  >
    {item.discount && <Discount discount={item.discount} />}
    <div>
      {Array.isArray(item.images) ? (
        <img
          className={ClothesStyle.img}
          src={`https://training.cleverland.by/shop${item.images[0].url}`}
          alt={item.name}
        />
      ) : (
        <img className={ClothesStyle.img} src={item.images} alt={item.name} />
      )}
    </div>
    <div className={ClothesStyle.name}>{item.name}</div>
    <div className={ClothesStyle.priceQuality}>
      <pre>
        <p className={ClothesStyle.price}>
          {`$ ${item.price}`}
          {item.discount && (
            <span className={ClothesStyle.fullPrice}>
              {`$ ${fullPrice(item.discount, item.price)}`}
            </span>
          )}
        </p>
      </pre>
      <RatingStars rating={item.rating} />
    </div>
  </NavLink>
);

const Discount = ({ discount }) => (
  <div className={ClothesStyle.discountWrapper}>
    <p className={ClothesStyle.discountPrice}>{discount}</p>
  </div>
);

Clothes.propTypes = {
  product: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
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
      }).isRequired
    ),
    PropTypes.oneOf([]).isRequired,
  ]),
  productType: PropTypes.string.isRequired,
};

ClothesItem.propTypes = {
  item: PropTypes.shape({
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
};

Discount.propTypes = {
  discount: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};
