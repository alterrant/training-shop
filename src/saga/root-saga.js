import { all } from "redux-saga/effects";
import { fetchProductsWatcher } from "./clothes-saga";
import { postReviewWatcher, submittingSubscriptionWatcher } from "./forms-saga";
import {
  fetchAvailableStoreAddressWatcher,
  fetchDeliveryCountriesWatcher,
  submitShoppingCartWatcher,
} from "./shopping-cart-saga";

export function* rootWatcher() {
  yield all([
    fetchProductsWatcher(),
    submittingSubscriptionWatcher(),
    postReviewWatcher(),
    fetchDeliveryCountriesWatcher(),
    fetchAvailableStoreAddressWatcher(),
    submitShoppingCartWatcher(),
  ]);
}
