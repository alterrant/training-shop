import ShoppingCartNavigationStyle from './ShoppingCartNavigation.module.css';
import classNames from "classnames/bind";

const ShoppingCartNavigation = ({navigationStage}) => {
  const cx = classNames.bind(ShoppingCartNavigationStyle);

  const stagesList = ['Item in Cart', '/', 'Delivery info', '/', 'Payment'].map(item => {
    if (item === '/') return <p>{item}</p>
    return <p className={cx('navigationStage', {navigationStageActive: item === navigationStage})}>{item}</p>
  })

  return (
      <div className={ShoppingCartNavigationStyle.wrapper}>
        {stagesList}
      </div>
  )
}

export default ShoppingCartNavigation;