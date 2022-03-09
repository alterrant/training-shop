import Tittle from "../../components/productHeader/ProductHeader";
import {useSelector} from "react-redux";
import Product from "../../components/Product/Product";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
import {useProduct} from "../../hooks/useProduct";
import {PRODUCTS} from "../../products";
import {getGenderProducts} from "../../encapsulatedCommonLogics/getProducts";

const ProductPage = ({productType}) => {

  const products = PRODUCTS;
  const productInfo = useProduct({products, productType});
  const productInStore = useSelector(state => state.product.availabilityInStore);
  const genderProducts = getGenderProducts(productType, PRODUCTS)
  const selectedCategoriesProduct = useSelector(state => state.product.selectedCategories);

  return (
      <div data-test-id={`product-page-${productType}`}>
        <div>
          <Tittle tittle={productInfo.name}
                  rating={productInfo.rating}
                  sku={productInStore.sku}
                  availability={productInStore.availability}
                  reviewsCounter={productInfo.reviews.length}/>
        </div>
        {productInfo.id && <Product product={productInfo}
                                    selectedCategoriesProduct={selectedCategoriesProduct}/>}
        <RelatedProducts genderProducts={genderProducts}/>
      </div>
  )
}

export default ProductPage;