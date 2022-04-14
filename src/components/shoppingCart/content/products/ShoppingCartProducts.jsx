import ShoppingCartProductsStyle from "./ShoppingCartProducts.module.css";
import ShoppingCartProduct from "./product/ShoppingCartProduct";
import Partition from "../../../common/partition/Partition";
import ShoppingCartFooter from "../footer/ShoppingCartFooter";

const ShoppingCartProducts = (props) => {
  const {
    shoppingCartProducts,
    totalCartPrice,
    navigationStage,
    setNavigationStage
  } = props;

  const shoppingCartProductList = shoppingCartProducts.map(item =>
      <li key={`${item.color}+${item.size}`}>
        <ShoppingCartProduct shoppingCartProduct={item}/>
        <Partition/>
      </li>);

  return (
      <>
        <ul className={ShoppingCartProductsStyle.products}>
          {shoppingCartProductList}
        </ul>
        <ShoppingCartFooter totalCartPrice={totalCartPrice}
                            navigationStage={navigationStage}
                            setNavigationStage={setNavigationStage}/>
      </>
  )
}

export default ShoppingCartProducts;