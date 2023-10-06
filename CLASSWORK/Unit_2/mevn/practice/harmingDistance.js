function hammingDistance(str1, str2) {
    // Check if the strings have the same length
    if (str1.length !== str2.length) {
      return NaN;
    }
  
    let distance = 0;
  
    // Iterate through the characters of both strings
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        distance++;
      }
    }
  
    return distance;
  }
  
 