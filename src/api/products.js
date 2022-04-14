import {instance} from './api';

export const productsAPI = {
  getProducts() {
    return instance.get('products').then(item => item.data);
  },
  getGenderProducts(gender) {
    return instance.get(`products/${gender}`).then(item => item.data);
  },
  postReview(review) {
    const { id, name, text, rating } = review;

    return instance.post('product/review', {
      id,
      name,
      text,
      rating
    })
    .then(item => item.data);
  },
}