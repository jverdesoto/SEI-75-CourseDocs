function fromPairs(nestedArr) {
 let obj = {};
 for (let i = 0; i < nestedArr.length; i++) {
    const key = nestedArr[i][0];
    const value = nestedArr[i][1];
    obj[key] = value;
    }
    console.log(obj);
}

fromPairs([ ['name', 'Sam'], ['age', 24], ['name', 'Sally'] ]);