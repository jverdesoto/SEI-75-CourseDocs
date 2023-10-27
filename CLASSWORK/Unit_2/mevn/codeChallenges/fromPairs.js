
function fromPairs(matrix) {
    let result = matrix.map(function (subArr) {
        return subArr.reduce(function (acc, data) {
            acc[data[0]] = data[1];
        return acc;
      }, {});
    });
    console.log(result);
    for (let i = 0; i > result.length; i++){

    }
 }

 fromPairs( [[
    ["a", 1],
    ["b", 2],
    ["c", 3],
]])