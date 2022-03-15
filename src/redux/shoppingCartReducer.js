import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isShoppingCartOpen: false,
  products: []
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    shoppingCartToggle: ((state) => {
      state.isShoppingCartOpen = !state.isShoppingCartOpen;
    }),
    setShoppingCartProduct: ((state, action) => {
      state.products.push(action.payload);
    }),
    deleteShoppingCartProduct: ((state, action) => {
      const productInCartIndex = findProductIndexInCart({state, action});

      deleteProductFromCart({productInCartIndex, state});
    }),
    incrementProductQuantity: (((state, action) => {
      const productInCartIndex = findProductIndexInCart({state, action});

      state.products[productInCartIndex].productQuantity++;
    })),
    decrementProductQuantity: (((state, action) => {
      const productInCartIndex = findProductIndexInCart({state, action});

      if (state.products[productInCartIndex].productQuantity === 1) deleteProductFromCart({productInCartIndex, state});
      else state.products[productInCartIndex].productQuantity--;
    })),
  }
})

export const {
  shoppingCartToggle,
  setShoppingCartProduct,
  incrementProductQuantity,
  decrementProductQuantity,
  deleteShoppingCartProduct
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

const findProductIndexInCart = ({state, action}) => {
  return state.products.findIndex(item =>
      item.productId === action.payload.productId &&
      item.color === action.payload.color &&
      item.size === action.payload.size
  );
}
const deleteProductFromCart = ({productInCartIndex, state}) => state.products.splice(productInCartIndex, 1);
