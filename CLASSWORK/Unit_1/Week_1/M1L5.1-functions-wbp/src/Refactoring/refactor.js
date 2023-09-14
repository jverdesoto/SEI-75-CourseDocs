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

//can I make this smaller?
const items = [
  { name: 'shirt', price: 30.99 },
  { name: 'sweatshirt', price: 40.99 },
  { name: 'small poster', price: 15.99 },
  { name: 'large poster', price: 22.99 },
  { name: 'mug', price: 12.99 }
]

function totalPrice (items){
  const itemPriceAfterTax = items.price * (1 + salesTax);
  const itemPriceAfterShipping = itemPriceAfterTax + shippingPrice;
  const itemPriceRounded = itemPriceAfterShipping.toFixed(2);
  return itemPriceRounded;
  }
   
const itemPriceTotal = items.map(totalPrice);
  
return itemPriceTotal
}

module.exports = previewFullPrice;
