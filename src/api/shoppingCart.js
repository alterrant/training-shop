import {instance} from "./api";

export const shoppingCartAPI = {
  getDeliveryCountries() {
    return instance.get('/countries').then(item => item.data);
  },
  getAvailableStoreAddress({country, city}) {
    return instance.post('search/cities', {
      country,
      city
    })
    .then(item => item.data);
  },
  submitShoppingCartSummary(props) {
    return instance.post('cart', {...props})
  }
}