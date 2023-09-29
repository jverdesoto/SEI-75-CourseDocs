const reduceArray = require('../reduceArray.js')

test('Test if a string is a mumble', () => {
    expect(reduceArray( [1, 2, 3], function(acc, n) {return acc + n;}, 0)).toEqual(6)
    expect(reduceArray( [1, 2, 3], function(acc, n, i) {return acc + n + i;}, 0)).toEqual(9)
    expect(reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {acc[v] = acc[v] ? acc[v] + 1 : 1;return acc;}, {} )).toEqual({"Yes": 2, "No": 1, "Maybe": 1})
})