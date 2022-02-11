import TittleStyle from "./Tittle.module.css";
import Reviews from "../reviews/Reviews";
import {useParams} from "react-router-dom";
import RatingStars from "../common/RatingStars";
import Navigation from "./navigation/Navigation";

const Tittle = ({tittle}) => {

  const params = useParams();

  return (
      <section className={TittleStyle.wrapper}>
        <Navigation/>
        <div className={TittleStyle.container}>
          <h1 className={TittleStyle.tittle}>
            {tittle}
          </h1>
          {params.id &&
          <div className={TittleStyle.description}>
            <div className={TittleStyle.rating}>
            <RatingStars rating={'5'}/>
            <Reviews reviewsCount={'2'}/>
            </div>
            <div className={TittleStyle.productInfoWrapper}>
              <ProductInfo tittle={"SKU:"} description={"777"}/>
              <ProductInfo tittle={"Availability:"} description={"In Stock"}/>
            </div>
          </div>
          }
        </div>
      </section>
  )
}

export default Tittle;

const ProductInfo = ({tittle, description}) => {
  return (
      <div className={TittleStyle.productInfo}>
        <p>{tittle}</p>
        <p>{description}</p>
      </div>
  )
}