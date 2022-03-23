import Tittle from "../../components/productHeader/ProductHeader";
import {useSelector} from "react-redux";
import Product from "../../components/Product/Product";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
import {useProduct} from "../../hooks/useProduct";
import Preloader from "../../components/common/Preloader/Preloader";

const ProductPage = ({productType}) => {

  //пока не вижу смысла запрашивать отдельно для id, тк relatedProducts всё равно требуют genderProducts
  const genderProducts = useSelector(state => state.initialize.products[productType]);
  const isLoadingGenderProducts = useSelector(state => state.initialize.isLoadingGenderProducts);
  const productInStore = useSelector(state => state.product.availabilityInStore);
  const selectedCategoriesProduct = useSelector(state => state.product.selectedCategories);

  const productInfo = useProduct({genderProducts, productType});

  if (isLoadingGenderProducts) return <Preloader/>
  else return (
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