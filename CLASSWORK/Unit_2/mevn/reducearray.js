/*-----------------------------------------------------------------
Challenge: reduceArray
Difficulty:  Intermediate
Prompt:
The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.
- Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
- The reduceArray function should return whatever is returned by the callback function on the last iteration.
- The reduceArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the  current element; and (3) the index of the current iteration.
- On the first iteration, provide the third argument provided to reduceArray as the first argument when invoking the callback, then for subsequent iterations, provide the value returned by the callback during the previous iteration.
Examples:
reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n;
}, 0);
//=> 6
reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i;
}, 0);
//=> 9
reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {} );
//=> {"Yes": 2, "No": 1, "Maybe": 1}
-----------------------------------------------------------------*/

//define function reduceArrat that accepst 3 arguments
//create a variable called accuulator 
    //  to set the initia valye provided in the function argyment   
//iternate over array the first argument on the function
// for each iteration invoke tha callback function passing 
    //the accum value, the current element, and the index of 
    //the current iteration
//for subseuent iterations, sue the calue returned by the callback,
    //during the prevous iterations as the first argument
//return hatever is return by the call back funtion on the lasy iteration

function reduceArray(array, callback, initialValue) {
 let accumulator = initialValue
 for (let i = 0; array.length < i; i++) {
    accumulator = callback(accumulator, array[i], i)
 }
    return accumulator;
}