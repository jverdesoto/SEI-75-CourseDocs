function fromPairs(pairs) {
    const obj = {}
    console.log(`number of arguments: ${pairs.length}`);
    for (let pair of pairs) {
        const [key, value] = pair
        obj[key] = value
    }
    return obj
  }

  module.exports = { fromPairs }