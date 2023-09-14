/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */
function previewFullPrice(salesTax, shippingPrice) {
  const shirtPrice = 30.99;
  const sweatshirtPrice = 40.99;
  const smallPosterPrice = 15.99;
  const largePosterPrice = 22.99;
  const mugPrice = 12.99;

  function finalPrice(itemPrice) {
    const priceAfterTax = itemPrice * (1 + salesTax);
    const priceAfterShipping = priceAfterTax + shippingPrice;
    const priceAfterShippingRounded = priceAfterShipping.toFixed(2);
    return priceAfterShippingRounded;
  }

  shirtPriceAfterShippingRounded = finalPrice(shirtPrice);
  sweatshirtPriceAfterShippingRounded = finalPrice(sweatshirtPrice);
  smallPosterPriceAfterShippingRounded = finalPrice(smallPosterPrice);
  largePosterPriceAfterShippingRounded = finalPrice(largePosterPrice);
  mugPriceAfterShippingRounded = finalPrice(mugPrice);

  return [
    shirtPriceAfterShippingRounded,
    sweatshirtPriceAfterShippingRounded,
    smallPosterPriceAfterShippingRounded,
    largePosterPriceAfterShippingRounded,
    mugPriceAfterShippingRounded,
  ];
}
module.exports = previewFullPrice;
