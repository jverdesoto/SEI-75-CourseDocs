// Importing node modules
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dogsExport from "./data/dogs.js"
import { Octokit, App } from "octokit"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(bodyParser.json())

// mongoose.connect(process.env.DATABASE_URL)
mongoose.connect(process.env.LIBRARY_DATABASE_URL)
const Schema = mongoose.Schema
const Cat = mongoose.model('Cat', { name: String, age: Number })

// ! Library Application

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pubDate: {
        type: Date,
        required: true
    },
    coverURL: String
}, {
    timestamps: true
})

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    books: [bookSchema],
}, {
    timestamps: true
})

const Author = mongoose.model('Author', authorSchema)

app.get('/library/author', async (req, res) => {
    const authors = await Author.find().select('name').lean()
    res.json(authors)
})

app.get('/library/author/:id', async (req, res) => {
    const id = req.params.id
    const author = await Author.findOne({_id: `${id}`}).select(['name', 'books.title', 'books._id']).lean()
    res.json(author)
})

app.get('/library/title', async (req, res) => {
    const books = await Author.find({}).select(['books.title', 'books._id']).lean()
    const booksArr = []
    for (let i = 0; i < books.length; i++) {
        for (let b = 0; b < books[i].books.length; b++) {
            booksArr.push(books[i].books[b])
        }
    }
    res.json(booksArr)
})

app.get('/library/title/:id', async (req, res) => {
    const id = req.params.id
    const doc = await Author.findOne({ 'books._id': `${id}` })
    let book = doc.books.id(id).toObject()
    book.author = doc.name
    book.authorId = doc._id
    res.json(book)
})

app.post('/library/add-book', async (req, res) => {
    // Get form content
    const document = req.body
    
    // Check if author already exists
    const author = await Author.findOne({ name: `${document.author}` })

    if (!author) {
        const newAuthor = new Author({
            name: `${document.author}`,
            books: [{
                title: `${document.title}`,
                pubDate: `${document.pubDate}`,
                coverURL: `${document.coverURL}`
            }]
        })
        await newAuthor.save()
        .then(() => {
            console.log(`New entry was added`)
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.sendStatus(error)
        })
    } else {
        // Add the book
        author.books.push({
            title: `${document.title}`,
            pubDate: `${document.pubDate}`,
            coverURL: `${document.coverURL}`
        })
        await author.save()
        .then(() => {
            console.log(`New entry was added`)
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.sendStatus(error)
        })
    }
})

app.post('/library/update/:id', async (req, res) => {
    const update = req.body
    const id = req.params.id
    console.log(update)
    await Author.findByIdAndUpdate(id, update)
    .then(result => {
        console.log(result)
        res.sendStatus(200)
    })
    .catch(error => {
        console.error(error)
        res.sendStatus(error)
    })
})

// ! Other Apps

app.get('/', (req, res) => {
    // const kitty = new Cat({ name: 'Troy', age: 10 })
    // kitty.save()
    res.json({
        message: 'All cats go'
    })
})

app.get('/cats', async (req, res) => {
    const cat = await Cat.find()
    res.json(cat)
})

// app.get('/cats/:name', async (req, res) => {
//     const name = req.params.name
//     const cat = await Cat.find({ name: `${name}`}).exec()
//     res.json(cat)
// })

// app.get('/cats/age/:age', async (req, res) => {
//     const age = req.params.age
//     const cat = await Cat.find({ age: `${age}`}).exec()
//     res.json(cat)
// })

// app.get('/cats/:name/:age', (req, res) => {
//     const name = req.params.name
//     const age = req.params.age
//     const newCat = new Cat({ name: `${name}`, age: `${age}` })
//     newCat.save()
//     res.json({
//         message: `${name}, ${age} saved`
//     })
// })

app.post('/cats/add', (req,res) => {
    const cat = req.body
    const kitty = new Cat({ name: cat.name, age: parseInt(cat.age)})
    kitty.save()
    .then(() => {
        console.log(`New cat ${cat.name}, ${cat.age} was added`)
        res.sendStatus(200)
    })
    .catch(error => {
        console.error(error)
        res.sendStatus(error)
    })
})

// Change default port to 4000 (unless otherwise specified)
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

app.get('/dogs', (req, res) => {
    res.json(dogsExport.dogs)
})

app.get('/dogs/:id', (req, res) => {
    const dog = dogsExport.dogs.find(dog => dog.id === parseInt(req.params.id))
    res.json(dog)
  })

app.get('/cat-facts', (req, res) => {
    const API_URL = 'https://cat-fact.herokuapp.com/facts'
    fetch(API_URL)
    .then(response => response.json())
    .then(allFacts => allFacts[Math.floor(Math.random() * allFacts.length)])
    .then(result => res.json(result))
})

// Octokit.js
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

app.get('/user/:user', async (req, res) => {
    const username = req.params.user
    const data = await octokit.request(`GET /users/${username}`, {
        username: username,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    res.json(data)
})

app.get('/repo/:user/:reponame', async (req, res) => {
    const username = req.params.user
    const reponame = req.params.reponame
    const data = await octokit.request(`GET /repos/${username}/${reponame}`, {
        owner: username,
        repo: reponame,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    res.json(data)
})