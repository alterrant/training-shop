import {all} from 'redux-saga/effects';
import {fetchProductsWatcher} from "./clothesSaga";
import {postReviewWatcher, submittingSubscriptionWatcher} from "./formsSaga";
import {
  fetchAvailableStoreAddressWatcher,
  fetchDeliveryCountriesWatcher,
  submitShoppingCartWatcher
} from "./shoppingCartSaga";

export function* rootWatcher() {
  yield all([
    fetchProductsWatcher(),
    submittingSubscriptionWatcher(),
    postReviewWatcher(),
    fetchDeliveryCountriesWatcher(),
    fetchAvailableStoreAddressWatcher(),
    submitShoppingCartWatcher()
  ]);
}