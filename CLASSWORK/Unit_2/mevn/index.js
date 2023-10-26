//all the things you need to import, including database stuff
import express, { request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Octokit } from "octokit";
import dogs from "./data/dogs.js";
import mongoose, { Schema } from "mongoose";
import 'dotenv/config'


//start your app
const app = express()

//tell your app dependencies you want to use
app.use(cors())
app.use(bodyParser.json())







//because there are two servers running at once, tell it which one you want 
const port = process.env.PORT || 4000

//start listening to the port
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

//mount the route to any pages you want to display
app.get('/dogs', (req, res) => {
    res.json(dogs)
})

app.get('/dogs/:id', (request, response) => {
    //get the id parameter from the URL
    //make sure to pass it as an number because URLS are always strings, and our id is a number
    const id = parseInt(request.params.id)

    //find the dog with the id we are looking for 
    const dog = dogs.find(dog => (dog.id === id))

    //set the response of this request as a JSON response
    response.json(dog)
})

//!one way of fetching cat data (because for some reason I was trying to call the response outside of the fetch)
// app.get('/cat-facts', async (request, response) => {
//     const API_URL = "https://cat-fact.herokuapp.com/facts"

//     // let catFacts = null
//     await fetch(API_URL)
//         .then(response => response.json())
//         .then(result => {
//             catFacts = result
//         })
//     response.json(catFacts)
// })

//!other simpler way of fetching
app.get('/cat-facts', (request, response) => {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then(response => response.json())
        .then(result => {
            response.json(result)
        })
})


//* CONNECTING TO GITHUB API EXERCISE
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})


app.get('/user/:user', async (request, response) => {
    const user = request.params.user
    try {
        const data = await octokit.request(`GET /users/${user}`)
        response.json(data)
    } catch (error) {
        console.log(error)
    }
})

app.get('/repos/:user/:reponame', async (request, response) => {
    const user = request.params.user
    const reponame = request.params.reponame
    try {
        const data = await octokit.request(`GET /repos/${user}/${reponame}`, {
            owner: user
        })
        response.json(data)
    } catch (error) {
        console.warn(`there was an error: ${error}`)
    }
})


//*CAT DATABASE EXERCISE AND EXAMPLES
//connect to the database
const DATABASE_URL = mongoose.connect(process.env.LIBRARY_URL);

//create schemas (blueprint of the info we are passing)
// const catSchema = {
//     name: String,
//     age: Number
// }
//create a new model (create a class to store the data based on the schemas)
// const Cat = mongoose.model('Cat', catSchema)


//link it to the root page just because
// app.get('/', (req, res) => {
//     //create a new entry to the cats database
//     const kitty = new Cat({
//         name: 'Meg',
//         age: 18
//     })
//     //save the data bit
//     kitty.save()
//         .then(() => {
//             res.json({
//                 message: 'Kitty has been saved'
//             })
//         })
// })

// app.get('/cats', async (request, response) => {
//     const allCats = await Cat.find({})
//     response.json(allCats)
// })

// app.post('/cats', async (request, response) => {
//     try {
//         const catData = request.body
//         const newCat = new Cat(catData)
//         await newCat.save()
//         response.json(newCat) //this responds to the client with a newly created cat
//     }
//     catch (error) {
//         console.log(error)
//         response.sendStatus(error)
//     }
// })

//? LIBRARY EXERCISE
//we are already connected to the database

//create the schemas
const authorSchema = {
    name: String,
}

const bookSchema = {
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    publishingDate: Number
}

const userSchema = {
    email: {
        type: String,
        required: true
    },
    lastLogIn: {
        type: Date,
        required: true
    }
}

//create the actual model
const Author = mongoose.model('Author', authorSchema)
const Book = mongoose.model('Book', bookSchema)
const User = mongoose.model('User', userSchema)


//create the main library database endpoints
app.get('/library/books', async (request, response) => {
    try {
        const allBooks = await Book.find({}).populate('author')
        response.json(allBooks)
    } catch {
        console.log('could not get the data!')
    }
})

app.get('/library/authors', async (request, response) => {
    try {
        const allAuthors = await Author.find({})
        response.json(allAuthors)
    }
    catch (error) {
        console.log('could not get the data to show you!')
        console.log(error)
    }
})


//add a new book functionality
app.post('/library/addnewbook', async (request, response) => {
    try {
        //do we have this author already?
        let author = await Author.findOne({
            name: request.body.author.name
        })

        if (!author) {
            author = new Author(request.body.author)
        }
        await author.save()

        //do we have this book already?
        let newBook = await Book.findOne({
            title: request.body.title   //could I find it by id instead, to avoid syntax?
        })

        if (!newBook) {
            newBook = new Book({
                author: author._id,
                title: request.body.title,
                publishingDate: request.body.publishingDate
            })
        } else { console.log('already got that one!') }

        await newBook.save()
        console.log(newBook)
        response.json(newBook)

    } catch (error) {
        console.log(error)
    }
})

//single author page
app.get('/library/authors/:id', async (request, response) => {
    const { id } = request.params
    try {
        const author = await Author.findById(id)

        if (!author) {
            return response.status(404).json({ error: 'Author not found' })
        }
        const booksByAuthor = await Book.find({ author: author.id }).select('title publishingDate')
        console.log(author, booksByAuthor)

        response.json({ author, booksByAuthor })

    } catch (error) {
        console.log('could not get that author to the backend', error)
        response.status(500).json({ error: 'problems with the backend mate' })
    }
})

//single book page
app.get('/library/books/:id', async (request, response) => {
    const { id } = request.params
    try {
        const book = await Book.findOne({
            _id: id
        }).populate('author')
        if (!book) {
            return response.status(404).json({ error: 'Book not found' })
        }
        response.json(book)
    }
    catch (error) {
        response.status(500)
        console.log('problems in the backend', error)
    }
})

app.delete('/library/books/:id', async (request, response) => {
    const { id } = request.params
    try {
        const book = await Book.deleteOne({
            _id: id
        })
        //what do I send as a response after deleting?
        response.sendStatus(204)
    }
    catch (error) {
        response.sendStatus(500)
        console.log('problems in the delete backend', error)
    }
})

app.put('/library/books/:id', async (req, res) => {

    const id = req.params.id
    try {
        const book = await Book.updateOne(
            { //which id I am targeting
                "_id": id
            },
            { //the values that I am updating
                title: req.body.title,
                publishingDate: parseInt(req.body.publishingDate)
            })
        res.json({ message: "book updated" })
    } catch (error) {
        res.status(500)
        console.log('problems editing in the backend', error)
    }
})

//search bar NOT WORKING
app.get('/library/books/search', async (request, response) => {
    try {
        const query = request.query.query
        const queryBook = await Book.find({
            title: { $regex: new RegExp(query, 'i') }
        })
        response.json(queryBook)
    } catch (error) {
        console.log('not searching right backend', error)
    }
})

//create a User, a new collection, with that user email
//User will have an email and a last login
//if the user does not exist, create one
//if it exists, update the last login

//*google authentication and users

app.get('/library/users', async (request, response) => {
    try {
        const allUsers = await User.find({})
        response.json(allUsers)
    }
    catch (error) {
        console.log('could not get the data to show you!')
        console.log(error)
    }
})

app.post('/library/user/login', async (request, response) => {
    try {
        const now = new Date()
        let user = await User.findOne({
            email: request.body.email
        })
        if (!user) {
            user = new User({
                "email": request.body.email,
                "lastLogIn": now
            })
            await user.save()
            console.log('user saved!')
            response.sendStatus(200)
        }
        else {
            await User.findOneAndUpdate({
                "email": request.body.email
            }, {
                lastLogIn: now
            })
            response.sendStatus(200)
        }

    } catch (error) {
        console.log('problems backend user authentication', error)
    }
})