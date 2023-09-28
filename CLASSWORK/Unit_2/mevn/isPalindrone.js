module.exports = function isPalindrone(string) {
    let stringWithoutSpaces = string.split(" ").join("").toLowerCase()
    let stringAsArray = Array.from(stringWithoutSpaces);
    let lastIndexToCheck = stringAsArray.length - 1;
  
    for (let i = 0; i < stringAsArray.length / 2; i++) {
      if (stringAsArray[i] !== stringAsArray[lastIndexToCheck]) {
        return false;
      }
      lastIndexToCheck--;
    }
    return true;
  }
  

  