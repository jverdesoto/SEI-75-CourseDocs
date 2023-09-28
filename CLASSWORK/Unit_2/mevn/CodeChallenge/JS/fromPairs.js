// Challenge: fromPairs
// Difficulty: Intermediate
// Prompt:
// - Write a function named fromPairs that creates an object from an array containing nested arrays.
// - Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
// - If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.
// Examples:
// fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
// fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
// -----------------------------------------------------------------*/

let arr = [[
    ["a", 1],
    ["b", 2],
    ["c", 3],
]];
function isPairs (arr){
let result = arr.map(function (subArr) {
    return subArr.reduce(function (acc, data) {
        acc[data[0]] = data[1];
    return acc;
  }, {});
});
}
console.log(result);