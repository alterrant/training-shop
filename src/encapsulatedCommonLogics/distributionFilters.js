import {setBrand, setColor, setPrice, setSizes, removeAllFilters} from "../redux/filterReducer";

export const chooseFilterAction = (actionType) => {

  switch (actionType) {
    case "color":
      return setColor;
    case "sizes":
      return setSizes;
    case "brand":
      return setBrand;
    case "price":
      return setPrice;
    case "removeAllFilters":
      return removeAllFilters;
    default:
      return "haven't chosen action"
  }
}