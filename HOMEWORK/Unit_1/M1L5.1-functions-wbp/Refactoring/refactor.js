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

  // shirtPriceAfterTax = shirtPrice * (1 + salesTax);
  // shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
  // shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);

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
// module.exports = previewFullPrice;

// function previewFullPrice(salesTax, shippingPrice) {
//   const itemPrices = [30.99, 40.99, 15.99, 22.99, 12.99];
//   const itemNames = ["Shirt", "Sweatshirt", "Small Poster", "Large Poster", "Mug"];

//   const result = itemPrices.map((price) => {
//     const priceAfterTax = (price * (1 + salesTax)) + shippingPrice;
//     return priceAfterTax.toFixed(2);
//   });

//   return result;
// }

// module.exports = previewFullPrice;

function calculatePriceAfterTaxAndShipping(itemPrice, salesTax, shippingPrice) {
  const priceAfterTax = itemPrice * (1 + salesTax);
  const priceAfterShipping = priceAfterTax + shippingPrice;
  return priceAfterShipping.toFixed(2);
}

function previewFullPrice(salesTax, shippingPrice) {
  const prices = {
    shirt: 30.99,
    sweatshirt: 40.99,
    smallPoster: 15.99,
    largePoster: 22.99,
    mug: 12.99,
  };

  const itemNames = Object.keys(prices);
  const pricesAfterShipping = itemNames.map((itemName) =>
    calculatePriceAfterTaxAndShipping(prices[itemName], salesTax, shippingPrice)
  );

  return pricesAfterShipping;
}

console.log(previewFullPrice(0.1, 5)); // Example usage
module.exports = previewFullPrice;

