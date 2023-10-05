// Prompt:
// The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.
// - Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
// - The reduceArray function should return whatever is returned by the callback function on the last iteration.
// - The reduceArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the  current element; and (3) the index of the current iteration.
// - On the first iteration, provide the third argument provided to reduceArray as the first argument when invoking the callback, then for subsequent iterations, provide the value returned by the callback during the previous iteration.
// Examples:
// reduceArray( [1, 2, 3], function(acc, n) {
//   return acc + n;
// }, 0);
// => 6
// reduceArray( [1, 2, 3], function(acc, n, i) {
//   return acc + n + i;
// }, 0);
// => 9
// reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
//   acc[v] = acc[v] ? acc[v] + 1 : 1;
//   return acc;
// }, {} );
// => {"Yes": 2, "No": 1, "Maybe": 1}

// Define the reduceArray function, which internally uses Array.prototype.reduce
function reduceArray(array, callback, initialValue) {
    // Use JavaScript's built-in reduce method
    return array.reduce(callback, initialValue);
  }
  
  // Example usages:
  const result1 = reduceArray([1, 2, 3], (acc, n) => acc + n, 0);
  console.log(result1); // Output: 6
  
  const result2 = reduceArray([1, 2, 3], (acc, n, i) => acc + n + i, 0);
  console.log(result2); // Output: 9
  
  const result3 = reduceArray(
    ['Yes', 'No', 'Yes', 'Maybe'],
    (acc, v) => {
      acc[v] = acc[v] ? acc[v] + 1 : 1;
      return acc;
    },
    {}
  );
  console.log(result3); // Output: { 'Yes': 2, 'No': 1, 'Maybe': 1 }
  