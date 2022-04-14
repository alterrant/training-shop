import ShoppingCartProductStyle from './ShoppingCartProduct.module.css';
import {ReactComponent as TrashSVG} from '../../../../../assets/SVG/trash.svg';
import React from "react";
import {useStableDispatch} from "../../../../../hooks/useRedux";
import {
  decrementProductQuantity,
  deleteShoppingCartProduct,
  incrementProductQuantity
} from "../../../../../redux/shoppingCartReducer";

const ShoppingCartProduct = ({shoppingCartProduct}) => {
  const dispatch = useStableDispatch();
  const productTotalPrice = getProductTotalPrice({shoppingCartProduct});

  return (
      <div className={ShoppingCartProductStyle.wrapper}
           data-test-id={'cart-card'}>
        <div className={ShoppingCartProductStyle.image}>
          <img src={`https://training.cleverland.by/shop${shoppingCartProduct.url}`} alt="productImage"/>
        </div>
        <div className={ShoppingCartProductStyle.productCartInfo}>
          <div className={ShoppingCartProductStyle.description}>
            <p className={ShoppingCartProductStyle.productName}>
              {shoppingCartProduct.name}
            </p>
            <p className={ShoppingCartProductStyle.productParams}>
              {`${shoppingCartProduct.color}, ${shoppingCartProduct.size}`}
            </p>
          </div>
          <div className={ShoppingCartProductStyle.productCartControl}>
            <div className={ShoppingCartProductStyle.priceCounter}>
              <div className={ShoppingCartProductStyle.counter}>
                <button onClick={() => dispatch(decrementProductQuantity({
                  productId: shoppingCartProduct.productId,
                  color: shoppingCartProduct.color,
                  size: shoppingCartProduct.size
                }))}
                        disabled={shoppingCartProduct.productQuantity === 1}
                        data-test-id={'minus-product'}>
                  -
                </button>
                <p className={ShoppingCartProductStyle.productQuantity}>
                  {shoppingCartProduct.productQuantity}
                </p>
                <button onClick={() => dispatch(incrementProductQuantity({
                  productId: shoppingCartProduct.productId,
                  color: shoppingCartProduct.color,
                  size: shoppingCartProduct.size
                }))}
                        data-test-id={'plus-product'}>
                  +
                </button>
              </div>
              <div className={ShoppingCartProductStyle.price}>
                {`$${productTotalPrice.toFixed(2)}`}
              </div>
            </div>
            <div onClick={() => dispatch(deleteShoppingCartProduct(shoppingCartProduct))}
                 className={ShoppingCartProductStyle.trash}
                 data-test-id={'remove-product'}>
              <TrashSVG/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ShoppingCartProduct;

const getProductTotalPrice = ({shoppingCartProduct}) => shoppingCartProduct.productQuantity * shoppingCartProduct.price;