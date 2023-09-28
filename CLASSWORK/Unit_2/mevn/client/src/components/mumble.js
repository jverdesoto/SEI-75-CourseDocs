function mumble(str) {
    let mumbleArray = [];
    // loop through each letter in input string.
    for (let i = 0; i < str.length; i++) {
      // get letter from string at current index.
      const letter = str[i];
      
      // repeat this letter (i + 1) times, 'i' starts at 0.
      // Create new string, repeating letter (i + 1) times.
      const mumbleLetter = letter.repeat(i + 1);
      
      // new mumbleLetter string to mumbleArray.
      mumbleArray.push(mumbleLetter);
    }
    
    // Join all elements in mumbleArray, separated by hyphens.
    const result = mumbleArray.join('-');
    
    return result;
  }
  
  module.exports = mumble;

  console.log(mumble('X'));    // Should print 'X'
  console.log(mumble('abc'));  // Should print 'a-bb-ccc'
  console.log(mumble('121'));  // Should print '1-22-111'
  console.log(mumble('!A 2')); // Should print '!-AA-   -2222'
  