import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import shoppingCartAPI from "../api/shopping-cart";
import {
  fetchAvailableStoreAddressesError,
  fetchAvailableStoreAddressesSuccess,
  fetchingDeliveryCountriesError,
  fetchingDeliveryCountriesSuccess,
  submittingError,
  submittingSuccess,
} from "../redux/shopping-cart-reducer";
import { getSummaryOrderInfo } from "./submit-cart-helper";

function* fetchDeliveryCountriesWorker() {
  try {
    const deliveryCountries = yield call(shoppingCartAPI.getDeliveryCountries);

    yield put(fetchingDeliveryCountriesSuccess(deliveryCountries));
  } catch (error) {
    yield put(fetchingDeliveryCountriesError(error));
  }
}

function* fetchAvailableStoreAddressWorker({ payload }) {
  const { country, city } = payload;

  try {
    const availableStoreAddress = yield call(
      shoppingCartAPI.getAvailableStoreAddress,
      {
        country,
        city,
      }
    );

    yield put(fetchAvailableStoreAddressesSuccess(availableStoreAddress));
  } catch (error) {
    yield put(fetchAvailableStoreAddressesError(error));
  }
}

function* submitShoppingCartWorker() {
  const { products: productsSummary } = yield select(
    (state) => state.shoppingCart
  );
  const { deliveryInfoSummary } = yield select(
    (state) => state.shoppingCart.deliveryInfo
  );
  const { paymentSummary } = yield select((state) => state.shoppingCart);

  const summaryOrderInfo = getSummaryOrderInfo(
    deliveryInfoSummary,
    paymentSummary,
    productsSummary
  );

  try {
    const submittingResult = yield shoppingCartAPI.submitShoppingCartSummary(
      summaryOrderInfo
    );

    if (submittingResult.status === 200) yield put(submittingSuccess());
  } catch (error) {
    const errorSummary = { message: error.message };

    if (error.unavailableCartValues)
      errorSummary.unavailableCartValues = error.unavailableCartValues;

    yield put(submittingError(errorSummary));
  }
}

export function* fetchDeliveryCountriesWatcher() {
  yield takeLatest(
    "shoppingCart/fetchDeliveryCountries",
    fetchDeliveryCountriesWorker
  );
}

export function* fetchAvailableStoreAddressWatcher() {
  yield takeLatest(
    "shoppingCart/fetchAvailableStoreAddresses",
    fetchAvailableStoreAddressWorker
  );
}

export function* submitShoppingCartWatcher() {
  yield takeLatest(
    "shoppingCart/submittingShoppingCard",
    submitShoppingCartWorker
  );
}
