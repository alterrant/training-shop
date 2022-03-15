import ShoppingCartNavigationStyle from './ShoppingCartNavigation.module.css';

const ShoppingCartNavigation = () => {
  return (
      <div className={ShoppingCartNavigationStyle.wrapper}>
        <p>Item in Cart</p>
        <p>/</p>
        <p>Delivery info</p>
        <p>/</p>
        <p>Payment</p>
      </div>
  )
}

export default ShoppingCartNavigation;