//- Write a function called mumble that accepts a single string argument.
//- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).

function mumble(str) {
    const repeatedChars = []

    for (let i = 0; i < str.length; i++) {
        repeatedChars.push(str[i].repeat(i + 1))
    }
}

return repeatedChars.join('-')