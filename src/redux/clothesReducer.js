import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  men: {
    selectedParticulars: null,
    navBar: [
      {id: null, name: null, filterName: null},
    ],
    products: []
  },
  women: {
    selectedParticulars: null,
    navBar: [
      {id: null, name: null, filterName: null},
    ],
    products: []
  }
}

export const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    setAvailableParticulars: ((state, action) => {
      state[action.payload.gender].navBar = action.payload.clothesNavBar;
    }),
    setSelectedParticulars: ((state, action) => {
      state[action.payload.gender].selectedParticulars = action.payload.particular;
    }),
    setProducts: ((state, action) => {
      state[action.payload.gender].products = action.payload.products;
    }),
    resetSelectedParticulars: ((state, action) => {
      state[action.payload.gender].selectedParticulars = null;
    }),
    resetParticulars: ((state, action) => {
      state[action.payload.gender].navBar = [
        {id: null, name: null, filterName: null}
      ];
      state[action.payload.gender].selectedParticulars = null;
      state[action.payload.gender].products = [];
    }),
    resetProducts: ((state, action) => {
      state[action.payload.gender].products = [];
    })
  }
})

export const {setAvailableParticulars, setSelectedParticulars, setProducts, resetParticulars, resetProducts} = clothesSlice.actions

export default clothesSlice.reducer