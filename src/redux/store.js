import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";
import headerReducer from "./headerReducer";
import clothesReducer from "./clothesReducer";
import initializeReducer from "./initializeReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import createSagaMiddleware from 'redux-saga';
import formsReducer from './formsReduser';
import {rootWatcher} from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    initialize: initializeReducer,
    filter: filterReducer,
    product: productReducer,
    header: headerReducer,
    clothes: clothesReducer,
    shoppingCart: shoppingCartReducer,
    forms: formsReducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootWatcher);