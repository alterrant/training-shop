import {createSlice} from '@reduxjs/toolkit';
import ProductBlue from './../assets/product/productBlue.png';
import ProductWhite from './../assets/product/productWhite.png';
import ProductBlack from './../assets/product/productBlack.png';
import ProductGrey from './../assets/product/productGrey.png';
import RelatedProductImg1 from './../assets/relatedProducts/relatedImg1.png';
import RelatedProductImg2 from './../assets/relatedProducts/relatedImg2.png';
import RelatedProductImg3 from './../assets/relatedProducts/relatedImg3.png';
import RelatedProductImg4 from './../assets/relatedProducts/relatedImg4.png';
import photoProduct1 from "./../assets/product/product1.png";
import photoProduct2 from "./../assets/product/product2.png";
import photoProduct3 from "./../assets/product/product3.png";
import photoProduct4 from "./../assets/product/product4.png";
import photoProduct1SVG from "./../assets/product/product1.svg";
import photoProduct2SVG from "./../assets/product/product2.svg";
import photoProduct3SVG from "./../assets/product/product3.svg";
import photoProduct4SVG from "./../assets/product/product4.svg";

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
    photos: [
      {id:1 , src: photoProduct1SVG, alt: 'photoProduct1'},
      {id:2 , src: photoProduct2SVG, alt: 'photoProduct2'},
      {id:3 , src: photoProduct3SVG, alt: 'photoProduct3'},
      {id:4 , src: photoProduct4SVG, alt: 'photoProduct4'},
    ],
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
    {id: '5', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '0', image: RelatedProductImg3},
    {id: '6', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '0', image: RelatedProductImg1},
    {id: '7', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '50%', image: RelatedProductImg2},
    {id: '8', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '0', image: RelatedProductImg4},
    {id: '9', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '0', image: RelatedProductImg1},
    {id: '10', productType: 'women', name: 'Women\'s tracksuit Q109', rating: '4', cost: '$ 30.00', discount: '0', image: RelatedProductImg4}
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