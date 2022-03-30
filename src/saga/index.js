import {all} from 'redux-saga/effects';
import {fetchProductsWatcher} from "./clothesSaga";
import {postReviewWatcher, submittingSubscriptionWatcher} from "./formsSaga";

export function* rootWatcher() {
  yield all([fetchProductsWatcher(), submittingSubscriptionWatcher(), postReviewWatcher()]);
}