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
 
let product = (item) => {
return (item * (1 + salesTax) + shippingPrice).toFixed(2)
}

return [ product(shirtPrice),
  product(sweatshirtPrice),
  product(smallPosterPrice) ,
   product(largePosterPrice),
   product(mugPrice) ]
// return arrayOffProducts

}
  console.log(previewFullPrice(0.08,4.0));

  // shirtPriceAfterTax = shirtPrice * (1 + salesTax);
  // shirtPriceAfterShipping = shirtPrice * (1 + salesTax) + shippingPrice;
  // shirtPriceAfterShippingRounded = (product * (1 + salesTax) + shippingPrice).toFixed(2);

  // sweatshirtPriceAfterTax = sweatshirtPrice * (1 + salesTax);
  // sweatshirtPriceAfterShipping = sweatshirtPriceAfterTax + shippingPrice;
  // sweatshirtPriceAfterShippingRounded = sweatshirtPriceAfterShipping.toFixed(2);

  // smallPosterPriceAfterTax = smallPosterPrice * (1 + salesTax);
  // smallPosterPriceAfterShipping = smallPosterPriceAfterTax + shippingPrice;
  // smallPosterPriceAfterShippingRounded =
  //   smallPosterPriceAfterShipping.toFixed(2);

  // largePosterPriceAfterTax = largePosterPrice * (1 + salesTax);
  // largePosterPriceAfterShipping = largePosterPriceAfterTax + shippingPrice;
  // largePosterPriceAfterShippingRounded =
  //   largePosterPriceAfterShipping.toFixed(2);

  // mugPriceAfterTax = mugPrice * (1 + salesTax);
  // mugPriceAfterShipping = mugPriceAfterTax + shippingPrice;
  // mugPriceAfterShippingRounded = mugPriceAfterShipping.toFixed(2);

  // return [
  //   shirtPriceAfterShippingRounded,
  //   sweatshirtPriceAfterShippingRounded,
  //   smallPosterPriceAfterShippingRounded,
  //   largePosterPriceAfterShippingRounded,
  //   mugPriceAfterShippingRounded,
  // ];
// }
module.exports = previewFullPrice;
