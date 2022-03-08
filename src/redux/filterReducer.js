import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedFilters: [],
  color: [],
  sizes: [],
  brand: [],
  price: [
    {id: '1', name: '$500+', selected: false},
    {id: '2', name: '$200-$500', selected: false},
    {id: '3', name: '$100-$200', selected: false},
    {id: '4', name: '$50-$100', selected: false},
    {id: '5', name: '$0-$50', selected: false}
  ],
  categories: ['color', 'sizes', 'brand', 'price']
}

export const counterSlice = createSlice({
  name: 'productFilters',
  initialState,
  reducers: {
    getFilters: ((state, action) => {
      state.color = action.payload.color;
      state.sizes = action.payload.sizes;
      state.brand = action.payload.brand;
    }),
    getColor: ((state, action) => {
      state.color = action.payload;
    }),
    getSizes: ((state, action) => {
      state.sizes = action.payload;
    }),
    getBrand: ((state, action) => {
      state.brand = action.payload;
    }),
    getPrice: ((state, action) => {
      state.price = action.payload;
    }),

    setColor: ((state, action) => {
      const chosenColor = state.color.find(item => item.name === action.payload);
      chosenColor.selected = !chosenColor.selected;

      if (chosenColor.selected) state.selectedFilters.push({filterType: 'color', filterValue: chosenColor.name});
      else deleteSelectedFilter(state, 'color', chosenColor.name);
    }),
    setSizes: ((state, action) => {
      const chosenSizes = state.sizes.find(item => item.name === action.payload);
      chosenSizes.selected = !chosenSizes.selected;

      if (chosenSizes.selected) state.selectedFilters.push({filterType: 'sizes', filterValue: chosenSizes.name});
      else deleteSelectedFilter(state, 'sizes', chosenSizes.name);
    }),
    setBrand: ((state, action) => {
      const chosenBrand = state.brand.find(item => item.name === action.payload);
      chosenBrand.selected = !chosenBrand.selected;

      if (chosenBrand.selected) state.selectedFilters.push({filterType: 'brand', filterValue: chosenBrand.name});
      else deleteSelectedFilter(state, 'brand', chosenBrand.name);
    }),
    setPrice: ((state, action) => {
      const chosenPrice = state.price.find(item => item.name === action.payload);
      chosenPrice.selected = !chosenPrice.selected;

      if (chosenPrice.selected) state.selectedFilters.push({filterType: 'price', filterValue: chosenPrice.name});
      else deleteSelectedFilter(state, 'price', chosenPrice.name);
    }),
    removeAllFilters: ((state) => {

     /* const stateKeys = Object.keys(state);

      stateKeys.forEach(stateKey => {
        state[stateKey].forEach(filter => {
          if (filter.selected) filter.selected = false;
        })
      })*/
      state.color = [];
      state.sizes = [];
      state.brand = [];
      state.selectedFilters = [];
    }),
  }
})

export const {getFilters, setColor, setSizes, setBrand, setPrice, removeAllFilters} = counterSlice.actions;

export default counterSlice.reducer;

const deleteSelectedFilter = (state, filterType, filterValue) => {
  const selectedFilterIndex = findSelectedFilterIndex(state, filterType, filterValue);

  state.selectedFilters.splice(selectedFilterIndex, 1);
}
const findSelectedFilterIndex = (state, filterType, filterValue) => {
  return state.selectedFilters.findIndex(item => {
    return item.filterType === filterType && item.filterValue === filterValue;
  });
}