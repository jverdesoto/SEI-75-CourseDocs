const movies = ['star wars', 'barbie', 'lord of the rings']

movies.push('cars', 'fury') //adds to end
movies.unshift('inception') //adds to beginning
movies.pop() //removes element at the end of the array
movies.shift() //removes start elements of the array

movies.splice(1, 2)
movies.splice(1, 0, 'space jam')
movies.splice(1, 1, 'barbie')
console.log(movies)

movies.forEach(function(movie, index){
    // console.log(`${index+1}: ${movie} `)
    if (movie === 'barbie'){
        // console.log(`the index number for Barbie is ${index}`)
        // findMovie('star wars', movie, index)
    }
})

function findMovie(name, movie, index){
    if (movie === index)
    console.log(`the index for ${movie} is ${index}`)
}

for (let movie of movies){ //move is a variable that will be assigned to every element of the movies array
    if(movie === 'barbie') {
        console.log(movie)
        break
    }
}

//MAKING AN EXACT COPY OF AN ARRAY

const moviesCopy = ['gladiator', ...movies, 'oppenheimer']
console.log(moviesCopy)

const moviesString = moviesCopy.join(' - ')
console.log(moviesString)
console.log(moviesCopy.indexOf('oppenheimer'))




const numbers = [2, 4, 6, 8]
const newNumbers = numbers.map(Math.sqrt);
console.log(newNumbers)
console.log(moviesCopy.includes('barbie'))


const books = []
books.push('The Shinning')
books.unshift('Moby Dick')
console.log(books[1])
books[1] = 'Dune'
books.splice(1,0,'Great Expectations')
books.forEach(function(book, index){
    console.log(book)
})