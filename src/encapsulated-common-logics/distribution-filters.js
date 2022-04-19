import {
  setBrand,
  setColor,
  setPrice,
  setSize,
  removeAllFilters,
} from "../redux/filter-reducer";
import { FILTER_TIPES } from "../constants/filterTypes";

const chooseFilterAction = (actionType) => {
  switch (actionType) {
    case FILTER_TIPES.color:
      return setColor;
    case FILTER_TIPES.size:
      return setSize;
    case FILTER_TIPES.brand:
      return setBrand;
    case FILTER_TIPES.price:
      return setPrice;
    case "removeAllFilters":
      return removeAllFilters;
    default:
      return "haven't chosen action";
  }
};

export default chooseFilterAction;
