import {createSlice} from '@reduxjs/toolkit';
import RelatedProductImg1 from './../assets/relatedProducts/relatedImg1.png';
import RelatedProductImg2 from './../assets/relatedProducts/relatedImg2.png';
import RelatedProductImg3 from './../assets/relatedProducts/relatedImg3.png';
import RelatedProductImg4 from './../assets/relatedProducts/relatedImg4.png';
import photoProduct1SVG from "./../assets/product/product1.svg";
import photoProduct2SVG from "./../assets/product/product2.svg";
import photoProduct3SVG from "./../assets/product/product3.svg";
import photoProduct4SVG from "./../assets/product/product4.svg";

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
// const baseRelatedProducts = null;

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
    discount: null, //'-58%'
    photos: [
      {id:1 , src: photoProduct1SVG, alt: 'photoProduct1'},
      {id:2 , src: photoProduct2SVG, alt: 'photoProduct2'},
      {id:3 , src: photoProduct3SVG, alt: 'photoProduct3'},
      {id:4 , src: photoProduct4SVG, alt: 'photoProduct4'},
    ], //images, других нет
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
  },
  relatedProducts: [
    {id: '1', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: null, images: RelatedProductImg1},
    {id: '2', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: '-50%', images: RelatedProductImg2},
    {id: '3', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: null, images: RelatedProductImg3},
    {id: '4', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: null, images: RelatedProductImg4},
    {id: '5', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: null, images: RelatedProductImg3},
    {id: '6', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: null, images: RelatedProductImg1},
    {id: '7', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: '-50%', images: RelatedProductImg2},
    {id: '8', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: null, images: RelatedProductImg4},
    {id: '9', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: null, images: RelatedProductImg1},
    {id: '10', category: 'women', name: 'Women\'s tracksuit Q109', rating: 4, price: 30.00, discount: null, images: RelatedProductImg4}
  ]
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
    changeSelectedPhoto: ((state, action) => {
      state.selectedCategories.productPhoto = action.payload;
    }),
    resetProduct: (state) => {
      state.productInfo = baseProduct;
      state.selectedCategories = baseSelectedCategories;
      //пока нет relatedProducts, не обнуляем их (тк новые пока не получаем)
      // state.relatedProducts = baseRelatedProducts;
    }
  }
})

export const {setProduct, resetProduct, setColor, setSize, setImage, changeSelectedPhoto} = productSlice.actions

export default productSlice.reducer