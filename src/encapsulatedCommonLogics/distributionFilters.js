import {setBrand, setColor, setPrice, setSize, removeAllFilters} from "../redux/filterReducer";

export const chooseFilterAction = (actionType) => {

  switch (actionType) {
    case "Color":
      return setColor;
    case "Size":
      return setSize;
    case "Brand":
      return setBrand;
    case "Price":
      return setPrice;
    case "removeAllFilters":
      return removeAllFilters;
    default:
      return "haven't chosen action"
  }
}