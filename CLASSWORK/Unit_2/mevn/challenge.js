function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) {
    return NaN;
  } else {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) diff++;
    }
    return diff;
  }
}

function fromPairs(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}

function mumble(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let count = i + 1;
    while (count > 0) {
      newStr += str[i];
      count--;
    }
  }
  return newStr;
}

function reduceArray(arr, callback, val) {
  let acc = val;
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i);
  }
  return acc;
}

module.exports = {
  hammingDistance,
  fromPairs,
  reduceArray,
};
