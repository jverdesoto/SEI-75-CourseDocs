module.exports = function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }
  let newString = string.replace(/\s/g, "").toLowerCase();
  let palString = newString.split("").reverse("").join("");
  return newString === palString;
  // console.log(newString === palString)
};

function hammingDistance(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(NaN);
  }
  for (let i = 0; i < arr1.length; i++) {
    let total = 0;
    if (arr1[i] !== arr2[i]) {
      total + 1;
    }
  }
  console.log(total);
}

hammingDistance("abc", "ab");

function isPairs(arr) {
  let result = arr.map(function (subArr) {
    return subArr.reduce(function (acc, data) {
      acc[data[0]] = data[1];
      return acc;
    }, {});
  });
  console.log(result);
}

isPairs(arr);

function mumble(str) {
    return str.split('').map((char, index) => {
      return char.repeat(index + 1);
    }).join('-')
}

function mumble2(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      result += char.repeat(i + 1);
    }
    return result.split('').join('-');
}

mumble('abc')
mumble2('abc')
