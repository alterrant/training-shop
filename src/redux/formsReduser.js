import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSubmittingSubscription: {
    mainForm: false,
    footerForm: false
  },
  submittingSubscriptionStatus: {
    mainForm: false,
    footerForm: false
  },
  isPostingReview: false,
  postingReviewStatus: null,
}

export const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    submittingSubscription: (((state, action) => {
      state.isSubmittingSubscription[action.payload] = true;
    })),
    submittingSubscriptionSuccess: (((state, action) => {
      state.isSubmittingSubscription[action.payload.formName] = false;
      state.submittingSubscriptionStatus[action.payload.formName] = 'Subscribed';
    })),
    submittingSubscriptionError: (((state, action) => {
      state.isSubmittingSubscription[action.payload.formName] = false;
      state.submittingSubscriptionStatus[action.payload.formName] = action.payload.error;
    })),
    resetSubscribeForm: ((state) => {
      state.submittingSubscriptionStatus = {
        mainForm: false,
        footerForm: false
      };
    }),
    postingReview: (((state) => {
      state.isPostingReview = true;
    })),
    postingReviewSuccess: (((state) => {
      state.isPostingReview = false;
      state.postingReviewStatus = 'posting success';
    })),
    postingReviewError: (((state, action) => {
      state.isPostingReview = false;
      state.postingReviewStatus = action.payload;
    })),
    resetReviewForm: ((state) => {
      state.postingReviewStatus = null;
    })
  }
})

export const {
  submittingSubscription,
  submittingSubscriptionSuccess,
  submittingSubscriptionError,
  resetSubscribeForm,
  postingReview,
  postingReviewSuccess,
  postingReviewError,
  resetReviewForm
} = formsSlice.actions

export default formsSlice.reducer