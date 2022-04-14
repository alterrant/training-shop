import ShoppingCartNavigationStyle from './ShoppingCartNavigation.module.css';
import classNames from "classnames/bind";
import {nanoid} from "@reduxjs/toolkit";

const ShoppingCartNavigation = ({navigationStage}) => {
  const cx = classNames.bind(ShoppingCartNavigationStyle);

  const stagesList = ['Item in Cart', '/', 'Delivery Info', '/', 'Payment'].map(item => {
    if (item === '/') return <p className={cx('navigationStage')} key={nanoid()}>{item}</p>
    return <p className={cx('navigationStage', {navigationStageActive: item === navigationStage})} key={nanoid()}>{item}</p>
  });

  return (
      <div className={ShoppingCartNavigationStyle.wrapper}>
        {stagesList}
      </div>
  )
}

export default ShoppingCartNavigation;