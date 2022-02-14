import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    product: productReducer
  },
})