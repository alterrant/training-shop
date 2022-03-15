import EmptyShoppingCartStyle from './EmptyShoppingCart.module.css';
import {shoppingCartToggle} from "../../../redux/shoppingCartReducer";
import {useStableDispatch} from "../../../hooks/useRedux";

const EmptyShoppingCart = () => {
  const dispatch = useStableDispatch();

  return (
      <div className={EmptyShoppingCartStyle.container}>
        <p className={EmptyShoppingCartStyle.text}>
          Sorry,
          your cart
          is empty
        </p>
        <div className={EmptyShoppingCartStyle.buttons}>
          <button className={EmptyShoppingCartStyle.buttonViewCart}
                  onClick={() => dispatch(shoppingCartToggle())}>
            BACK TO SHOPPING
          </button>
        </div>
      </div>
  )
};

export default EmptyShoppingCart;
