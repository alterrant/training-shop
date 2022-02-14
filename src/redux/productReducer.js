import {createSlice} from '@reduxjs/toolkit';
import ProductBlue from './../assets/product/productBlue.png';
import ProductWhite from './../assets/product/productWhite.png';
import ProductBlack from './../assets/product/productBlack.png';
import ProductGrey from './../assets/product/productGrey.png';
import RelatedProductImg1 from './../assets/relatedProducts/relatedImg1.png';
import RelatedProductImg2 from './../assets/relatedProducts/relatedImg2.png';
import RelatedProductImg3 from './../assets/relatedProducts/relatedImg3.png';
import RelatedProductImg4 from './../assets/relatedProducts/relatedImg4.png';

const initialState = {
  productInfo: {
    particulars: {
      isNewArrivals: false,
      isSpecial: false,
      isBestseller: true,
      isMostViewed: false,
      isFeatured: false,
    },
    sku: '777',
    availability: 'In Stock',
    name: 'tracksuit Q109',
    category: 'Women',
    brand: 'Auden Cavill',
    materials: ['100% Polyester'],
    rating: 5,
    price: `$ 399.99`,
    sizes: ['XS', 'S', 'M', 'L'],
    discount: null,
    colors: ['Blue', 'White', 'Black', 'Grey'],
    reviews: [
      {
        id: '1',
        timeStamp: '3 months ago',
        rating: '5',
        name: 'Oleh Chabanov',
        description: 'On the other hand, we denounce with righteous indignation ' +
            'and like men who are so beguiled and demoralized by the charms of ' +
            'pleasure of the moment'
      },
      {
        id: '2',
        timeStamp: '3 months ago',
        rating: '5',
        name: 'ShAmAn design',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus' +
            ' qui blanditiis praesentium voluptatum deleniti'
      }
    ],
    images: [
      {
        color: 'Blue',
        url: ProductBlue,
        id: '6201311e7d2312f4e7932f3f',
      },
      {
        color: 'White',
        url: ProductWhite,
        id: '6201314b7d2312f4e7932f4f',
      },
      {
        color: 'Black',
        url: ProductBlack,
        id: '6201314f7d2312f4e7932f52',
      },
      {
        color: 'Grey',
        url: ProductGrey,
        id: '620132357d2312f4e7932f52',
      },
    ],
    id: '6200e5031c08840bc803ad2a'
  },
  selectedCategories: {
    color: 'Blue',
    size: 'S',
    image: '1'
  },
  relatedProducts: [
    {id: '1', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '0', image: RelatedProductImg1},
    {id: '2', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '50%', image: RelatedProductImg2},
    {id: '3', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '0', image: RelatedProductImg3},
    {id: '4', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '0', image: RelatedProductImg4},
  ]
}

export const productSlice = createSlice({
  name: 'productPage',
  initialState,
  reducers: {
    setColor: ((state, action) => {
      state.selectedCategories.color = action.payload;
    }),
    setSize: ((state, action) => {
      state.selectedCategories.size = action.payload;
    }),
    setImage: ((state, action) => {
      state.selectedCategories.image = action.payload;
    })
  }
})

export const {setColor, setSize, setImage} = productSlice.actions

export default productSlice.reducer