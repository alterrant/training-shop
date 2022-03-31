import {call, put, takeEvery} from "@redux-saga/core/effects";
import {subscribeAPI} from "../api/subscribe";
import {
  postingReviewError,
  postingReviewSuccess,
  submittingSubscriptionError,
  submittingSubscriptionSuccess
} from "../redux/formsReduser";
import {productsAPI} from "../api/products";
import {setProduct} from "../redux/productReducer";

function* submittingSubscriptionWorker({payload}) {
  const { email, formName } = payload;

  try {
    const subscriber = yield call(subscribeAPI.getSubscribe, email);

    if (subscriber.status === 200) yield put(submittingSubscriptionSuccess({formName}));
  } catch (error) {
    yield put(submittingSubscriptionError({error: error.message, formName}));
  }
}

function* postingReviewWorker({payload}) {
  try {
    const postedReview = yield call(productsAPI.postReview, payload);

    yield put(setProduct(postedReview));

    yield put(postingReviewSuccess());
  } catch (error) {
    yield put(postingReviewError(error.message));
  }
}

export function* submittingSubscriptionWatcher() {
  yield takeEvery('forms/submittingSubscription', submittingSubscriptionWorker);
}

export function* postReviewWatcher() {
  yield takeEvery('forms/postingReview', postingReviewWorker);
}