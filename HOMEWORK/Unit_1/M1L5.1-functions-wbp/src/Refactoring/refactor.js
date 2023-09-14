/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */
const shirtPrice = 30.99;
const sweatshirtPrice = 40.99;
const smallPosterPrice = 15.99;
const largePosterPrice = 22.99;
const mugPrice = 12.99;
const items = [shirtPrice, sweatshirtPrice, smallPosterPrice, largePosterPrice, mugPrice]

function previewFullPrice(salesTax, shippingPrice) {
  const totalPrices = []
  for (let i = 0; i < items.length; i++){
     totalPrices.push((items[i] *(1 + salesTax) + shippingPrice).toFixed(2));
  }
  return totalPrices
}

module.exports = previewFullPrice;
