import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";
import headerReducer from "./headerReducer";
import clothesReducer from "./clothesReducer";
import initializeReducer from "./initializeReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export const store = configureStore({
  reducer: {
    initialize: initializeReducer,
    filter: filterReducer,
    product: productReducer,
    header: headerReducer,
    clothes: clothesReducer,
    shoppingCart: shoppingCartReducer
  },
})