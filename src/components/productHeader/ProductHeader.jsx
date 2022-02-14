import ProductHeaderStyle from "./ProductHeader.module.css";
import {useParams} from "react-router-dom";
import Navigation from "./navigation/Navigation";
import RatingReviews from "../common/RatingReviews";

const ProductHeader = ({tittle, rating, sku, availability, reviewsCounter}) => {

  const params = useParams();

  return (
      <section className={ProductHeaderStyle.wrapper}>
        <Navigation productName={tittle}/>
        <div className={ProductHeaderStyle.container}>
          <h2 className={ProductHeaderStyle.tittle}>
            {tittle}
          </h2>
          {params.id && <ProductTittle rating={rating}
                                       reviewsCounter={reviewsCounter}
                                       productInfo={{sku, availability}}/>}
        </div>
      </section>
  )
}

export default ProductHeader;

const ProductInfo = ({tittle, description}) => {
  return (
      <div className={ProductHeaderStyle.productInfo}>
        <p>{tittle}</p>
        <p>{description}</p>
      </div>
  )
}

const ProductTittle = ({rating, reviewsCounter, productInfo}) => {
  return (
      <div className={ProductHeaderStyle.description}>
        <RatingReviews rating={rating} reviewsCounter={reviewsCounter}/>
        <div className={ProductHeaderStyle.productInfoWrapper}>
          <ProductInfo tittle={"SKU:"} description={productInfo.sku}/>
          <ProductInfo tittle={"Availability:"} description={productInfo.availability}/>
        </div>
      </div>
  )
}

