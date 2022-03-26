import ClothesStyle from "./Clothes.module.css";
import {NavLink} from "react-router-dom";
import RatingStars from "../../common/rating/RatingStars";

const Clothes = ({product, productType}) => {

  const listClothes = product.map(item =>
      <li key={item.id}
          data-test-id={`clothes-card-${productType}`}>
        <ClothesItem item={item}/>
      </li>
  );

  return (
      <ul className={ClothesStyle.wrapper}>
        {listClothes}
      </ul>
  )
}

export default Clothes;

export const ClothesItem = ({item}) => {

  return (
      <NavLink className={ClothesStyle.cardsItem}
               to={`/${item.category}/${item.id}`}>
        {item.discount && <Discount discount={item.discount}/>}
        <div>
          {Array.isArray(item.images) ?
              <img className={ClothesStyle.img} src={`https://training.cleverland.by/shop${item.images[0].url}`}
                   alt={item.name}/>
              :
              <img className={ClothesStyle.img} src={item.images}
                   alt={item.name}/>
          }
        </div>
        <div className={ClothesStyle.name}>
          {item.name}
        </div>
        <div className={ClothesStyle.priceQuality}>
          <pre><p className={ClothesStyle.price}>
            {'$ ' + item.price}
            {item.discount && <span className={ClothesStyle.fullPrice}>{'$ ' + fullPrice(item.discount, item.price)}</span>}
          </p></pre>
          <RatingStars rating={item.rating}/>
        </div>
      </NavLink>
  )
}

const fullPrice = (discount, price) => {
  return ((parseInt(price) / (100 + parseInt(discount))) * 100).toFixed(2);
}

const Discount = ({discount}) => {
  return (
      <div className={ClothesStyle.discountWrapper}>
        <p className={ClothesStyle.discountPrice}>{discount}</p>
      </div>
  )
}