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

module.exports = function mumble(str){
    let repeatedChar = '';
    for(let i=0; i<str.length;i++)
    {
        let char = str.charAt(i);
        for(let j = 0; j < i+1 ; j++)
        {
            repeatedChar+=char;
        }

        if(i!==str.length-1)
            repeatedChar+='-';
    }
    return repeatedChar;
}

// console.log(`repeatedChar : ${mumble('X')}`); //=> 'X'
// console.log(`repeatedChar : ${mumble('abc')}`); //=> 'a-bb-ccc'
// console.log(`repeatedChar : ${mumble('121')}`); //=> '1-22-111'
// console.log(`repeatedChar : ${mumble('!A 2')}`); //=> '!-AA-   -2222'