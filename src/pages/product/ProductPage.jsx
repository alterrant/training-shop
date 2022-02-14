import Tittle from "../../components/productHeader/ProductHeader";
import {useSelector} from "react-redux";
import Product from "../../components/Product/Product";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";

const ProductPage = ({productType}) => {

  const productInfo = useSelector(state => state.product.productInfo);
  const selectedCategoriesProduct = useSelector(state => state.product.selectedCategories);
  /*const relatedProducts = useSelector(state => state.product.relatedProducts);*/

  return (
      <div className={productInfo.productPage}
           data-test-id={`product-page-${productType}`}>
        <Tittle tittle={`${productInfo.category} ${productInfo.name}`}
                rating={productInfo.rating}
                sku={productInfo.sku}
                availability={productInfo.availability}
                reviewsCounter={productInfo.reviews.length}/>
        <Product product={productInfo}
                 selectedCategoriesProduct={selectedCategoriesProduct}/>
        <RelatedProducts/>
      </div>
  )
}

export default ProductPage;