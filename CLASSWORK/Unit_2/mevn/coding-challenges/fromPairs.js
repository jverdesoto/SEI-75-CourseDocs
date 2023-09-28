/*-----------------------------------------------------------------
Challenge: fromPairs
Difficulty: Intermediate
Prompt:
- Write a function named fromPairs that creates an object from an array containing nested arrays.
- Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.
Examples:
fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
-----------------------------------------------------------------*/

module.exports = function fromPairs(nestedArr) {
    const obj = {}
    for (let keyValue of nestedArr) {
        const newKey = keyValue[0]
        const newValue = keyValue[1]
        obj[newKey] = newValue
    }
    return obj
}