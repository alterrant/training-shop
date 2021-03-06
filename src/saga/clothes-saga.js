import { call, put, takeLatest } from "@redux-saga/core/effects";

import productsAPI from "../api/products";
import {
  fetchGenderProductsError,
  fetchGenderProductsSuccess,
  fetchProductsError,
  fetchProductsSuccess,
  setGenderProducts,
  setProducts,
} from "../redux/initialize-reducer";

function* fetchProductsWorker() {
  try {
    const products = yield call(productsAPI.getProducts);

    yield put(fetchProductsSuccess());

    yield put(
      setProducts({
        products,
      })
    );
  } catch (error) {
    yield put(fetchProductsError({ fetchingError: error.message }));
  }
}

function* fetchGenderProductsWorker(props) {
  try {
    const gender = props.payload;

    const products = yield call(productsAPI.getGenderProducts, gender);

    yield put(fetchGenderProductsSuccess());

    yield put(
      setGenderProducts({
        gender,
        products,
      })
    );
  } catch (error) {
    yield put(fetchGenderProductsError({ fetchingError: error.message }));
  }
}

export function* fetchProductsWatcher() {
  yield takeLatest("initialization/fetchProducts", fetchProductsWorker);

  yield takeLatest(
    "initialization/fetchGenderProducts",
    fetchGenderProductsWorker
  );
}
