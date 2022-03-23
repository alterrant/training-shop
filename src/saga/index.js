import {all} from 'redux-saga/effects';
import {fetchProductsWatcher} from "./clothesSaga";

export function* rootWatcher() {
  yield all([fetchProductsWatcher()]);
}