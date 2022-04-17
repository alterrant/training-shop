import ProductStyle from "./Product.module.css";
import ProductDescription from "./productDescription/ProductDescription";
import ProductImages from "./productsImages/ProductImages";

const Product = ({product, selectedCategoriesProduct}) => {

  return (
      <section className={ProductStyle.container}>
        <ProductImages product={product} selectedCategoriesProduct={selectedCategoriesProduct}/>
        <ProductDescription product={product}
                            selectedCategoriesProduct={selectedCategoriesProduct}
        />
      </section>
  )
}

export default Product;