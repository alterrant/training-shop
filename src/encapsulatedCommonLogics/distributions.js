import {MEN_CLOTHES, WOMEN_CLOTHES} from "../constants/clothes";

export const getClothes = (productType) => {
  switch (productType) {
    case 'women':
      return WOMEN_CLOTHES;
    case 'men':
      return MEN_CLOTHES;
    default:
      return 'Haven\'t chosen productType';
  }
}