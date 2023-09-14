/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */
// function previewFullPrice(salesTax, shippingPrice) {
//   const shirtPrice = 30.99;
//   const sweatshirtPrice = 40.99;
//   const smallPosterPrice = 15.99;
//   const largePosterPrice = 22.99;
//   const mugPrice = 12.99;

//   shirtPriceAfterTax = shirtPrice * (1 + salesTax);
//   shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
//   shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);

//   sweatshirtPriceAfterTax = sweatshirtPrice * (1 + salesTax);
//   sweatshirtPriceAfterShipping = sweatshirtPriceAfterTax + shippingPrice;
//   sweatshirtPriceAfterShippingRounded = sweatshirtPriceAfterShipping.toFixed(2);

//   smallPosterPriceAfterTax = smallPosterPrice * (1 + salesTax);
//   smallPosterPriceAfterShipping = smallPosterPriceAfterTax + shippingPrice;
//   smallPosterPriceAfterShippingRounded =
//     smallPosterPriceAfterShipping.toFixed(2);

//   largePosterPriceAfterTax = largePosterPrice * (1 + salesTax);
//   largePosterPriceAfterShipping = largePosterPriceAfterTax + shippingPrice;
//   largePosterPriceAfterShippingRounded =
//     largePosterPriceAfterShipping.toFixed(2);

//   mugPriceAfterTax = mugPrice * (1 + salesTax);
//   mugPriceAfterShipping = mugPriceAfterTax + shippingPrice;
//   mugPriceAfterShippingRounded = mugPriceAfterShipping.toFixed(2);

//   return [
//     shirtPriceAfterShippingRounded,
//     sweatshirtPriceAfterShippingRounded,
//     smallPosterPriceAfterShippingRounded,
//     largePosterPriceAfterShippingRounded,
//     mugPriceAfterShippingRounded,
//   ];
// }
// module.exports = previewFullPrice;


const shirtPrice = 30.99;
const sweatshirtPrice = 40.99;
const smallPosterPrice = 15.99;
const largePosterPrice = 22.99;
const mugPrice = 12.99;
const salesTax = 0.08;
const shippingPrice = 4.0; 

// x.toString()

items = [30.99, 40.99, 15.99, 22.99, 12.99]

let itemsPriceAfter = []

function previewFullPrice(salesTax, shippingPrice) {
  for (let i = 0; i < items.length; i++) {
    itemPriceAfterTax = items[i] * (1 + salesTax);
    itemPriceAfterShipping = itemPriceAfterTax + shippingPrice;
    itemPriceAfterShippingRounded = itemPriceAfterShipping.toFixed(2);
    itemsPriceAfter.push(itemPriceAfterShippingRounded.toString())
  }
  console.log(itemsPriceAfter)
  return itemsPriceAfter
}
// const fullShirtPrice = previewFullPrice(shirtPrice, salesTax, shippingPrice)
// const fullsweatshirtPrice = previewFullPrice(sweatshirtPrice, salesTax, shippingPrice)
// const fullsmallPosterPrice = previewFullPrice(smallPosterPrice, salesTax, shippingPrice)
// const fulllargePosterPrice = previewFullPrice(largePosterPrice, salesTax, shippingPrice)
// const fullmugPrice = previewFullPrice(mugPrice, salesTax, shippingPrice)

module.exports = previewFullPrice;

// getFullPrice(shirtPrice, salesTax, shippingPrice)
// getFullPrice(sweatshirtPrice, salesTax, shippingPrice)
// getFullPrice(smallPosterPrice, salesTax, shippingPrice)
// getFullPrice(largePosterPrice, salesTax, shippingPrice)
// getFullPrice(mugPrice, salesTax, shippingPrice)

