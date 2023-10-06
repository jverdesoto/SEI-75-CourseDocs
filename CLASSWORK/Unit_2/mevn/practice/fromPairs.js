function fromPairs(arr) {
    const result = {};
  
    for (const pair of arr) {
      const [key, value] = pair;
      result[key] = value;
    }
  
    return result;
  }
  
