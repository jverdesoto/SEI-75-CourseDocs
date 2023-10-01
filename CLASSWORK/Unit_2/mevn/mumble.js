/*-----------------------------------------------------------------
Challenge: mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/

//function called mumble that takes a single string argument
// let result = ''
//iterate over each character in the string
//within that loop get the position of each character within the string
//repeat the character that number of times
//concatenate the repeated character withn the result string
//add hyphen after eacg repeated section except for the last section
//return the result string

function mumble (str){
    let result = ''
    let string = str.split('')
    string.forEach(char => {
        result.push(str[i], i+1)
    })
    return result.join('-')
}

function mumble(str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      // Repeat the current character i+1 times
      const repeatedChar = str[i].repeat(i + 1);
  
      // Add the repeated character to the result string
      result += repeatedChar;
  
      // Add a hyphen after each repeated section except for the last one
      if (i !== str.length - 1) {
        result += '-';
      }
    }
  
    return result;
  }