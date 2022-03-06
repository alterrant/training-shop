import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedFilters: [],
  color: [
    {id: '1', name: 'Black', selected: false, color: 'Black'},
    {id: '2', name: 'Blue', selected: false, color: 'Blue'},
    {id: '3', name: 'White', selected: false, color: 'White'},
    {id: '4', name: 'Brown', selected: false, color: 'Brown'},
    {id: '5', name: 'Green', selected: false, color: 'Green'},
    {id: '6', name: 'Orange', selected: false, color: 'Orange'},
    {id: '7', name: 'Multicolor', selected: false, color: 'Multicolor'},
    {id: '8', name: 'Beige', selected: false, color: 'Beige'},
    {id: '9', name: 'Grey', selected: false, color: 'Grey'},
    {id: '10', name: 'Turquoise', selected: false, color: 'Turquoise'},
    {id: '11', name: 'Vinous', selected: false, color: 'Vinous'},
    {id: '12', name: 'Yellow', selected: false, color: 'Yellow'},
    {id: '13', name: 'Red', selected: false, color: 'Red'}
  ],
  sizes: [
    {id: '1', name: 'L INT', selected: false},
    {id: '2', name: 'XS INT', selected: false},
    {id: '3', name: 'XXS INT', selected: false},
    {id: '4', name: 'XL INT', selected: false},
    {id: '5', name: 'XXL INT', selected: false},
    {id: '6', name: '3XL INT', selected: false},
    {id: '7', name: '5XL INT', selected: false},
    {id: '8', name: 'S INT', selected: false},
    {id: '9', name: 'M INT', selected: false},
    {id: '10', name: '36/32 GER', selected: false},
    {id: '11', name: '38/32 GER', selected: false},
    {id: '12', name: '40/32 GET', selected: false},
    {id: '13', name: '40 RUS', selected: false},
    {id: '14', name: '42 RUS', selected: false},
    {id: '15', name: '48 RUS', selected: false},
    {id: '16', name: '32 EUR', selected: false},
    {id: '17', name: '34 EUR', selected: false},
    {id: '18', name: '36 EUR', selected: false}
  ],
  brand: [
    {id: '1', name: 'Mango', selected: false},
    {id: '2', name: 'Only', selected: false},
    {id: '3', name: 'Levi\'s', selected: false},
    {id: '4', name: 'Winzor', selected: false},
    {id: '5', name: 'adidas', selected: false},
    {id: '6', name: 'Noisy May', selected: false},
    {id: '7', name: 'Casual Friday by Blend', selected: false},
    {id: '8', name: 'Auden Cavill', selected: false},
    {id: '9', name: 'Primo Emporio', selected: false},
    {id: '10', name: 'Jack & Jones', selected: false},
    {id: '11', name: 'Stormy Life', selected: false},
    {id: '12', name: 'Tom Tailor', selected: false},
    {id: '13', name: 'Brave Soul', selected: false},
    {id: '14', name: 'Dissedent', selected: false},
    {id: '15', name: 'Produkt', selected: false},
    {id: '16', name: 'Denim Culture', selected: false}
  ],
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
      const stateKeys = Object.keys(state);

      stateKeys.forEach(stateKey => {
        state[stateKey].forEach(filter => {
          if (filter.selected) filter.selected = false;
        })
      })

      state.selectedFilters = [];
    })
  }
})

export const {setColor, setSizes, setBrand, setPrice, removeAllFilters} = counterSlice.actions;

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