import {
  setBrand,
  setColor,
  setPrice,
  setSize,
  removeAllFilters,
} from "../redux/filterReducer";

const chooseFilterAction = (actionType) => {
  switch (actionType) {
    case "color":
      return setColor;
    case "size":
      return setSize;
    case "brand":
      return setBrand;
    case "price":
      return setPrice;
    case "removeAllFilters":
      return removeAllFilters;
    default:
      return "haven't chosen action";
  }
};

export default chooseFilterAction;
