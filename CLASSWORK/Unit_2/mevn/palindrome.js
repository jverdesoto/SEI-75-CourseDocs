function isPalindrome(string) {
  //Convert to array
  const noSpecials = string.replace(/[^a-zA-Z ]/g, "");
  const spacedArray = noSpecials.split(" ");
  //join to remvoe spaces
  const spaceless = spacedArray.join("");
  //lowercase
  const lowerCase = spaceless.toLowerCase();
  //new array from string
  let stringArray = lowerCase.split("");

  let reverseArray = [];
  //push the reverse of that array to reverse array
  for (let i = stringArray.length - 1; i >= 0; i--) {
    reverseArray.push(stringArray[i]);
  }
  //join array to string
  const reverseString = reverseArray.join("");
  //compare
  return reverseString === lowerCase ? true : false;
}

module.exports = { isPalindrome };
