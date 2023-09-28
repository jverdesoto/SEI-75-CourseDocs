function fromPairs(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      const [key, value] = arr[i];
      obj[key] = value;
    }
    return obj;
  }
  
  module.exports = fromPairs;