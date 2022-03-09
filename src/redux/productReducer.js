import {createSlice} from '@reduxjs/toolkit';

const baseProduct = {
  particulars: {
    isNewArrivals: false,
    isSpecial: false,
    isBestseller: false,
    isMostViewed: false,
    isFeatured: false,
  },
  name: null,
  category: null,
  brand: null,
  material: null,
  rating: null,
  price: null,
  sizes: [null],
  discount: null,
  reviews: [null],
  images: [
    {
      color: null,
      url: null,
      id: null,
    }
  ],
  id: null
};
const baseSelectedCategories = {
    productPhoto: null,
    color: null,
    size: null,
    image: null
};

const initialState = {
  productInfo: {
    particulars: {
      isNewArrivals: false,
      isSpecial: false,
      isBestseller: true,
      isMostViewed: false,
      isFeatured: false,
    },
    name: null,
    category: null,
    brand: null,
    material: [null],
    rating: null,
    price: null,
    sizes: [null],
    discount: null,
    reviews: [
      {
        id: null,
        // timeStamp: null,
        rating: null,
        name: null,
        text: null
      }
    ],
    images: [
      {
        color: null,
        url: null,
        id: null,
      }
    ],
    id: null
  },
  selectedCategories: {
    productPhoto: 1,
    color: 'Blue',
    size: 'S',
    image: '1'
  },
  availabilityInStore: {
    sku: '777',
    availability: 'In Stock',
  }
}

export const productSlice = createSlice({
  name: 'productPage',
  initialState,
  reducers: {
    setProduct: ((state, action) => {
      state.productInfo = action.payload;

      state.selectedCategories = {
        productPhoto: action.payload.images[0].url,
        color: action.payload.images[0].color,
        size: action.payload.sizes[0],
        image: action.payload.images[0].url
      }
    }),
    setColor: ((state, action) => {
      state.selectedCategories.color = action.payload;
    }),
    setSize: ((state, action) => {
      state.selectedCategories.size = action.payload;
    }),
    setImage: ((state, action) => {
      state.selectedCategories.image = action.payload;
    }),
    resetProduct: (state) => {
      state.productInfo = baseProduct;
      state.selectedCategories = baseSelectedCategories;
    }
  }
})

export const {setProduct, resetProduct, setColor, setSize, setImage} = productSlice.actions

export default productSlice.reducer