import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import ClothesNavBarStyle from "./clothes-nav-bar.module.css";
import { setSelectedParticulars } from "../../../redux/clothes-reducer";

const ClothesNavBar = ({ clothesNavBar, productType }) => {
  const selectedParticular = useSelector(
    (state) => state.clothes[productType].selectedParticulars
  );
  const dispatch = useDispatch();

  const cs = classNames.bind(ClothesNavBarStyle);

  const navBarList = clothesNavBar.map((item) => (
    <li key={item.id}>
      <button
        className={cs("button", {
          activeButton: selectedParticular === item.filterName,
        })}
        onClick={() =>
          dispatch(
            setSelectedParticulars({
              gender: productType,
              particular: item.filterName,
            })
          )
        }
        data-test-id={`clothes-${productType}-${item.filterName}`}
        type="button"
      >
        {item.name}
      </button>
    </li>
  ));

  return <ul className={ClothesNavBarStyle.wrapper}>{navBarList}</ul>;
};

export default ClothesNavBar;

ClothesNavBar.propTypes = {
  clothesNavBar: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  productType: PropTypes.string.isRequired,
};
