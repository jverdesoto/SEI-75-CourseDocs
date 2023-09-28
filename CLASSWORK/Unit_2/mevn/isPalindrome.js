function isPalindrome(str) {
    const cleanString = str.replace(/[\W_]/g, '').toLowerCase();;
      const strArray = cleanString.split("")
      for (let i = 0; i < strArray.length / 2; i++) {
          if (strArray[i] !== strArray[strArray.length - 1 - i])
          return false
      };
      return true
  }

  module.exports = { isPalindrome }