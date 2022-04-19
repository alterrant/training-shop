import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  men: {
    selectedParticulars: null,
    navBar: [{ id: null, name: null, filterName: null }],
    filteredProducts: [],
  },
  women: {
    selectedParticulars: null,
    navBar: [{ id: null, name: null, filterName: null }],
    filteredProducts: [],
  },
};

export const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    setAvailableParticulars: (state, action) => {
      state[action.payload.gender].navBar = action.payload.clothesNavBar;
    },
    setSelectedParticulars: (state, action) => {
      state[action.payload.gender].selectedParticulars = action.payload.particular;
    },
    setFilteredProducts: (state, action) => {
      state[action.payload.gender].filteredProducts = action.payload.filteredProducts;
    },

    resetSelectedParticulars: (state, action) => {
      state[action.payload.gender].selectedParticulars = null;
    },
    resetParticulars: (state, action) => {
      state[action.payload.gender].navBar = [
        { id: null, name: null, filterName: null },
      ];
      state[action.payload.gender].selectedParticulars = null;
      state[action.payload.gender].filteredProducts = [];
    },
    resetProducts: (state, action) => {
      state[action.payload.gender].filteredProducts = [];
    },
  },
});

export const {
  setAvailableParticulars,
  setSelectedParticulars,
  setFilteredProducts,
  resetParticulars,
  resetProducts,
} = clothesSlice.actions;

export default clothesSlice.reducer;
