//- Write a function named fromPairs that creates an object from an array containing nested arrays.
//- Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
//- If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.

function fromPairs(arr) {
    const result = {};

    for (const [key, value] of arr) {
        result[key] = value;
    }

    return result;
}


console.log(fromPairs([['a', 1], ['b', 2], ['c', 3]])); //=> { a: 1, b: 2, c: 3 }
console.log(fromPairs([['name', 'Sam'], ['age', 24], ['name', 'Sally']])); //=> { name: "Sally", age: 24 }
