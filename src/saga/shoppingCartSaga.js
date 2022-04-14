import {call, put, select, takeLatest} from "@redux-saga/core/effects";
import {shoppingCartAPI} from "../api/shoppingCart";
import {
  fetchAvailableStoreAddressesError,
  fetchAvailableStoreAddressesSuccess,
  fetchingDeliveryCountriesError,
  fetchingDeliveryCountriesSuccess,
  submittingError,
  submittingSuccess
} from "../redux/shoppingCartReducer";

function* fetchDeliveryCountriesWorker() {
  try {
    const deliveryCountries = yield call(shoppingCartAPI.getDeliveryCountries);

    yield put(fetchingDeliveryCountriesSuccess(deliveryCountries));
  } catch (error) {
    yield put(fetchingDeliveryCountriesError(error));
  }
}

function* fetchAvailableStoreAddressWorker({payload}) {
  const {country, city} = payload;

  try {
    const availableStoreAddress = yield call(shoppingCartAPI.getAvailableStoreAddress, {
      country,
      city
    });

    yield put(fetchAvailableStoreAddressesSuccess(availableStoreAddress));
  } catch (error) {
    yield put(fetchAvailableStoreAddressesError(error));
  }
}

function* submitShoppingCartWorker() {
  const shoppingCartSummary = {};

  const productsSummary = yield select((state) => state.shoppingCart.products);
  const deliveryInfoSummary = yield select((state) => state.shoppingCart.deliveryInfo.deliveryInfoSummary);
  const paymentSummary = yield select((state) => state.shoppingCart.paymentSummary);

  const products = productsSummary.map(item => {
    return {
      name: item.name,
      size: item.size,
      color: item.color,
      quantity: item.productQuantity
    }
  })

  Object.assign(shoppingCartSummary, {products: products}, deliveryInfoSummary, paymentSummary)

  try {
    const submittingResult = yield shoppingCartAPI.submitShoppingCartSummary(shoppingCartSummary);

    if (submittingResult.status === 200) yield put(submittingSuccess());
  } catch (error) {
    const errorSummary = {message: error.message};

    if (error.unavailableCartValues) errorSummary.unavailableCartValues = error.unavailableCartValues;

    yield put(submittingError(errorSummary));
  }
}

export function* fetchDeliveryCountriesWatcher() {
  yield takeLatest('shoppingCart/fetchDeliveryCountries', fetchDeliveryCountriesWorker)
}

export function* fetchAvailableStoreAddressWatcher() {
  yield takeLatest('shoppingCart/fetchAvailableStoreAddresses', fetchAvailableStoreAddressWorker)
}

export function* submitShoppingCartWatcher() {
  yield takeLatest('shoppingCart/submittingShoppingCard', submitShoppingCartWorker)
}