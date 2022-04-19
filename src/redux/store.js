import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import filterReducer from "./filter-reducer";
import productReducer from "./product-reducer";
import headerReducer from "./header-reducer";
import clothesReducer from "./clothes-reducer";
import initializeReducer from "./initialize-reducer";
import shoppingCartReducer from "./shopping-cart-reducer";
import formsReducer from "./forms-reduser";
import { rootWatcher } from "../saga/root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    initialize: initializeReducer,
    filter: filterReducer,
    product: productReducer,
    header: headerReducer,
    clothes: clothesReducer,
    shoppingCart: shoppingCartReducer,
    forms: formsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export default store;
