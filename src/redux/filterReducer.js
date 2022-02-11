import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  Color: [
    {id: '1', name: 'Black', color: '#000000'},
    {id: '2', name: 'Cyan', color: '#26BDB0'},
    {id: '3', name: 'Green', color: '#8FDB7B'},
    {id: '4', name: 'Grey', color: '#C4C4C4'},
    {id: '5', name: 'Pink', color: '#E74A8C'},
    {id: '6', name: 'White', color: '#FFFFFF'},
    {id: '7', name: 'Blue', color: '#4095E3'}
  ],
  Size: [
    {id: '1', name: 'XL', selected: false},
    {id: '2', name: 'L', selected: false},
    {id: '3', name: 'M', selected: false},
    {id: '4', name: 'S', selected: false},
    {id: '5', name: 'Xs', selected: false}
  ],
  Brand:
      [
        {id: '1', name: 'Ck', selected: false},
        {id: '2', name: 'H&M', selected: false},
        {id: '3', name: 'Kalles', selected: false},
        {id: '4', name: 'Levi\'s', selected: false},
        {id: '5', name: 'Monki', selected: false},
        {id: '6', name: 'Nike', selected: false}
      ],
  Price:
      [
        {id: '1', name: '$1200+', selected: false},
        {id: '2', name: '$600-$1200', selected: false},
        {id: '3', name: '$300-$600', selected: false},
        {id: '4', name: '$150-$300', selected: false},
        {id: '5', name: '$50-$150', selected: false},
        {id: '5', name: '$7-$50', selected: false}
      ],
  Categories: ['Color', 'Brand', 'Price']
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