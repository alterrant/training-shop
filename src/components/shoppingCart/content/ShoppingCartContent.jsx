import ShoppingCartContentStyle from "./ShoppingCartContent.module.css";
import ShoppingCartProducts from "./products/ShoppingCartProducts";
import {DeliveryInfoForm} from "../../forms/shoppingCart/deliveryInfo/DeliveryInfoForm";
import {PaymentForm} from "../../forms/shoppingCart/payment/PaymentForm";

const ShoppingCartContent = (props) => {
  return (
      <div className={ShoppingCartContentStyle.scrollbar}>
        <div className={ShoppingCartContentStyle.container}>
            {
              getShoppingCartContent(props)
            }
        </div>
      </div>
  )
}

export default ShoppingCartContent;

const getShoppingCartContent = (props) => {
  const {
    navigationStage,
    shoppingCartProducts,
    totalCartPrice,
    setNavigationStage
  } = props

  switch (navigationStage) {
    case 'Item in Cart': {
      return <ShoppingCartProducts shoppingCartProducts={shoppingCartProducts}

                                   totalCartPrice={totalCartPrice}
                                   navigationStage={navigationStage}
                                   setNavigationStage={setNavigationStage}/>
    }
    case 'Delivery Info': {
      return <DeliveryInfoForm totalCartPrice={totalCartPrice}
                               navigationStage={navigationStage}
                               setNavigationStage={setNavigationStage}/>
    }
    case 'Payment': {
      return <PaymentForm totalCartPrice={totalCartPrice}
                          navigationStage={navigationStage}
                          setNavigationStage={setNavigationStage}/>
    }
    default:
      return null;
  }
}