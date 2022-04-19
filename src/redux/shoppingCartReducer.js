import { createSlice } from "@reduxjs/toolkit";

const initialDeliveryInfo = {
  deliveryMethod: "Pickup from post offices",
  phone: "",
  email: "",
  country: "",
  storeCountry: "",
  storeAddress: "",
  city: "",
  street: "",
  house: "",
  apartment: "",
  postcode: "",
  agreementToggle: false,
};
const initialPaymentInfo = {
  paymentMethod: "Visa",
  card: "",
  cardDate: "",
  cardCVV: "",
  cashEmail: "",
};

const initialState = {
  isShoppingCartOpen: false,
  products: [],
  deliveryInfo: {
    loadingCountriesInfo: {
      isLoadingDeliveryCountries: false,
      loadingDeliveryCountriesError: {
        isLoadingDeliveryCountriesError: false,
        loadingDeliveryCountriesErrorMessage: null,
      },
    },
    deliveryCountries: [],
    availableStoreAddressesInfo: {
      isLoadingAddresses: false,
      loadingAddressesError: {
        isLoadingAddressesError: false,
        loadingAddressesErrorMessage: null,
      },
    },
    availableStoreAddresses: [],
    deliveryInfoSummary: initialDeliveryInfo,
  },
  paymentSummary: initialPaymentInfo,
  submittingInfo: {
    isSubmitting: false,
    isSubmittingSuccess: false,
    submittingError: {
      isSubmittingError: false,
      submittingError: null,
    },
  },
  paymentFormToggle: false,
  deliveryFormToggle: false,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    shoppingCartToggle: (state) => {
      state.isShoppingCartOpen = !state.isShoppingCartOpen;
    },
    setShoppingCartProduct: (state, action) => {
      state.products.push(action.payload);
    },

    deleteShoppingCartProduct: (state, action) => {
      const productInCartIndex = findProductIndexInCart({ state, action });

      deleteProductFromCart({ productInCartIndex, state });
    },
    incrementProductQuantity: (state, action) => {
      const productInCartIndex = findProductIndexInCart({ state, action });

      state.products[productInCartIndex].productQuantity++;
    },
    decrementProductQuantity: (state, action) => {
      const productInCartIndex = findProductIndexInCart({ state, action });
      // не понравилось ментору. Хочет отключить кнопку, вместо удаления
      if (state.products[productInCartIndex].productQuantity === 1) deleteProductFromCart({ productInCartIndex, state });
      else state.products[productInCartIndex].productQuantity--;
      // if (state.products[productInCartIndex].productQuantity > 1) state.products[productInCartIndex].productQuantity--;
    },

    fetchDeliveryCountries: (state) => {
      state.deliveryInfo.loadingCountriesInfo.isLoadingDeliveryCountries = true;
    },
    fetchingDeliveryCountriesSuccess: (state, action) => {
      state.deliveryInfo.loadingCountriesInfo.isLoadingDeliveryCountries = false;

      state.deliveryInfo.deliveryCountries = action.payload;
    },
    fetchingDeliveryCountriesError: (state, action) => {
      state.deliveryInfo.loadingCountriesInfo.isLoadingDeliveryCountries = false;

      state.deliveryInfo.loadingCountriesInfo.loadingDeliveryCountriesError.isLoadingDeliveryCountriesError = true;
      state.deliveryInfo.loadingCountriesInfo.loadingDeliveryCountriesError.loadingDeliveryCountriesErrorMessage = action.payload;
    },

    fetchAvailableStoreAddresses: (state) => {
      state.deliveryInfo.availableStoreAddressesInfo.isLoadingAddresses = true;
    },
    fetchAvailableStoreAddressesSuccess: (state, action) => {
      state.deliveryInfo.availableStoreAddressesInfo.isLoadingAddresses = false;

      state.deliveryInfo.availableStoreAddresses = action.payload;
    },
    fetchAvailableStoreAddressesError: (state, action) => {
      state.deliveryInfo.availableStoreAddressesInfo.isLoadingAddresses = false;

      state.deliveryInfo.availableStoreAddressesInfo.isSubmittingError = true;
      state.deliveryInfo.availableStoreAddressesInfo.loadingAddressesError.loadingAddressesErrorMessage = action.payload;
    },

    submittingShoppingCard: (state) => {
      state.submittingInfo.isSubmitting = true;
    },
    submittingSuccess: (state) => {
      state.submittingInfo.isSubmitting = false;

      state.submittingInfo.isSubmittingSuccess = true;
      //state.submittingInfo.availableStoreAddresses = action.payload;
    },
    submittingError: (state, action) => {
      state.submittingInfo.isSubmitting = false;

      state.submittingInfo.submittingError.isSubmittingError = true;
      state.submittingInfo.submittingError.submittingErrorMessage =
        action.payload;
    },

    setDeliveryInfo: (state, action) => {
      state.deliveryInfo.deliveryInfoSummary = action.payload;
    },
    setPaymentInfo: (state, action) => {
      state.paymentSummary = action.payload;
    },

    resetProducts: (state) => {
      state.products = [];
    },
    resetDeliveryInfo: (state) => {
      state.deliveryInfo.availableStoreAddresses = [];
      state.deliveryInfo.deliveryInfoSummary = initialDeliveryInfo;

      state.deliveryInfo.loadingCountriesInfo.loadingDeliveryCountriesError.isLoadingDeliveryCountriesError = false;
      state.deliveryInfo.loadingCountriesInfo.loadingDeliveryCountriesError.loadingDeliveryCountriesErrorMessage = null;

      state.deliveryInfo.availableStoreAddressesInfo.isSubmittingError = false;
      state.deliveryInfo.availableStoreAddressesInfo.loadingAddressesError.loadingAddressesErrorMessage = null;
    },
    resetPaymentInfo: (state) => {
      state.paymentSummary = initialPaymentInfo;

      state.submittingInfo.isSubmittingSuccess = false;
      state.submittingInfo.submittingError.isSubmittingError = false;
      state.submittingInfo.submittingError.submittingError = null;
    },
    resetSubmission: (state) => {
      state.submittingInfo.isSubmittingSuccess = false;
      state.submittingInfo.submittingError.isSubmittingError = false;
      state.submittingInfo.submittingError.submittingError = null;
    },
    resetPaymentFormToggle: (state) => {
      state.paymentFormToggle = !state.paymentFormToggle;
    },
    resetDeliveryFormToggle: (state) => {
      state.deliveryFormToggle = !state.deliveryFormToggle;
    },
  },
});

export const {
  shoppingCartToggle,
  setShoppingCartProduct,
  incrementProductQuantity,
  decrementProductQuantity,
  deleteShoppingCartProduct,
  fetchDeliveryCountries,
  fetchingDeliveryCountriesSuccess,
  fetchingDeliveryCountriesError,
  fetchAvailableStoreAddresses,
  fetchAvailableStoreAddressesSuccess,
  fetchAvailableStoreAddressesError,
  setDeliveryInfo,
  setPaymentInfo,
  submittingShoppingCard,
  submittingSuccess,
  submittingError,
  resetProducts,
  resetDeliveryInfo,
  resetPaymentInfo,
  resetSubmission,
  resetPaymentFormToggle,
  resetDeliveryFormToggle,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

const findProductIndexInCart = ({ state, action }) => {
  return state.products.findIndex(
    (item) =>
      item.productId === action.payload.productId &&
      item.color === action.payload.color &&
      item.size === action.payload.size
  );
};
const deleteProductFromCart = ({ productInCartIndex, state }) =>
  state.products.splice(productInCartIndex, 1);
