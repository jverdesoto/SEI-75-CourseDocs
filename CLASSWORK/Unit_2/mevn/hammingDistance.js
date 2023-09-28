//- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
//- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
//- If the strings are not of the same length, the function should return NaN.

function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
      return NaN;
    }
  
    let distance = 0;
  
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        distance++;
      }
    }
  
    return distance;
  }
  

  console.log(hammingDistance('abc', 'abc'));    //=> 0
  console.log(hammingDistance('a1c', 'a2c'));    //=> 1
  console.log(hammingDistance('!!!!', '****'));  //=> 4
  console.log(hammingDistance('abc', 'ab'));     //=> NaN 