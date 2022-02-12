import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Color: [
    {id: '1', name: 'Black', type: 'checkbox', selected: false, color: '#000000'},
    {id: '2', name: 'Cyan', type: 'checkbox', selected: false, color: '#26BDB0'},
    {id: '3', name: 'Green', type: 'checkbox', selected: false, color: '#8FDB7B'},
    {id: '4', name: 'Grey', type: 'checkbox', selected: false, color: '#C4C4C4'},
    {id: '5', name: 'Pink', type: 'checkbox', selected: false, color: '#E74A8C'},
    {id: '6', name: 'White', type: 'checkbox', selected: false, color: '#FFFFFF'},
    {id: '7', name: 'Blue', type: 'checkbox', selected: false, color: '#4095E3'},
    {id: '8', name: 'Arylide yellow', type: 'checkbox', selected: false, color: '#e9d66b'},
    {id: '9', name: 'Ash grey', type: 'checkbox', selected: false, color: '#b2beb5'},
    {id: '10', name: 'Blue violet', type: 'checkbox', selected: false, color: '#8a2be2'},
    {id: '11', name: 'Boysenberry', type: 'checkbox', selected: false, color: '#873260'}
  ],
  Size: [
    {id: '1', name: 'XL', type: 'checkbox', selected: false},
    {id: '2', name: 'L', type: 'checkbox', selected: false},
    {id: '3', name: 'M', type: 'checkbox', selected: false},
    {id: '4', name: 'S', type: 'checkbox', selected: false},
    {id: '5', name: 'Xs', type: 'checkbox', selected: false}
  ],
  Brand: [
    {id: '1', name: 'Ck', type: 'checkbox', selected: false},
    {id: '2', name: 'H&M', type: 'checkbox', selected: false},
    {id: '3', name: 'Kalles', type: 'checkbox', selected: false},
    {id: '4', name: 'Levi\'s', type: 'checkbox', selected: false},
    {id: '5', name: 'Monki', type: 'checkbox', selected: false},
    {id: '6', name: 'Nike', type: 'checkbox', selected: false}
  ],
  Price: [
    {id: '1', name: '$1200+', type: 'checkbox', selected: false},
    {id: '2', name: '$600-$1200', type: 'checkbox', selected: false},
    {id: '3', name: '$300-$600', type: 'checkbox', selected: false},
    {id: '4', name: '$150-$300', type: 'checkbox', selected: false},
    {id: '5', name: '$50-$150', type: 'checkbox', selected: false},
    {id: '6', name: '$7-$50', type: 'checkbox', selected: false}
  ],
  Categories: ['Color', 'Size', 'Brand', 'Price']
}

export const counterSlice = createSlice({
  name: 'productFilters',
  initialState,
  reducers: {
    setSize: ((state, action) => {
      const chosenSize = state.Size.find(item => item.name === action.payload);
      chosenSize.selected = !chosenSize.selected;
    }),
    setBrand: ((state, action) => {
      const chosenBrand = state.Brand.find(item => item.name === action.payload);
      chosenBrand.selected = !chosenBrand.selected;
    }),
    setPrice: ((state, action) => {
      const chosenPrice = state.Price.find(item => item.name === action.payload);
      chosenPrice.selected = !chosenPrice.selected;
    })
  }
})

export const { setSize, setBrand, setPrice } = counterSlice.actions

export default counterSlice.reducer