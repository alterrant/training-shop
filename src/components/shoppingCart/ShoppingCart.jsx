import ShoppingCartStyle from './ShoppingCart.module.css';
import {ReactComponent as CloseSVG} from './../../assets/SVG/close.svg';
import ShoppingCartNavigation from "./navigation/ShoppingCartNavigation";
import {useSelector} from "react-redux";
import {shoppingCartToggle} from "../../redux/shoppingCartReducer";
import ShoppingCartProduct from "./product/ShoppingCartProduct";
import Partition from "../common/Partition";
import EmptyShoppingCart from "./emptyShoppingCart/EmptyShoppingCart";
import {useStableDispatch} from "../../hooks/useRedux";
import {useEffect, useRef, useState} from "react";
import {changeBodyOverflow} from "../../encapsulatedCommonLogics/changeBoodyOverflow";
import classNames from "classnames/bind";

const ShoppingCart = () => {
  const refCloseSVG = useRef(null);

  const dispatch = useStableDispatch();

  const isShoppingCartOpen = useSelector((state => state.shoppingCart.isShoppingCartOpen));
  const shoppingCartProducts = useSelector((state => state.shoppingCart.products));
  const productsQuantity = useSelector(state => state.shoppingCart.products.length);

  const totalCartPrice = getTotalCartPrice({shoppingCartProducts});

  const cx = classNames.bind(ShoppingCartStyle);
  const className = cx('background', (isShoppingCartOpen) ? 'visibilityVisible' : 'visibilityHidden');

  const handleShoppingCartKeyDown = (e) => {
    if (e.code === 'Escape') dispatch(shoppingCartToggle());
  }

  const closeShoppingCartHandler = (e) => {
    if (isShoppingCartOpen && e.target.className === className) {

      dispatch(shoppingCartToggle());
    }
  }

  useEffect(() => {
    changeBodyOverflow(!isShoppingCartOpen);
    refCloseSVG.current.focus();
  }, [isShoppingCartOpen]);

  return (
      <div className={className}
           onClick={(e) => closeShoppingCartHandler(e)}
           tabIndex={'0'}>
        <section className={ShoppingCartStyle.wrapper}
                 data-test-id={'cart'}>
          <div className={ShoppingCartStyle.header}>
            <div>
              Shopping Cart
            </div>
            <button
                ref={refCloseSVG}
                onKeyDown={(e) => handleShoppingCartKeyDown(e)}
                onClick={() => dispatch(shoppingCartToggle())}
                className={ShoppingCartStyle.closeSVG}>
              <CloseSVG/>
            </button>
          </div>
          {(productsQuantity > 0) ?
              <ShoppingCartContent shoppingCartProducts={shoppingCartProducts}
                                   totalCartPrice={totalCartPrice}/>
              :
              <EmptyShoppingCart/>}
        </section>
      </div>
  )
}

export default ShoppingCart;

const ShoppingCartContent = ({shoppingCartProducts, totalCartPrice}) => {
  const dispatch = useStableDispatch();
  const [navigationStage, setNavigationStage] = useState('Item in Cart');

  const shoppingCartProductList = shoppingCartProducts.map(item =>
      <li key={`${item.color}+${item.size}`}>
        <ShoppingCartProduct shoppingCartProduct={item}/>
        <Partition/>
      </li>);

  return (
      <div className={ShoppingCartStyle.container}>
        <div>
          <ShoppingCartNavigation setNavigationStage={setNavigationStage} navigationStage={navigationStage}/>
          <ul className={ShoppingCartStyle.products}>
            {shoppingCartProductList}
          </ul>
        </div>
        <div className={ShoppingCartStyle.footer}>
          <div className={ShoppingCartStyle.totalPriceWrapper}>
            <p>Total</p>
            <p className={ShoppingCartStyle.totalPrice}>{totalCartPrice}</p>
          </div>
          <div className={ShoppingCartStyle.buttons}>
            <button className={ShoppingCartStyle.buttonFurter}>
              Further
            </button>
            <button className={ShoppingCartStyle.buttonViewCart}
                    onClick={() => dispatch(shoppingCartToggle())}>
              View Cart
            </button>
          </div>
        </div>
      </div>
  )
}

const getTotalCartPrice = ({shoppingCartProducts}) =>
    shoppingCartProducts.reduce((prev, curr) => prev + curr.price * curr.productQuantity, 0);