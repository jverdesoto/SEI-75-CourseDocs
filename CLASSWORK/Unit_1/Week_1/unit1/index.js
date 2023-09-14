/*// DAY 1 - 4th of September

const color = "red"

if(color === "green"){
console.log("Go")
}
else if (color === "yellow"){
console.log("Slow")
}
else if (color === "red"){
console.log("Stop")
}
else{
    console.log("Whatever")
}

// could have also done it as a function
*/

//DAY 2 - 5th of September

// RANDOM SECRET NUMBER GAME
// generate a random secret number
/*
const MAX_NUM = 5;   
// you are choosing to not camelCase, but use snakeCase as it makes it more obvious. used in specific cases where something is really important or might be used over and over again

const secretNum = Math.floor(Math.random() * MAX_NUM) + 1;
// the +1 is just so the player guesses between 1 and 100, rather than 0 and 100
console.log(secretNum);
// declare the variable to hold the player's guess
let guessNum;

// loop while the play is not correct

guessNum = prompt('Enter your guess:');
while (guessNum !== secretNum){

    // convert what they enter into a number
    guessNum = parseInt(guessNum);

    // compare to see if lower or higher than the secret number
    if (guessNum < secretNum){
        console.log("Your guess is too low - try again!");
    }
    else if (guessNum > secretNum) {
        console.log("Your guess is too high - try again!");
    }
    // print a message that informs the player
}
// print a message congratulating the player
console.log("You guessed it! Yay!")

// bonus challenge - let the player input the maximum value of the secret number
// bonus challenge - keep track of the number of wrong guesses as print a message if that number exceeds a predetermined amount (loses if does not guess in x tries)

// i did not like that prompt function very much - you cannot escape it
*/

// RANDOM SECRET NUMBER GAME
const MAX_NUM = 5;
const secretNum = Math.floor(Math.random() * MAX_NUM) + 1;

let guessNum = 3;
const guesses = []
guesses.push(guessNum)

while (guessNum !== secretNum){
    guessNum = prompt('Enter your guess:');
    guessNum = parseInt(guessNum);
    guesses.push(guessNum)
    if (guessNum < secretNum){
        console.log("Your guess is too low - try again!");
    }
    else if (guessNum > secretNum) {
        console.log("Your guess is too high - try again!");
    }
}
console.log(`You guessed it! Yay! it only took you ${guesses.length} tries!`)

//conclusions from this exercise: initialise the let before the loop. give it some value rather than letting it be empty. avoid prompt lol


