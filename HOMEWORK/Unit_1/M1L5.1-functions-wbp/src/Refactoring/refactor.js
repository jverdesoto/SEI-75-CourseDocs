/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

const items = [30.99, 40.99, 15.99, 22.99, 12.99]

function previewFullPrice(salesTax, shippingPrice) {

  const priceAfterTaxAndShipping = items.map((price) => {
    const updatedPrice = price * (1 + salesTax) + shippingPrice
    return updatedPrice.toFixed(2)
  })

  return priceAfterTaxAndShipping
}

module.exports = previewFullPrice;