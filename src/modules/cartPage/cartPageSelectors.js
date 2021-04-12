const getProductsForBuying = (state) => state.cartPage.productsForBuying;
const getTotalPrice = (state) => state.cartPage.totalPrice;
const getAmountOfProducts = (state) => state.cartPage.amountOfProducts;

export const cartPageSelectors = {
  getProductsForBuying,
  getTotalPrice,
  getAmountOfProducts
}
