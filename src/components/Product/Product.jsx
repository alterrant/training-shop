import ProductStyle from "./Product.module.css";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductImages from "./ProductsImages/ProductImages";

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