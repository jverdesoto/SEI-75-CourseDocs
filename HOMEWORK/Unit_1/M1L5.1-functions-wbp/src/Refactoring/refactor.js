/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

function calculatePrice (item, salesTax, shippingPrice) {
  const priceAfterTax = (item * (salesTax + 1) + shippingPrice).toFixed(2)
  return priceAfterTax;
}

function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  const shirtPriceTotal = calculatePrice(shirtPrice, salesTax, shippingPrice)
  const sweatshirtPriceTotal = calculatePrice(sweatshirtPrice, salesTax, shippingPrice)
  const smallPosterPriceTotal = calculatePrice(smallPosterPrice, salesTax, shippingPrice)
  const largePosterPriceTotal = calculatePrice(largePosterPrice, salesTax, shippingPrice)
  const mugPriceTotal = calculatePrice(mugPrice, salesTax, shippingPrice)

  
  return [
    shirtPriceTotal,
    sweatshirtPriceTotal,
    smallPosterPriceTotal,
    largePosterPriceTotal,
    mugPriceTotal,
  ];
}
module.exports = previewFullPrice;
