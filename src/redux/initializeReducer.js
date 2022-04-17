import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isInit: false,
  isInitError: false,
  isLoadingProducts: false,
  isLoadingProductsError: false,
  isLoadingGenderProducts: false,
  isLoadingGenderProductsError: false,
  products: {
    men: [],
    women: []
  }
}

export const initializeSlice = createSlice({
  name: 'initialization',
  initialState,
  reducers: {
    setInitSuccess: ((state) => {
      state.isInit = true;
    }),
    setInitError: ((state, error) => {
      state.isInitError = error;
    }),

    fetchProducts: (((state) => {
      state.isLoadingProducts = true;
    })),
    fetchProductsSuccess: (((state) => {
      state.isLoadingProducts = false;
    })),
    fetchProductsError: (((state, action) => {
      state.isLoadingProductsError = action.payload;
      state.isLoadingProducts = false;
    })),

    fetchGenderProducts: (((state) => {
      state.isLoadingGenderProducts = true;
    })),
    fetchGenderProductsSuccess: (((state) => {
      state.isLoadingGenderProducts = false;
    })),
    fetchGenderProductsError: (((state, action) => {
      state.isLoadingGenderProductsError = action.payload;
      state.isLoadingGenderProducts = false;
    })),

    setProducts: ((state, action) => {
      state.products = action.payload.products;
    }),
    setGenderProducts: ((state, action) => {
      state.products[action.payload.gender] = action.payload.products;
    }),

    productsRequestToggle: ((state) => {
      state.isLoadingProducts = !state.isLoadingProducts;
    }),
    productsRequestError: ((state, error) => {
      state.isInitError = error;
    }),

    resetErrors: ((state) => {
      state.isInitError = false;
      state.isLoadingProductsError = false;
      state.isLoadingGenderProductsError = false;
    })
  }
})

export const {
  setInitSuccess,
  setInitError,
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsError,
  fetchGenderProducts,
  fetchGenderProductsSuccess,
  fetchGenderProductsError,
  setProducts,
  setGenderProducts,
  resetErrors
} = initializeSlice.actions

export default initializeSlice.reducer