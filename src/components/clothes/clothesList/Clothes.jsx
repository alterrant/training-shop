import ClothesStyle from "./Clothes.module.css";
import {NavLink} from "react-router-dom";
import RatingStars from "../../common/RatingStars";

const Clothes = ({product}) => {

  const listClothes = product.map(item =>
      <li key={item.id}>
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

const Discount = ({discount}) => {
  return (
      <div className={ClothesStyle.discountWrapper}>
        <p className={ClothesStyle.discountPrice}>{"-" + discount}</p>
      </div>
  )
}

export const ClothesItem = ({item}) => {

  const fullPrice = (discount, cost) => {
    //const dollarPrice = cost.split(' ')[1];
    const safetyPrice = cost.split(' ').find(item => parseInt(item));
    return ((parseInt(safetyPrice) / (100-parseInt(discount))) * 100).toFixed(2);
  }

  return (
      <NavLink className={ClothesStyle.cardsItem}
               to={`/${item.productType}/${item.id}`}
               data-test-id={`clothes-card-${item.productType}`}>
        {item.discount !== '0' && <Discount discount={item.discount}/>}
        <div>
          <img className={ClothesStyle.img} src={item.image} alt={item.image}/>
        </div>
        <div className={ClothesStyle.name}>
          {item.name}
        </div>
        <div className={ClothesStyle.priceQuality}>
          <p className={ClothesStyle.price}>
            {item.cost}
            {item.discount !== '0' && <span className={ClothesStyle.fullPrice}>{fullPrice(item.discount, item.cost)}</span>}
          </p>
          <RatingStars rating={item.rating}/>
        </div>
      </NavLink>
  )
}