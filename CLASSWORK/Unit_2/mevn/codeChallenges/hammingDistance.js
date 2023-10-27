function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
      return 'Strings must have equal length';
    }
      let total = 0;
  
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        total++;
      }
    }
  
    return total;
  }


  fromPairs