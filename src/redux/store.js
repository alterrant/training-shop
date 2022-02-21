import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";
import headerReducer from "./headerReducer";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    product: productReducer,
    header: headerReducer
  },
})