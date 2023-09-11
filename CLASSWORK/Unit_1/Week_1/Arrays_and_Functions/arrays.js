const movies = ['Anchor Man', 'Barbie', 'Inception', 'Avatar', 'Pulp Fiction']
// Adding elements to array
movies.push('Fury', 'Jurassic Park')
movies.unshift('Star Wars', 'The Matrix')
// console.log(movies[movies.length - 1]);
console.log(movies);

// Removing elements from array
movies.pop()
console.log(movies);

movies.shift()
console.log(movies);

movies.splice(2, 3)
console.log(movies);

movies.splice(1, 0, 'Space Balls', 'Alice')
console.log(movies);

movies.splice(1, 1, 'Run Lola Run')
// movies[1] = 'Run Lola Run'
console.log(movies);

movies.forEach(function(movie, index){
    console.log(`${index + 1}: ${movie}`);
    // findMovie(movie, 'Alice', index)
})

for(let movie of movies) {
    if(movie === 'Alice') {
        console.log(movie)
        break
    }
}

for (let i = 0; i<movies.length; i++) {
    if(movies[i] === 'The Matrix') {
        console.log(movies[i])
        break
    }
}

function findMovie(n, m, i) {
    if(m === n)
        console.log(`The index for ${m} is ${i}`);
}

// Assign an empty array to a variable named books. => []
// Add 'The Shining' to the books array. => ['The Shining']
// Add 'Moby Dick' to the front of books. => ['Moby Dick', "The Sining"]
// console.log the second element of books
// Update the second element by assigning to it 'Dune'. => ['Moby Dick', 'Dune']
// Insert 'Great Expectations' as a new second element (between 'Moby Dick' & 'Dune'). => ['Moby Dick', 'Great Expectations', 'Dune']
// Iterate over the entire books array and console.log each book string.

const moviesCopy = ['Gladiator', ...movies, 'Openhimer']

console.log(moviesCopy);

const moviesString = movies.join(' - ')

console.log(moviesString);

const numbers = [2, 4, 6, 8]
const newNumbers = numbers.map(Math.sqrt)
console.log(newNumbers);

console.log(moviesCopy.indexOf('Openhimer'))

console.log(moviesCopy.includes('Run'));

const twoDimArr = [[0,2],[8,5]]