const carouselProducts = ["t-shirt", "sweater", "polo"];
const gridProducts = ["mug", "small_poster", "medium_poster", "large_poster"];
const sidebarProducts = ["sweatpants", "shorts", "skirt", "baseball_cap"];

/**
 * On our digital storefront, we advertise products in three different places:
 * the carousel, the main display grid, and the sidebar.
 *
 * In each of these places, we want to format the names of our products the same way
 *
 * To reformat the names, we use map() to apply a callback function to each
 * element of the array, and return a new array with all the modified elements
 *
 * We use the same callback function on each of the three product displays,
 * but using an anonymous function is causing the code to be very repetetive.
 *
 * Can you refactor this code to be less repetitive?
 */

function formatProducts(carousel, grid, sidebar) {
  
  function formattingProperly(ourProduct) {
    const formattedProduct = ourProduct.map(function (product) {
      const spacedProduct = product.replace("_", " ");
      const productWords = spacedProduct.split(" ");
      const capitalizedProductWords = productWords.map(
        (word) => word.charAt(0).toUpperCase() + word.substring(1)
      );
      const capitalizedProduct = capitalizedProductWords.join(" ");
      return capitalizedProduct;  //end of mapping
    });
    return formattedProduct; //formattingProperly willl return this
  }

  //final return for the big function, an array
  const finalArray = [];
  finalArray.push(formattingProperly(carousel), formattingProperly(grid), formattingProperly(sidebar));
  
  return finalArray
}
console.log(formatProducts(carouselProducts, gridProducts, sidebarProducts));

module.exports = formatProducts;
