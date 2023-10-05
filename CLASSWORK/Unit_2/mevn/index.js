import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dogs from "./data/dogs.js";
import { Octokit } from "octokit"
import mongoose, { Schema } from "mongoose";
import 'dotenv/config'


const app = express()
app.use(cors())
app.use(bodyParser.json())


//* This connects Mongoose to the project
mongoose.connect(`${process.env.DATABASE_URL}`);


app.get('/', (req, res) => {
    const Kitty = new Cat({name: 'Beans', age: 8} )
    Kitty.save()
        .then(() => {
            res.json({
                message: 'Kitty has been bad'
            })
        })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get('/dogs', (req, res) => {
    res.json( dogs )
})

app.get('/dogs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const dog = dogs.find(dog => {
        return dog.id === id
    })
    res.json(dog)
} )

app.get('/cat-facts', async(req, res) => {
    try {
        const api = 'https://cat-fact.herokuapp.com/facts'
        const fetchedData = await fetch(api)
        const catData = await fetchedData.json()
        res.json( catData )
    } catch (error) {
        console.log('error')
    }
})


app.get('/user/:user', async(req, res) => {
    const user = req.params.user
    const octokit = new Octokit({
        auth: token
      });
      const result = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: user
      });
    res.json(result.data)
})


app.get('/repo/:user/:reponame', async(req, res) => {
    const user = req.params.user
    const repoName = req.params.reponame
    const octokit = new Octokit({
        auth: token
      });
      const result = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: user,
        repo: repoName,
      });
    res.json(result.data)
})

app.post('/cats/add', (req,res) => {
    const cat = req.body // this is getting what is in the body of the request
    const kitty = new Cat ({
        name: cat.name,
        age: parseInt(cat.age)
    })
    kitty.save()
    .then(() => {
        res.sendStatus(200)
    })
    .catch (error => {
        console.log(error)
        res.sendStatus(error)
    })
})



// * Library Project

//Models and Schemas

const Cat = mongoose.model('Cat', {
    name: String, 
    age: Number 
})

const authorSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const Author = mongoose.model('Author', authorSchema)

const bookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    publishingDate: {
        type: Date
    },
    author: authorSchema
})

const Book = mongoose.model('Book', bookSchema)

// Routes

app.get('/library/book', async (req, res) => {
    const book = await Book.find({})
    res.json(book)
    console.log(book)
})

app.get('/library/book/:bookId', async (req,res) => {
    const bookId = req.params.bookId
    const bookData = await Book.findById(bookId)
    return res.json(bookData)
})

app.post('/library/book/add', async (req, res) => {
    const author = await Author.findOne({name: req.body.author})
    if (author) {
        const newBook = new Book ({          
                title: req.body.title,
                publishingDate: req.body.publishingDate,
                author: author
        }) 
        newBook.save()
        .then(() => {
            res.sendStatus
                (200)
            })
        .catch (error => {
            console.log(error)
            res.sendStatus(error)
        })      
    }
    else {
        const newAuthor = new Author ({name: req.body.author})
        console.log(newAuthor)
        newAuthor.save()
        const newBook = new Book ({
            title: req.body.title,
            publishingDate: req.body.publishingDate,
            author: newAuthor 
    })
        newBook.save()  
        .then(() => {
            res.sendStatus
                (200)
            })
        .catch (error => {
            console.log(error)
            res.sendStatus(error)
        })
    }
})

app.put('/library/book/:bookId', async (req, res) => {
    try {
        const bookId = req.params.bookId
        const bookToUpdate = await Book.findById(bookId)
        bookToUpdate.set(req.body)
        await bookToUpdate.save() 
        return res.status(202).json(bookToUpdate)
    } catch (error) {
        console.log(error.message, 'PANIC')
    }
})

app.delete('/library/book/:bookId', async (req, res) => {
    try {
        const bookId = req.params.bookId
        const bookToDelete = await Book.findById(bookId)
        if (!bookToDelete) {
            return res.status(404).json({error: 'No book to delete'})
        }
        await bookToDelete.deleteOne()
        return res.status(200).json({message: 'Successfully Deleted'})
    } catch (error) {
        console.log(error.message, 'PANIC');
    }
})

app.get('/library/author', async (req, res) => {
    const author = await Author.find({})
    return res.json(author)
})

app.get('/library/author/:authorId', async (req,res) => {
    const authorId = req.params.authorId
    const authorData = await Author.findById(authorId)
    const authorsBooks = await Book.find({author: authorData})
    return res.json({authorsBooks, authorData})
})

// * This is the Google Auth Code
// login schema and model
const loginSchema = new mongoose.Schema({
    name: {
        type: String
    },
    lastLogin: {
        type: Date
    },
    timestamps: true
})

const User = mongoose.model('User', loginSchema)

app.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        const newUser = new User ({
            userName: req.body.email
            lastLogin: req.body.timestamps
        })
    }
})