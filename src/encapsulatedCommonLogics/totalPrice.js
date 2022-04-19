export default ({ shoppingCartProducts }) =>
  shoppingCartProducts.reduce(
    (prev, curr) => prev + curr.price * curr.productQuantity,
    0
  );
